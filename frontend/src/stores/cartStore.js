import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './authStore'

export const useCartStore = defineStore('cart', {

  state: () => ({
    showCart: false,
    products: [],
    cart: [],
    totalPrice: 0,
  }),
  actions: {
    async addToCart(product) {
    const auth = useAuthStore();

      this.products.push(product)
      this.totalPrice += product.price
      try {
        console.log(auth.token);
        const res = await axios.post('http://localhost:8000/api/addToCart', { product_id: product.id }, 
        {
                headers: { Authorization: `Bearer ${auth.token}` }
        })
        this.fetchCart()
        return res.data  
      } catch (error) {
        console.error('Error while adding to cart:', error.response?.data?.error || error.message)
        return false
      }
    },
    async fetchCart() {
      const auth = useAuthStore();
      try {
        const res = await axios.get('http://localhost:8000/api/fetchCart', {
          headers: { Authorization: `Bearer ${auth.token}` }
        });

        this.cart = res.data.cart;
        
        this.products = res.data.cart.map(item => ({
          cart_item_id: item.id,
          product_id: item.product_id,
          ...item.product
        }));

        this.totalPrice = res.data.totalPrice;
        return res.data;
      } catch (error) {
        console.error('Error while fetching cart:', error.response?.data?.error || error.message);
        return false;
      }
    },
    async removeFromCart(productId) {
      const auth = useAuthStore();
      try {
        const res = await axios.delete(`http://localhost:8000/api/removeFromCart/${productId}`, {
          headers: { Authorization: `Bearer ${auth.token}` }
        })

        this.fetchCart()
        return res.data  
      } catch (error) {
        console.error('Error while removing from cart:', error.response?.data?.error || error.message)
        return false
      }
    }

  }
})
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCartStore = defineStore('cart', {
  state: () => ({
    showCart: false,
    products: [],
    cart: [],
    totalPrice: 0,
  }),
  actions: {
    async addToCart(product) {
      this.products.push(product)
      this.totalPrice += product.price
      /*try {
        const res = await axios.post('http://localhost:8000/api/cart', {
          product
        })

        return res.data  
      } catch (error) {
        console.error('Error while adding to cart:', error.response?.data?.error || error.message)
        return false
      }*/
    },

  }
})
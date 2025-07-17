import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('products', {
  actions: {
    async fetchProducts() {
      try {
        const res = await axios.get('http://localhost:8000/api/products',)

        return res.data  
      } catch (error) {
        console.error('Error while fetching tasks:', error.response?.data?.error || error.message)
        return false
      }
    },
    async fetchSingleProduct(id) {
      try {
        const res = await axios.get(`http://localhost:8000/api/products/${id}`)

        return res.data  
      } catch (error) {
        console.error('Error while fetching tasks:', error.response?.data?.error || error.message)
        return false
      }
    },
    async searchProducts(query, signal) {
      try {
        const response = await axios.post('http://localhost:8000/api/products/search', { query }, { signal })
        return response.data
      } catch (error) {
        if (axios.isCancel(error)) {
          console.warn('Search request canceled')
        } else {
          console.error('Error searching contacts:', error.response?.data)
        }
      }
    },
    async fetchProductsByCategory(categoryId) {
      try {
        const res = await axios.get(`http://localhost:8000/api/products/category/${categoryId}`)
        return res.data
      } catch (error) {
        console.error('Error while fetching products by category:', error.response?.data?.error || error.message)
        return false
      }
    }

  }
})
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

  }
})
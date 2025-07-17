import { defineStore } from 'pinia'
import axios from 'axios'

export const useLateralMenuStore = defineStore('lateralMenuStore', {
  state: () => ({
    showLateralMenu: false,
    categories: ['Games', 'Electronics', 'Fashion', 'Home', 'Sports', 'Toys'],
  }),
  actions: {
    async toggleLateralMenu() {
      this.showLateralMenu = !this.showLateralMenu;
    },
    async fetchCategories() {
      try {
        const res = await axios.get('http://localhost:8000/api/fetchCategories')

        this.categories = res.data

      } catch (error) {
        console.error('Error while fetching categories:', error.response?.data?.error || error.message)
        return false
      }
    }

  }
})
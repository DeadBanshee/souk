import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './authStore'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {}
  }),
  actions: {
    async fetchProfile() {
      const auth = useAuthStore();
      try {
        console.log('Fetching profile with token:', auth.token);
        const res = await axios.get('http://localhost:8000/api/user', {
          headers: { Authorization: `Bearer ${auth.token}` }
        })

        this.profile = res.data  
      } catch (error) {
        console.error('Error while fetching tasks:', error.response?.data?.error || error.message)
        return false
      }
    },

  }
})
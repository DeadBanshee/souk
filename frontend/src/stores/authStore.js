import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null
  }),
  actions: {
    async login(username, password) {
      try {
        const res = await axios.post('http://localhost:8000/api/login', {
          name: username,
          password
        })

        this.token = res.data.token
        localStorage.setItem('token', this.token)
        return true

      } catch (error) {
        console.error('Login error:', error.response?.data?.error || error.message)
        return false
      }
    },
    async signUp(username, email, password) {
      try {

        const res = await axios.post('http://localhost:8000/api/signUp', {
        name: username,
        email,
        password: password,
        password_confirmation: password
        });

        this.token = res.data.token
        localStorage.setItem('token', this.token)
        console.log('Sign Up successful:', res.data.token)
        return true

      } catch(error){
        console.error('Sign Up error:', error.response?.data?.error || error.message)
        return false
      }
    },
    logout() {
      this.token = null
      localStorage.removeItem('token')
      
    },

  }
})
const app = Vue.createApp({
  data() {
    return {
      firstName: 'Lotte',
      lastName: 'Big Buddha',
      email: 'bigbuddha@email.com',
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/men/37.jpg'
    }
  },
  methods: {
    getUser() {
      this.firstName = 'Henriette',
      this.lastName = 'Meijs',
      this.email = 'henriette@email.com',
      this.gender = 'female',
      this.picture = 'https://randomuser.me/api/portraits/men/59.jpg'
    }
  }
})

app.mount('#app');
const app = Vue.createApp({
  data() {
    return {
      firstName: 'Lotte',
      lastName: 'Big Buddha',
      email: 'bigbuddha@email.com',
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/men/37.jpg'
    }
  }
})

app.mount('#app');
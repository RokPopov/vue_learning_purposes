<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>


<script>
  export default {
    name: 'Header',
    // props can be defined as an array or an object
    // props: ['title']
    props: {
      title: String
    }
  }
</script>

// scoped means it is only be applicable to this specific component
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
<template>
  <header>
    <h1>{{title}}</h1>
    <Button text="Add Task" color="black" />
  </header>
</template>


<script>
import Button from './Button';

  export default {
    name: 'Header',
    // props can be defined as an array or an object
    // props: ['title']
    props: {
      title: String
    },
    components: {
      Button
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
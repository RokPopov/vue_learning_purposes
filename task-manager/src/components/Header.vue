<template>
  <header>
    <h1>{{title}}</h1>
    <Button @btn-click='$emit("toggle-add-task")' :text="showAddTask ? 'Close' : 'AddTask'" :color="showAddTask ? 'orange' : 'green'" />
  </header>
</template>


<script>
import Button from './Button';

  export default {
    name: 'Header',
    // props can be defined as an array or an object
    // props: ['title']
    props: {
      title: String,
      showAddTask: Boolean
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
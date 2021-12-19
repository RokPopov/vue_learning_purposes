<template>
  <AddTask @add-task='addTask' v-show='showAddTask'/>
  <Tasks @toggle-reminder='toggleReminder' @delete-task='deleteTask' :tasks='tasks' />
</template>

<script>
import AddTask from '../components/AddTask';
import Tasks from '../components/Tasks';

export default {
  name: 'Home',
  props: {
    showAddTask: Boolean
  },
  components: {
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    async addTask(task) {
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()
      
      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      if(confirm('You sure bout that?')) {
        const res = await fetch(`http://localhost:3000/tasks/${id}`, {
          method: 'DELETE'
        })

        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')
      }     
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updateTask),
      })
      const data = await res.json()
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    },
    async fetchTasks() {
      const res = await fetch('http://localhost:3000/tasks')
      
      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`http://localhost:3000/tasks/${id}`)
      
      const data = await res.json()

      return data
    }
  },
  async created() {
      this.tasks = await this.fetchTasks();
    }
}
</script>

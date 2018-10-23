<template>
  <div class="home">
    <calendar />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/components/Calendar'

export default {
  name: 'home',
  components: {
    Calendar
  }
}
</script>

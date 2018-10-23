<template>
  <div class="home container">
    <calendar />
    <rooms-list />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/components/Calendar'
import RoomsList from '@/components/RoomsList'

export default {
  name: 'home',
  components: {
    Calendar,
    RoomsList
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/main';

</style>

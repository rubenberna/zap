<template>
  <div class="home">
    <div class="home-layout">
      <calendar />
      <intro />
    </div>
    <rooms-list />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/components/Calendar'
import RoomsList from '@/components/RoomsList'
import Intro from '@/components/Intro'

export default {
  name: 'home',
  components: {
    Calendar,
    RoomsList,
    Intro
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/main';

  .home {
    max-height: 90%;
    width: 81%;

    .home-layout {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 100px;
    }
  }


</style>

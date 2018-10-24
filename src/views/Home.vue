<template>
  <div class="home">
    <navbar />
    <div class="home-layout">
      <calendar />
      <control-board />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/components/Calendar'
import ControlBoard from '@/components/ControlBoard'
import Navbar from '@/components/Navbar'

export default {
  name: 'home',
  components: {
    Calendar,
    ControlBoard,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/main';

  .home {
    max-height: 90%;
    margin-top: 100px;
    margin: 0 auto;
    max-width: 1280px;
    min-width: 960px;
    width: 80%;

    .home-layout {
      margin-top: 50px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }


</style>

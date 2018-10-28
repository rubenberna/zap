<template>
  <div class="control-board" >
    <div class="control-board-title">
      <h3>Don't stand in the kitchen.</h3>
      <h3>Book a room.</h3>
    </div>
    <div class="control-board-actions">
      <rooms-list />
    </div>
  </div>
</template>

<script>
  import RoomsList from '@/components/RoomsList'
  import { mapGetters } from 'vuex'

  export default {
    name: 'control-board',
    components: {
      RoomsList
    },
    computed: mapGetters(['pickedRoom'])
  }
</script>

<style lang="scss" scoped>
  .control-board {
    width: 43%;
    margin-left: 30px;
    height: 47vh;
    display: flex;
    flex-direction: column;
    background-size: cover !important;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    // color: #fff;
    border-radius: 9%;
    background-size: 300px 100px;
    .control-board-title {
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .control-board-actions {
      height: 20%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>

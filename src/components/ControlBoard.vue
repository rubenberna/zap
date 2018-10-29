<template>
  <div class="control-board" >
    <div class="control-board-title">
      <h3>Don't stand in the hallway.</h3>
      <h3>Book a room.</h3>
    </div>
    <div class="control-board-actions">
      <rooms-list />
    </div>
  </div>
</template>

<script>
  import RoomsList from '@/components/buttons/RoomsList'
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
    width: 20%;
    height: 46vh;
    display: flex;
    background: #ffcd3c;
    opacity: 0.9;
    border-radius: 4px;
    flex-direction: column;
    margin-top: 9px;
    .control-board-title {
      height: 60%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
    }
    .control-board-actions {
      height: 45%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
</style>

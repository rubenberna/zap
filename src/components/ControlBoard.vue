<template>
  <div class="control-board" >
    <div class="control-board-title">
      <h3>Don't stand in the hallway.</h3>
      <h3>Book a room.</h3>
    </div>
    <div class="control-board-actions">
      <rooms-list />
      <book-room v-show="pickedRoom"/>
    </div>
  </div>
</template>

<script>
  import RoomsList from '@/components/buttons/RoomsList'
  import BookRoom from '@/components/buttons/BookRoom'
  import { mapGetters } from 'vuex'

  export default {
    name: 'control-board',
    components: {
      RoomsList,
      BookRoom
    },
    computed: mapGetters(['pickedRoom'])
  }
</script>

<style lang="scss" scoped>
  .control-board {
    width: 25%;
    height: 46vh;
    display: flex;
    background: #005792;
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

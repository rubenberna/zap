<template>
  <div class="control-board" >
    <div class="control-board-title">
      <h3>Book a room.</h3>
    </div>
    <div class="control-board-actions">
      <rooms-list />
    </div>
  </div>
</template>

<script>
  import RoomsList from '@/components/buttons/RoomsList'
  import ZapList from '@/components/buttons/ZapList'
  import { mapGetters } from 'vuex'

  export default {
    name: 'control-board',
    components: {
      RoomsList,
      ZapList
    },
    computed: mapGetters(['pickedRoom'])
  }
</script>

<style lang="scss" scoped>
  .control-board {
    width: 100%;
    height: 25vh;
    display: flex;
    opacity: 0.9;
    flex-direction: column;
    justify-content: center;
    .control-board-title {
      width: 100%;
      margin-bottom: 15px;
      color: #fff;
    }
  }
</style>

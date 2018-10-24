<template>
  <div class="control-board">
    <div class="control-board-title">
      <h3>Don't stand there.</h3>
      <h3>Book a room.</h3>
    </div>
    <div class="control-board-actions">
      <rooms-list />
      
    </div>
  </div>
</template>

<script>
  import RoomsList from '@/components/RoomsList'
  
  export default {
    name: 'control-board',
    components: {
      RoomsList
    }
  }
</script>

<style lang="scss" scoped>
  .control-board {
    width: 43%;
    height: 48vh;
    display: flex;
    flex-direction: column;
    .control-board-title {
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .control-board-actions {
      height: 45%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>

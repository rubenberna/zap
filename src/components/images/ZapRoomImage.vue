<template>
  <div class="room-image">
    <!-- default image src as zapfloor room image is protected -->
    <img src='https://firebasestorage.googleapis.com/v0/b/zapfloor-5958b.appspot.com/o/meeting_rooms%2Fbogot.jpg?alt=media&token=9ebe65e4-e717-4f1b-bd16-43ee4d5b6bfb' :alt='zapRoom.attributes.name'>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'room-image',
    computed: mapGetters(['zapRoomImage', 'zapRoom'])
  }
</script>

<style lang="scss" scoped>

// Change size and center
  .room-image {
     position: relative;
     overflow: hidden;
     margin-right: 1px;
     width: 340px;
     height: 210px;
     border-radius: 9%;
     img {
       border-radius: 9%;
       position: absolute;
       left: 50%;
       top: 50%;
       width: 80%;
       height: auto;
       -webkit-transform: translate(-50%,-50%);
       -ms-transform: translate(-50%,-50%);
       transform: translate(-50%,-50%);
     }
   }
</style>

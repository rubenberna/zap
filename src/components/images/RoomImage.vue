<template>
  <div class="room-image">
    <img :src='pickedRoom.image' :alt='pickedRoom.name'>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'room-image',
    computed: mapGetters(['pickedRoom'])
  }
</script>

<style lang="scss" scoped>
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

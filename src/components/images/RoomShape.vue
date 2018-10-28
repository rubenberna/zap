<template>
  <div class="room-shape">
    <div :class='objectClass'>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'room-shape',
    computed: mapGetters(['pickedRoom']),
    methods: {
      objectClass() {
        if (this.pickedRoom.layout === 'U shape') return 'u-shape'
      }
    }

  }
</script>

<style lang="scss" scoped>
  .room-shape {
    height: 300px;
    width: 300px;
  }
  .u-shape {
    height:100px;
    width:100px;
    border:30px solid black;
    border-bottom: 0px;
    border-radius: 45px 45px 0px 0px;
    background: beige;
  }
</style>

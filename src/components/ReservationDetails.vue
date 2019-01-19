<template>
  <div class="reservation-details">
    <div class="">
      <h1>reservation details</h1>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'reservation-details',
    computed: mapGetters(['currReservation'])
  }
</script>

<style lang="scss" scoped>
  .reservation-details {

  }
</style>

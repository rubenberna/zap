<template>
  <div class="reservation-details">
    <div class="when">
      <div class="title">
        <i class="fas fa-clock"></i> {{date}}
      </div>
      <div class="sub-title">
        {{time}}
      </div>
    </div>
    <div class="what">
      <div class="title">
        <i class="fas fa-sticky-note"></i> Booked for
      </div>
      <div class="sub-title">
        {{currReservation.title}}
      </div>
    </div>
    <div class="where">
      <div class="title">
        <i class="fas fa-map-marker"></i> {{currReservation.room}}
      </div>
      <div class="invitation">
        invite people
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import moment from 'moment'

  export default {
    name: 'reservation-details',
    computed: {
      ...mapGetters(['currReservation']),
      date() {
        return moment(this.currReservation.start).format('MMMM Do')
      },
      time() {
        return moment(this.currReservation.start).format('h:mm') + ' - ' +  moment(this.currReservation.end).format('h:mm')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reservation-details {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: white;
    text-align: initial;
    padding-left: 134px;
    .title {
      font-size: 18px;
      font-weight: 700;
    }
    .sub-title {
      font-size: 30px;
    }
    .invitation {
      font-weight: 700;
      color: #23a393;
      cursor: not-allowed;
      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>

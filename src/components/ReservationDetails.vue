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
      <div>
        <span class="invitation"
              @click='inviteVisible=!inviteVisible'>invite people</span>
      </div>
      <div class="invitation-list">
        <transition name='bounce'>
          <invite v-show='inviteVisible'/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import moment from 'moment'
  import Invite from '@/components/buttons/Invite'

  export default {
    name: 'reservation-details',
    data() {
      return {
        inviteVisible: false,
      }
    },
    components: {
      Invite
    },
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
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: white;
    text-align: initial;
    padding-left: 75px;
    margin-top: 40px;
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
      cursor: pointer;
        &:hover {
         opacity: 0.7;
       }
     }
    .invitation-list {
      margin-top: 15px;
      height: 200px;
    }
  }

  .bounce-enter-active {
    animation: bounceIn 2s;
  }

  .bounce-leave-active {
    animation: bounceIn 2s reverse;
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    60% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: 1;
      opacity: 1;
    }
  }
</style>

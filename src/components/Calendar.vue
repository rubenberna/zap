<template>
  <div class="calendar">
    <el-container>
      <el-main v-if="!pickedRoom">
        <full-calendar :events="events"
                       :config="config"/>
      </el-main>
      <el-main v-else>
        <full-calendar :events="reservations"
                       :config="config"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import { FullCalendar } from 'vue-full-calendar'
  import { mapGetters } from 'vuex'

  export default {
    name: 'calendar',
    data() {
      return {
        events: [
          {
             title  : 'event1',
             start  : '2018-10-30',
             allDay : true,
          },
          {
             title  : 'event2',
             start  : '2010-01-05',
             end    : '2010-01-07',
          },
          {
             title  : 'event3',
             start  : '2018-11-05T09:30:00',
             allDay : false,
          },
        ],
       config: {
         weekends: false,
         selectable: true,
         editable: true,
         selectHelper: true,
         minTime: '07:00:00'
       }
     }
   },
    computed: {
      ...mapGetters(['reservations', 'pickedRoom']),
    },
    components: {
      FullCalendar
    }
  }
</script>

<style lang="scss" >
  @import '../../style/main.scss';

  .calendar {
    width: 80%;
  }

</style>

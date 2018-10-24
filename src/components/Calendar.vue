<template>
  <div class="calendar">
    <el-container>
      <el-main>
        <full-calendar :events="events"
                       :config="config"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import { FullCalendar } from 'vue-full-calendar'

  export default {
    name: 'calendar',
    data() {
     return {
       events: [
         {
             title  : 'event1',
             start  : '2018-10-26',
             allDay : false,
         },
         {
             title  : 'event2',
             start  : '2010-01-05',
             end    : '2010-01-07',
         },
         {
             title  : 'event3',
             start  : '2010-01-09T12:30:00',
             allDay : false,
         },
       ],
       config: {
         weekends: false,
         editable: true,
         selectHelper: true
       }
     }
   },
    components: {
      FullCalendar
    }
  }
</script>

<style lang="scss" >
  @import '../../style/main.scss';

  .calendar {
    width: 64%;
    // background: green;
  }

</style>

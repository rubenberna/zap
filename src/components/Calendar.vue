<template>
  <div class="calendar">
    <el-container>
      <el-main v-if="!pickedRoom">
        <full-calendar :events="events"
                       :config="config"/>
      </el-main>
      <el-main v-else>
        <full-calendar :events="reservations"
                       :config="config"
                       @event-created='preview'/>
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
             title  : null,
             start  : null,
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
   components: {
     FullCalendar
   },
    computed: {
      ...mapGetters(['reservations', 'pickedRoom']),
    },
    methods: {
      preview() {
        console.log(event);
      }
    }
  }
</script>

<style lang="scss" >
  @import '../../style/main.scss';

  .calendar {
    width: 70%;
    .el-main {
      height: 459px;
      overflow: hidden;
    }
  }

</style>

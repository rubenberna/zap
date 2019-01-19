<template>
  <div class="calendar">
    <el-container>
      <el-main>
        <full-calendar :events="emptyCalendar"
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
        emptyCalendar: [
          {
             title  : null,
             start  : null,
             allDay : false
          },
        ],
       config: {
         selectable: true,
         editable: true,
         minTime: '07:00:00',
         timezone: 'local',
         weekends: false
       }
     }
   },
   components: {
     FullCalendar
   }
  }
</script>

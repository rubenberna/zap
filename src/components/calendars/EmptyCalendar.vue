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
             allDay : false,
          },
        ],
       config: {
         selectable: true,
         editable: true,
         minTime: '07:00:00',
         timezone: 'local'
       }
     }
   },
   components: {
     FullCalendar
   }
  }
</script>

<style lang="scss" >

  .calendar {
    width: 70%;
    .el-main {
      height: 459px;
      overflow: hidden;
    }
  }

</style>

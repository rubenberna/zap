<template>
  <div class="calendar">
    <el-container>
      <el-main v-if="!pickedRoom">
        <full-calendar :events="emptyCalendar"
                       :config="config"/>
      </el-main>
      <el-main v-else>
        <full-calendar :events="reservations"
                       :config="config"
                       @event-created='select'/>
      </el-main>
    </el-container>

    <el-dialog
      title="New event"
      :visible.sync="dialogVisible"
      width="30%"
      class="calendar-modal">
      <div class="calendar-input">
           <span>Start</span>
           <el-date-picker
             v-model="booking.start"
             type="datetime"
             disabled>
           </el-date-picker>
      </div>
      <div class="calendar-input">
           <span class="demonstration">End</span>
           <el-date-picker
             v-model="booking.end"
             type="datetime"
             disabled>
           </el-date-picker>
      </div>
      <div class="calendar-input">
        <span>Name</span>
        <el-input placeholder="Title of booking" v-model="booking.title"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="toggleDialog">Cancel</el-button>
        <el-button type="primary" @click.prevent="setBooking(booking)">Confirm</el-button>
      </span>
    </el-dialog>

    <!-- <calendar-dialog :booking='booking'
                     :dialogVisible='dialogVisible'
                     :disabled='disabled' /> -->
  </div>
</template>

<script>
  import { FullCalendar } from 'vue-full-calendar'
  import { mapGetters, mapActions } from 'vuex'
  import CalendarDialog from '@/components/dialogs/CalendarDialog'

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
         weekends: false,
         selectable: true,
         editable: true,
         selectHelper: true,
         minTime: '07:00:00'
       },
       dialogVisible: false,
       disabled: false,
       booking: {
         start: null,
         end: null,
         title: null
       }
     }
   },
   components: {
     FullCalendar,
     CalendarDialog
   },
    computed: {
      ...mapGetters(['reservations', 'pickedRoom']),
    },
    methods: {
      ...mapActions(['createBooking']),
      toggleDialog() {
        this.dialogVisible = !this.dialogVisible
      },
      select(start, end) {
        this.booking.start = start.start._d
        this.booking.end = start.end._d

        console.log(start);
        this.dialogVisible = true
        this.disabled = true
      },
      setBooking(booking) {
        this.createBooking(booking)
        this.dialogVisible = false
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

  .calendar-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 45%;
    margin-bottom: 14px;
    margin-left: 20px;
  }

</style>

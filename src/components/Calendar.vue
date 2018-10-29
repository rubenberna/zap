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
                       @event-created='select'
                       @event-selected='eventSelected'/>
      </el-main>
    </el-container>

    <!-- NEW BOOKIND DIALOG -->
    <el-dialog
      title="New event"
      :visible.sync="newVisible"
      width="30%"
      class="calendar-modal">
      <div class="calendar-input">
           <span>Start</span>
           <el-date-picker
             v-model="booking.start"
             type="datetime"
             :disabled='disabled'>
           </el-date-picker>
      </div>
      <div class="calendar-input">
           <span class="demonstration">End</span>
           <el-date-picker
             v-model="booking.end"
             type="datetime"
             :disabled='disabled'>
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

    <!-- UPDATE BOOKING DIALOG -->
    <el-dialog
      title="Update event"
      :visible.sync="updateVisible"
      width="30%"
      class="calendar-modal">
      <div class="calendar-input">
           <span>Start</span>
           <el-date-picker
             v-model="booking.start"
             type="datetime"
             :disabled='disabled'>
           </el-date-picker>
      </div>
      <div class="calendar-input">
           <span class="demonstration">End</span>
           <el-date-picker
             v-model="booking.end"
             type="datetime"
             :disabled='disabled'>
           </el-date-picker>
      </div>
      <div class="calendar-input">
        <span>Name</span>
        <el-input placeholder="Title of booking" v-model="booking.title"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="toggleDialog">Cancel</el-button>
        <el-button type="primary" @click.prevent="changeBooking(booking)">Update</el-button>
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
  import moment from 'moment'

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
         minTime: '07:00:00',
         timezone: 'UTC'
       },
       newVisible: false,
       updateVisible: false,
       disabled: false,
       booking: {
         start: null,
         end: null,
         title: null,
         createdOn: new Date()
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
      ...mapActions(['createReservation', 'updateReservation']),
      toggleDialog() {
        this.dialogVisible = !this.dialogVisible
      },
      select(start) {
        let begin = new Date(start.start)
        let finish = new Date(start.end)
        this.booking.start = moment(begin).format()
        this.booking.end = moment(finish).format()
        this.newVisible = true
        this.disabled = true
      },
      eventSelected(start) {
        console.log(start);
        this.booking.start = start.start
        this.booking.end = start.end
        this.booking.title = start.title
        this.disabled = false
        this.updateVisible = true
      },
      setBooking(booking) {
        this.createReservation(booking)
        this.newVisible = false
      },
      changeBooking(booking) {
        this.updateReservation(booking)
        this.updateVisible = false
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

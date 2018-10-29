<template>
  <div class="calendar">
    <el-container>
      <!-- NO ROOM SELECTED: default calendar -->
      <el-main v-if="!pickedRoom">
        <full-calendar :events="emptyCalendar"
                       :config="config"/>
      </el-main>

      <!-- ROOM SELECTED -->
      <el-main v-else>
        <full-calendar :events="reservations"
                       :config="config"
                       @event-created='select'
                       @event-selected='eventSelected'
                       @event-drop='rearrange'/>
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
        <el-date-picker v-model="booking.start"
                        type="datetime"
                        :disabled='disabled'>
        </el-date-picker>
      </div>
      <div class="calendar-input">
        <span class="demonstration">End</span>
        <el-date-picker v-model="booking.end"
                        type="datetime"
                        :disabled='disabled'>
        </el-date-picker>
      </div>
      <div class="calendar-input">
        <span>Name</span>
        <el-input placeholder="Title of booking"
                  v-model="booking.title" />
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="toggleDialog">
                     Cancel
          </el-button>
          <el-button type="primary"
                     @click.prevent="setBooking(booking)">
                     Confirm
          </el-button>
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
        <el-date-picker v-model="booking.start"
                        type="datetime"
                        :disabled='disabled'>
        </el-date-picker>
      </div>
      <div class="calendar-input">
        <span class="demonstration">End</span>
        <el-date-picker v-model="booking.end"
                        type="datetime"
                        :disabled='disabled'>
        </el-date-picker>
      </div>
      <div class="calendar-input">
        <span>Name</span>
        <el-input placeholder="Title of booking"
                  v-model="booking.title" />
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="closeDialog">
                  Cancel
        </el-button>
        <el-button type="primary"
                   @click.prevent="changeBooking(booking)">
                   Update
        </el-button>
      </span>
    </el-dialog>
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
         id: null,
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
        // closes new booking dialog
        this.newVisible = false
      },
      closeDialog() {
        //closes updated booking dialog
        this.updateVisible = false
      },
      select(start) {
        //User clicks on an empty calendar slot
        // Firebase doesn't take custom moment objects -- needed to manipulate data
        let begin = new Date(start.start)
        let finish = new Date(start.end)
        this.booking.start = moment(begin).format()
        this.booking.end = moment(finish).format()
        this.newVisible = true
        this.disabled = true
      },
      eventSelected(start) {
        // User clicks on an existing reservation
        this.booking.start = start.start
        this.booking.end = start.end
        this.booking.title = start.title
        this.booking.id = start.id
        this.disabled = false
        this.updateVisible = true
      },
      setBooking(booking) {
        // Create new booking
        this.createReservation(booking)
        this.newVisible = false
      },
      changeBooking(booking) {
        // Update booking with data from dialog
        this.booking.start = moment(this.booking.start).format()
        this.booking.end = moment(this.booking.end).format()
        this.updateReservation(booking)
        this.updateVisible = false
      },
      rearrange(start) {
        // Update booking with dates from dragging event on calendar
        let begin = new Date(start.start)
        let finish = new Date(start.end)
        this.booking.start = moment(begin).format()
        this.booking.end = moment(finish).format()
        this.booking.title = start.title
        this.booking.id = start.id
        this.updateReservation(this.booking)
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

  .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-input__inner, .el-input {
    width: 180px !important;
  }

</style>

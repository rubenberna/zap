<template>
  <div class="calendar">
    <el-container>
      <el-main>
        <full-calendar :events="zapReservations"
                       :config="config"
                       @event-created='select'
                       @event-selected='eventSelected'
                       @event-drop='rearrange'
                       @event-resize='rearrange'/>
      </el-main>
    </el-container>

    <!-- NEW BOOKIND DIALOG -->
    <new-dialog :dialogVisible='newVisible'
                :dates='dates'
                :disabled='disabled'
                @toggleDialog='newVisible = $event'/>

    <!-- UPDATE BOOKING DIALOG -->
    <updated-dialog :dialogVisible='updateVisible'
                    :booking='oldBooking'
                    :disabled='disabled'
                    @toggleDialog='updateVisible = $event'/>

  </div>
</template>

<script>
  import { FullCalendar } from 'vue-full-calendar'
  import { mapGetters, mapActions } from 'vuex'
  import moment from 'moment'
  import NewDialog from '@/components/dialogs/NewDialog'
  import UpdatedDialog from '@/components/dialogs/UpdatedDialog'

  export default {
    name: 'calendar',
    data() {
      return {
       config: {
         weekends: true,
         selectable: true,
         editable: true,
         minTime: '07:00:00',
         timezone: 'local'
       },
       newVisible: false,
       updateVisible: false,
       disabled: false,
       oldBooking: {
         id: null,
         start: null,
         end: null,
         title: null,
         createdOn: new Date()
       },
       dates: {
         start: null,
         end: null
       }
     }
   },
   components: {
     FullCalendar,
     NewDialog,
     UpdatedDialog
   },
    computed: {
      ...mapGetters(['zapRoom', 'zapReservations']),
    },
    methods: {
      ...mapActions(['updateReservation']),
      select(start) {
        //User clicks on an empty calendar slot
        // Firebase doesn't take custom moment objects -- needed to manipulate data
        let begin = new Date(start.start)
        let finish = new Date(start.end)
        this.dates.start = moment(begin).format()
        this.dates.end = moment(finish).format()
        this.newVisible = true
        this.disabled = true
      },
      eventSelected(start) {
        // User clicks on an existing reservation
        this.oldBooking.start = start.start
        this.oldBooking.end = start.end
        this.oldBooking.title = start.title
        this.oldBooking.id = start.id
        this.disabled = false
        this.updateVisible = true
      },
      rearrange(start) {
        // Update booking with dates from dragging event on calendar
        let begin = new Date(start.start)
        let finish = new Date(start.end)
        this.oldBooking.start = moment(begin).format()
        this.oldBooking.end = moment(finish).format()
        this.oldBooking.title = start.title
        this.oldBooking.id = start.id
        this.updateReservation(this.oldBooking)
      }
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

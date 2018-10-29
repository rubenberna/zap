<template>
  <div class="calendar-booking">
    <el-dialog
      title="New event"
      :visible.sync="dialogVisible"
      width="30%">
      <div class="book-room-start">
        <span>Start</span>
        <el-date-picker
          v-model="booking.start.date"
          type="date"
          placeholder="Pick a day">
        </el-date-picker>
        <el-time-select
          v-model="booking.start.time"
          :picker-options="{
            start: '07:00',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="Pick a time">
        </el-time-select>
      </div>
      <div class="book-room-end">
        <span>End</span>
        <el-time-select
          v-model="booking.end"
          :picker-options="{
            start: '07:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="Pick a time"
          class="schedule-input">
        </el-time-select>
      </div>
      <div class="book-room-title">
        <span>Name</span>
        <el-input placeholder="Title of booking" v-model="booking.title"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="toggleDialog">Cancel</el-button>
        <el-button type="primary" @click.prevent="setBooking(booking)">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'calendar-booking',
  // data() {
  //   return {
  //     dialogVisible: false
  //   }
  // },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    booking: {
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleDialog() {
      this.dialogVisible = !this.dialogVisible
    }
  }
}
</script>

<style lang="scss">
</style>

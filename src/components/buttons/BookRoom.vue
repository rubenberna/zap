<template>
  <div class="book-room">
    <el-button @click="toggleDialog">Book it</el-button>
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
          placeholder="And a time">
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
          placeholder="Pick a time">
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
  import moment from 'moment'
  import { mapActions } from 'vuex'

  export default {
    name: 'book-room',
    data() {
     return {
       booking: {
         start: {
           date: null,
           time: null
         },
         end: null,
         title: null
       },
       dialogVisible: false
     }
   },
   methods: {
     ...mapActions(['createBooking']),
     toggleDialog() {
       this.dialogVisible = !this.dialogVisible
     },
     setBooking() {
       let date = moment(this.booking.start.date).format('YYYY-MM-DD')
       const start = date + 'T' + this.booking.start.time
       const end = date + 'T' + this.booking.end

       const newBooking = {
         start,
         end,
         title: this.booking.title
       }

       this.createBooking(newBooking)
       this.dialogVisible = false
     }
   }
 }
</script>

<style lang="scss">
  .book-room {
    .book-room-start {
      width: 81%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .book-room-end {
      margin-top: 14px;
      width: 49%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .book-room-title {
      margin-top: 14px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 48%;
    }
  }

  .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-input__inner, .el-input {
    width: 140px !important;
  }
</style>

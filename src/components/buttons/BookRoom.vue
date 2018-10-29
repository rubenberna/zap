<template>
  <div class="book-room">
    <el-button @click="dialogVisible = true">Book it</el-button>
    <el-dialog
      title="New event"
      :visible.sync="dialogVisible"
      width="30%">
      <div class="book-room-start">
        <span>Start</span>
        <el-date-picker
          v-model="booking.startDate"
          type="date"
          placeholder="Pick a day">
        </el-date-picker>
        <el-time-select
          v-model="booking.startTime"
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
            start: '07:00',
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
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'book-room',
    data() {
     return {
       booking: {
         startDate: null,
         startTime: null,
         end: null,
         title: null
       },
       dialogVisible: false
     }
   },
   methods: {
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

<template>
  <div class="calendar-booking">
    <el-dialog
      title="New event"
      :visible.sync="dialogVisible"
      width="30%">
      <div class="book-room-start">
        <div class="block">
           <span class="demonstration">Start</span>
           <el-date-picker
             v-model="booking.start"
             type="datetime"
             disabled>
           </el-date-picker>
         </div>
      </div>
      <div class="book-room-end">
        <div class="block">
           <span class="demonstration">End</span>
           <el-date-picker
             v-model="booking.end"
             type="datetime"
             disabled>
           </el-date-picker>
         </div>
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

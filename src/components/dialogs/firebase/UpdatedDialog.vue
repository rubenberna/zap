<template>
  <div class="new-dialog">
    <el-dialog
      title="Update event"
      :visible.sync="dialogVisible"
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
  import { mapActions } from 'vuex'
  import moment from 'moment'

  export default {
    name: 'updated-dialog',
    props: {
      dialogVisible: {
        type: Boolean,
        default: false
      },
      booking: {
        type: Object,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        form: {
          title: null
        }
      }
    },
    methods: {
      ...mapActions(['updateReservation']),
      closeDialog() {
        // closes new booking dialog
        this.$emit('toggleDialog', false)
      },
      changeBooking(booking) {
        // Update booking with data from dialog
        this.booking.start = moment(this.booking.start).format()
        this.booking.end = moment(this.booking.end).format()
        this.updateReservation(booking)
        this.closeDialog()
      }
    }
  }
</script>

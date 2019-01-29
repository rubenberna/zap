<template>
  <div class="new-dialog">
    <el-dialog
      title="New event"
      :visible.sync="dialogVisible"
      width="30%"
      class="calendar-modal">
      <div class="calendar-input">
        <span>Start</span>
        <el-date-picker v-model="dates.start"
                        type="datetime">
        </el-date-picker>
      </div>
      <div class="calendar-input">
        <span class="demonstration">End</span>
        <el-date-picker v-model="dates.end"
                        type="datetime">
        </el-date-picker>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">
                    Cancel
        </el-button>
        <el-button type="primary"
                   @click.prevent="setBooking">
                   Confirm
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'new-dialog',
    props: {
      dialogVisible: {
        type: Boolean,
        default: false
      },
      dates: {
        type: Object,
        default: null
      }
    },
    data(){
      return {
        form: {
          title: null,
          createdOn: new Date()
        }
      }
    },
    computed: mapGetters(['zapRoom', 'customer']),
    methods: {
      ...mapActions(['createZapReservation']),
      closeDialog() {
        // closes new booking dialog
        this.$emit('toggleDialog', false)
      },
      setBooking() {
        // Create new booking
        const booking = {
          start: this.dates.start,
          end: this.dates.end,
          meetingRoomId: this.zapRoom.id,
          user: this.customer.id
        }
        this.createZapReservation(booking)
        this.closeDialog()
      },
    }
  }
</script>

<style lang="scss">
  .calendar-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 45%;
    margin-bottom: 14px;
    margin-left: 20px;
  }

  .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-input__inner, .el-input {
    width: 177px !important;
  }
</style>

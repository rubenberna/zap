<template>
  <div class="room-card">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="float: left">{{ pickedRoom.name }}</span>
        <el-button style="float: right; padding: 3px 0" type="text">Book room</el-button>
      </div>
      <div class="text item">
        <ul style="list-style-type:none; float: left" class="room-card-attributes">
          <li><span>Capacity:</span> {{ pickedRoom.capacity }}</li>
          <li>Layout: {{ pickedRoom.layout }}</li>
          <li>Video Conference: {{ pickedRoom.videoconference }}</li>
          <li>With a view: {{ pickedRoom.with_view }}</li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'room-card',
    computed: mapGetters(['pickedRoom'])
  }
</script>

<style lang="scss" scoped>
  .box-card {
    width: 400px;
    margin-left: 18px;
  }

 .item {
   margin-bottom: 18px;
   text-align: left;
 }

 .clearfix:before,
 .clearfix:after {
   display: table;
   content: "";
 }
 .clearfix:after {
   clear: both
 }

</style>

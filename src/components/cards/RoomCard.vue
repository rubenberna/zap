<template>
  <div class="room-card">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="float: left">{{ pickedRoom.name }}</span>
      </div>
      <div class="room-card-frame text item">
        <ul style="list-style-type:none; float: left" class="room-card-attributes">
          <li><span>Capacity:</span> {{ pickedRoom.capacity }}</li>
          <li><span>Layout:</span> {{ pickedRoom.layout }}</li>
          <li><span>Video Conference:</span> {{ convert(pickedRoom.videoconference) }}</li>
          <li><span>With a view:</span> {{ convert(pickedRoom.with_view) }}</li>
        </ul>
        <div class="room-card-image">
          <room-image />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import RoomImage from '@/components/images/RoomImage'

  export default {
    name: 'room-card',
    components: {
      RoomImage
    },
    computed: mapGetters(['pickedRoom', 'meetingRooms']),
    methods: {
      convert(boolean) {
        return boolean ? 'Yes' : 'No'
      }
    },
  }
</script>

<style lang="scss" scoped>

  .room-card {
    width: 69%;
    margin-right: 25px;
    margin-left: 46px;
    .room-card-frame {
      display: flex;
      justify-content: space-between;
      height: 250px;
      .room-card-attributes {
        line-height: 40px;
      }
    }
    .box-card {
      margin-left: 18px;
      height: 310px;
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
  }

  .el-card_body {
    height: 260px;
  }

</style>

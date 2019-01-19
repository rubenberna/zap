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
          <li><span>Video Conference:</span> {{ pickedRoom.videoconference ? 'Yes' : 'No' }}</li>
          <li><span>With a view:</span> {{ pickedRoom.with_view ? 'Yes' : 'No' }}</li>
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
    computed: mapGetters(['pickedRoom', 'meetingRooms'])
  }
</script>

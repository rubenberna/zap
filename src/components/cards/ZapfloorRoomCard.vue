<template>
  <div class="room-card">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="float: left">{{ zapRoom.attributes.name }}</span>
      </div>
      <div class="room-card-frame text item">
        <ul style="list-style-type:none; float: left" class="room-card-attributes">
          <li><span>Capacity:</span> {{ zapRoom.attributes.capacity }}</li>
          <li><span>Layout:</span> {{ zapRoom.attributes.layout }}</li>
          <li><span>Description:</span> {{ zapRoom.attributes.long_description }}</li>
          <li><span>Assets:</span> {{ zapRoom.attributes.tags.join(', ') }}</li>
        </ul>
        <div class="room-card-image">
          <zap-room-image />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ZapRoomImage from '@/components/images/ZapRoomImage'

  export default {
    name: 'room-card',
    components: {
      ZapRoomImage
    },
    computed: mapGetters(['zapRoom'])
  }
</script>

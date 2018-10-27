<template>
  <div class="rooms-list container">
      <el-dropdown>
        <el-button>
          Pick a room<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for='room in meetingRooms'
                            :key='room.id'>
            {{ room.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: "rooms-list",
    computed: mapGetters(['meetingRooms']),
    methods: mapActions(['fetchMeetingRooms']),
    created() {
      this.fetchMeetingRooms()
    }
  }
</script>

<style lang="scss" scoped>
  .rooms-list {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
</style>

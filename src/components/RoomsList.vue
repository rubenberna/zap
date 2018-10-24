<template>
  <div class="rooms-list container">
      <el-dropdown>
        <el-button>
          Rooms<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
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
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>

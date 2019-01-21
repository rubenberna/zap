<template>
  <div class="rooms-list container">
      <el-dropdown>
        <el-button>
          ZapFloorHQ<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for='room in zapfloorRooms'
                            :key='room.id'
                            @click.native='selectZapRoom(room)'>
            {{ room.attributes.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: "rooms-list",
    computed: {
      ...mapGetters(['zapfloorRooms']),
    },
    methods: {
      ...mapActions(['fetchZapfloorRooms', 'selectZapRoom']),
    },
    created() {
      this.fetchZapfloorRooms()
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

<template>
  <div class="invite-users">
    <el-select v-model='valueList' multiple placeholder="Select">
      <el-option
        v-for="user in users"
        :key="user.id"
        :label='user.attributes.firstname + " " + user.attributes.lastname'
        :value="user.id">
      </el-option>
    </el-select>
    <el-button round class="invite-button" @click='invite'>Invite</el-button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: "invite",
    data() {
      return {
        valueList: []
      }
    },
    computed: {
      ...mapGetters(['users']),
    },
    methods: {
      ...mapActions(['fetchUsers', 'selectZapRoom', 'addAttendees']),
      invite() {
        this.addAttendees(this.valueList)
      }
    },
    created() {
      this.fetchUsers()
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

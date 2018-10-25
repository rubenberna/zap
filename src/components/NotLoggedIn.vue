<template>
  <div class="not-logged-in" :style="{backgroundImage: ` url('https://res.cloudinary.com/megslist/image/upload/v1540474420/designer-vietnam-1107428-unsplash.jpg')` }">
    <div class="oval-speech">
      <p>You're not logged in...</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'not-logged-in'
  }
</script>

<style lang="scss" scoped>
  .not-logged-in {
    color: white;
    margin-top: 50px;
    text-align: center;
    height: 70vh;
    background-size: cover !important;
    width: 100%;
    background-repeat: no-repeat;
    // background-attachment: fixed;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    }

</style>

<template>
  <div class="not-logged-in" :style="{backgroundImage: ` url('https://res.cloudinary.com/megslist/image/upload/v1540474420/designer-vietnam-1107428-unsplash.jpg')` }">
    <!-- delay on speech buble to appear -->
    <delay :wait='2500'>
      <transition name='fade' appear>
        <div class="circular-sb">
          You're not logged in...
          <div class="circle1"></div>
          <div class="circle2"></div>
        </div>
      </transition>
    </delay>
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
    width: 77%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 4px;

    .circular-sb {
      width: 250px;
      background: #fff;
      opacity: 0.9;
      padding: 80px 0px;
      margin: 30px auto;
      border-radius: 50%;
      text-align: center;
      font-size: 20px;
      font-weight: lighter;
      position: absolute;
      left: 140px;
      top: 110px;
      color: #2c3e50;
    }
    .circle1 {
      opacity: 0.9;
      position: absolute;
      width: 25px;
      padding: 20px;
      border-radius: 50%;
      right: -15px;
      bottom: 23px;
    }

    .circle1:before {
      content: "";
      position: absolute;
      width: 25px;
      padding: 20px;
      border-radius: 50%;
      right: 0px;
      bottom: 0px;
      background: #fff;
    }

    .circle2 {
      position: absolute;
      background: #fff;
      opacity: 0.9;
      width: 5px;
      padding: 14px 15px;
      border-radius: 50%;
      right: -60px;
      bottom: 5px;
    }
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 3s;
  }

</style>

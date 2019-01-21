<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
#app {
  font-family: 'Montserrat', Cursive, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('../public/background.jpg');
  /* background: url('../public/2.jpg'); */
  background-size: cover !important;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 120vh;
  width: 100%;
}
</style>

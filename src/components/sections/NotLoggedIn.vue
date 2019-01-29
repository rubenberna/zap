<template>
  <div class="not-logged-in">
    <button v-show='!loading'
            class="button"
            @click='login'>
        Login
            <div class="button__horizontal"/>
            <div class="button__vertical"/>
    </button>
    <dot-loader :loading="loading"
                color='#fff'
                duration='100000'
                class="spinner" />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import DotLoader from 'vue-spinner/src/DotLoader.vue'

  export default {
    name: 'not-logged-in',
    computed: mapGetters(['loading']),
    methods: mapActions(['login']),
    components: {
      DotLoader
    }
  }
</script>

<style lang="scss" scoped>
  .not-logged-in {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  body {

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #fcf3ec;

  }

  .button {

    --offset: 10px;
    --border-size: 2px;

    display: block;
    position: relative;
    padding: 1.5em 3em;
    appearance: none;
    border: 0;
    background: transparent;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: .25em;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0;
    box-shadow: inset 0 0 0 var(--border-size) currentcolor;
    transition: background .8s ease;

    &:hover {
      background: rgba(100, 0, 0, .03);
    }

    &__horizontal,
    &__vertical {
      position: absolute;
      top: var(--horizontal-offset, 0);
      right: var(--vertical-offset, 0);
      bottom: var(--horizontal-offset, 0);
      left: var(--vertical-offset, 0);
      transition: transform .8s ease;
      will-change: transform;

      &::before {
        content: '';
        position: absolute;
        border: inherit;
      }
    }

    &__horizontal {
      --vertical-offset: calc(var(--offset) * -1);
      border-top: var(--border-size) solid currentcolor;
      border-bottom: var(--border-size) solid currentcolor;

      &::before {
        top: calc(var(--vertical-offset) - var(--border-size));
        bottom: calc(var(--vertical-offset) - var(--border-size));
        left: calc(var(--vertical-offset) * -1);
        right: calc(var(--vertical-offset) * -1);
      }
    }

    &:hover &__horizontal {
      transform: scaleX(0);
    }

    &__vertical {
      --horizontal-offset: calc(var(--offset) * -1);
      border-left: var(--border-size) solid currentcolor;
      border-right: var(--border-size) solid currentcolor;

      &::before {
        top: calc(var(--horizontal-offset) * -1);
        bottom: calc(var(--horizontal-offset) * -1);
        left: calc(var(--horizontal-offset) - var(--border-size));
        right: calc(var(--horizontal-offset) - var(--border-size));
      }
    }

    &:hover &__vertical {
      transform: scaleY(0);
    }
  }

  .spinner {
    color: #fff;
  }

</style>

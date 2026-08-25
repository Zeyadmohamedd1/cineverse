<template>
  <navbar-component/>
  <RouterView />
</template>
<script>
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent
  }
}
</script>
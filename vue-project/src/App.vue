<script lang="ts">
  import FirstComp from './components/FirstComp.vue'
  import SecondComp from './components/SecondComp.vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "App",
    components: {
      FirstComp,
      SecondComp
    },
    data() {
      return {
      }
    }
  })
</script>

<template>
  <div class="main--div">
    <FirstComp name="Bruce" />
    <FirstComp name="Diana" />
    <FirstComp name="name" />
    <SecondComp firstName="Esteban" lastName="Catanea" />
  </div>
</template>

<style scoped>
  .main--div {
    width: 100%;
    margin: 0 50%;
  }
</style>

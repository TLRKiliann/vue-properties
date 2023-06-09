<script lang="ts">
  import FirstComp from './components/FirstComp.vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "App",
    components: {
      FirstComp,
    },
    data() {
      return {
        name: 'Esteban'
      }
    }
  })
</script>

<template>
  <div>
    <FirstComp name="Bruce" />
    <FirstComp name="Diana" />
    <FirstComp name="name" />
  </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "FirstComp",
  props: ['name'],
  data() {
    return {
      className: 'className'
    }
  },
  methods: {},
})
</script>

<template>
  <div class="div--h2">
    <h2 v-bind:class="className">Name : {{ name }}</h2>
  </div>
</template>

<style scoped>
.className {
    color: lightgreen;
  }
</style>

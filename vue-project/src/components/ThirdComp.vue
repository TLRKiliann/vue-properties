<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "ThirdComp",
  data() {
    return {
        volume: 0,
        movie: "Superman",
        movieObj: {
            title: 'Narnia',
            movieTime: 60
        },
        movieList: ['Batman', 'SuperWoman'],
        counterTest: ''
    }
  },
  methods: {},
  computed: {},
  watch: {
    volume(newValue: number, oldValue: number): void {
        if (newValue > oldValue && newValue === 18) {
            alert("It's over 16")
        }
    },
    movie: {
        handler(newValue: string): void {
            console.log(`simple movie ${newValue}`)
        },
        immediate: true,
    },
    movieObj: {
        handler(newValue: string): void {
            console.log(`Movie object ${newValue}`)
        },
        deep: true,
    },
    movieList: {
        handler(newValue: string): void {
            console.log(`New movie ${newValue}`)
        },
        deep: true,
    }
  }
})
</script>

<template>
  <div>
    <h2>Watchers</h2>
    <h3>{{ volume }}</h3>
    <button @click="volume += 2">increment</button>
    <button @click="volume -= 2">decrement</button>
    <h3>{{ movie }}</h3>
    <input type="text" v-model="movie" />
    <h3>{{ movieObj.title }}</h3>
    <input type="text" v-model="movieObj.title" />
    <h3>{{ movieList }}</h3>
    <button @click="movieList.push('6th sens')">Add movie</button>
  </div>
</template>

<style scoped>

</style>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "SecondComp",
  props: ['firstName', 'lastName'],
  data() {
    return {
        items: [
            {
                id: 1,
                title: 'PC',
                price: 1900
            },
            {
                id: 2,
                title: 'Phone',
                price: 400
            },
            {
                id: 3,
                title: 'Laptop',
                price: 1200
            },
        ],
    }
  },
  methods: {
    getTotal(): number {
        console.log("getTotal methods")
        return this.items.reduce((total, curr) => (total = total + curr.price), 0);
    },
    deleteItem(id: number) {
        this.items = this.items.filter(item => item.id !== id);
        return this.items;
    }
  },
    computed: {
      fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      },
      total(): number {
        console.log("total computed")
        return this.items.reduce((total, curr) => (total = total + curr.price), 0)
      },
    },
})
</script>

<template>
    <div class="second--div">
        <h2>Firstname: {{ firstName }} Lastname: {{ lastName }}</h2>
        <h2>Fullname: {{ fullName }}</h2>
    </div>
    
    <h2>List of items</h2>
    
    <div v-for="item in items" :key="item.id">    
        <h2 v-if="item.price < 2000">{{ item.title }} {{ item.price }}.-</h2>
        <button v-on:click="deleteItem(item.id)">
            Delete an item
        </button>
    </div> 
    <div class="total--div">
        <h2>Computed : {{ total }}.-</h2>
        <h2>Method : {{ getTotal() }}.-</h2>
    </div>

    <div>
        <button v-on:click="items.push({id: 4, title: 'PlayStation', price: 300})">
            Add an item
        </button>
    </div>
</template>

<style scoped>
    .second--div {
        color: cyan;
    }
    .total--div {
        color: orange;
    }
</style>
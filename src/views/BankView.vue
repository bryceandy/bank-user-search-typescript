<template>
  <div class="px-5 sm:px-8 lg:px-20 lg:pb-12">
    <h1 class="text-5xl font-bold">Bank Users</h1>
    <div class="my-6 flex">
      <label for="select-bank">Please select a bank:</label>
      <select v-model="activeBank" name="select-bank" id="select-bank" class="px-4 py-3 rounded-full">
        <option :value="id" v-for="{ id, name } in banks" :key="id">{{ name }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data'
import { reactive, ref } from 'vue'

const banks = reactive(sourceData.banks)
const activeBank = ref('')
</script>

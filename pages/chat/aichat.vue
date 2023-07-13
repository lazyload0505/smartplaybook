<script setup lang="ts">
import { ref } from 'vue'
const greeting = ref('Chat with AI');

const { data } = await useFetch('/api/test')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
  <p>Date Time: {{ data }}</p>
</template>

<style>
.greeting {
  color: green;
  font-weight: bold;
}
</style>
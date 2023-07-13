<script setup>
import { ref } from 'vue'
const greeting = ref('Main Chat with AI')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: green;
  font-weight: bold;
}
</style>
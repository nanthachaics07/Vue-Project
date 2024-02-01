<script setup>
import {ref} from 'vue'

</script>

<template>
  <div>
    <div>First Name</div>
    <input type="text" v-model="firstName">
  </div>
  <div>
    <div>Last Name</div>
    <input type="text" v-model="LastName">
  </div>
  <div>
    <div>Description</div>
    <textarea></textarea>
  </div>

</template>

<style scoped>

</style>
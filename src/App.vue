<script setup>
import {ref} from 'vue'

const isCheck = ref(false)

const toggle = () => {
  isCheck.value = !isCheck.value
}

const answer = ref('')

</script>

<template>
  <div>
    <div v-if ="answer === 'yes'">Answer's Yes</div>
    <div v-else-if ="answer === 'no'">Answer's No</div>
    <div v-else>No answer</div>
    
    <input type="radio" name="answer" value="yes" v-model="answer"> Yes
    <input type="radio" name="answer" value="no" v-model="answer"> No
    <!-- <button @click="toggle">Toggle</button> -->
  </div>
</template>
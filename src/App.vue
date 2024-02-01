<script setup>
import { reactive } from "vue"

let formData = reactive({
  firstname: "",
  lastname: "",
  age: 0,
  gender: "",
  interests: [],
  description: "",
})

const gendersList = ['male', 'female', 'other']
const interestsList = ['basketball', 'volleyball', 'tennis', 'badminton']

const submitData = () => {
  console.log('formData', JSON.parse(JSON.stringify(formData)))
  console.log('interest', formData.interests.join())
}
</script>

<template>
  <div>
    <div>
      <div>First Name</div>
      <input class="form" type="text" v-model="formData.firstname" />
    </div>
    <div>
      <div>Last Name</div>
      <input class="form" type="text" v-model="formData.lastname" />
    </div>
    <div>
      <div>Age</div>
      <input type="number" min="0" max="100" v-model="formData.age" />
    </div>
    <div>
      <div>Gender</div>
      <div v-for="gender in gendersList" v-bind:key="gender">
        <input type="radio" :value="gender" v-model="formData.gender"> {{ gender }}
      </div>
    </div>
    <div>
      <div>Interests</div>
      <div v-for="interest in interestsList" v-bind:key="interest">
        <input type="checkbox" :value="interest" v-model="formData.interests"> {{ interest }}
      </div>
    </div>
    <div>
      <div>Description</div>
      <textarea></textarea>
    </div>
    <button @click="submitData()">Submit</button>
  </div>
</template>
<template>
  <q-page class="page-bg" padding>
    <div class="column items-center q-gutter-lg">
      <q-input dark rounded class="input" standout="bg-red-5"
                v-model="url"
                label="Enter URL"
                label-color="white"
                color="white"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>

<style>
.page-bg {
background-color: #181925;
}

.input {
  width: 450px;
  color: white;
}
</style>

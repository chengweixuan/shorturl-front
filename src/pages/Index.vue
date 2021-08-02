<template>
  <q-page class="page-bg" padding>
    <q-form class="column items-center q-gutter-lg" v-on:submit="onSubmit" v-on:reset="onReset">
      <q-input dark rounded class="input" standout="bg-red-5"
                v-model="url"
                label="Enter URL"
                label-color="white"
                color="white"/>

      <div class="row q-pr-lg">
          <q-btn-toggle v-model="custom" toggle-color="blue-grey-10" dark push rounded
          text-color="white"
          :options="[
          {label: 'Random', value: false},
          {label: 'Custom', value: true}
          ]" />
      </div>

      <q-input v-if="custom" dark rounded class="input-custom" standout="bg-red-5"
                v-model="customUrl"
                label="Enter Custom URL"
                label-color="white"
                color="white"/>

      <q-btn rounded push label="Generate" type="submit" color="red-7" />
      <q-btn rounded push label="Reset" type="reset" color="blue-grey-10" text-color="white" />
    </q-form>
  </q-page>
</template>

<script>
import api from 'src/scripts/Api.js'

export default {
  name: 'home',
  data: function () {
    return {
      custom: false,
      url: '',
      customUrl: '',
      code: '',
      newUrl: ''
    }
  },
  methods: {
    onSubmit: function (event) {
      var that = this
      api.getEncodedUrl(
        this.url
      ).then(response => {
        this.code = response.data
        this.newUrl = 'localhost:8070/#/' + this.code
        console.log(this.code)

        this.$router.push({
          name: 'result',
          params: {
            originalUrl: this.url,
            newUrl: this.newUrl
          }
        })
      }).catch(error => {
        console.log(error)
      })

    },
    onReset: function (event) {
      this.url = '',
      this.customUrl = '',
      this.custom = false
    }
  }
}
</script>

<style>
.page-bg {
background-color: #181925;
}

.input {
  width: 450px;
  color: white;
}

.input-custom {
  width: 300px;
  color: white;
}

.btn-generate {
    background-color: #282F44;
    color: #white;
  }
</style>

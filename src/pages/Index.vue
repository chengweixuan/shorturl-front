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
                hint="Max 5 characters"
                label-color="white"
                color="white"/>

      <div class="column items-center q-gutter-sm">
        <q-btn rounded push label="Generate" type="submit" color="red-7" :loading="generating">
          <template v-slot:loading>
                    <q-spinner-ios />
          </template>
        </q-btn>
        <q-btn rounded push label="Reset" type="reset" color="blue-grey-10" text-color="white" />
      </div>

      <br />

      <div class="column items-center">
        <div class="col text-h7" style="color: #EDF2F4;">
          Made by Cheng Weixuan
        </div>

        <a class="col text-h7" style="color: #EDF2F4;" href="https://github.com/chengweixuan">
          GitHub: chengweixuan
        </a>
      </div>
    </q-form>

    <q-dialog v-model="invalid">
      <q-card>
        <q-card-section class="popup-bg">
          <div class="text-h6">Invalid Custom URl</div>
        </q-card-section>

        <q-card-section class="popup-bg">
          Please enter a custom URL with a maximum of 5 characters consisting of numbers, uppercase or/and lowercase letters.
        </q-card-section>

        <q-card-actions class="popup-bg" align="right">
          <q-btn flat label="OK" color="red-6" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="exist">
      <q-card>
        <q-card-section class="popup-bg">
          <div class="text-h6">Existing Custom URL</div>
        </q-card-section>

        <q-card-section class="popup-bg">
          This custom URL already exists. Please enter another custom URL with a maximum of 5 characters consisting of numbers, uppercase and/or lowercase letters.
        </q-card-section>

        <q-card-actions class="popup-bg" align="right">
          <q-btn flat label="OK" color="red-6" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="empty">
      <q-card>
        <q-card-section class="popup-bg">
          <div class="text-h6">Invalid URL</div>
        </q-card-section>

        <q-card-section class="popup-bg">
          Please enter a valid URL to convert to a smol URL.
        </q-card-section>

        <q-card-actions class="popup-bg" align="right">
          <q-btn flat label="OK" color="red-6" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      newUrl: '',
      invalid: false,
      exist: false,
      empty: false,
      generating: false,
      localPrefix: 'localhost:8080/',
      cloudPrefix: 'smol-link.herokuapp.com/#/'
    }
  },
  methods: {
    onSubmit: function (event) {
      var prefix = this.cloudPrefix

      if (api.isValidUrl(this.url) == false) {
        this.empty = true
        return
      }

      this.generating = true
      if (this.custom) {
        var that = this
        api.getEncodedCustom(
          this.customUrl,
          this.url
        ).then(response => {
          this.code = response.data

          if (this.code == 'invalid') {
            this.invalid = true
          } else if (this.code == 'exists') {
            this.exist = true
          } else {
            this.newUrl = prefix + this.code

            this.$router.push({
              name: 'result',
              params: {
                originalUrl: this.url,
                newUrl: this.newUrl
              }
            })
          }
        }).finally(_ => {
          this.generating = false
        })

      } else {
        var that = this
        api.getEncodedUrl(
          this.url
        ).then(response => {
          this.code = response.data
          this.newUrl = prefix + this.code
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
        }).finally(_ => {
          this.generating = false
        })
      }

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

.popup-bg {
  background-color: #28293E;
  color: #EDF2F4;
}

.input {
  width: 300px;
  color: white;
}

.input-custom {
  width: 250px;
  color: white;
}

.btn-generate {
    background-color: #282F44;
    color: #white;
  }
</style>

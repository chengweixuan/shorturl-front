<template>
  <q-page class="page-bg" padding>
    <q-form class="column items-center q-gutter-lg" v-on:submit="onSubmit" v-on:reset="onReset">

      <div class="text-h7" style="color: white;" @click="goSite">
        Your smol link for: {{originalUrl}}
      </div>
      <q-input dark rounded class="" outlined
                v-model="url"
                label-color="white"
                color="white"/>

      <q-btn rounded push label="Copy Link" type="submit" color="red-7" />
      <q-btn rounded push label="Back" type="reset" color="blue-grey-10" text-color="white" />
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { copyToClipboard } from 'quasar'
import { openURL } from 'quasar'

export default {
  name: 'result',
  data: function () {
    return {
      custom: false,
      url: 'youtube.com/thisisyourlink',
      customUrl: '',
      originalUrl: 'youtube.com'
    }
  },
  methods: {
    onSubmit: function (event) {
      copyToClipboard(this.url)
      .then(() => {
        console.log("copied")
      })
      .catch(() => {
        console.log("failed to copy")
      })
    },
    onReset: function (event) {
      this.$router.push({
        name: 'home'
      })
    },
    goSite: function (event) {
      openURL(this.originalUrl)
    },
    openURL
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

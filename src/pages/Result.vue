<template>
  <q-page class="page-bg" padding>
    <q-form class="column items-center q-gutter-lg" v-on:submit="onSubmit" v-on:reset="onReset">

      <div class="text-h7" style="color: white;" @click="goSite">
        Your smol link for: {{originalUrl}}
      </div>

      <q-field dark rounded outlined stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">{{newUrl}}</div>
        </template>
      </q-field>

      <div class="column items-center q-gutter-sm">
        <q-btn rounded push label="Generate" type="submit" color="red-7" />
        <q-btn rounded push label="Reset" type="reset" color="blue-grey-10" text-color="white" />
      </div>

      <br />

      <div class="column items-center">
        <div class="col text-h7" style="color: #EDF2F4;">
          Made by Cheng Weixuan
        </div>

        <div class="col text-h7" style="color: #EDF2F4;">
          GitHub: chengweixuan
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { copyToClipboard } from 'quasar'
import { openURL } from 'quasar'

export default {
  name: 'result',
  props: {
    originalUrl: {
      type: String,
      required: true
    },
    newUrl: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      displayUrl: ''
    }
  },
  methods: {
    onSubmit: function (event) {
      copyToClipboard(this.newUrl)
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

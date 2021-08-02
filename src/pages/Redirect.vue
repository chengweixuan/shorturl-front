
<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center"
  style="background-color: #181925;">
    <div class="q-gutter-lg">
      <div class="text-h2">
        Redirecting
      </div>

      <br />
      <br />

      <q-spinner-ios color="white" size="12em"/>
    </div>
  </div>
</template>

<script>
import api from 'src/scripts/Api.js'
import openURL from 'quasar'

export default {
  name: 'redirect',
  data: function() {
    return {
      redirect: '',
      route: ''
    }
  },
  created: function () {
    var x = this.$router.currentRoute._rawValue.path
    x = x.substring(1)
    console.log(x)
    this.route = x

    var that = this
    api.getDecodedUrl(
      this.route
    ).then(response => {
      this.redirect = '//' + response.data
      console.log(this.redirect)
      window.location.href = this.redirect
    }).catch(error => {
      console.log(error)
      this.$router.push({
        name: 'error'
      })
    })
  }
}
</script>

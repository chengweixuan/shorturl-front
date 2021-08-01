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

export default {
  name: 'Error404',
  data: function() {
    return {
      route: ''
    }
  },
  created: function () {
    var route = this.$router.currentRoute._rawValue.path
    console.log(route)
  }
}
</script>

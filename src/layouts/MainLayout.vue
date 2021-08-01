<template>
  <q-layout view="hHh lpr fFf">

    <q-header class="text-white" style="background: #181925;">
      <div class="column justify-center items-center q-gutter-lg q-pa-lg">
        <div class="col-3">
          <br />
          <br />
          <br />
        </div>

        <div class="col">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </div>

        <div class="col text-h3" style="color: #EDF2F4;">
          Smollink
        </div>

        <div class="col text-h7" style="color: #EDF2F4;">
          Shorten your URLs for your smol link needs
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout'

})
</script>

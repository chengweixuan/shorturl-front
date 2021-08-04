# Smollink (Frontend)

Frontend component for the URL Shortening service, Smollink.  
Made with Vue.js using the Quasar framework.

Backend component and more information on the project found at: https://github.com/chengweixuan/Smollink  


## This project is now deployed live at:  https://smol-link.herokuapp.com/  

## Important for local set-up
```bash
Edit src/scripts/Api.js at line 7

Change  
const BACKEND_URL = cloud  
to  
const BACKEND_URL = localhost  


Edit src/pages/Index.vue at line 120

Change
var prefix = this.cloudPrefix
to
var prefix = this.localPrefix
```

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v2.quasar.dev/quasar-cli/quasar-conf-js).

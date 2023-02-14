
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css"
  ],
  runtimeConfig: {
    public: {
    }
  },
  build: {
    transpile: ["vuetify"]
  },

  modules: [
    "@nuxtjs/i18n",
    "@kevinmarrec/nuxt-pwa",
    "@pinia/nuxt"
  ],

  pwa: {
    manifest: {
      name: "Name", // profileConfig.profileName,
      short_name: "Short Name", // profileConfig.profileName,
      lang: "de"
    }
  }
});

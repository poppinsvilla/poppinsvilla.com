// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css', '~/assets/styles/helper.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/eslint-module',
      {
        /* module options */
      },
    ],
    'nuxt-swiper',
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      title: 'Poppins Villa - A home like home stay',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'keywords',
          content:
            'Poppins Villa, Poppins Villa Home Stay, Mysuru home stay, best home stay in Mysuru, comfortable stay in Mysuru, hospitality in Mysuru, relaxing stay in Mysuru, Mysuru tourist attractions, Mysuru must-visit places, heavenly experience in Mysuru',
        },
        {
          property: 'og:title',
          content: 'Poppins Villa - Experience the Perfect Blend of Comfort and Hospitality',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.poppinsvilla.com' },
        { property: 'og:image', content: 'https://www.poppinsvilla.com/assets/images/og-img.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Saira:wght@500;600;700&display=swap',
        },
      ],
    },
  },
});

<template lang="pug">
header.bg-white(role='banner')
  .py-2.md_container
    nav.flex.items-center(role='navigation')
      .flex
        nuxt-link.btn-logo.rounded-full(to='/' class='bg-white/50' aria-label='Home')
          svg.h-full.w-full
            use(href='#app-logo')

        .mb-2.mt-auto.hidden.px-5.sm_block
          social-links
            //- social icons render here

      .ml-auto.text-sm.md_text-base(role='navigation')
        .gap-x-4.pr-4.text-right.sm_ml-0.sm_flex
          .flex.flex-col.items-end
            .mb-1.flex.items-center
              div
                div
                  a(href='tel:+91-9148444934' aria-label='Call us # one') +91-9148444934
                div
                  a(href='tel:+91-9845448902' aria-label='Call us # two') +91-9845448902
              svg.ml-1.h-4.w-4.text-amber-600
                use(href='#fa-phone')
            .flex.items-center
              a(href='mailto:poppinsvilla@gmail.com' aria-label='Email us') poppinsvilla@gmail.com
              svg.ml-2.h-4.w-4.text-amber-600
                use(href='#fa-envelope')
</template>

<style>
  .btn-logo {
    @apply h-[68px] w-[150px] md_h-[100px] md_w-[220px];
  }
</style>

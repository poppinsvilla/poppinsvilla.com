<template lang="pug">
swiper(
  :modules='[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]'
  :slides-per-view='1'
  :loop='true'
  :effect='"creative"'
  :navigation='true'
  :autoplay='{ delay: 8000, disableOnInteraction: true }'
  :creative-effect='{ prev: { shadow: false, translate: ["-20%", 0, -1] }, next: { translate: ["100%", 0, 0] } }'
)
  swiper-slide.bg-white(v-for='(item, index) in items' :key='index')
    .swiper-slide-size
      img.h-full.w-full.object-cover(:src='item.image' :alt='item.title')
      .swiper-slide-text-overlay
        h2.text-2xl.font-bold.sm_text-3xl.lg_text-4xl {{ item.title }}
</template>

<script setup lang="ts">
  const items = [
    {
      image: '/assets/images/001-poppins-villa.jpg',
      title: 'Poppins Villa - Exterior',
    },
    {
      image: '/assets/images/002-poppins-villa.jpg',
      title: 'Poppins Villa - Interior',
    },
    {
      image: '/assets/images/003-poppins-villa.jpg',
      title: 'Poppins Villa - Bedroom',
    },
    {
      image: '/assets/images/004-poppins-villa.jpg',
      title: 'Poppins Villa - Kitchen',
    },
    {
      image: '/assets/images/005-poppins-villa.jpg',
      title: 'Poppins Villa - Parking',
    },
  ];
</script>

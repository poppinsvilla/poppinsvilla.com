<template lang="pug">
div
  main-hero
    //- main banner render here

  main.font-sans.text-gray-700
    .px-4
      .container
        about-us
          //- about-us render here
</template>

<script lang="ts" setup>
  useHead({
    title: 'Poppins Villa | Home Stay',
    meta: [
      {
        name: 'description',
        content:
          'Welcome to Poppins Villa - Experience the perfect blend of comfort and hospitality in our home stay.',
      },
    ],
  });
</script>

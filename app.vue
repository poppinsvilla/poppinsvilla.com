<template lang="pug">
div
  icons-svg-sprite
    //- icons render here

  main-header
    //- header render here

  main-hero
    //- main banner render here

  main.font-sans.text-gray-700
    .px-4
      .md_container
        about-us
          //- about-us render here

    iframe(
      src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3897.0951857301447!2d76.66527907506641!3d12.376555987886855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDIyJzM1LjYiTiA3NsKwNDAnMDQuMyJF!5e0!3m2!1sen!2sin!4v1711342887870!5m2!1sen!2sin'
      width='100%'
      height='450'
      style='border: 0'
      allowfullscreen
      loading='lazy'
      referrerpolicy='no-referrer-when-downgrade'
    )

  main-footer
    //- footer render here
</template>

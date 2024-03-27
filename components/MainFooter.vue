<template lang="pug">
footer.bg-amber-200
  .flex.justify-center.p-4
    social-links.flex.items-center.gap-2
      //- social icons render here

  aside.flex.flex-col.bg-amber-900.p-4.text-center.text-amber-500.md_flex-row
    .md_mr-auto Copyright &copy; - All rights reserved.
    div
      | Designed and Developed with ❤️ by&nbsp;
      a.text-amber-200.hover_text-white(
        href='//www.itdevz.com'
        target='_blank'
        aria-label='Go to Designer/Developer website'
      ) www.itdevz.com
</template>

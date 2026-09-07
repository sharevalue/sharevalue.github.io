<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

useHead({
  script: [
    {
      type: 'text/javascript',
      async: true,
      src: 'https://cdn.channel.io/plugin/ch-plugin-web.js',
      charset: 'UTF-8'
    },
    {
      type: 'text/javascript',
      async: true,
      src: 'https://www.google-analytics.com/analytics.js',
    },
  ],

  meta: [
    {
      name: 'naver-site-verification',
      content: '27fd3c598969d5356a9b3d3b2d3829b834b9a24a'
    },
    {
      name: 'theme-color',
      content: '#00b0ec',
    },
  ],

  link: [
    {
      rel: 'stylesheet',
      href: 'https://static.smartbm.co.kr/stylesheets/NotoSansSubset.css',
    },
    {
      type: 'font/woff2',
      rel: 'preload',
      href: 'https://static.smartbm.co.kr/fonts/woff2/NotoSansKR-Regular.woff2',
      as: 'font',
      crossOrigin: true,
    },
    {
      type: 'font/woff2',
      rel: 'preload',
      href: 'https://static.smartbm.co.kr/fonts/woff2/NotoSansKR-Medium.woff2',
      as: 'font',
      crossOrigin: true,
    },
    {
      type: 'font/woff2',
      rel: 'preload',
      href: 'https://static.smartbm.co.kr/fonts/woff2/NotoSansKR-Bold.woff2',
      as: 'font',
      crossOrigin: true,
    }
  ]
})
</script>

<template>
  <RouterView />
</template>
<style>
.primary {
  @apply bg-primary-500
}

.primary.hoverable {
  @apply hover:bg-primary-600
}

.secondary{
 @apply bg-secondary-500
}
.secondary.hoverable {
  @apply hover:bg-secondary-600
}

.info{
  @apply bg-blue-500
}
.info.hoverable {
  @apply hover:bg-blue-600
}

.warning{
  @apply bg-yellow-500
}
.warning.hoverable {
  @apply hover:bg-yellow-600
}

.error{
  @apply bg-red-500
}
.error.hoverable {
  @apply hover:bg-red-600
}
</style>

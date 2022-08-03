<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

useHead({
  title: '쉐어밸류',
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
    { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-149122103-2' }
  ],
  meta: [
    { name: 'naver-site-verification', content: '27fd3c598969d5356a9b3d3b2d3829b834b9a24a' },
    { name: 'description', content: '범용 온라인항공예약 솔루션, 예약 API, 여행상품 백오피스' },
    { name: 'og:title', content: '쉐어밸류' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://www.sharevaluecorp.com/' },
    { name: 'og:image', content: '/image/logo/logo-og.png' },
    { name: 'og:description', content: '범용 온라인항공예약 솔루션, 예약 API, 여행상품 백오피스' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: '쉐어밸류' },
    { name: 'twitter:url', content: 'https://www.sharevaluecorp.com/' },
    { name: 'twitter:image', content: '/image/logo/logo-og.png' },
    { name: 'twitter:description', content: '범용 온라인항공예약 솔루션, 예약 API, 여행상품 백오피스' },
    {
      name: 'theme-color',
      content: '#00b0ec',
    },
  ],
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

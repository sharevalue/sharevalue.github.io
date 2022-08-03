<script setup lang="ts">
// import useEventsBus from '~/composables/core/eventBus';
//
// const { emit } = useEventsBus();
const navigationLinks: Array<{ [key: string]: string }> = [{
  title: '부킹엔진',
  path: '/engine',
}, {
  title: '백오피스',
  path: '/back-office',
}, {
  title: '부가서비스',
  path: '/extra',
}, {
  title: '고객센터',
  path: '/support',
}];

const route = useRoute();

const checkSelected = (path: string) => {
  console.log('path : ', path);
  return route.path === path;
};
</script>

<template>
    <!-- header component -->
    <header
        class="header py-5 bg-white pl-md:pl-20 md:rtl:pr-20 pr-2 pl-2 transition-padding duration-700 w-full right-0 z-20 flex flex-row items-center justify-center md:justify-between  px-4 space-y-2 shadow-md md:space-y-none md:h-16 md:flex-row">
      <div>
        <RouterLink to="/">
          <img src="/image/logo/ci-sharevalue.png"
               srcset=""
               width="147"
               height="31"
               alt="쉐어밸류"
               class=""/>
        </RouterLink>
      </div>
      <div class="flex">
        <nav>
          <RouterLink
              v-for="({ title, path }) in navigationLinks"
              :key="`nav_${path}`"
              :class="['decoration-none', checkSelected(path) ? 'selected' : '']"
              :to="path">
            <span>{{ title }}</span>
          </RouterLink>
        </nav>
      </div>
      <div>
        <button>가입문의</button>
      </div>
    </header>
</template>
<style scoped>

.header {
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 9px 1px rgba(4, 0, 0, 0.1);
}
</style>
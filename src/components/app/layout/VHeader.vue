<script setup lang="ts">
const navigationLinks: Array<{ [key: string]: string }> = [{
  title: '부킹엔진',
  path: '/engine',
}, {
  title: '백오피스',
  path: '/back-office',
}, {
//   title: '부가서비스',
//   path: '/extra',
// }, {
  title: '고객센터',
  path: '/support',
}];

const route = useRoute();
const router = useRouter();

function checkSelected(path: string) {
  return route.path === path;
}

function moveToPageWithTargetId(path: string, targetId: string) {
  router.push({ path, query: { targetId } });
}
</script>

<template>
    <!-- header component -->
    <header
        class="py-5 bg-white pl-md:pl-20 md:rtl:pr-20 transition-padding duration-700 w-full right-0 z-20 space-y-2 shadow-md md:space-y-none md:flex-row">
      <div class="default-container flex flex-row items-center justify-center md:justify-between px-7.5">
        <div class="py-2">
          <RouterLink to="/">
            <img src="/image/logo/ci-sharevalue.png"
                 srcset=""
                 width="147"
                 height="31"
                 alt="쉐어밸류"
                 class="font-bold"/>
          </RouterLink>
        </div>
        <div class="navigation-area">
          <nav>
            <RouterLink
                v-for="({ title, path }) in navigationLinks"
                :key="`nav_${path}`"
                :class="['decoration-none', 'mx-4', checkSelected(path) ? 'c-primary-500 font-bold' : '']"
                :to="path">
              <span>{{ title }}</span>
            </RouterLink>
          </nav>
        </div>
        <div>
          <button type="button"
                  class="bg-primary-500 c-white contact-btn"
                  @click="moveToPageWithTargetId('/support', 'inquiry_form')">가입문의</button>
        </div>
      </div>
    </header>
</template>
<style scoped>
.contact-btn {
  border-radius: 10px;
  width: 150px;
  height: 50px;
  line-height: 50px;
}

.contact-btn:hover {
  opacity: 0.75;
}

.navigation-area {
  color: #152038;
}

.navigation-area a:hover {
  @apply c-primary-500  font-bold;
}
</style>
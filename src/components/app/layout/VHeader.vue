<script setup lang="ts">
import { ref } from 'vue'

const visibleMenuModal = ref(false);

const navigationLinks: Array<{ [key: string]: string }> = [{
  title: '부킹엔진',
  path: '/engine',
  icon: 'ico_black_engine.webp',
}, {
  title: '백오피스',
  path: '/back-office',
  icon: 'ico_black_back-office.webp',
}, {
//   title: '부가서비스',
//   path: '/extra',
//   icon: 'ico_black_addition.webp',
// }, {
  title: '고객센터',
  path: '/support',
  icon: 'ico_black_support.webp',
}];

const route = useRoute();
const router = useRouter();

function checkSelected(path: string) {
  return route.path === path;
}

function moveToPageWithTargetId(path: string, targetId: string) {
  router.push({ path, query: { targetId } });
}

function turnVisibleMenuModal() {
  visibleMenuModal.value = !(visibleMenuModal.value);
}
</script>

<template>
    <!-- header component -->
    <header
        class="py-5 bg-white pl-md:pl-20 transition-padding duration-700 w-full right-0 z-20 space-y-none shadow-md md:flex-row">
      <div class="default-container flex flex-row items-center justify-between px-7.5">
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
        <div class="hidden md:inline-block navigation-area">
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
                  class="hidden md:inline-block bg-primary-500 c-white contact-btn"
                  @click="moveToPageWithTargetId('/support', 'inquiry')">가입문의</button>
          <!--ONLY VISIBLE UNDER 768px-->
          <button type="button"
                  class="inline-block md:hidden bg-white visible-btn"
                  @click="turnVisibleMenuModal">&equiv;</button>
        </div>
      </div>

      <!--ONLY VISIBLE UNDER 768px-->
      <div v-show="visibleMenuModal"
           class="inline-block md:hidden menu-modal text-left shadow-lg"
           @click="turnVisibleMenuModal">
        <div class="navigation-area">
          <nav class="flex flex-col">
            <RouterLink
                v-for="({ title, path, icon }) in navigationLinks"
                :key="`nav_${path}`"
                :class="['decoration-none', 'px-7.5', checkSelected(path) ? 'c-primary-500 font-bold' : '']"
                :to="path">
              <div class="flex flex-low items-center h-full">
                <img v-if="icon"
                     :src="`/image/icon/${icon}`"
                     width="25"
                     height="30"
                     alt="icon"
                     class="mr-5"/>
                <span>{{ title }}</span>
              </div>
            </RouterLink>
          </nav>
        </div>
        <div class="flex flex-col menu-modal-btn-area">
          <button type="button"
                  class="bg-primary-500 c-white h-70px"
                  @click="moveToPageWithTargetId('/support', 'inquiry')">가입문의</button>
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

.visible-btn {
  font-family: inherit;
  line-height: 50px;
  font-size: 45px;
}

.menu-modal {
  left: 0;
  top: 87px;
  width: 100%;
  background-color: #FFFFFF;
  position: absolute;
  z-index: 500;
  font-size: 20px;
}

.menu-modal .navigation-area nav >a {
  border-top: 1px solid #eff3f7;
  height: 70px;
}

.menu-modal .menu-modal-btn-area {
  border-top: 1px solid #eff3f7;
}
</style>
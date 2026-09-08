<script setup lang="ts">
import { computed, ref } from 'vue'

const visibleMenuModal = ref(false);

const route = useRoute();
const router = useRouter();

/* 영문 페이지 여부 */
const isEnglish = computed(() => route.path === '/en' || route.path.startsWith('/en/'));

/* 한글 / 영문 메뉴 */
const navigationLinks = computed(() => {
  if (isEnglish.value) {
    return [
      {
        title: 'Booking Engine',
        path: '/en/engine',
        icon: 'ico_black_engine.webp',
      },
      {
        title: 'Back Office',
        path: '/en/back-office',
        icon: 'ico_black_back-office.webp',
      },
      {
        title: 'Support',
        path: '/en/support',
        icon: 'ico_black_support.webp',
      },
    ];
  }

  return [
    {
      title: '부킹엔진',
      path: '/engine',
      icon: 'ico_black_engine.webp',
    },
    {
      title: '백오피스',
      path: '/back-office',
      icon: 'ico_black_back-office.webp',
    },
    {
      title: '고객센터',
      path: '/support',
      icon: 'ico_black_support.webp',
    },
  ];
});

function changeLanguage(lang: 'ko' | 'en') {
  const pathMap: Record<string, { ko: string; en: string }> = {
    '/': { ko: '/', en: '/en/' },
    '/engine': { ko: '/engine', en: '/en/engine' },
    '/back-office': { ko: '/back-office', en: '/en/back-office' },
    '/support': { ko: '/support', en: '/en/support' },

    '/en/': { ko: '/', en: '/en/' },
    '/en/engine': { ko: '/engine', en: '/en/engine' },
    '/en/back-office': { ko: '/back-office', en: '/en/back-office' },
    '/en/support': { ko: '/support', en: '/en/support' },
  };

  const targetPath = pathMap[route.path]?.[lang];

  if (targetPath && targetPath !== route.path) {
    router.push(targetPath);
  }
}
// 페이지 이동 시마다 강제로 상단으로 이동
router.beforeEach(() => {
  window.scrollTo(0, 0);
});

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
        class="text-xs md:text-xl py-0.75em md:py-5 bg-white transition-padding duration-700 w-full right-0 z-20 space-y-none shadow-md md:flex-row fixed">
      <div class="default-container flex flex-row items-center justify-between px-1em md:px-7.5">
        <div class="py-2">
          <RouterLink :to="isEnglish ? '/en/' : '/'">
  <img src="/image/logo/ci.png"
       srcset=""
       width="147"
       height="31"
       alt="Share Value"
       class="font-bold"/>
</RouterLink>
        </div>
        <div class="hidden md:inline-block navigation-area">
          <nav>
            <RouterLink
                v-for="({ title, path }) in navigationLinks"
                :key="`nav_${path}`"
                :class="['decoration-none', 'mx-4', checkSelected(path) ? 'nav-selected' : '']"
                :to="path">
              <span>{{ title }}</span>
            </RouterLink>
          </nav>
        </div>

        <div class="flex items-center">
 <div class="hidden md:flex items-center mr-6 language-switcher">
  <span
      :class="{ active: !isEnglish }"
      @click="changeLanguage('ko')">
    KR
  </span>

  <span class="mx-2 language-divider">|</span>

  <span
      :class="{ active: isEnglish }"
      @click="changeLanguage('en')">
    EN
  </span>
</div>
          <button type="button"
                  class="hidden md:inline-block bg-primary-500 c-white btn contact-btn"
                 @click="moveToPageWithTargetId(isEnglish ? '/en/support' : '/support', 'inquiry')">
  {{ isEnglish ? 'Contact Us' : '서비스 문의' }}
</button>
<!-- ★★★ 바로 여기에 모바일 언어 선택 넣기 ★★★ -->
<div class="mobile-language-switcher md:hidden">
  <span
      :class="{ active: !isEnglish }"
      @click="changeLanguage('ko')">
    KR
  </span>

  <span class="mx-2 language-divider">|</span>

  <span
      :class="{ active: isEnglish }"
      @click="changeLanguage('en')">
    EN
  </span>
</div>
          <!--ONLY VISIBLE UNDER 768px-->
          <button type="button"
                  class="inline-block md:hidden visible-btn"
                  @click="turnVisibleMenuModal">&equiv;</button>
        </div>
      </div>

    
      <!--ONLY VISIBLE UNDER 768px-->
      <div v-show="visibleMenuModal"
           class="inline-block md:hidden text-left shadow-lg bg-white menu-modal"
           @click="turnVisibleMenuModal">
        <div class="navigation-area">
          <nav class="flex flex-col">
            <RouterLink
                v-for="({ title, path, icon }) in navigationLinks"
                :key="`nav_${path}`"
                :class="['decoration-none', 'px-7.5', checkSelected(path) ? 'nav-selected font-bold' : '']"
                :to="path">
              <div class="flex flex-row items-center h-full">
                <img v-if="icon"
                     :src="`/image/icon/${icon}`"
                     width="25"
                     height="30"
                     alt="icon"
                     class="mr-3"/>
                <span>{{ title }}</span>
              </div>
            </RouterLink>
          </nav>
        </div>
        <div class="flex flex-col menu-modal-btn-area">
          <button type="button"
                  class="bg-primary-500 c-white h-60px"
                  @click="moveToPageWithTargetId(isEnglish ? '/en/support' : '/support', 'inquiry')">
  {{ isEnglish ? 'Contact Us' : '서비스 문의' }}
</button>
        </div>
      </div>
    </header>
</template>
<style scoped>
.contact-btn {
  width: 150px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
 background: linear-gradient(
    135deg,
    #006DFF 0%,
    #00B8FF 100%
  );  
}

.nav-selected {
   color: #006DFF !important;
}
.navigation-area a:hover,
.navigation-area a:hover span {
  color: #006DFF !important;
}
.navigation-area {
  color: #152038;
  font-size: 20px;
}

.navigation-area a:hover {
  @apply c-primary-500;
}

.visible-btn {
  font-family: inherit;
  line-height: 1.3;
  font-size: 3em;
  color: #2e2d33;
  font-weight: normal;
}

.menu-modal {
  left: 0;
  top: 65px;
  width: 100%;
  position: absolute;
  z-index: 500;
}

.menu-modal .navigation-area nav >a {
  border-top: 1px solid #eff3f7;
  height: 60px;
  font-size: 14px;
}

.menu-modal .menu-modal-btn-area {
  border-top: 1px solid #eff3f7;
  font-size: 14px;
}
.menu-modal .menu-modal-btn-area button {
  background: linear-gradient(
    135deg,
    #006DFF 0%,
    #00B8FF 100%
  );
}
.menu-modal .menu-modal-btn-area button {
  background: linear-gradient(
    135deg,
    #006DFF 0%,
    #00B8FF 100%
  );
}

/* Language Switcher */
.language-switcher span,
.mobile-language-switcher span {
  color: #374151;
  cursor: pointer;
  font-weight: 400;
  transition: color 0.2s ease;
}

.language-switcher span.active,
.mobile-language-switcher span.active {
  color: #006DFF;
  font-weight: 700;
}

.language-switcher .language-divider,
.mobile-language-switcher .language-divider {
  color: #C5CBD3;
  cursor: default;
  font-weight: 400;
}

.mobile-language-switcher {
  align-items: center;
  margin-right: 16px;
  white-space: nowrap;
}
</style>
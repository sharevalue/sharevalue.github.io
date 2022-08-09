import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'


export default defineConfig({
  shortcuts: [
    //{'btn': 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'},
    { 'icon-btn': 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600' },
      ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    colors: {
      'primary': {
        50: '#B6E8F9',
        100: '#91DDF6',
        200: '#6DD1F4',
        300: '#48C6F1',
        400: '#24BBEE',
        500: '#00b0ec',
        600: '#17ade5',
        700: '#007DA8',
        800: '#006486',
        900: '#004B65',
      },
      secondary: {
        '50': '#B6C1CB',
        '100': '#91A2B1',
        '200': '#6D8398',
        '300': '#48647E',
        '400': '#244564',
        '500': '#00264b',
        '600': '#002040',
        '700': '#001B35',
        '800': '#00152A',
        '900': '#001020'

        // 50: '#f2f6f9',
        // 100: '#d5daec',
        // 200: '#B4BDDD',
        // 300: '#0B3954',
        // 400: '#072536',
        // 500: '#051A1E',
      },
    }
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose'.split(' '),
})

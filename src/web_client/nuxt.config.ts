// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	ssr: true,
	plugins: [],
	modules: [
		'@nuxtjs/i18n',
		'@nuxt/eslint',
		'nuxt-svgo',
		'@pinia/nuxt',
		'nuxt-svgo',
		'@primevue/nuxt-module',
		'@nuxtjs/google-fonts',
		'nuxt-viewport',
		'nuxt-aos',
	// 'nuxt-gtag',
		'@nuxt/scripts',
	],
	css: ['~/assets/css/main.pcss', '~/assets/css/primevue.pcss'],
	app: {
	},
	scripts: {
		registry: {
			googleAnalytics: {
				id: process.env.G_ID || '',
			}
			}
	},
	i18n: {
		locales: [
			{ code: 'en', iso: 'en', file: 'en.json', name: 'English' },
			{ code: 'ru', iso: 'ru', file: 'ru.json', name: 'Russian' },
			//{ code: 'fr', iso: 'fr', file: 'fr.json', name: 'French' },
			{ code: 'de', iso: 'de', file: 'de.json', name: 'German' },
			//{ code: 'it', iso: 'it', file: 'it.json', name: 'Italian' },
			{ code: 'pl', iso: 'pl', file: 'pl.json', name: 'Polish' },
			//{ code: 'ro', iso: 'ro', file: 'ro.json', name: 'Romanian' },
			{ code: 'uk', iso: 'uk', file: 'ua.json', name: 'Ukrainain' },
			//{ code: 'es', iso: 'es', file: 'es.json', name: 'Spanish' },
		],
		defaultLocale: 'en',
		strategy: 'prefix',
		lazy: true,
		langDir: 'locales/',
		vueI18n: './i18n.config.ts',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			alwaysRedirect: true,
			fallbackLocale: 'en',
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
			'postcss-nested': {},
		},
	},
	primevue: {
		options: {
			theme: {
				options: {
					cssLayer: {
						name: 'primevue',
						order: 'tailwind-base, primevue, tailwind-utilities',
					},
				},
			},
		},
	},
	router: {
		options: {
			scrollBehaviorType: 'smooth',
		},
	},
	svgo: {
		defaultImport: 'component',
	},
	googleFonts: {
		families: {
			Outfit: true,
			Onest: true,
		},
	},
	viewport: {
		breakpoints: {
			desktop: 1024,
			desktopMedium: 1280,
			desktopWide: 1600,

			mobile: 480,
			mobileWide: 640,
			tablet: 768,
		},
	},
	aos: {
					// Global settings:
					//disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
					//startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
					//initClassName: 'aos-init', // class applied after initialization
					//animatedClassName: 'aos-animate', // class applied on animation
					//useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
					//disableMutationObserver: false, // disables automatic mutations' detections (advanced)
					//debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
					//throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
					//// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
					//offset: 120, // offset (in px) from the original trigger point
					//delay: 0, // values from 0 to 3000, with step 50ms
					//duration: 400, // values from 0 to 3000, with step 50ms
					//easing: 'ease', // default easing for AOS animations
					//once: false, // whether animation should happen only once - while scrolling down
					//mirror: false, // whether elements should animate out while scrolling past them
					//anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	},
	runtimeConfig: {
		public: {
			apiBase: process.env.API_URL,
		},
	},
});
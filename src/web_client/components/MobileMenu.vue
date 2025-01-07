<script setup lang="ts">
import { useGlobalStore } from '~/store/globalStore';

const { locale, t, setLocale } = useI18n();

const isMenuVisible = computed(() => useGlobalStore().isMenuVisible);

const isLanguagesVisible = ref(false);

const localePath = useLocalePath();
//const viewport = useViewport()

//const isDesktop = computed(()=>['desktop', 'desktopMedium', 'desktopWide'].includes(viewport.breakpoint))

const handleChoice = () => {
	useGlobalStore().setMenuVisibility(!isMenuVisible.value);
	document.getElementsByTagName('body')[0].style.overflow = isMenuVisible.value
		? 'hidden'
		: 'unset';
};

const toggleLanguageOptions = () => {
	isLanguagesVisible.value = !isLanguagesVisible.value;
};

const handleLanguageChange = (language: string) => {
	setLocale(language);
	isLanguagesVisible.value = false;
	useGlobalStore().setMenuVisibility(false);
	document.getElementsByTagName('body')[0].style.overflow = isMenuVisible.value
		? 'hidden'
		: 'unset';
};
</script>
<template>
	<div class="fixed top-0 right-0 z-30">
		<Transition
			enter-active-class="duration-[0.8s] before:transition-all before:duration-[1.5s] before:ease-out ease-out"
			enter-from-class="transform origin-top-left translate-x-[100%] before:-rotate-[5deg] before:scale-y-[1.5] .enter-from--list"
			enter-to-class="translate-x-[0%] before:rotate-[0] before:scale-y-[1] .enter-to--list"
			leave-active-class="duration-[0.8s] linear"
			leave-from-class="translate-x-[0%] opacity-100"
			leave-to-class="transform translate-x-[100%]"
		>
			<div
				v-if="isMenuVisible"
				class="relative top-0 right-0 z-40 2xs:w-[100vw] md:w-[40rem] h-[100vh] min-h-[35rem] before:content-[''] before:w-full before:absolute before:h-[100vh] before:bg-secondary before:z-30 before:origin-top-left before:transition-all 2xs:before:opacity-90 2xs:backdrop-blur-sm md:before:opacity-100"
			>
				<div class="w-full h-full flex flex-col items-center py-[10rem]">
					<TransitionGroup
						enter-active-class="duration-[0.2s] ease-out"
						enter-from-class="translate-x-[50%] opacity-0"
						enter-to-class="translate-x-[0%] opacity-100"
						leave-active-class="duration-[0.2s] linear"
						leave-from-class="translate-x-[0%] opacity-100"
						leave-to-class="translate-x-[0%] opacity-0"
						
					>
						<div
							v-if="!isLanguagesVisible"
							class="absolute z-40 text-bg text-base flex flex-col items-center gap-[4rem]"
						>
							<ul class="transition-all list-none flex flex-col gap-4">
								<li class="border-b-[2px] p-2">
									<nuxt-link
										:to="{ path: localePath('/'), hash: '#company' }"
										@click="handleChoice"
									>
										{{ t('company') }}
									</nuxt-link>
								</li>
								<li class="border-b-[2px] p-2">
									<nuxt-link
										:to="{ path: localePath('/'), hash: '#services' }"
										@click="handleChoice"
									>
										{{ t('services') }}
									</nuxt-link>
								</li>
								<li class="border-b-[2px] p-2">
									<nuxt-link :to="localePath('/careers')" @click="handleChoice">
										{{ t('careers') }}
									</nuxt-link>
								</li>
								<li class="border-b-[2px] p-2">
									<nuxt-link
										:to="{ path: localePath('/'), hash: '#contact' }"
										@click="handleChoice"
									>
										{{ t('Get in touch').toLowerCase() }}
									</nuxt-link>
								</li>
							</ul>
							<div class="w-full h-max flex justify-center items-center">
								<button class="border-b-[2px]" @click="toggleLanguageOptions">{{ locale }}</button>
							</div>
						</div>
						<div
							v-if="isLanguagesVisible"
							class="absolute z-40 text-bg text-base flex flex-col items-center gap-[4rem] font-onest"
						>
							<ul class="transition-all list-none flex flex-col gap-4">
								<li class="border-b-[2px] p-2">
									<button @click="() => handleLanguageChange('en')">English</button>
								</li>
								<li class="border-b-[2px] p-2">
									<button @click="() => handleLanguageChange('pl')">Polski</button>
								</li>
								<li class="border-b-[2px] p-2">
									<button @click="() => handleLanguageChange('ru')">Русский</button>
								</li>
								<li class="border-b-[2px] p-2">
									<button @click="() => handleLanguageChange('uk')">Українська</button>
								</li>
								<li class="border-b-[2px] p-2">
									<button @click="() => handleLanguageChange('de')">Deutsch</button>
								</li>
							</ul>
							<div class="w-full h-max flex justify-center items-center">
								<button class="border-b-[2px]" @click="toggleLanguageOptions">
									{{ t('back') }}
								</button>
							</div>
						</div>
					</TransitionGroup>
				</div>
			</div>
		</Transition>
	</div>
</template>
<style scoped lang="scss">
.enter-from--list {
	ul {
		opacity: 0;
	}
}
.enter-to--list {
	ul {
		opacity: 1;
	}
}
</style>

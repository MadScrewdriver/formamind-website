<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Select from 'primevue/select';
import SimplifiedLogo from '@/assets/icons/Logov2.svg';
import MenuBtn from './MenuButton.vue';

const languageOptions = ref(['en', 'pl', 'de', 'ru', 'uk']);
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();

const languageChooserModel = computed({
	get: () => locale.value,
	set: (value) => {
		setLocale(value);
	},
});
</script>
<template>
	<header
		class="grid grid-rows-1 2xs:grid-cols-[15rem_1fr_3rem] lg:grid-cols-[15rem_1fr_35rem_18rem_5rem] gap-[6rem]"
	>
		<nuxt-link
			:to="{ path: localePath('/') }"
			class="col-start-1 col-span-1 w-full h-auto flex justify-center items-center"
		>
			<SimplifiedLogo class="w-full h-auto" />
		</nuxt-link>
		<nav class="col-start-3 col-span-1 2xs:hidden lg:flex flex-row justify-between items-center">
			<nuxt-link
				:to="{ path: localePath('/'), hash: '#company' }"
				class="text-sm text-black relative after:bottom-0 after:left-0 after:absolute after:content-[''] after:w-full after:origin-left after:transition-all after:duration-150 after:scale-x-0 hover:after:scale-x-100 after:will-change-transform after:h-[2px] after:bg-black"
				aria-label="Learn more about our company"
			>
				{{ $t('company') }}
			</nuxt-link>
			<nuxt-link
				:to="{ path: localePath('/'), hash: '#services' }"
				class="text-sm text-black relative after:bottom-0 after:left-0 after:absolute after:content-[''] after:w-full after:origin-left after:transition-all after:duration-150 after:scale-x-0 hover:after:scale-x-100 after:will-change-transform after:h-[2px] after:bg-black"
				aria-label="Discover our services"
			>
				{{ $t('services') }}
			</nuxt-link>
			<nuxt-link
				:to="{ path: localePath('/careers') }"
				class="text-sm text-black relative after:bottom-0 after:left-0 after:absolute after:content-[''] after:w-full after:origin-left after:transition-all after:duration-150 after:scale-x-0 hover:after:scale-x-100 after:will-change-transform after:h-[2px] after:bg-black"
				aria-label="Explore career opportunities"
			>
				{{ $t('careers') }}
			</nuxt-link>
		</nav>
		<nuxt-link
			:to="{ path: localePath('/'), hash: '#contact' }"
			class="col-start-4 col-span-1 2xs:hidden lg:flex items-center justify-center text-sm text-white bg-blueBtnBg bg-contain bg-no-repeat bg-center"
			aria-label="contact"
		>
			{{ $t('Get in touch') }}
		</nuxt-link>
		<div class="2xs:hidden lg:flex justify-center items-center">
			<Select
				v-model="languageChooserModel"
				:options="languageOptions"
				class="border-b-2 border-black text-sm col-start-5 col-span-1 text-black"
				:pt="{
					listContainer: { class: 'bg-bg px-2 rounded-b-xl h-max' },
				}"
			>
				<template #value="slotProps">
					<div v-if="slotProps.value" class="flex items-center">
						<div>{{ slotProps.value.toUpperCase() }}</div>
					</div>
					<span v-else>
						{{ slotProps.placeholder }}
					</span>
				</template>
				<template #option="slotProps">
					<div class="flex items-center">
						<div class="text-sm text-black">{{ slotProps.option == "uk" ? "UA": slotProps.option.toUpperCase() }}</div>
					</div>
				</template>
			</Select>
		</div>
		<ClientOnly>
			<teleport to="body">
				<div
					class="fixed z-50 top-0 right-0 w-[9rem] h-[9rem] flex justify-center items-center col-start-3 col-span-1 2xs:flex lg:hidden"
				>
					<MenuBtn class="w-[3rem] absolute z-50" />
				</div>
			</teleport>
		</ClientOnly>
	</header>
</template>

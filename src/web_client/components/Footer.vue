<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Logo from '@/assets/icons/logo-light.svg';
import TiktokLogo from '@/assets/icons/tiktok.svg';
import FacebookLogo from '@/assets/icons/facebook.svg';
import InstagramLogo from '@/assets/icons/instagram.svg';
import LinkedinLogo from '@/assets/icons/linkedin.svg';

const { topSeparator } = defineProps({
	topSeparator: { type: Boolean, required: false, default: true },
});
const localePath = useLocalePath();
</script>
<template>
	<footer>
		<div v-if="topSeparator" class="w-full h-[1px] bg-bg" />
		<div class="flex flex-row w-full h-max justify-between py-[8rem]">
			<div class="2xs:text-sm lg:text-base text-bg flex flex-col items-start font-medium">
				<div class="flex flex-col items-start leading-tight">
					<nuxt-link :to="{ path: localePath('/'), hash: '#company' }" class="lg:hover:underline" aria-label="company">
						{{ $t('About us') }}
					</nuxt-link>
					<nuxt-link :to="{ path: localePath('/'), hash: '#contact' }" class="lg:hover:underline" aria-label="contact">
						{{ $t('Contact us') }}
					</nuxt-link>
					<nuxt-link :to="{ path: localePath('/careers') }" class="lg:hover:underline" aria-label="careers">
						{{ $t('Careers') }}
					</nuxt-link>
					<nuxt-link :to="{ path: localePath('/'), hash: '#services' }" class="lg:hover:underline" aria-label="services">
						{{ $t('Services') }}
					</nuxt-link>
				</div>
			</div>

			<div class="2xs:text-xs lg:text-sm text-bg flex flex-col items-start font-medium gap-[1rem]">
				<Logo class="h-[5rem]" />
				<p><a href="mailto:contact@formamind.com">contact@formamind.com</a></p>
				<a href="tel:+48515518949">+48 515 518 949</a>
				<div class="flex flex-row gap-[2rem]">
					<a href="https://www.tiktok.com/@formamind_" aria-label="tiktok">
						<TiktokLogo class="2xs:w-[2rem] 2xs:h-[2rem] lg:w-[4rem] lg:h-[4rem]" />
					</a>
					<a href="https://www.facebook.com/profile.php?id=61565508300444" aria-label="facebook">
						<FacebookLogo class="2xs:w-[2rem] 2xs:h-[2rem] lg:w-[4rem] lg:h-[4rem]" />
					</a>
					<a href="https://www.instagram.com/formamindstudio" aria-label="instagram">
						<InstagramLogo class="2xs:w-[2rem] 2xs:h-[2rem] lg:w-[4rem] lg:h-[4rem]" />
					</a>
					<a href="https://www.linkedin.com/company/formamind" target="_blank" aria-label="Linkedin">
						<LinkedinLogo class="2xs:w-[2rem] 2xs:h-[2rem] lg:w-[4rem] lg:h-[4rem]" />
					</a>
				</div>
			</div>
		</div>
		<div class="w-full h-[1px] bg-bg" />
		<div class="2xs:text-xs lg:text-sm text-bg py-[3rem]">
			<div class="underline flex flex-row gap-[3rem]">
				<nuxt-link
					:to="localePath('/impressum')"
					class="lg:hover:text-primary transition-all duration-100"
					aria-label="imprint"
					>{{ $t('impressum') }}</nuxt-link
				>
				<nuxt-link
					:to="localePath('/privacyPolicy')"
					class="lg:hover:text-primary transition-all duration-100"
					aria-label="privacy policy"
					>{{ $t('privacy policy') }}</nuxt-link
				>
			</div>
			<div>
				<p>{{ $t('© 2024 Formamind sp. z o.o. All Rights Reserved.') }}</p>
			</div>
		</div>
	</footer>
</template>

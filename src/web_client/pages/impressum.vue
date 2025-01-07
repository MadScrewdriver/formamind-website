<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

useSeoMeta({
	title: t('Formamind | Impressum'),
	ogTitle: t('Formamind | Impressum'),
	description: t('Impressum'),
	ogDescription: t('Impressum'),
	ogImage: 'https://i.ibb.co/4tGvK1f/card.png',
	twitterCard: 'summary_large_image',
});
</script>

<template>
	<div class="flex flex-col 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] py-[4rem] font-outfit bg-bg">
		<header
			class="flex flex-row justify-start items-center h-[5rem] text-black text-sm hover:text-secondary"
		>
			<nuxt-link :to="localePath('/')" class="underline">{{ $t('To main page') }}</nuxt-link>
		</header>
		<h1 class="2xs:text-base lg:text-lg text-secondary">{{ $t('Impressum') }}</h1>
		<ul class="text-black text-sm w-full">
			<li>
				<h3 class="font-semibold">{{ $t('ownerTitle') }}</h3>
				<p>{{ $t('ownerInfo') }}</p>
				<p>{{ $t('ownerAddress') }}</p>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('contactTitle') }}</h3>
				<p>{{ $t('contactPerson') }}</p>
				<p><a href="mailto:contact@formamind.com">contact@formamind.com</a></p>
				<p><a href="tel:+48515518949">+48 515 518 949</a></p>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('taxIdTitle') }}</h3>
				<p>NIP: 7011213157</p>
			</li>
		</ul>
	</div>
</template>

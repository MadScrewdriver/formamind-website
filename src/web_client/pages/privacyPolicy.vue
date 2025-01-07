<script setup lang="ts">
const localePath = useLocalePath();
const { locale, t } = useI18n();

const isCyrillic = computed(() => ['uk', 'ru'].includes(locale.value));

useSeoMeta({
	title: t('Formamind | Privacy Policy'),
	ogTitle: t('Formamind | Privacy Policy'),
	description: t('Our privacy policy.'),
	ogDescription: t('Our privacy policy.'),
	ogImage: 'https://i.ibb.co/4tGvK1f/card.png',
	twitterCard: 'summary_large_image',
});
</script>
<template>
	<div
		class="flex flex-col 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] py-[4rem] font-outfit bg-bg"
		:class="{ 'font-onest': isCyrillic, 'font-outfit': !isCyrillic }"
	>
		<header
			class="flex flex-row justify-start items-center h-[5rem] text-black text-sm hover:text-secondary"
		>
			<nuxt-link :to="localePath('/')" class="underline"> {{ $t('To main page') }} </nuxt-link>
		</header>
		<h1 class="2xs:text-base lg:text-lg text-secondary">
			<span v-for="(item, index) in $t('Privacy policy').split('\n')" :key="index"
				><br v-if="index !== 0" />{{ item }}</span
			>
		</h1>
		<h2 class="2xs:text-sm lg:text-base text-black">{{ $t('Formamind sp. z o.o.') }}</h2>
		<ol class="list-decimal text-black text-sm flex flex-col py-[2rem]">
			<li>
				<h3 class="font-semibold">{{ $t('General Information') }}</h3>
				<p>{{ $t('general-information-text') }}</p>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('Data Controller') }}</h3>
				<p>{{ $t('data-controller-text') }}</p>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('Types of Processed Data') }}</h3>
				<p>{{ $t('types-of-processed-data-text') }}</p>
				<ul class="list-disc pl-[2rem]">
					<li>{{ $t('firstName') }}</li>
					<li>{{ $t('emailAddress') }}</li>
					<li>{{ $t('phoneNumber') }}</li>
					<li>{{ $t('ipAddress') }}</li>
					<li>{{ $t('cookiesData') }}</li>
				</ul>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('Purpose and Legal Basis for Data Processing') }}</h3>
				<p>{{ $t('purpose-and-legal-basis-text') }}</p>
				<ul class="list-disc pl-[2rem]">
					<li>{{ $t('inquiriesResponse') }}</li>
					<li>{{ $t('websiteTrafficAnalysis') }}</li>
				</ul>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('Data Recipients') }}</h3>
				<p>{{ $t('data-recipients-text') }}</p>
				<ul class="list-disc pl-[2rem]">
					<li>{{ $t('serviceProviders') }}</li>
					<li>{{ $t('googleAnalytics') }}</li>
				</ul>
			</li>
			<li>
				<b class="font-semibold">{{ $t('Transfer of Data to Third Countries') }}</b>
				<p>{{ $t('transfer-of-data-to-third-countries-text') }}</p>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('Data Retention Period') }}</h3>
				<p>{{ $t('data-retention-period-text') }}</p>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('Rights of Data Subjects') }}</h3>
				<p>{{ $t('rights-of-data-subjects-text') }}</p>
				<ul class="list-disc pl-[2rem]">
					<li>{{ $t('rightToAccess') }}</li>
					<li>{{ $t('rightToRectify') }}</li>
					<li>{{ $t('rightToErase') }}</li>
					<li>{{ $t('rightToRestrict') }}</li>
					<li>{{ $t('rightToObject') }}</li>
					<li>{{ $t('rightToPortability') }}</li>
					<li>{{ $t('rightToWithdraw') }}</li>
				</ul>
				<p>{{ $t('exerciseRights') }}</p>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('Cookies and Similar Technologies') }}</h3>
				<p>{{ $t('cookies-and-similar-technologies-text') }}</p>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('Changes to the Privacy Policy') }}</h3>
				<p>{{ $t('changes-to-the-privacy-policy-text') }}</p>
			</li>
			<li>
				<h3 class="font-semibold">{{ $t('Contact Information') }}</h3>
				<p>{{ $t('contact-information-text') }}</p>
			</li>
		</ol>
	</div>
</template>

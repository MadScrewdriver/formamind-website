<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('Mobile App Development | Build Custom iOS and Android Apps - Formamind'),
	ogTitle: t('Mobile App Development | Build Custom iOS and Android Apps - Formamind'),
	description: t(
		'Formamind: Need a mobile app? We develop custom apps for iOS and Android that are user-friendly, secure, and optimized for performance. Get expert help from design to launch.'
	),
	ogDescription: t(
		'Formamind: Need a mobile app? We develop custom apps for iOS and Android that are user-friendly, secure, and optimized for performance. Get expert help from design to launch.'
	),
	ogImage: 'https://i.ibb.co/4tGvK1f/card.png',
	twitterCard: 'summary_large_image',
});
</script>
<template>
	<div class="pt-[5rem] flex flex-col h-max">
		<div class="2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw] w-full">
			<h1
				data-aos="fade-up"
				data-aos-offset="0"
				class="2xs:text-base lg:text-lg w-full break-words text-balance font-semibold relative z-20 before:bg-logoOutline before:bg-no-repeat before:bg-contain 2xs:before:[background-position-x:40%] 2xl:before:[background-position-x:50rem] before:absolute before:w-full before:h-full before:left-0 before:-z-10"
			>
				{{ t('Mobile Applications') }}
			</h1>
		</div>
		<div
			data-aos="fade-up"
			data-aos-offset="0"
			class="text-base py-[4rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw]"
		>
			<ul class="flex flex-col w-full h-max gap-[6rem] list-inside">
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						1. {{ t('Thinking About a Mobile App but Not Sure Where to Start?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('What platform should you choose: iOS, Android, or both?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you ensure your app is user-friendly and intuitive?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Concerned about app store requirements and approvals?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Struggling with Mobile App Development Challenges?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('Which programming language or framework is right for your app?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can you ensure your app performs well across different devices?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about app security and data privacy?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Need a Trusted Partner to Bring Your Mobile App Vision to Life?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you turn your ideas into a fully functional mobile app?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Who can handle both front-end and back-end development for mobile?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Looking for ongoing support and updates after launch?') }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

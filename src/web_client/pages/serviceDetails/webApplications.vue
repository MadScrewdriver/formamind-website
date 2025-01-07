<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('Web Application Development | Build Custom Web Apps - Formamind'),
	ogTitle: t('Web Application Development | Build Custom Web Apps - Formamind'),
	description: t(
		'Formamind: Need a web application? We develop custom web apps with a focus on scalability, security, and performance. Get expert support from start to finish.'
	),
	ogDescription: t(
		'Formamind: Need a web application? We develop custom web apps with a focus on scalability, security, and performance. Get expert support from start to finish.'
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
				{{ t('Web Applications') }}
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
						1. {{ t('Need a Web Application but Don’t Know Where to Begin?') }}
					</p>
					<div class="flex flex-col pl-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">{{ t('What technologies should you use?') }}</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you ensure scalability and security?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Stuck choosing between front-end and back-end frameworks?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Confused by the Complexities of Web Development?') }}
					</p>
					<div class="flex flex-col pl-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('Which programming language is best for your business?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you optimize performance across devices?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about data management and integration?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Looking for a Reliable Partner to Build Your Web Application?') }}
					</p>
					<div class="flex flex-col pl-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can you transform your ideas into a functional app?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Who can you trust to manage both front-end and back-end development?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Need post-launch support and ongoing maintenance?') }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

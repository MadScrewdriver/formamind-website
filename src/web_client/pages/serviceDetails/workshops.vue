<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t(
		'Educational and Corporate Workshops | Customized Training for Schools and Businesses - Formamind'
	),
	ogTitle: t(
		'Educational and Corporate Workshops | Customized Training for Schools and Businesses - Formamind'
	),
	description: t(
		'Formamind offers customized workshops for schools and businesses. Our expert-led sessions cover topics like web development, AI, and STEM, providing practical, hands-on training for students and professionals.'
	),
	ogDescription: t(
		'Formamind offers customized workshops for schools and businesses. Our expert-led sessions cover topics like web development, AI, and STEM, providing practical, hands-on training for students and professionals.'
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
				{{ t('Workshops') }}
			</h1>
		</div>
		<div
			data-aos="fade-up"
			data-aos-offset="0"
			class="text-base py-[4rem] 2xs:px-[2rem] lg:px-[12rem] 2xl:px-[15vw]"
		>
			<ul class="flex flex-col w-full h-max gap-[6rem] list-inside">
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-black font-semibold">
						1.
						{{
							t(
								'Struggling to find the right expert to deliver a lecture or workshop on a specialized topic?'
							)
						}}
					</p>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-base text-black font-semibold">
						2.
						{{ t('Need something customized for your team or students on emerging technologies?') }}
					</p>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-base text-black font-semibold">
						3.
						{{
							t(
								'Looking for hands-on sessions that teach real-world skills in web development, AI, or other areas?'
							)
						}}
					</p>
				</li>
				<li>
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						{{ t('Workshops Offered by Formamind') }}
					</p>
					<ul class="2xs:text-sm lg:text-base flex flex-col pl-[4rem] gap-[2rem] list-disc">
						<li>{{ t('Introduction to Algorithmics') }}</li>
						<li>{{ t('Advanced Algorithmics') }}</li>
						<li>{{ t('Introduction to Machine Learning and Artificial Intelligence') }}</li>
						<li>{{ t('Ethics in Computer Science') }}</li>
						<li>{{ t('Introduction to Web Design and Web Development') }}</li>
						<li>{{ t('Modern Techniques in Web Development') }}</li>
						<li>{{ t('School Course Prelections') }}</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

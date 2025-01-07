<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('Desktop Application Development | Build Custom Desktop Apps - Formamind'),
	ogTitle: t('Desktop Application Development | Build Custom Desktop Apps - Formamind'),
	description: t(
		'Formamind: Need a desktop application? We develop custom desktop software for Windows, macOS, and Linux. Ensure compatibility, performance, and a great user experience.'
	),
	ogDescription: t(
		'Formamind: Need a desktop application? We develop custom desktop software for Windows, macOS, and Linux. Ensure compatibility, performance, and a great user experience.'
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
				{{ t('Desktop Applications') }}
			</h1>
		</div>
		<div
			data-aos="fade-up"
			data-aos-offset="0"
			class="text-base py-[4rem] 2xs:px-[2rem] 2xl:px-[15vw] lg:px-[12rem]"
		>
			<ul class="flex flex-col w-full h-max gap-[6rem] list-inside">
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						1. {{ t('Considering a Desktop Application but Unsure How to Proceed?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('What operating system should you target: Windows, macOS, Linux, or all?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can you ensure a seamless user experience across different devices?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Concerned about software installation and compatibility issues?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Facing Hurdles in Desktop Application Development?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{
								t('Which programming language or framework is best suited for your desktop app?')
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you optimize performance and resource usage on different systems?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about software updates, patches, and version control?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Seeking a Reliable Team to Develop Your Desktop Application?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can you turn your desktop software idea into a reality?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Who can manage both the UI/UX design and core development efficiently?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Need long-term support and maintenance for your application?') }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

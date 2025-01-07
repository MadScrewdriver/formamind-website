<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t('ERP Systems for Business | Custom Enterprise Resource Planning Software - Formamind'),
	ogTitle: t('ERP Systems for Business | Custom Enterprise Resource Planning Software - Formamind'),
	description: t(
		'Formamind: Looking to set up or upgrade your ERP system? We specialize in Enterprise Resource Planning software that streamlines business operations, with custom solutions and ongoing support.'
	),
	ogDescription: t(
		'Formamind: Looking to set up or upgrade your ERP system? We specialize in Enterprise Resource Planning software that streamlines business operations, with custom solutions and ongoing support.'
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
				{{ t('ERP Systems') }}
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
						1. {{ t('Thinking About Implementing an ERP System but Unsure Where to Start?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('How can an ERP system improve efficiency across your organization?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('What should you consider when choosing an ERP solution for your business?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Worried about the cost and complexity of ERP implementation?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						2. {{ t('Facing Challenges with Your Current ERP System?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{ t('Is your ERP system outdated and struggling to meet your needs?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('How do you ensure seamless integration with other business tools?') }}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Concerned about user adoption and training for your ERP system?') }}
						</p>
					</div>
				</li>
				<li class="flex flex-col gap-[2rem]">
					<p class="2xs:text-sm lg:text-base text-secondary font-semibold">
						3. {{ t('Looking for a Reliable Partner to Implement or Upgrade Your ERP System?') }}
					</p>
					<div class="flex flex-col px-[4rem] gap-[2rem]">
						<p class="2xs:text-sm lg:text-base">
							{{
								t('How do you select the right ERP modules for your specific business processes?')
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{
								t('Who can help with both the implementation and customization of your ERP system?')
							}}
						</p>
						<p class="2xs:text-sm lg:text-base">
							{{ t('Need ongoing support to optimize and maintain your ERP solution?') }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import Cookie from '@/assets/icons/cookie.svg'
	const isCookieAccepted = ref<boolean>(true)
	const localePath = useLocalePath();
	onMounted(() => {
		const savedCookie = localStorage.getItem('isCookieAccepted');
		if (savedCookie) {
			isCookieAccepted.value = JSON.parse(savedCookie.toLowerCase())
		}
		else {
			isCookieAccepted.value = false
		}
	});
	function acceptCookies() {
		isCookieAccepted.value = true
		localStorage.setItem("isCookieAccepted", isCookieAccepted.value.toString())	
	}
	
</script>

<template>
	<Transition
			enter-active-class="duration-[0.8s] before:transition-all before:duration-[1.5s] before:ease-out ease-out"
			enter-from-class="transform origin-top-left translate-x-[100%] before:-rotate-[5deg] before:scale-y-[1.5] .enter-from--list opacity-0"
			enter-to-class="translate-x-[0%] before:rotate-[0] before:scale-y-[1] .enter-to--list opacity-100"
			leave-active-class="duration-[0.8s] linear"
			leave-from-class="translate-x-[0%] opacity-100"
			leave-to-class="transform translate-x-[100%] opacity-0"
		>
		<div 
			v-if="!isCookieAccepted" 
			class = "fixed z-[100] bottom-[4rem] h-[25rem] rounded-xl p-[1rem] grid grid-rows-[auto_auto]
			2xl:w-[40vw] 2xl:left-[30vw]
			xl:w-[50vw] xl:left-[25vw]
			lg:w-[60vw] lg:left-[20vw] lg:h-[26rem]
			md:w-[70vw] md:left-[15vw] 
			xs:w-[90vw] xs:left-[5vw] 
			2xs:w-[97vw] 2xs:left-[0.5vw] 2xs:h-[27rem]
			bg-white border-primary border-4 shadow-xl overflow-hidden text-black"
		>
			<Cookie class="absolute z-[99] h-[50%] bottom-0 left-0 -translate-x-[15%] translate-y-[15%]" />
			<div class="relative z-[102] grid place-content-center text-xs md:text-sm">
				<p
					class="flex-1 flex justify-center items-center font-semibold text-sm lg:text-base"
				>
					{{ $t('We use cookies') }}
				</p>
				<p class="text-center py-[2rem] text-black">
					{{ $t('We use only necessary cookies for this website to function. Read about it in our') }}
					<nuxt-link :to="localePath('/privacyPolicy')" class="text-primary underline text-secondary" aria-label="privacy policy">{{
								$t('cookie privacy policy')
							}}
					</nuxt-link>.
				</p>

			</div>
			<div class="relative z-[102] w-full object-right-bottom flex flex-row justify-end">
				<button
					class="bg-blueBtnBg w-[16rem] h-[6rem] bg-contain bg-no-repeat bg-center text-sm text-white"
					@click="acceptCookies"
				>
				{{ $t('OK') }}
				</button>
			</div>
		</div>
	</Transition>
</template>

<style scoped lang="scss">
*{
  box-sizing:border-box;
}

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
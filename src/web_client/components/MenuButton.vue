<script setup lang="ts">
import { useGlobalStore } from '~/store/globalStore';

const { setMenuVisibility } = useGlobalStore();
const isMenuVisible = computed(() => useGlobalStore().isMenuVisible);

//const viewport = useViewport()
//const isDesktop = computed(()=>['desktop', 'desktopMedium', 'desktopWide'].includes(viewport.breakpoint))

const handleClick = () => {
	setMenuVisibility(!isMenuVisible.value);
	document.getElementsByTagName('body')[0].style.overflowY = isMenuVisible.value
		? 'hidden'
		: 'unset';
	document.documentElement.style.background = isMenuVisible.value ? '#0020FF' : '#E3F2FF';
};
</script>
<template>
	<div class="aspect-square flex flex-col justify-between cursor-pointer" @click="handleClick">
		<div
			class="h-[15%] w-full rounded-lg transition-all origin-left"
			:class="{
				'rotate-45 -translate-y-1/2 scale-x-[1.41] bg-bg': isMenuVisible,
				'bg-black': !isMenuVisible,
			}"
		/>
		<div
			class="h-[15%] w-full bg-black rounded-lg transition-all"
			:class="{ 'opacity-0': isMenuVisible }"
		/>
		<div
			class="h-[15%] w-full rounded-lg transition-all origin-left"
			:class="{
				'-rotate-45 translate-y-1/2 scale-x-[1.41] bg-bg': isMenuVisible,
				'bg-black': !isMenuVisible,
			}"
		/>
	</div>
</template>

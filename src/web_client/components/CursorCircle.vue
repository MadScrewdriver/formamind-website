<script setup lang="ts">
const [x, y] = [ref(), ref()];

const mousemoveHander = (event: MouseEvent) => {
	[x.value, y.value] = [event.pageX - 40, event.pageY - 40];
};

document.addEventListener('mousemove', mousemoveHander);
window.addEventListener('load', () => {});
</script>
<template>
	<div
		class="w-[8rem] h-[8rem] backdrop-grayscale backdrop-sepia backdrop-saturate-[500%] backdrop-hue-rotate-[-15deg] bg-[rgba(255,185,106,0.2)] absolute z-50 rounded-full pointer-events-none"
		:style="{ marginTop: y + 'px', marginLeft: x + 'px' }"
	/>
</template>

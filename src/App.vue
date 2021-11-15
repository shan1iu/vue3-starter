<!-- App组件 -->
<template>
	<header>
		<div>
			<router-link to="/" class="mr-1 underline">Home</router-link>
			<router-link to="/about" class="underline">About</router-link>
		</div>
	</header>
	<router-view />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>

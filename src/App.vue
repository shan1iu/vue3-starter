<!-- App组件 -->
<template>
	<header>
		<div>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</div>
	</header>
	<router-view />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>

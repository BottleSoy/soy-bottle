<template>
	<router-view v-if="isRouterAlive"/>
</template>

<script>
export default {
	name: 'App',
	provide() {
		return {
			reload: this.reload,
		}
	},
	data: () => ({
		isRouterAlive: true
	}),
	methods: {
		reload() {
			this.isRouterAlive = false
			this.$nextTick(function () {
				this.isRouterAlive = true
			})
		}
	}
}
</script>

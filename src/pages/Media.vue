<!--社交媒体-->
<template>
	<div id="app">
		<NavBar allblack="true"></NavBar>
		<div class="top-space"></div>
		<PageFooter></PageFooter>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter";

export default {
	name: "Media",
	components: {
		PageFooter,
		NavBar
	},
	mounted() {
		document.title = "soy-bottle 社交账号"

		this.jq(".top-space").css("margin-top",this.jq("nav").outerHeight())
	}
}
</script>

<style scoped>

</style>
<template>
	<div id="app">
		<NavBar></NavBar>
		<PageHeader src="wishes" :title="title" :lores="lores"></PageHeader>
		<el-header>
			<h1></h1>
		</el-header>
		<el-container>

			<el-row>
				<el-input></el-input>
			</el-row>

		</el-container>
		<PageFooter></PageFooter>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default {
	name: "Wishes",
	components: {
		PageFooter,
		PageHeader,
		NavBar
	}, data: () => ({
		title: "星语心愿",
		lores: [
			"星空给予人们无限遐想，美好的心愿在此播种"
		]
	}), mounted() {
		document.title = "soy-bottle 星语心愿"

		this.jq.ajax({
			url: "./api/wishes/start",
			success(data) {

			}, error() {

			}
		})
	}
}
</script>

<style scoped>

</style>
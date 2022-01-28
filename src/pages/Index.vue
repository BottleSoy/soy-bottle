<template>
	<div id="app">
		<NavBar :title="title" :lores="lores"/>
		<PageHeader src="index" :title="title" :lores="lores"/>

		<PageFooter/>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default {
	name: "Index",
	components: {
		PageFooter,
		PageHeader,
		NavBar
	}, data() {
		return {
			title: this.lang["page.index.title"],
			lores: this.lang["page.index.lores"]
		};
	}, mounted() {
		document.title = this.lang["page.index.doc_title"]
	}
}
</script>

<style scoped>
#index-select {

}

#index-select > span {
	display: block;
	text-align: center;
	font-size: 2em;
	margin: 40px;
}

.select-pane {
	display: flex;
}

.el-card {
	flex: 1;
	cursor: pointer;
	margin: 10% 40px;
	min-height: 100px;
	text-align: center;
}

.card-comment {
	font-size: 12px;
}

@media only screen and (max-width: 768px) {
	.select-pane {
		display: block;
	}
}
</style>
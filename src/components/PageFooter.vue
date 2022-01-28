<template>
	<div id="footer">
		<div class="line"></div>
		<span>&copy;2021-2022 soy-bottle</span>
		<span>&nbsp;</span>
		<span class="small"><a target="_blank" href="https://github.com/mini-soy/soy-bottle">{{lang["footer.opensource"]}}</a></span>
	</div>
</template>

<script>
export default {
	name: "PageFooter",
	data() {
		return {
			lang: this.lang,
			agent: navigator.userAgent
		}
	}
}
</script>

<style scoped>
#footer {
	background-color: #f0f0f0;
	background-image: url("../assets/footbg.png");
	display: flex;
	padding: 4rem;
	align-items: center;
	flex-direction: column;
}

.line {
	display: block;
	width: 100%;
	height: 1px;
	color: gray;
}

.small {
	font-size: 0.8rem;
}
</style>
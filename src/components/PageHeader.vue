<template>
	<div id="header" :style="`background-image: url('./banners/${src}.png')`">
		<div class="mask"></div>
		<div class="header-content">
			<h1>{{ title }}</h1>
			<template v-for="lore in lores">
				<span :class="lore_class">{{ lore }}</span>
			</template>
		</div>
		<div class="down-div">
			<div class="down-arrow" @click="down">↓</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PageHeader",
	data() {
		return {
			lore_class: "lore lore_" + this.lang.id
		}
	},
	props: {
		src: "",
		title: "",
		lores: [],
	}, mounted() {
		setTimeout(() => {
			this.jq("#header .down-arrow").css({
				top: 0,
				opacity: 1
			});
		}, 1000)
	}, methods: {
		down() {
			window.scrollTo({
				top: window.innerHeight - this.jq("nav").outerHeight(),
				behavior: "smooth"
			})
		}
	}
}
</script>

<style scoped>
.header-content {
	position: absolute;
	height: 95%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.down-div {
	position: absolute;
	top: calc(95% - 40px);
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}


.down-arrow {
	transition: top 1s, opacity 1s;
	top: -40px;
	position: relative;
	display: block;
	font-size: 40px;
	user-select: none;
	cursor: pointer;
	color: white;
	opacity: 0;
}

h1, span {
	transition: font-size 0.5s;
	top: 0;
	position: relative;
	color: white;
	user-select: none;
	font-size: 48px;
	animation: 1s h1-in ease-out;
}

.lore {
	font-family: 华文新魏, serif;
	font-size: 1.4rem;
}

.lore_zh_hk {
	font-family: 楷体, serif;
	font-size: 1.4rem;
}

.mask {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}

#header {
	position: relative;
	background-size: cover;
	height: 100vh;
}

@keyframes h1-in {
	from {
		opacity: 0;
		top: -40px;
	}
	to {
		top: 0;
		opacity: 1;
	}
}

@media screen and (max-width: 768px) {
	h1 {
		font-size: 32px;
	}

	span {
		font-size: 18px;
	}
}
</style>

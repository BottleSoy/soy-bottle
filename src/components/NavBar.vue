<!--导航栏-->
<template>
	<nav :class="(allblack || scrolled)?'black':''">
		<img src="../assets/logo.png" alt="soy-bottle"/>
		<div class="flex-max"></div>
		<ul>
			<li>
				<router-link to="/">{{lang["nav.title.index"]}}</router-link>
			</li>
			<li>
				<router-link to="/wishes">{{lang["nav.title.wishes"]}}</router-link>
			</li>
			<li>
				<router-link to="/media">{{lang["nav.title.accounts"]}}</router-link>
			</li>
			<li class="lang_li">
				<span>{{ lang["signal"] }} <small>▼</small></span>
				<div class="lang_mask">
					<ol class="lang_window">
						<li v-for="(a_lang,langkey) in langs">
							<span @click="setLang(langkey)">{{ a_lang["signal"] }}</span>
						</li>
					</ol>
				</div>
			</li>
		</ul>
	</nav>
</template>

<script>
import language from "@/lang/language";

console.log(language.languages)
export default {
	name: "NavBar",
	inject: ['reload'],
	props: {
		allblack: false,
	},
	data() {
		return {
			langs: language.languages,
			lang: this.lang,
			scrolled: false
		}
	},
	methods: {
		setLang(lang) {
			language.setLanguage(lang, this);
		}
	},
	mounted() {
		this.$data.scrolled = window.scrollY >= window.innerHeight - 250;
		this.jq(window).scroll(() => {
			this.$data.scrolled = window.scrollY >= window.innerHeight - 250;
		});
	}
}
</script>

<style scoped>

.lang_window {
	opacity: 0;
	overflow: hidden;
	text-align: center;
	position: absolute;
	top: -15px;
	left: -30px;
	width: calc(100% + 2 * 15px);
	transition: opacity 0.5s, top 0.5s, height 0.5s;
	padding: 15px;
}

.lang_mask {
	position: relative;
	width: 100%;
	height: 0;

}

.lang_window::before {
	content: "";
	position: absolute;
	top: 15px;
	left: 15px;
	opacity: 0.4;
	width: calc(100% - 30px);
	height: calc(100% - 30px);
	background: black;
	border-radius: 4px;
	z-index: -1;
}

.lang_window > li {
	padding: 6px 0;
}

.lang_li {
	position: relative;
}

.lang_li:hover .lang_window {
	opacity: 1;
	top: 0;
}

.black {
	background-color: black;
	box-shadow: black 0 2px 5px;
}

ul {
	margin: auto;

	align-self: end;
	display: flex;
}

li {
	padding: 0 15px;
}

a, span, i {
	cursor: pointer;
	color: white;
	font-style: normal;
	text-decoration: none;
}

img {
	height: max-content;
}

nav {
	top: 0;
	transition: padding 0.5s, background-color 0.2s, box-shadow 0.2s;
	z-index: 1048576;
	position: fixed;
	box-sizing: border-box;
	width: 100vw;
	padding: 1rem 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

@media only screen and (max-width: 1366px) {
	nav {
		padding: .5rem 3rem;
		font-size: 0.8rem;
	}

	.lang_li:hover .lang_window {
		opacity: 1;
		top: -5px;
	}
}

@media only screen and (max-width: 768px) {
	nav {
		padding: .3rem 1.4rem;
		font-size: 0.8rem;
	}

	.lang_li:hover .lang_window {
		opacity: 1;
		top: -8px;
	}
}
</style>

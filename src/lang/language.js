/**
 * 语言js，用于根据语言设置来获取和显示语言
 */
import Cookies from "js-cookie";
import zh_cn from "@/lang/zh_cn";
import zh_hk from "@/lang/zh_hk";
import en_us from "@/lang/en_us";
import Vue from "vue";

const languages = {
	zh_cn,
	zh_hk,
	en_us,
};

export default {
	languages,
	getLanguage() {
		let language = Cookies.get("language");
		if (language == null) {
			console.log("[env]", window.navigator.language);
			for (let i = 0; i < window.navigator.languages.length; i++) {
				const e = window.navigator.languages[i];
				let tempLang = e.replace("-", "_").toLowerCase()
				if (languages[tempLang]) {
					language = tempLang
					break;
				}
			}
		}
		console.log("[lang]", language);
		return languages[language];
	},
	setLanguage(lang, vue) {
		Cookies.set("language", lang, {
			sameSite: "Lax",
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 100)
		});
		Vue.prototype.lang = languages[lang];
		if (vue) vue.reload()

	}
}
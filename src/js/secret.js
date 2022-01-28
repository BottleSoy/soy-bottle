import $ from "jquery";

export default {
	/**
	 * 访问秘密的内容
	 * @param secretCode 秘密代码~(不公开)
	 * @param secretPath 秘密路径~(公开)
	 * @param callback 回调函数
	 */
	loadSecretPage(secretCode, secretPath, callback) {
		$.ajax(`./secret/${secretCode}/${secretPath}`, {
			success: (data) => callback(0, data),
			error: () => callback(-1, "")
		})
	}

}
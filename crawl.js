const jsdom = require('jsdom');
const {JSDOM} = jsdom;

function getURLsFromHTML(HTMLbody,baseURL){
	const dom = new JSDOM(HTMLbody);
	return dom.window.document.querySelector("p").textContent;

}
function normalizeURL(stringURL){
	const urlObj = new URL(stringURL);
	const hostPath =`${urlObj.hostname}${urlObj.pathname}`; 
	if(hostPath.length > 0 && hostPath.slice(-1) == '/'){
		return hostPath.slice(0, -1);
	}
	return hostPath;
}

module.exports = {
	normalizeURL,
	getURLsFromHTML
}

const {normalizeURL, getURLsFromHTML} = require('./crawl.js');
const {test, expect} = require('@jest/globals');


test("getURLsFromHTML get text from element", ()=>{
	const HTMLbodyInput = `<html>
		<body>
			<p>Hello Lucas, no to hard to use qwerty ?</p>
		</body>
	</html>`;
	const baseURLInput = "http://localhost:8900";
	const expected ="Hello Lucas, no to hard to use qwerty ?"; 
	const actual = getURLsFromHTML(HTMLbodyInput, baseURLInput);
	console.log({expected});
	console.log({actual});
	expect(actual).toEqual(expected);
})

test('normalizeURL strip protocol', ()=> {
	const input = 'https://blog.boot.dev/path';
	const actual = normalizeURL(input)
	const expected = 'blog.boot.dev/path';
	console.log({expected});
	console.log({actual});
	expect(actual).toEqual(expected);
	
});
test('normalizeURL strip trailing slash', ()=> {
	const input = 'https://blog.boot.dev/path/';
	const actual = normalizeURL(input)
	const expected = 'blog.boot.dev/path';
	console.log({expected});
	console.log({actual});
	expect(actual).toEqual(expected);
	
});
test('normalizeURL strip http', ()=> {
	const input = 'http://BLOG.boot.dev/path';
	const actual = normalizeURL(input)
	const expected = 'blog.boot.dev/path';
	console.log({expected});
	console.log({actual});
	expect(actual).toEqual(expected);
	
});
test('getURLsFromHTML', () => {
	const inputBaseURL = '';
	const inputHtmlBody = '';
});

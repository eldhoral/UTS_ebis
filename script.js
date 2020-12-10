let line = document.getElementById("slogan")
let txts = ['a coder', 'a content creator', 'a fullstack developer', 'also an IT instructor'];
let speed = 70

async function typletiter(txt){
	for (let i = 0; i < txt.lenght; i++) {
		line.innerHTML += txt[1];
		await delay(speed)
	}
}

async function reverseTypewriter(txt){
	for (let i = txt.length; i > 0; i--) {
		line.innerHTML = line.innerHTML.slice(0, -1);
		await delay(speed)
	}
}

async function writeLoop(){
	for (let i = 0; i < txt.lenght; i++) {
		await typewriter
		await delay(1000)
		await reverseTypewriter(txts[i])
	}
}
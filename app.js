//Get UI

const languages = ["Nodejs","Reactjs","Vuejs","Laravel"];
const colors = ["red","skyblue","violet","yellow"];
const gettxtani = document.querySelector('.txtani');
const gettxtlights = document.querySelectorAll('.text-light'); //Nodejs
// console.log(languages);
// console.log(languages[0]);

// console.log(languages.indexOf("Reactjs")); //1
// console.log(languages.indexOf("Laravel")); //3
// console.log(languages.indexOf("laravel")); //-1

// console.log(colors[languages.indexOf("Reactjs")]); //skyblue
// console.log(colors[languages.indexOf("Vuejs")]); //violet

function* generator(){
	var index = 0;

	while(true){
		yield index++;

		if(index > 3){
			index = 0;
		}
	}
}

const testnumber = generator();
// console.log(testnumber.next()); //(value: 0, done: false)
// console.log(testnumber.next().value); //0	0
// console.log(testnumber.next().value); //1	1
// console.log(testnumber.next().value); //2	2
// console.log(testnumber.next().value); //3	3
// console.log(testnumber.next().value); //4	0
// console.log(testnumber.next().value); //5	1

// console.log(languages[testnumber.next().value]); //Nodejs
// console.log(languages[testnumber.next().value]); //Reactjs
// console.log(languages[testnumber.next().value]); //Vuejs
// console.log(languages[testnumber.next().value]); //Laravel
// console.log(languages[testnumber.next().value]); //Nodejs
// console.log(languages[testnumber.next().value]); //Reactjs

function showwords(word){
	// console.log(word); //Nodejs
	// console.log(word[0]); //N


	let x = 0;

	gettxtani.innerHTML = '';
	gettxtani.classList.add(colors[languages.indexOf(word)]);

	// gettxtani.innerHTML = word;
	// gettxtani.innerHTML = word[0]; //N
	// gettxtani.innerHTML = word[1]; //No
	// gettxtani.innerHTML = word[2]; //Nod

	let showinterval = setInterval(function(){

		if(x >= word.length){
			clearInterval(showinterval);
			delwords();
		}else{
			gettxtani.innerHTML += word[x];
			x++;
		}
	},200);

}

function delwords(){

	let getword = gettxtani.innerHTML;
	//console.log(getword); //Nodejs

	let getlastidx = getword.length-1;
	//console.log(getlastidx); //5

	//Nodejs 0 1 2 3 4 5 
	//Nodej  0 1 2 3 4
	//Node   0 1 2 3
	//Nod    0 1 2
	//No     0 1
	//N      0

	let delinterval = setInterval(function(){

		if(getlastidx >=0){
			gettxtani.innerHTML = gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length-1);
			getlastidx--;
		}else{
			//remove old color
			gettxtani.classList.remove(colors[languages.indexOf(getword)]);

			//get new language
			showwords(languages[testnumber.next().value]);
			clearInterval(delinterval);
		}
	},200);
}

showwords(languages[testnumber.next().value]); //showwords("Nodejs")

gettxtlights.forEach(function(gettxtlight){
	//console.log(gettxtlight);

	let arrtexts = gettxtlight.textContent.split("");
	//console.log(arrtexts);

	gettxtlight.textContent = "";

	arrtexts.forEach(function(arrtext,idx){
		//console.log(arrtext);
		//console.log(idx);

		let newem = document.createElement('em');

		newem.textContent = arrtext;
		//console.log(newem);
		newem.style.animationDelay = `${idx * 0.5}s`;

		gettxtlight.append(newem);
	});
});



// const form=document.querySelector('.keynote-button');
const title=document.querySelector('.title');
// // form.addEventListener('mouseover',run);
// // form.addEventListener('mouseout',run);
// // form.addEventListener('onmouseenter',run);
// // form.addEventListener('onmouseleave',run);
// // form.addEventListener('click',run);
// // form.addEventListener('dblclick',run);
// // form.addEventListener('mousedown',run);
// form.addEventListener('mouseup',run);


// // function run(e){
// // 	e.preventDefault();
// // 	title.textContent='Robiya Jinni';

	
// // }

const form_control=document.querySelector('.form-inline');
// form_control.addEventListener('keyup',run);
// form_control.addEventListener('keydown',run);
// form_control.addEventListener('input',run);

// function run(e){
	
// 	e.preventDefault();
// 	const letter=form_control.value;
// 	localStorage.setItem("help", letter);
// 	alert("the letter is saved");

// }

const numbers=[1,6,4,3,4];
console.log(JSON.parse(JSON.stringify(numbers)));

const Mavluda={
	name:"Mavluda",
	age:21
}

function Person(name,dob){
	this.name=name;
	this.dob=new Date(dob);
	this.calculate_Age=function(){
		var minus=Date.now()-this.dob.getTime();
		var age=new Date(minus);
		return Math.abs(age.getFullYear()-1970);
	}
	console.log(this.calculate_Age());
}

const robiya=new Person("Robiya", '10-05-2003');
const alisher=new Person("Alisher", '03-04-1996');

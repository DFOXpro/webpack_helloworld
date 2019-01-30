/*
 *
 */

// Test modern static import ... the reason of webpack
import React from 'react';
import ReactDOM from 'react-dom';
// import {RegeneratorRuntime} from 'babel-polyfill'; // for babel env


async function test_ESNext_compativility() {
	// Test clases
	class Asd {
		get qwe() {
			console.log('Asd.qwe')
		}
		static zxc() {
			console.log('Asd.qwe')
		}
	}
	const a = new Asd;
	Asd.zxc();
	a.qwe;

	// Test let, const, fatArrow, Promise, async & await, fast object equals
	let y = await new Promise(resolve => {
		setTimeout(() => {
			resolve(';D');
		}, 2000);
	});
	console.log(y); // prints after 2 seconds: ';D'
	let $button = document.getElementById('button');
	$button.addEventListener(
		'click',
		async ()=> {
			// Test dynamic import
			const {B} = await import('./app/b.js');
			B.zxc();
			(new B).qwe;
		}
	);
	$button.classList.remove('hide');
};
test_ESNext_compativility();

function reactTest() {
	function ReactTagTest() {
		return (
			<b className = "react_tag_test">
				<span>C'est un élément généré par JSX</span>
			</b>
		);
	}
	const render = () => {
		ReactDOM.render(
			<ReactTagTest />,
			document.getElementById('root')
		);
	}
	render();
};
reactTest();

// Test web and service workers
async function workersTest() {
	if (window.Worker) {
		const {MyWebWorker} = await import("./web_workers.js");
		console.log(MyWebWorker);
		let wWorker = new MyWebWorker();
		wWorker.postMessage("b");
		wWorker.onmessage = (response) => {
			console.log('Web worker answer', response);
		};
	}
};
workersTest();

console.log('Zorro + Platzi Webpack Project');

let method = "GET";
//let url = 'httpd://edu.gplweb.pl/res/web-app-ajax/test.txt';
//let url = 'http://localhot/ajax/test.txt';
let url = 'http://localhot/ajax/firma.json';
let data = null;
let getBundle = ()=> {
	console.log("hello AJAX");
	//Stworzenie obiektu do komunikacji
	const xhr = new XMLHttpRequest();
	//ustawienie formatu danych odpowiedzi
	xhr.responseType = 'json'; //Domyslny jest text

	xhr.open(method,url,async=true); 
	xhr.send(); 
	console.log(xhr.response);
	//..Wymagany nasluch zdarzenia
	xhr.addEventListener('readystatechange', (e)=>{
		if(xhr.readyState!==4){

			console.log(xhr.readyState);
		}
		if (xhr.readyState===4){
			if(xhr.status===200){
				console.log('są kalesonki są ');
				console.log(xhr);
			}
			if (xhr.status===404){
				console.log('zasób nieodnaleziony');
			}
			if (xhr.status===500){
				console.log('Serwer padl');
			}
			if (xhr.status===503) {
				console.log('Retry in 3, 2,1....');
			}
		}
	});
	xhr.addEventListener('load', (e)=>{
		console.log(xhr.response);
		data = xhr.response;
		if(data!==null){
			let i =1;
			let imeInt = 1000;
			console.log(i);
			let t1 = setInterval(function(){
				if(i===data.length-1)
					clearInterval(t1);
				insItem(i++, data[i]);
				
			}, timeInt);
			//date.forEach(item => insItem(i++,item));
		}
	});
}
let insItem = (i, item)=>{
	let main = document.querySelector('#main');
	let tpl = document.querySelector('#rowTplt');
	let r2 = tp.content.cloneNode(true);
	let rid = r2.querySelector('#row-');
		rid.id = rid.id+i;
	cells = r2.querySelectorAll('p');
	cells[0].textContent = i;
	cells[1].textContent = item.itmie;
	cells[2].textContent = item.nazwisko;
	cells[3].textContent = item.stanowisko;
	main.appendChild(r2);
	//addNavItem(i); //Uzupelniac menu nawigacyjne znacznikami a href="=row-1" itd
}	

window.addEventListener('load', getBundle, false);

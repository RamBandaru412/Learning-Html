let c = 0;
function incr(){
	c++;
	document.getElementById('para').textContent=c;
	if(c%2==0) {
		document.getElementById('type').textContent="Even";
	} else {
		document.getElementById('type').textContent="Odd";
	}
}
function decr() {
	if(c>0) {
	c--;
	document.getElementById('para').textContent=c;
	if(c%2!=0) {
		document.getElementById('type').textContent="Odd";
	} else {
		document.getElementById('type').textContent="Even";
	}

	}
}
function reset() {
	c=0;
	document.getElementById('para').textContent=c;
	document.getElementById('type').textContent='Even';
}
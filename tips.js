//new button creation
var btn = document.createElement("BUTTON");
var pic = document.createElement("div");
pic.id='logo';
var btnhtml = '<img id="tipspic" src="';
btnhtml+= chrome.extension.getURL('button.png');
btnhtml+= '">';
console.log(btnhtml);
pic.innerHTML=btnhtml;
//new button injection
document.getElementById("subtotals").insertBefore(pic,subtotals.firstChild);

//dropdown creation
var html = document.createElement('a');
var html2 = '';
	html2+= '<div class="dropdown">';
	html2+= '<img id="dropdown" src="'+chrome.extension.getURL("dropdownright.png")+'">';
	//html2+= 'Percentage to tip. <br>';
	html2+= '<button id="p5" type="submit" value="0.05">5%</button>';
	html2+= '<button id="p10" type="submit" value="0.10">10%</button>';
	html2+= '<button id="p15" type="submit" value="0.15">15%</button>';
	html2+= '<button id="p20" type="submit" value="0.20">20%</button>';
	html2+= '<br>Current percent: <input id="txtval" size="3" value="0" readonly></br>';
	html2+= 'Total Amount: <input id="total" size="6" value="" style="margin-top: 6%;"readonly><br>';
	html2+= '<button id="add" type="submit"> Yes, add tips to my future</button> <br> </div>';
html.innerHTML=html2;



pic.onclick = function(){
    btn.innerHTML = "Tips!";
	document.getElementById("logo").appendChild(html);
	setClickHandlers ();
	//window.open("test.html","menubar=1,resizable=1,width=350,height=250");	
}

var val=0;
var setClickHandlers = function(){
document.getElementById("p5").onclick = function(){
    document.getElementById("txtval").value = document.getElementById("p5").value;
    val = document.getElementById("txtval").value;
    console.log("value is " +val)
	getTip();
    document.getElementById("total").value = tip2;
	//style (these should probably be written into a function)
	if (p5.style.backgroundColor='#FF8422'){
		p5.style.backgroundColor='#FCEE21';	
		p10.style.backgroundColor='#FF8422';	
		p15.style.backgroundColor='#FF8422';
		p20.style.backgroundColor='#FF8422';
	}
	//showTip();
}
document.getElementById("p10").onclick = function(){
    document.getElementById("txtval").value = document.getElementById("p10").value;
    val = document.getElementById("txtval").value;
    console.log("value is " +val)
	getTip();
    document.getElementById("total").value = tip2;
	//Style
	if (p10.style.backgroundColor='#FF8422'){
		p10.style.backgroundColor='#FCEE21';	
		p5.style.backgroundColor='#FF8422';	
		p15.style.backgroundColor='#FF8422';
		p20.style.backgroundColor='#FF8422';
	}
}
document.getElementById("p15").onclick = function(){
    document.getElementById("txtval").value = document.getElementById("p15").value;
    val = document.getElementById("txtval").value;
    console.log("value is " +val)
	getTip();
    document.getElementById("total").value = tip2;
	//style
	if (p15.style.backgroundColor='#FF8422'){
		p15.style.backgroundColor='#FCEE21';	
		p10.style.backgroundColor='#FF8422';	
		p5.style.backgroundColor='#FF8422';
		p20.style.backgroundColor='#FF8422';
	}
}
document.getElementById("p20").onclick = function(){
    document.getElementById("txtval").value = document.getElementById("p20").value;
    val = document.getElementById("txtval").value;
    console.log("value is " +val)
	getTip();
    document.getElementById("total").value = tip2;
	//style
	if (p20.style.backgroundColor='#FF8422'){
		p20.style.backgroundColor='#FCEE21';	
		p10.style.backgroundColor='#FF8422';	
		p15.style.backgroundColor='#FF8422';
		p5.style.backgroundColor='#FF8422';
	}
}
};
var str = document.getElementById("subtotals-marketplace-spp-bottom");
for (var i = 0; i < str.childNodes.length; i++) {
    //console.log(i + str.childNodes[i]);
}
var num = str.childNodes[1].innerHTML.substring(49);
//console.log(str.childNodes[1].innerHTML.length)



var tip2; 
function getTip(){
var tip = (parseFloat(num)*val).toFixed(2); //round to 2 decimal places
tip2 = (parseFloat(tip) + parseFloat(num)).toFixed(2);
}
//edit amazon subtotal attempt
var subhack = document.createElement('b');
function showTip(){
	var insub =''
	insub+='<td class="a-text-left">';
	insub+='Tips';
	insub+='</td>';
	insub+='<td class="a-text-right a-align-bottom aok-nowrap">';
	insub+=tip2;
	insub+='</td>';
	subhack.innerHTML=insub;
	console.log(subhack);
	document.getElementsByClassName("order-summary-separator").appendChild(order-summary-separator.firstChild);
}


//old button creation/injection
//var btn = document.createElement("BUTTON");
//btn.id="bmain";
//var t = document.createTextNode("Check out with Tips");
//btn.appendChild(t);
//document.getElementById("subtotals").appendChild(btn);
  /*btn.onmouseover = function(){
	btn.style.backgroundColor='#FCEE21'
}
btn.onmouseout = function(){
	btn.style.backgroundColor='#FF8422'
}*/
// alert("Hello world")
// var val;
// val =confirm("how are you?");
// if (val == true ) {
// 	alert("Good")
// }
// else{
// 	alert("Not good")
// }
// var val;
// val = prompt("Nhap ho va ten: ");
// if (val != null) 
//  	document.write("<b style='color:red'>"+val+"</b>");
//  else alert("Nhap ho ten di");
//  document.write
// ax + b = 0

// 1/2 + 2/3 + 3/4 +... +100/101;
function enterNumberic(thongBao){
	var m;

	do{

		m = prompt("Nhap "+thongBao+ ":");
		m = parseFloat(m);
	}
	while(isNaN(m) || m <= 0);
	return m;
}
var n;

n = enterNumberic("n")

var mang = new Array(n);

for (var i = 0; i < n; i++) {
	mang[i] = enterNumberic("phan tu thu "+(i+1));
}
var sum = 0;
for (var i = 0; i < n; i++) {
	sum = sum + mang[i];
}
alert(sum);
// var mang = [];
// mang.push(3);
// mang.push(4);
// mang[0];
// mang[1];

// console.log(mang);

// mang = new Array(10);

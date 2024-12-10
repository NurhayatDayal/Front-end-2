
console.log("Hello WORLD");
console.log(30);



//string özellikler
let ad1= "ayşe";
console.log(ad1);
console.log(ad1.length);
console.log(ad1.toLocaleUpperCase());


//number özelliği

let tamsayi = 42;
let ondalikliSayi = 3.14;
let negatif = -10;

console.log(tamsayi);
console.log(ondalikliSayi);
document.write(negatif);


//özel sayı değerleri
let sonsuz=Infinity;
let notNumber=NaN;

//boolen operatörü

let dogruMu=true;
let yanlisMi=false;

//karşılaştırma sonucu boolen

let sonuc= 5>3 ;

//..null

let tanımsızDeger; //underfined
let bosluk= null;

//objeler ,nesne tanımlama

let ogrenci = {
    ad:"melisa",
    soyad:"deniz",
    yas:20,
    dersler:["Matematik","Bilgisayar"]

};
console.log(ogrenci.ad);
console.log(ogrenci["soyad"]);
document.write(ogrenci.yas);


//javascript operatörleri
//1.aritmatik operatörler

let a=10, b=3;
console.log(a+b); // toplama
console.log(a-b);
console.log(a%b); //mod alma
console.log(a/b);
console.log(a**b) //üs alma

//2.atama operatörleri 
let x=5; 
x+=3; // x=x+3 
x-=2; //x=x-2
x*=2;
console.log(x);

// 3.karşılaştırma operatörleri
let yas =30;
console.log(yas=="30");
console.log(yas === 30 ); //eşitse doğru
console.log(yas != 30); // eşit değilse doğru

//mantıksal operatörler

let sinav1 =50, sinav2= 60;

//and operatörü
console.log(sinav1>45 && sinav2>55); //ikisininde doğru olması lazım

console.log(sinav1>60 || sinav2>55); // bir tanesinin doğru olması yeterli

console.log(!(sinav1>60)); // doğru değilse true 

// console.log(window); tüm javascript operatörlerini verir

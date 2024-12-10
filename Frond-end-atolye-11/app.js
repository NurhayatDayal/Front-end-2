

//Koşullu ifadeler---------
//if-else 

let not =75;
if (not>=90) {
    console.log("AA-Pekiyi");

}
else if (not >= 80){
    console.log("BA-İyi");
}
else if (not>=70){
    console.log("BB-Orta Seviye")
}
else {
    console.log("Yetersiz")
}

//switch-case yapısı

let gun =3;
switch(gun){
    case 1:
        console.log("Pazartesi");
        break;
        case 2:
            console.log("Salı");
            break;
            case 3:
                console.log("Çarşamba");
                break;
                default:
                    console.log("Geçersiz Gün");
                    break;
}


//for döngüsü

//for(başlangıç;koşul;adım){  }

for (let i=0; i<5;i++){
    console.log(i);
}

//dizi üzerinde döngüler
let meyveler=["Elma","Armut","Çilek"];
for(let i=0;i<meyveler.length;i++ )
{
    console.log(meyveler[i]);
}

//****for of döngüsü(modern döngü)****

//while döngüsü

// while(koşul){
//     tekrar edilecek kod satırı
// }

let sayac=0;
while(sayac<3){
    
console.log(sayac);
sayac++;
}

// while(true){
//     if(kosul) break;
// }

//do while döngüsü

// do{
//    tekrar edilecek kod 
// }
// while(kosul);

let x=1;
do{
    console.log(x);
    x++;
}
while(x<4);

//array dizi
///let dizi=[];

let sayilar = [10,20,30,40];
{

console.log(sayilar[0]);
}

let karisik =["Elma",30,true,null];
console.log(karisik[2]);
karisik.push(42);
console.log(karisik);
console.log(karisik.length);

let ogrenciler =["Nurhayat","Seyhan","Hatice","Selcen"];
console.log(ogrenciler[1]);
console.log(ogrenciler.length);
ogrenciler.push("Umay");
console.log(ogrenciler.length);

for(let i=0; i<ogrenciler.length; i++){
    console.log(ogrenciler[i]);

}


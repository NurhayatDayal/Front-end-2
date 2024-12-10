
//fonksiyon yapısı
// function greet(){
//     console.log();
// }
// greet()

function sayHello(name){
    console.log("Merhaba," + name + "!");
}

sayHello("Hüsne");


function addNumbers(num1,num2){
    let toplam =num1 + num2;
    console.log("Toplam:" + toplam);
}

addNumbers(5,7);

function multiplay(num3,num4){
    return num3*num4;
}
let result =multiplay(4,3);

console.log("Sonuç:"+ result);
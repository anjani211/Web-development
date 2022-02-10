let number = 11;
for (let i = 1;i<number;i++){
    console.log("number is " + i)
}

//prime or not
let number2 = 23;
let flag = true
for(div = 2;div<number2;div++){
    if (number2%div == 0){
        flag = false;
        break;
    }

}
if (flag == true){
    console.log(number2 + "  is prime")
}else(
    console.log("not rime")
)
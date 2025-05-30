// https://learnjs.vlpt.us/

let name = '강미경';
console.log('hello, js!');
console.log(name);
name = '강미경경';
console.log(name);

const age = 25;
console.log(age);
// age = 26;
// console.log(age);


/** 연산자 */
let data1 = 10;
let data2 = '10';
let result1 = data1 == data2;
console.log(result1);

let result2 = data1 === data2;
console.log(result2);

console.log(typeof(data1), typeof(data2));
// typeof : 문자열 확인
console.log("1" + "2");
console.log(1, 2);


/** not연산 활용법 */
console.log(!1);
// 1은 값이 있는데 !=not을 붙여서 false가 나옴
console.log(!0);
console.log(!"a");
console.log(!"");
console.log(!null);
console.log(!!null);

console.log("".length > 0);
console.log("" === false);
// string과 boolean이라 값이 false로 나옴
console.log(!!"" === false);


let data = {
    name: "강미경",
    age: 25
}
if (!data) {
    console.log("사용자 정보가 없습니다.")
    /**
        let data = {
            name: "강미경",
            age: 25
        }
        혹은
        let data;
     */
} else if (data.name === "강미경경") {
    console.log("사용자이름이 일치합니다.");
} else if (data.age === 25) {
    console.log("사용자이름은 일치하지 않지만 나이는 일치합니다.");
} else {
    console.log("사용자가 일치하지 않습니다.");
}

for (let i = 0; i <10; i++) {
    console.log(i);    
}
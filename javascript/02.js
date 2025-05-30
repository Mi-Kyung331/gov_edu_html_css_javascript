/**
    자바스크립트 함수
 */

// 일반함수 정의
// 1.
function 함수명(매개변수1, 매개변수2) {
    let 리턴데이터 = null;
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수호출")
    return 리턴데이터;     // 리턴이 필요할 때 명시하면 됨.
}

const 리턴값 = 함수명();
console.log(리턴값);
const 함수명2 = 함수명;
const 리턴값2 = 함수명2(10, 20);
console.log(리턴값2);
const 리턴값3 = 함수명2(10);
console.log(리턴값3);
// 함수명이 아니더라도 함수정의만으로도 값이 리턴될 수 있다.

// 위의 값과 같음
// const와 let 둘 다 사용 가능
// 익명함수
// 2.
const 함수명3 = function (매개변수1, 매개변수2) {
    let 리턴데이터 = null;
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수호출")
    return 리턴데이터;     // 리턴이 필요할 때 명시하면 됨.
}


// 화살표함수
// 3.
/**
1. 매개변수가 하나면 ()괄호 생략 가능
2. 실행문이 한 줄이면 {}괄호 생략 가능
3. {} 생략시 값만 입력하면 return 값이 됨.
    즉, {}생략을 안하고 return하려면 return키워드 명시해야함.
 */
// 함수 정의
const 함수명4 = (매개변수1, 매개변수2) => {
    let 리턴데이터 = null;
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수호출")
    return 리턴데이터;     // 리턴이 필요할 때 명시하면 됨.
}

const fx1 = () => console.log("fx1호출");
const fx2 = n => console.log("출력");
const fx3 = n => n + 1;
const fx4 = n => {
    console.log (n, 출력);
    return n + 1;
}
const fx5 = (a, b) => a * b;
fx1();
console.log(fx3(10));
// a = return이 없다면 언디파인하게 됨

const consoleResuit = console.log()
console.log(consoleResuit);


console.log("----------------")


// function aa() {
//     console.log("aa함수 호출");
//     return "aa함수 리턴값";
// }

// function bb(fxx) {
//     console.log("bb함수 호출");
//     return fxx;
// }

// function aaa(fxx, fxx2) {
//     console.log("aaa함수 호출");
//     console.log(fxx());
//     console.log(fxx2());
//     return "aaa함수 리턴값";
// }

// console.log(aaa(bb(aa), bb(aa)));

/**
    bb함수 호출
    bb함수 호출
    aaa함수 호출
    aa함수 호출
    aa함수 리턴값
    aa함수 호출
    aa함수 리턴값
    aaa함수 리턴값
 */

console.log("----------------")

const aa = () => {
    console.log("aa함수 호출");
    return "aa함수 리턴값";
}

const bb = fxx => {
    console.log("bb함수 호출");
    return fxx;
}

const aaa = (fxx, fxx2) => {
    console.log("aaa함수 호출");
    console.log(fxx());
    console.log(fxx2());
    return "aaa함수 리턴값";
}

console.log(aaa(bb(aa), bb(aa)));
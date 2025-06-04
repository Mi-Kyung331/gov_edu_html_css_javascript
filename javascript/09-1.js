// Promise(비동기 객체)

// setTimeout(() => console.log(1), 3000);
// setTimeout(() => console.log(2), 2000);
// setTimeout(() => console.log(3), 1000);
/**
    결과값 : 
        3
        2
        1
 */


// new Promise(() => {
//     console.log("프로미스1 실행");
// });

// new Promise(() => {
//     console.log("프로미스2 실행");
// });
/**
    결과값 : 
        프로미스1 실행
        프로미스2 실행
        3
        2
        1
 */


        console.log('---------------------------------');


// new Promise((resolve) => {
//     console.log("프로미스1 실행");
//     resolve();
// })
// .then(() => console.log("프로미스1 then 실행"))
// .then(() => console.log("프로미스1 then 실행2"));

// new Promise((resolve) => {
//     console.log("프로미스2 실행");
//     resolve();
// }).then(() => console.log("프로미스2 then 실행"));
/**
    결과값 : 
        프로미스1 실행
        프로미스2 실행
        프로미스1 then 실행
        프로미스2 then 실행
        프로미스1 then 실행2
        3
        2
        1
 */


        console.log('---------------------------------');


/**
    Promise(비동기 객체)

    `동기 실행`
        명령이 작성된 순서대로 차례차례 실행되는 방식.
        앞선 작업이 끝나기 전까지는 다음 작업이 실행되지 않는다.
    `비동기 실행`   - 최근 많이 사용
        어떤 작업을 요청한 후,
        그 작업이 끝날 때까지 기다리지 않고 다음 작업을 먼저 수행하는 방식.

    비동기를 실행할 수 있는 함수들은 정해져 있다.

    setTimeout은 자체로 비동기실행으로 볼 수 있다.
 */

function thenFx1(result) {
    console.log(3);
    console.log("thenFx1(result): ", result);
    return 200;
}

function thenFx2(result) {
    console.log(4);
    console.log("thenFx1(result): ", result);
}

function PromiseFx(resolve, reject) {
    console.log(2);
    // resolve(100);
    // resolve가 막았기 때문에 reject가 출력이 되지 않음
    // resolve와 reject는 함께 실행이 될 수 없음
    // resolve가 실행되었을 때엔 .then이 실행되고,
    // reject가 실행되었을 때엔 .catch가 실행된다.
    reject(new Error("오류발생!"));
}

console.log(1);
const p1 = new Promise(PromiseFx);
console.log("-1-");
const p2 = p1.then(thenFx1);
console.log("-2-");
const p3 = p2.then(thenFx2);
console.log("-3-");
const e1 = p3.catch(error => console.error(error));
const p4 = new Promise(PromiseFx);
console.log("-4-");
const p5 = p4.then(thenFx1);
console.log("-5-");
const p6 = p5.then(thenFx2);
console.log("-6-");
const e2 = p6.catch(error => console.error(error));
/**
    결과값 : 
        
 */
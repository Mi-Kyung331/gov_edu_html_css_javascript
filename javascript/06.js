/**
    단축 평가 논리 연산

    `&& AND 연산`
    앞의 값이 true면 뒤에 있는 값을 가지고 온다.
    앞의 값이 false면 false 값을 가지고 온다.

    `|| OR 연산`
    앞의 값이 true면 true 값을 가지고 온다.
    앞의 값이 false면 뒤에 있는 값을 가지고 온다.

    `?? nullish 병합 연산`
    앞의 값이 null 또는 undefinded가 아니면 앞의 값을 가지고 온다.
    그 외에는 뒤의 값을 가지고 온다.
 */

const name = '강미경';

// && AND 연산
console.log(name && '강미경경');        // 결과값 : 강미경경
console.log(!!name && !!'강미경경');    // 결과값 : true
console.log(false && name);            // 결과값 : false
console.log(true && name);             // 결과값 : 강미경


        console.log('---------------------------------');


// || OR 연산
console.log (true || false);            // 결과값 : true
console.log (true || 10);               // 결과값 : true
console.log (false || 10);              // 결과값 : 10


        console.log('---------------------------------');


// nullish 병합 연산
// ?? 연산
console.log(null ?? 100);               // 결과값 : 100
console.log(undefined ?? 100);          // 결과값 : 100
console.log(20 ?? 100);                 // 결과값 : 20
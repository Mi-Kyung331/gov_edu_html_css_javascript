/**
    REST와 SPREAD 문법 - 중요, 복습하기 
 */

// 비구조할당과 연관지어서 생각해야함
const student = {
    name: '강미경',
    age: 25,
    address: '부산 금정구',
    phone : '010-9732-4442',
}

// 비구조할당
const { name, address } = student;
console.log(name, address);


     console.log('---------------------------------');

     
// REST 문법
// 객체 안에 있는 나머지를 객체로 가지고 오는 것
// 객체 안에서 속성을 지우고 싶을 때 사용할 수 있음
const { age, phone, ...rest } = student;
console.log(age, phone, rest);
// const { age, phone, ...a } = student;
// console.log(age, phone, a);
// 결과값 : 25 010-9732-4442 { name: '강미경', address: '부산 금정구' }

const numbers = [1, 2, 3, 4];
// const [n1, n2] = numbers;
// console.log(n1, n2);
// REST 문법
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);
// 결과값: 1 2 [ 3, 4 ]


     console.log('---------------------------------');


// spread
// 속성 카피
// 새로운 속성 추가도 된다.

// 객체 spread
const newStudnt = {
    ...student,
    gender: '여',
}
console.log(newStudnt);
/**
    결과값: 
        {
            name: '강미경',
            age: 25,
            address: '부산 금정구',
            phone: '010-9732-4442',
            gender: '여'
        }
 */

// 배열 spread
// 깊은 복사 : 객체와 그 안에 포함된 모든 객체를 복사
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers)
// 결과값 : [ 1, 2, 3, 4, 5, 6 ]

// 얕은 복사 : 최상위 객체만 복사
const newNumbers2 = numbers;

        console.log('---------------------------------');

// 배열 / 원본에다 push
let names = [];

function addNmae(name) {
    names.push(name);
}

// 배열 / 기존의 names를 복사함
// 이쪽을 더욱 자주 사용함
function addNmae(name) {
    names = [...names, name]
}


// 객체 / 기존의 obj를 복사함
let obj = {
    data1 : "data1",
    data2 : "data2"
}

function addProps(props) {
    obj = {
        ...obj,
        ...props,
    }
}
addProps({data3: "data3", data4: "data4"});
console.log(obj);
// 결과값 : { data1: 'data1', data2: 'data2', data3: 'data3', data4: 'data4' }
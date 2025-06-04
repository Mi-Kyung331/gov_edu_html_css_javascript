/**
    배열 (Array)
 */

const arr1 = [];
const arr2 = new Array();
// 5번과 6번 둘 다 같은 의미

arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
console.log(arr2);

console.log(arr1 === arr2);
// 배열의 주소값이 다르기 때문에 false가 뜸
// 서로가 독립적인 주소를 가지고 있다.


// 객체
const obj1 = {key1: "value1", key2: "value2"};
const obj2 = {key1: "value1", key2: "value2"};
console.log(obj1 === obj2);
// 역시 객체의 주소값이 다르기 때문에 false가 뜸
// 서로가 독립적인 주소를 가지고 있다.


// 일반적으로 자바에서 객체와 배열의 값을 비교하는 방법은 JSON으로 변환하면 된다.
// 총 2가지 방법이 있다.
/** JSON */
// JS객체 또는 배열을 JSON 문자열로 변환 → JSON.stringify();
// JSON 문자열을 JS객체 또는 배열로 변환 → JSON.parse();
const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(json2);
console.log(json1 === json2);
// 결과값 : true

const json3 = JSON.stringify(obj1);
const json4 = JSON.stringify(obj2);
console.log(json3);
console.log(json4);
console.log(json3 === json4);
/**
결과값 : 
    {"key1":"value1","key2":"value2"}
    {"key1":"value1","key2":"value2"}
    true
 */


/**
    배열의 기본 내장 함수
    타입스크립트
    
    값 추가 : .push();
    값 제거 : .pop();
    값 수정 : .splice();
    값 찾기 : .find();
    값 필터링 : .filter();
    값 변환 : .map();
 */

const names = ['강미경', '강미경경', '강미경경경'];

// 값 추가
names.push('강미경경경경');


        console.log('---------------------------------');

        
// 값 제거
console.log(names.pop());


        console.log('---------------------------------');


// 값 수정 ('중간'에 값을 추가 혹은 수정 혹은 삭제 등이 포함)
names.splice(1, 2);
console.log(names);
// 결과값 : [ '강미경' ]
names.splice(1, 2, '강미');
console.log(names);
// 결과값 : [ '강미경', '강미' ]
names.splice(1, 0, '강미');
console.log(names);
// 결과값 : [ '강미경', '강미', '강미' ]


        console.log('---------------------------------');


// 값 찾기 (함수가 들어가주어야 한다.)
const findFx = n => n === '이름';
const foundName = names.find(findFx);
console.log(foundName);
// 값이 있다면 그 값을 찾아오지만 없다면 undefined가 뜬다.
const students = [
    {name: '강미경', age: 25},
    {name: '강미경경', age: 26},
    {name: '강미경경경', age: 25},
    {name: '강미경경경경', age: 26},
    {name: '강미경경경경', age: 25},
];
console.log(students.find(s => s.name === '강미경경경경' && s.age === 26));
console.log(students.find(s => s.name === '강미경경'));

// 값 존재 유무
console.log(names.includes('강미'));
// 결과값 : true


        console.log('---------------------------------');


// 값 필터링
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter(n => n % 2 === 0));
// 결과값 : [ 2, 4 ]
console.log(students);
console.log(students.filter(student => student.age === 25));
// students.stram().filter(student -> student.getAge() == 25).collect(Collectors.toList());
/**
    결과값 :
        [
            { name: '강미경', age: 25 },
            { name: '강미경경경', age: 25 },
            { name: '강미경경경경', age: 25 }
        ]
 */


        console.log('---------------------------------');


// 값 변환
console.log(numbers.map(n => n * 10));
console.log(students.map(student => {
    if (student.age === 25) {
        return {
            name: student.name,
        }
    }
        return student;
}));
/**
    결과값 : 
        [
            { name: '강미경' },
            { name: '강미경경', age: 26 },
            { name: '강미경경경' },
            { name: '강미경경경경', age: 26 },
            { name: '강미경경경경' }
        ]
 */


        console.log('---------------------------------');


        // 값 변환 : .map();
function map(array, fx) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(fx(array[i], i));
    }
    return newArray;
}
console.log(map(students, student => {
    if (student.age === 25) {
        return {
            name: student.name,
        }
    }
        return student;
}));
// 결과값 위와 같음.

        // 값 필터링 : .filter();
const filter = (array, fx)  => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (fx(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(filter(students, student => student.age === 26));
// 결과값 : [ { name: '강미경경', age: 26 }, { name: '강미경경경경', age: 26 } ]
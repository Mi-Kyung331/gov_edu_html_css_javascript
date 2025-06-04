/**
    비구조할당(구조분해) - 중요, 복습하기

    자신이 넣고 싶은 객체만 넣을 수 있음
    순서 역시 상관 x
    변수명을 바꾸는 것도 상관 x
 */

const student = {
    name: "강미경",
    age: 25,
    address: "부산 금정구",
};

const studentName = student.name;
const studentAge = student.age;

// const {studentName2, studentAge2} = student;
const {name: studentName2, age: studentAge2} = student;

console.log(studentName);           // 결과값 : 강미경
console.log(studentAge);            // 결과값 : 25
console.log(studentName2);          // 결과값 : undefined
console.log(studentAge2);           // 결과값 : undefined

const {name, age} = student;
console.log(name);                  // 결과값 : 강미경
console.log(age);                   // 결과값 : 25

        console.log('---------------------------------');

// 구조분해 有
function printStudentInfo({ name, address, age }) {
    console.log(name);              // 결과값 : 강미경
    console.log(address);           // 결과값 : 부산 금정구
    console.log(age);               // 결과값 : 25
}
printStudentInfo(student);

// 변수명을 바꾸는 것도 상관 x
function printStudentInfo({ name, address: addr, age }) {
    console.log(name);              // 결과값 : 강미경
    console.log(addr);              // 결과값 : 부산 금정구
    console.log(age);               // 결과값 : 25
}
printStudentInfo(student);

// 구조분해 無
// function printStudentInfo(name, age, address) {
//     console.log(name);
//     console.log(age);
//     console.log(address);
// }
// printStudentInfo(student.name);
// printStudentInfo(student.age);
// printStudentInfo(student.address);


        console.log('---------------------------------');


/**
    객체 구조분해 할 때 주의할 점
        ↳ 객체의 속성명이 같으면 이름을 바꿔줘야한다.
 */
const s1 = {
    name: "강미경",
    age: 25,
};
const s2 = {
    name: "강미경경",
    age: 26,
};

// const {name, age} = s1;
// const {name, age} = s2;
const {name: n1, age: a1} = s1;
const {name: n2, age: a2} = s2;
console.log(s1);
// 결과값 : { name: '강미경', age: 25 }
console.log(s2);
// 결과값 : { name: '강미경경', age: 26 }


        console.log('---------------------------------');


// `배열` 비구조할당
// 배열이기 때문에 순서를 지킨다.
// 키 값이 없기 때문에 변수명 지정
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3] = numbers;
console.log(num1);              // 결과값 : 1
console.log(num2);              // 결과값 : 2
console.log(num3);              // 결과값 : 3


const useState = (data) => {
    const dataState = {
        data: data,
        setData: (d) => {
            console.log(d, "데이터 set");
        },
    }
    return [ dataState.data, dataState.setData ];
};

const [ userData, setUserData ] = useState({username: "test", password: "1234"});
// 결과값 : { username: 'test', password: '1234' }
console.log(userData);
setUserData({username: "test2", password: "5678"});
// 결과값 : { username: 'test2', password: '5678' } 데이터 set
const student = {
    name: "강미경",
    age: 25,
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);

const a = 'name';
const b = 'age';
console.log(student[a]);
console.log(student[b]);

student[a] = '강미경경';
console.log(student);

student.name = '강미경경경';
console.log(student);

student.printName = () => console.log("이름:", student.name);
student.printName();


const loginButton = {
    text: "로그인",
    value: "test",
    // 변수를 담음
    onClick: () => {
       console.log(loginButton.text)
       console.log(loginButton.value)
    },
    // 함수를 담음
}

loginButton.onClick();
loginButton.onClick = () => {
    console.log("로그인 버튼을 클릭하였습니다.");
}
loginButton.onClick();


console.log(typeof(loginButton));
// loginButtonKeys = ["text", "value", "onClick"];

// key값
const loginButtonKeys = Object.keys(loginButton);
for (let i = 0; i < loginButtonKeys.length; i++) {
    console.log(loginButtonKeys[i]);
}
for (let i = 0; i < loginButtonKeys.length; i++) {
    const keyName = loginButtonKeys[i];
    console.log(loginButton[keyName]);
}

// value 값
const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);
for (let i = 0; i < loginButtonValues.length; i++) {
    console.log(loginButtonValues[i]);
}

// entry
// 객체를 배열로 묶은 것
// 첫번째는 key값, 두번째는 value값의 형태로 묶어있는 것을 나타낸다.
const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);

for (let i = 0; i < loginButtonEntries.length; i++) {
    const entry = loginButtonEntries[i];
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

for (let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

// 난 힘들때...울어...엉..엉엉...
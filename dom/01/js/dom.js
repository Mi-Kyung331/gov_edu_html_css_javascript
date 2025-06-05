const name = '강미경';
const age = 25;


const person = {
    "name": name,
    "age": age,
}

const person2 = {
    name,
    age,
    address: "부산 금정구",
}

console.log(person);
console.log(person2);


/** ---------------------------- **/


/** 옛날에 사용 많이 함 **/
const title1 = document.getElementById("title");
console.log({title1});
const titles = document.getElementsByClassName("title");
console.log(titles);
const h3s = document.getElementsByTagName("h3");
console.log(h3s);
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
// html 전체 객체
console.log(document);


/** 최근에 사용 많이 함 **/
const title1q = document.querySelector("#title");
// querySelector를 사용했을 때 class가 아무리 많더라도 위의 하나만 가지고 온다.
// 그렇기에 querySelectorAll을 사용해야함
// 하나만 존재하는 id 빼고는 모두 querySelectorAll을 사용
const titles2 = document.querySelectorAll(".title");
console.log(titles2);
const hes2 = document.querySelectorAll("h3");
const d12 = document.querySelector("#d1");
const d22 = d12.querySelector("#d2");
console.log(d12);
console.log(d22);
// d2는 d1에 종속되어 있음 + css와 같음 밑의 코딩도 가능하다.
const d23 = document.querySelector("#d1 > #d2");
console.log(d23);


// innerText : text node 추가
// 자바로 값을 넣을 수 있음
d23.innerText = "<p>innerText</p>";
//tag 요소로 넣고 싶을 땐 innerHTML을 사용
d23.innerHTML += "<p>innerText</p>";
// 대입이 되기 때문에 덮어졌다.
// 이어붙이고 싶을 때엔 +=을 사용해야한다.


/** --------------innerHTML 예제-------------- **/


const students = [
    {
        name: "강미경",
        age: 25,
        address: "부산 금정구",
    },
    {
        name: "강미견",
        age: 26,
        address: "부산 동래구",
    },
    {
        name: "강미켱",
        age: 27,
        address: "부산 진구",
    },
]

const studentTableBody = document.querySelector(".student-table > tbody");
const studentTrs = students.map((s, index) => {
    return `<tr>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.address}</td>
    </tr>`
});
console.log(studentTrs);
console.log(studentTrs.join(""));

studentTableBody.innerHTML = studentTrs.join("");

/** --------------get,setAttribute( )-------------- **/

const tdList = studentTableBody.querySelectorAll("td");
// tdList.forEach(td => td.setAttribute("style", "border: 1px soild #fff;"));
tdList.forEach(td => td.style = "border: 1px solid #000;");

const studentTable = document.querySelector(".student-table");
studentTable.classList.add("table-border");
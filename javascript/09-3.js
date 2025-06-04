// Promise(비동기 객체) async, await

const userList = [
    {id: 1, username: "aaa"},
    {id: 2, username: "bbb"},
    {id: 3, username: "ccc"},
    {id: 4, username: "ddd"},
]

function findUserById(id) {
    return userList.find(user => user.id === id);
}

function getUserById(id) {
    return new Promise((rs, rj) => {
        const foundUser = findUserById(id);
        if (!!foundUser) {
            rs(foundUser);
        } else {
            rj (new Error("해당 id의 사용자를 찾을 수 없습니다."));
        }
    });
}

let user1 = await getUserById(1);
// then의 값을 그대로 가지고 온다.
// .then(result => user1 = result) 위의 코드와 일치한다.
// await은 promise 앞에서만 달 수 있다.
console.log("!!!!", user1);

let user2 = getUserById(1);
console.log("!!!!", user2);

getUserById(1)
.then(result => user1 = result)
.catch(error => console.error(error));
// 결과값 : { id: 1, username: 'aaa' }

getUserById(5)
.then(result => console.log(result))
.catch(error => console.error(error));
// 결과값 : Error: 해당 id의 사용자를 찾을 수 없습니다.

/**
    결과값 : 
        { id: 1, username: 'aaa' }
        Error: 해당 id의 사용자를 찾을 수 없습니다.
 */


        console.log('---------------------------------');


async function getUserById2(id) {
    const foundUser = findUserById(id);
        if (!foundUser) {throw new Error("해당 id의 사용자를 찾을 수 없습니다.")};
        return foundUser;
}

getUserById(2)
.then(result => console.log(result))
.catch(error => console.error(error));
// 결과값 : { id: 2, username: 'bbb' }

getUserById(6)
.then(result => console.log(result))
.catch(error => console.error(error));
// 결과값 : Error: 해당 id의 사용자를 찾을 수 없습니다.

/**
    결과값 : 
        { id: 1, username: 'aaa' }
        { id: 2, username: 'bbb' }
        Error: 해당 id의 사용자를 찾을 수 없습니다.
        Error: 해당 id의 사용자를 찾을 수 없습니다.
 */
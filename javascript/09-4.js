/**
    async(비동기 함수 정의 키워드), await(비동기 함수 동기 호출 키워드)
        ↳ await 키워드는 async 함수 안에서만 사용 가능! (단, 전역 호출은 가능)

    async
        함수를 비동기 함수로 선언하며, 항상 Promise를 반환한다.
        함수 안에서 await를 사용할 수 있음
    await
        Promise가 처리(resolve/reject)될 때까지 기다림.
        async 함수 안에서만 사용 가능.
 */

// 01.
async function fx1(isOk) {
    console.log("fx1 호출");
    if (!isOk) throw new Error("오류 발생!");
    return "정상 리턴";
}

// 02.
const fx2 = async (isOk) => {
    console.log("fx2 호출");
    if (!isOk) throw new Error("오류 발생!");
    return "정상 리턴";
}


// await 키워드는 async 함수 안에서만 사용 가능!
// 그렇기에 하단의 방식은 틀렸음.
// function main() {
//     const r1 = await fx1(true);
// }

async function main() {
    // promise 호출
    let r1 = null;
    
    fx1(false).then(result => r1 = result)
    .then(() => console.log(r1))
    .catch(error => console.error(error));

    // await을 달았을 때 동기적으로 실행이 된다.
    // let r2 = await fx1(false);
    // console.log(r2);
    // 만일 따로 예외처리를 주고 싶을 때엔 try를 사용해야한다.
    try {
        let r2 = await fx1(false);
        console.log(r2);
    } catch(error) {
        console.error(error);
    }
    /** 
        결과값 :
            fx1 호출
            fx1 호출
            Error: 오류 발생!
            Error: 오류 발생!
    */
}
main();
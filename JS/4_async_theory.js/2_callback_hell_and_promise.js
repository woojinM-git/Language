/**
 * Callback
 */
function waitAndRun(){
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

function waitAndRun2(){
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
            setTimeout(()=>{
                console.log('2번 콜백 끝');
                setTimeout(()=>{
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
}

// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('완료');
    }, 2000);
});

// timeoutPromise.then((res)=>{ // res = resolve 32번의 값이 들어옴(완료)
//     console.log('---then---'); // then 함수가 출력된거 증명
//     console.log(res);
// });

const getPromise = (seconds)=> new Promise((resolve, reject)=>{
    setTimeout(()=>{ // resolve = 완료 / reject = 에러
        // if(xxx){
        //     resolve('성공');
        // }else{
        //     reject('에러');
        // }
        resolve('에러');
    }, seconds * 1000); // seconds(값) * 1000 = seconds초
});

// getPromise(2)
//     .then((res)=>{ // res = resolve / then = 완료
//         console.log('--- first then ---');
//         console.log(res);
//     })
//     .catch((res)=>{ // res = resolve / catch = 에러
//         console.log('---firest catch---');
//         console.log(res);
//     })
//     .finally(()=>{
//         console.log('--- finally ---');
//     });

Promise.all([ // Promise.all = 가장 느린 함수조건으로 출력된다
    getPromise(1), // 세 조건 모두 동시에 시작하지만 
    getPromise(4), // 가장 느린 조건 기준으로 출력됌
    getPromise(1),
]).then((res)=>{ // then이니까 위에 resolve값이 입력되어있어야 함
    // ㅅㅂ 이거찾으려고 30분동안 삽질했네
    console.log(res);
});
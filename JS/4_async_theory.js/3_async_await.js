/**
 * Async / Awiait
 */
const getPromise = (seconds)=> new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('에러'); // resolve = then이 실행 됐을 때 반환하는 값
    }, seconds * 1000)
});

async function runner(){
    try{ // reject 시 오류가 나는데 try, catch로 고칠 수 있음
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    }catch(e){
        console.log('---catch e---');
        console.log(e); // 에러 reject() 값 출력
    }finally{
        console.log('---finally---');
    }
}

runner();

// async / await 을 사용해서 비동기 프로그램을 만들 수 있다.
// Promise로 만든 함수만 await을 사용할 수 있다
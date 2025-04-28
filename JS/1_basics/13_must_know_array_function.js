/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push() 맨 끝에 새로운 값을 추가하고, 반환값을 하나 늘린다
console.log(iveMembers.push('코드팩토리')); // 7
console.log(iveMembers);

console.log("--------------");
// pop() 기존 함수의 마지막 값을 반환하고 삭제한다
console.log(iveMembers.pop());
console.log(iveMembers);

console.log("--------------");
// shift() 기존 함수의 첫번째 값을 반환하고 삭제한다
console.log(iveMembers.shift());
console.log(iveMembers);

console.log("--------------");
// unshit() 처음에 새로운 값을 추가하고, 반환값을 하나 늘린다
console.log(iveMembers.unshift('안유진')); // 6
console.log(iveMembers);

console.log("--------------");
// splice() // (i , j) i부터 3까지(3의 전 까지)삭제하고 반환한다
console.log(iveMembers.splice(0, 3))
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// connat() // 코드팩토리를 뒤에 붙인 완전 새로운 값을 만든다. -> 원래 Array는 변경되지 않는다
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

// slice()
console.log(iveMembers.slice(0, 3)); // 0~3만 잘라서 반환된다
console.log(iveMembers); // 기존 Array는 변경되지않음

// spread operator
let iveMembers2 = [
    ...iveMembers, // ... 을 붙이면 리스트([])를 제외하고 값을 보여줌
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers, 
];
console.log(iveMembers3); // ... 이 없을때의 반환되는 값 예시


console.log('-----------------------');
let iveMembers4 = iveMembers; // iveMembers4에 iveMembers값을 넣음

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);
    // true -> iveMembers4에 iveMembers값이 들어갔으므로 같다

// console.log([
//     ...iveMembers, // false -> ...(spread operator)로 값을 지정하면 완전히 새로운 값이 생겨난다.
// ] === iveMembers);

// join() // ,로 모든 값을 묶을 수 있다
console.log(iveMembers.join());
console.log(iveMembers.join('/')); // /로 구분하고 묶는다
console.log(iveMembers.join(', ')); // (, )로 구분하고 묶는다

// sort()
// 오름차순
iveMembers.sort(); // 오른차순으로 정렬
console.log(iveMembers); 

console.log(iveMembers.reverse()); // 내림차순으로 정렬

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두러면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하러면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map() -> Array의 모든 값을 순회하면서 각 값들을 변형시킬 수 있다
console.log('-------------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));


console.log('-------------------');
console.log(iveMembers.map((x) => {
    if(x === '안유진'){ // 순회하면서 '안유진'이라는 값을 만나면
        return `아이브: ${x}`; // 아이브: 를 앞에 붙이고
    }else{ // 그 외에는 붙이지 않는다
        return x;
    }
}));
console.log(iveMembers);

// filter() // 모든 값을 순회하면서 x에 넣어준다
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0)); // x가 짝수일때만 표시 -> x를 2로 나누어 나머지가 0일 때 = (짝수) 8, 6

// find() // 원하는 조건의 첫번째 값만 반환한다.
console.log(numbers.find((x) => x % 2 === 0));

// findIndex() // find 결과값의 Index값을 반환한다
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

/**
 * reduce 해설
 * 
 * console.log(iveMembers);
 * console.log(numbers.reduce((p, n) => p + n, 0));
 * 
 * 1. 초기값인 0이 p에 입력된다
 * 2. numbers 어레이의 첫번째 값인 1이 n에 입력된다
 * 3. p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4. 반환한 값 1이 p에 입력된다
 * 5. 어레이의 두번째 값인 8이 n에 입력된다
 * 6. p + n 즉, 1 + 8의 결과값인 9가 반환된다
 * 7. 반환한 값 9가 p에 입력된다
 * 8. numbers 리스트의 모든 값들은 다순회할때까지 반복
 *    결국 모든 값을 다 더한 25가 반환된다
 */
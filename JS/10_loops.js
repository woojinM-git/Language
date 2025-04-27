/**
 * Loops
 * 
 * 1) fore
 * 2) while
 * (for(1번섹션 ; 2번섹션 ; 3번섹션))
 */
for(let i = 0; i < 10; i ++){
    console.log(i);
}

console.log('---------------------')
for(let i = 10; i > 0; i --){
    console.log(i);
}

console.log('---------------------')

for(let i = 0; i < 3; i ++){
    for(let j = 3; j > 0; j --){
        console.log(i , j)
    }
}

// *을 이용해서 6 X 6의 정사각형을 출력해라

console.log('---------------------')
let square = '';
let side = 6;

for(let i = 0; i < side; i ++){
    for(let j = 0; j < side; j ++){
        square += '*';
    }
    square += '\n';
}

console.log(square)

/**
 * fore .... in
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

console.log('---------------------')

for(let key in yuJin){
    console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

console.log('--------------------');

for(let key in iveMembersArray){
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
}

/**
 * for .... of
 */
for(let value of iveMembersArray){
    console.log(value);
}

console.log('--------------------');

/**
 * while
 */
let number = 0;

while(number < 10){
    number ++;
}

console.log(number);

/**
 * do ... while
 *  사용 잘 안함
 */
number = 0;

do{
    number++;
} while (number < 10);

console.log(number);

console.log('--------------------');

/**
 * break
 */
for(let i = 0; i < 10; i ++){
    if(i === 5) { // i가 5와 같아지는 족건이 되면 loop를 끝낸다.
        break;
    }
    console.log(i);
}

console.log('--------------------');

number = 0;

while(number < 10){
    if(number === 5){
        break;
    }

    number ++;
    console.log(number);
}


console.log('--------------------');
/**
 * continue
 */
for(let i = 0; i < 10; i++){
    if(i === 5){ // i가 5와 같으면 현재 진행하고있는 loop만 종료하고 다음 loop 부터 실행한다
        continue;
    }
    console.log(i);
}

console.log('--------------------');
number = 0;

while(number < 10){
    number ++;

    if(number === 5){//  i가 5와 같으면 현재 진행하고있는 loop만 종료하고 다음 loop 부터 실행한다
        continue;
    }
    
    console.log(number);
}
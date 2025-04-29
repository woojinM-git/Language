/**
 * 
 * Property Arrtibute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                    설정할때 호출되는 함수로 구성된 프로퍼티
 *                    예를들면 getter와 setter
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};


console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
 // 생성자 함수는 대문자로 시작 (Object)
 // 생성자 함수 또는 클래스에 .이 붙고 시작하면 static 함수이다
 // { value: '안유진', writable: true, enumerable: true, configurable: true }
 // { value: 2003, writable: true, enumerable: true, configurable: true }

 /**
  * 1) value - 실제 프로퍼티의 값
  * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다.
  * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면 true를 반환한다.
  * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
  *                   false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된
  *                   다. 단, writable이 true인 경우 값 변경과 writable을
  *                   변경하는건 가능하다.
  */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

console.log(Object.getOwnPropertyDescriptors(yuJin)); // 모든 프로퍼티 어트리뷰트가 다 출력된다

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year; // 현재연도 - year = name 의 나이
    },
// return new Date().getFullYear() = 현재 연도를 알 수 있음
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin2);
// = { name: '안유진', year: 2003, age: [Getter/Setter] }
console.log(yuJin2.age);
// = 22

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

// yuJin2['height'] = 172;
// console.log(yuJin2);
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
    // 만약 writable, enumerable, configurable를 지정하지않으면 자동 flase
})
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
// Object.defineProperty를 사용하면 하나씩 값을 섬세하게 조절할 수 있다.

yuJin2.height = 180;
console.log(yuJin2);

Object.defineProperty(yuJin2, 'height', {
    writable:false, // writable: flase로 지정하면 값을 변경할 수 없음
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('---------------');
yuJin2.height = 172;
console.log(yuJin2);

/**
 * Enumerable
 * 열거를 할 수 있는지 여부를 알려주는 기능
 */
console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2, 'name', { // name을 열거할 수 없게 함
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('---------------------');
console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// });

Object.defineProperty(yuJin2, 'height', {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// configurable: flase면 프로퍼티 어트리뷰트를 변경할 수 없다
// 단 예외가 있음 기본 writable: true이면 value값을 변경 할 수 있다.
// 그리고 writable: true에서 flase로 바꿀 수 있지만 다시 true로 바꿀 순 없다
/**
 * Super and Override
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    // 노래 // 춤
    part;

    constructor(name, year, part){
        super(name, year); // super = 부모클래스
        this.part = part;
    }

    sayHello(){
        // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고 있습니다.`;
        return `${super.sayHello()} ${this.part}를 맡고 있습니다.`; // 위에 값을 정한 sayHello가 적용됨, super은 함수가 실행가능
    }
}
// 자식 클래스에서 constructor를 쓸 때는 무조건 super()를 먼저 호출해야 한다 -> 안하면 에러남
const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello()); // 함수에는 () 필수
console.log(yuJin.sayHello());
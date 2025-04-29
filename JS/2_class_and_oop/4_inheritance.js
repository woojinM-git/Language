/**
 * Inheritance
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIodlModel extends IdolModel {
    dance(){
        return '여자 아이돌이 춤을 춥니다.';
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const yuJin = new FemaleIodlModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

const cf = new IdolModel('코드팩토리', 1992); // name이 코드팩토리이며 year가 1992인 새로운 함수를 지정한다
console.log(cf);

console.log(cf.name);

console.log(yuJin instanceof IdolModel); // yuJin이 IdolModel로부터 만들어졌는가
console.log(yuJin instanceof FemaleIodlModel); // true
console.log(yuJin instanceof MaleIdolModel); // false

console.log('------------------------');

console.log(jiMin instanceof IdolModel); // jiMin이 IdolModel로부터 만들어졌는가
console.log(jiMin instanceof FemaleIodlModel); // false
console.log(jiMin instanceof MaleIdolModel); // true

console.log('------------------------');

console.log(cf instanceof IdolModel); // cf이 IdolModel로부터 만들어졌는가
console.log(cf instanceof FemaleIodlModel); // false
console.log(cf instanceof MaleIdolModel); // false


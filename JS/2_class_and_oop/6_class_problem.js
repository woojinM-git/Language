/**
 * 클래스 강의를 끝낸기념 문제
 * 
 * 1) Country 클래스는 나라 이름과 나라에 해당되는 아이돌 그룹정보를 
 *    리스트로 들고있다. (name 프로퍼티, idolGroups 프로퍼티)
 * 2) IdolGroup 클래스는 아이돌 그룹 이름과 멤버 정보를 리스트로 들고있다.
 *    (name 프로퍼티, members 프로퍼티)
 * 3) Idol 클래스는 아이돌 이름과 출생년도 정보를 들고있다.
 *    (name 프로퍼티, year 프로퍼티)
 * 4) MaleIdol 클래스는 Idol 클래스와 동일하게 
 *    name, year 프로퍼티가 존재한다
 *    추가로 sing() 함수를 실행하면 ${이름}이 노래를 합니다.
 *    라는 스트링을 반환해준다.
 * 5) FemaleIdol 클래스는 Idol 클래스와 동일하게
 *    name, year 프로퍼티가 존재한다.
 *    추가로 dance() 함수를 실행하면 ${이름}이 춤을 춥니다.
 *    라는 스트링을 반환해준다.
 * 
 * 아래 정보가 주어졌을때 위 구조로 데이터를 형성해보라.
 * map() 함수를 잘 활용하면 좋다.
 */

// 아이브는 한국 아이돌이고
// 아이브라는 이름의 걸그룹이다.
// 아이브는 여자 아이돌이다.
const iveMembers = [
    {
        name: '안유진',
        year: 2003,
    },
    {
        name: '가을',
        year: 2002,
    },
    {
        name: '레이',
        year: 2004,
    },
    {
        name: '장원영',
        year: 2004,
    },
    {
        name: '리즈',
        year: 2004,
    },
    {
        name: '이서',
        year: 2007,
    },
]

// BTS는 한국 아이돌이고
// 방탄소년단이라는 이름의 보이그룹이다.
// BTS는 남자 아이돌이다.
const btsMembers = [
    {
        name: '진',
        year: 1992,
    },
    {
        name: '슈가',
        year: 1993,
    },
    {
        name: '제이홉',
        year: 1994,
    },
    {
        name: 'RM',
        year: 1994,
    },
    {
        name: '지민',
        year: 1995,
    },
    {
        name: '뷔',
        year: 1995,
    },
    {
        name: '정국',
        year: 1997,
    },
]

class Country{ // 나라 class
    name; // name 프로퍼티 (속성을 미리 선언)
    idolGroups; // idolGroups 프로퍼티 (속성을 미리 선언)

    constructor(name, idolGroups){ 
        this.name = name;
        // this.name = 이 클래스 안의 name 속성
        // name = 밖에서 받은 값
        this.idolGroups = idolGroups;
        // this.idolGroups = 이 클래스 안의 name 속성
        // idolGroups = 밖에서 받은 값
    }
}

class IdolGroup{
    name;
    members;

    constructor(name, members){
        this.name = name;
        this.members = members;
    }
}

class Idol{
    name;
    year;
    
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
 
class FemaleIdol extends Idol{
    // FemaleIdol이라는 새 클래스를 만들고 이 클래스는 Idol에게 상속(extends) 받는다.
    sing(){
        // sing이라는 메서드를 호출하면 정한 문장을 리턴(반환)해준다
        return `${this.name}이 노래를 합니다.`;
        // this.name = 객체의 name으로 지정한 값을 반환 한다.
    }
}

class MaleIdol extends Idol{
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

// 위 리스트 값들을 맵핑하는 법

const cIveMembers = iveMembers.map(
    (x) => new FemaleIdol(x['name'], x['year']),
);
console.log(cIveMembers);

const cBtsMembers = btsMembers.map(
    (x) => new MaleIdol(x['name'], x['year']),
);
console.log(cBtsMembers);

const iveGroup = new IdolGroup(
    '아이브',
    cIveMembers,
)
console.log(iveGroup);

const btsGroup = new IdolGroup(
    'BTS',
    cBtsMembers,
)
console.log(btsGroup);

const korea = new Country(
    '대한민국',
    [
        iveGroup,
        btsGroup,
    ],
);
console.log(korea);

console.log('---------------------------');
// 위에 하나씩 지정한 class들을 하나의 클래스로 묶어서 풀이
const allTogether = new Country(
    '대한민국',
    [
        new IdolGroup(
            '아이브',
            iveMembers.map(
                (x) => new FemaleIdol(x['name'], x['year']),
            ),
        ),
        new IdolGroup(
            '방탄소년단',
            btsMembers.map(
                (x) => new MaleIdol(x['name'], x['year']),
            ),
        ),
    ],
);
console.log(allTogether);
console.log("hello")

// 변수의 타입 명시 방법
let a:number = 10; // 숫자, number
let b:string = "Hello"; // 문자열, string
let c:boolean = true; // false, Boolean 참, 거짓
let d:number[] = [1, 2, 3, 4]; // Array, 배열
let e:Person = { name : "Tom", age : 35}; // Object 객체
//..
interface Person {
    name:string;
    age:number;
}

a = 55;
b = "50";

//..
console.log("a=" + a, ", type of " + typeof a)
console.log("b=" + b, ", type of " + typeof b)
console.log("c=" + c, ", type of " + typeof c)
console.log("d[0]=" + d[0], ", type of " + typeof d)
console.log("e.name=" + e.name, "e.age=" + e.age,  ", type of " + typeof e)

// 예시
// [무서운이야기]
let columnLength = 10; // 초기 개발 때 cm단위라 생각하고 number 타입으로 기획

// ... 개발중
// ... 오랜 시간 + 수많은 코드...
// ... 길이를 입력하는 부분
// ... 잠시 신입 개발자가 개발함
columnLength = 30; // 길이를 입력.. 오류가 없다?

// ... few days later
// ... 원래 개발자가 휴가갔다 복귀함
// ... few days later
let addLength = columnLength + 5; // 15cm... 35cm 처럼 나오겠지
// ... 측정 단위 변경 필요 기획 변경
// ... cm를 m로 바꾸려면..?
let meterLength = addLength / 10; // 0.15m... 0.35m 처럼 나와야지..

// ... few days later
// ... 개발 완료
console.log(addLength + "m")
console.log(meterLength + "m")


//--------
// 메서드의 타입 명시 방법
function add(x:number, y:number):number {
    return x + y;
}

const obj = { width: 10, height: 15 };
const area = obj.width * obj.height;
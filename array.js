// 배열 (Array)
// 파이썬: 리스트(List)

// index : 0. 1. 2.
let numbers = [10, 20, 30];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// 파이썬 : [-1] -> 마지막 요소
console.log(numbers.at(-1));

// 배열의 원소 개수 -1 -> 마지막 인덱스
console.log(numbers[numbers.length -1]);

// Python: [3] -> IndexError
console.log(numbers[3]);

console.log("===================")

let score = [82, 95, 77]
for (const [i, score] of scores.entries()) {
    console.log(i + "번째 요소의 값:" + score);
};

// 다양한 대이터 타입을 혼합해서 사용하는 것도 가능(권장되지는 않음/쓰고 싶으면 라벨링 해주는 것이 좋음)
let data = ["hello", 100, true];
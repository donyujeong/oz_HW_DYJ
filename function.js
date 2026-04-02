// 함수(Function)
// -> 코드를 재사용하기 위해 만들어 놓은 구조

// 함수 정의 -> "~ 기능을 하는 코드 구조"를 X라는 이름으로 부르겠다.
// 입력 -> 함수 동작 -> 출력
// return : 함수를 호출한 곳으로 함수의 실행결과를 돌려준다.
function add(n1, n2) {
    let result = n1 + n2;
    //return result;  // 이거 안해주면 값이 반환이 안되어서 undefined로 나온다(값이 지정되지 않는다는 뜻)
    console.log(result); // 명시적으로 나타내진 않아도 반환이 되서 출력이 되는데 undefined로 나온다.
}

// 함수 호출(call) -> 함수를 사용한다
add(1, 2);  //여기까지만 쓰면 아무것도 출력되지 않음 내부적으로는 동작은 해서 값이 1+2 = 3 됬긴했지만

let result_value = add(1, 2);
console.log(return_value);
// 연산자와 조건문을 활용해 콘솔 계산기 만들기 실습 진행!

// 실습 완료후 파일 업로드 및 깃허브링크 공유 해주세요!

// → js파일은 업로드가 안된다고합니다!!
// 되도록 GitHub를 활용해서 여러분의 GitHub의 역량을 높히는걸 추천하지만!!
// .zip으로 압축하거나 텍스트파일로 업로드하셔도 됩니다!


// 버튼을 클릭했을 때 실행될 함수입니다.
function calculate() {
    // 1. 변수 선언 (HTML 입력창에서 값을 가져오기)
    // document.getElementById를 사용하여 각 입력칸의 숫와 연산자를 가져옵니다.
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    
    // 결과가 표시될 HTML 요소를 미리 변수에 담아둡니다.
    let display = document.getElementById('result-display');

    let result;

    // 2. 조건문을 활용한 계산 로직 (기존에 작성하신 로직 그대로 유지!)
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        // 0으로 나누는 경우 방지 로직 포함
        if (num2 === 0) {
            result = "0으로 나눌 수 없습니다!";
        } else {
            result = num1 / num2;
        }
    } else {
        result = "잘못된 연산자입니다.";
    }

    // 3. 결과 출력
    // 화면의 "결과: " 부분 뒤에 계산된 값을 넣어줍니다.
    display.innerText = "결과: " + result;
    
    // 콘솔에서도 확인할 수 있게 남겨둡니다.
    console.log("계산 결과:", result);
}
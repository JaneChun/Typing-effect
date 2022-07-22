let target = document.querySelector('#dynamic');

//
function randomString() {
    let stringArr = ['Learn to HTML', 'Learn to CSS', 'Learn to JavaScript', 
    'Learn to Phython','Learn to Ruby'];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    
    let selectStringArr = selectString.split('');

    return selectStringArr;
}


// 업그레이드
function resetTyping() {
    target.textContent = ""
    dynamic(randomString());
}

// 타이핑 함수
function dynamic(a) {

    if(a.length > 0) {
        target.textContent += a.shift();

        setTimeout(function() {
            dynamic(a);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString())

// 커서 깜빡임 함수
function blink() {
    target.classList.toggle('active')
}

setInterval(blink, 500); 
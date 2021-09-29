window.onload = () =>{
    let button = document.querySelector('#btn');
    button.addEventListener('click', calculateBMI);
}


function calculateBMI(){
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');
    console.log(height);
    if(height === '' || isNaN(height) || height < 0){
        result.innerHTML = 'Please provide a valid height';
    }else if(weight === '' || isNaN(weight) || weight < 0){
        result.innerHTML = 'Please provide a valid weight';
    }


    else{
         let bmi = (weight / ((height * height) / 10000)).toFixed(2); 


         if(bmi < 18.6){
             result.innerHTML = `Under Weight : <span>${bmi}</span>`;
         }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = `Normal : <span>${bmi}</span>`;
         } else{
            result.innerHTML = `Over Weight : <span>${bmi}</span>`;
         }
    }
}

function calculateLoan(){
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest').value;
    const months = document.querySelector('#months').value;
    const interest = (amount * (interest_rate * 0.01)) / months;
    const payment = ((amount / months) + interest).toFixed(2);


    document.querySelector('#payment').innerHTML = '$' + payment + '/ Month';
}


window.onload = () => {

    function showTime() {
        let date = new Date();
        let hour = date.getHours(); // 0 - 23
        let minutes = date.getMinutes(); // 0 -59
        let seconds = date.getSeconds(); // 0 -59

        let session = 'AM';

        if (hour === 0) {
            hour = 12;
        }

        if (hour > 12) {
            hour = hour - 12;
            session = 'PM';
        }

        hour = (hour < 10) ? '0' + hour : hour;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        let time = hour + ':' + minutes + ':' + seconds + ' ' + session;

        document.querySelector('#myTime').innerText = time;


        setTimeout(showTime, 1000);
    }

    showTime();

}

window.onload = () =>{
    let screen  = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.numbers');
    let clear = document.querySelector('.btn-red');
    let equal = document.querySelector('.btn-green');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value; // 4 => 4 + 9 = 49
            console.log(value);

        })
    })

    equal.addEventListener('click', function(){
        if(screen.value === ''){
            screen.value = "Enter value";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })


    clear.addEventListener('click', function(){
        screen.value = '';
    })
}
const resultBox = document.getElementById('cont');

const iconResult = document.getElementById('icon');
const text1 = document.getElementById('stautsText1');
const text2 = document.getElementById('stautsText2');
const percantage = document.getElementById('percantage');
const correctAnswers = document.getElementById('correctNumberQus');
const wrongAnswers = document.getElementById('wrongNumberQus');

const wrongAns = document.getElementById('wrongAns');



let q = [
    {
        question:' 2 + 2 = ',
        answers:['2' , '4' , '5' , '6'],
        correct:1,
        wrong: 0

    }
    ,
    {
        question:' 2 + 5 = ',
        answers:['2' , '4' , '7' , '6'],
        correct:2,
        wrong: 0

    }
];


// let a = q[1].answers;
// let c = q[1].correct;
// let w = q[1].wrong;
// console.log(q[0].)
function createCard(arr){
    for (let x = 0; x < arr.length; x++) {
        let card = document.createElement('div');
        card.className = 'card';
        

        let title = document.createElement('h3');
        title.textContent = 'Incorrect questions :';
        card.append(title);
        let question = document.createElement('p');
        question.textContent = arr[x].question;//
        question.className = 'question';
        card.append(question);
        
        let answers = document.createElement('ul');
        for(let i = 0 ; i < arr[x].answers.length ; i++){
            let item = document.createElement('li');
            item.textContent =arr[x].answers[i] ;
        if(i == arr[x].correct){
           item.className = 'correct';
        }
        else if(i == arr[x].wrong){
           item.className = 'wrong'
        }else{
            item.className = 'dis'
        }
       
        answers.appendChild(item);
        }
        card.append(answers);
        wrongAns.appendChild(card);
    }
}

// let pass = true;
// let fail = false;
let num = 60;
if(num > 50){
    resultBox.classList.add('pass');
    iconResult.classList.add("fa-face-laugh-beam")
    iconResult.style.color = '#07b38c';
    percantage.textContent = `${num}%`; 
    correctAnswers.textContent = '3'; //
    wrongAnswers.textContent = '2' //  
    // console.log('yes')
}

else{
    resultBox.classList.add('fail');
    iconResult.classList.add('fa-face-frown');
    iconResult.style.color = 'red';
    text1.textContent = 'Sorry';
    text1.style.color = 'red';
    text2.textContent = 'You Are Fail';
    text2.style.color = 'red';
    percantage.textContent = `${num}%`; ///
    percantage.style.borderColor = 'red';
    percantage.style.color = 'red';
    correctAnswers.textContent = '1'; //
    wrongAnswers.textContent = '4' //  
}


createCard(q);


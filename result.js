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
]
let a = q[0].answers;
let c = q[0].correct;
let w = q[0].wrong;
// console.log(q[0].)
function createCard(arr){
 let card = document.createElement('div');
 card.className = 'card';

 let title = document.createElement('h3');
 title.textContent = 'Incorrect questions :';

 let question = document.createElement('p');
 question.className = 'question';
 question.textContent = arr[0].question;

 let answers = document.createElement('ul');

 for(let i = 0 ; i < a.length ; i++){
 let item = document.createElement('li');
 item.textContent = a[i];
 if(i == c){
    item.className = 'correct';
 }
//  else if (i == w){
//   item.className = 'wrong'
//  }
 answers.appendChild(item);
 }

 card.append(title , question , answers);
 wrongAns.appendChild(card);

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
    console.log('yes')
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


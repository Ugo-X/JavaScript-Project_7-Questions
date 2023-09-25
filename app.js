// const getElement = (selector, list) => {
//   const el = list
//     ? [...document.querySelectorAll(selector)]
//     : document.querySelector(selector);

//   // check if only one element
//   if (list && el.length === 1) return el[0];
//   // check if list is not empty
//   if (list && el.length > 0) return el;
//   // if not a list and element exists
//   if (!list && el) return el;
//   throw new Error(`Please double check the ${selector}`);
// };

// // traversing the dom
// const btns = getElement('.question-btn', true);

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle('show-text');
//   });
// });

const btns = document.querySelectorAll('.question-btn')
const question = document.querySelector('.service')

// traversing the dom method
// btns.forEach(function(btn){
//   btn.addEventListener('click', function(evt){
//   console.log();
//   const service = evt.currentTarget.parentElement.parentElement;
//   service.classList.toggle('show-text')
//   })
// })


// USING SELECTORS WITHIN AN ELEMENT

const questions = document.querySelectorAll('.question')

questions.forEach(function (question){
  // we do not use document here when we want to select the btn because we want to limit where we are looking and really we want to select one btn in either the first, second or third question
  // also note that we are no longer selecting  all the buttons with querySelectorAll
const btn = question.querySelector('.question-btn')
// we are talking about each and every button in our questions
btn.addEventListener('click', function(){

  // so we want to create a scenario where if we click one btn the others close and how do we do that we can do that using for each on the questions. We already selected the questions above so we just have to reference
  // also we already used the question parameter above so in order to avoid repitition and erros we have to use another parameter to reference each individual question we select and in our case, we use the item parameter.
  // here we will create a condition where if the article does not match the article where i am clicking the button then close it i.e remove the show_-text class
  // we can also log the item parameter to see that indeed the value is the article/question we are iterating over

  questions.forEach(function(item) {
    // console.log(item);
    // So we are saying that if this item within the click event listener is not equal to the question within the forEach method, remove the show-text link from the current item we have just clicked on and add it to the one we are currently clicking on
    if(item !== question){
      item.classList.remove('show-text')
    }
  });

  question.classList.toggle('show-text')
})
})
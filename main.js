// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// document.querySelector('.like').addEventListener('click', (e) => {
//     //if (e.target == EMPTY_HEART) {console.log('something hapen')}
//   console.log(e)
// })

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".like-glyph").forEach(ea => {
  ea.addEventListener('click',function (e) {
    
    console.log('something')
    console.log(mimicServerCall())
    //let serverCall = 
    //if (serverCall.PromiseState == 'fulfilled') {console.log('PP')}
    //serverCall.then((resp) => {console.log('WORKED')}
    mimicServerCall()
    .then((resp) => {
      e.target.innerText = FULL_HEART
      console.log('worked')
    })
    .catch((error) => {console.log('BROKEEEE')})
  
  });

})})
// document.querySelector('.like-glyph').innerText = FULL_HEART



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

'use strict';

/*On Form Submit,
    check if form height has changed
        - comparare currentHeight to recentHeight
*/ 

//For Each errror message -> add {error message } pixels of height to form section
// listen for form submission
// If there are error messages
    //cache the amount and there height - useful during recheck

    let signUpForm = $('#signup-form')
    let signUpFormHeight = signUpForm.innerHeight();
    // let errorMessage = document.querySelectorAll('p.errorMsg') 
//Functions
    //errorCheck























   /******************************   Prior Attempt   **********************************/ 
//Monitor form element 
// const MutationObserver = window.MutationObserver || window.WebKitMutationObserver|| window.MozMutationObsever;
// const errorMsgCheckConfig = { 
//     attribute:false,childList:true,characterData:false,subtree:false
// };
// const observer = new MutationObserver(function(mutations){
 
//         mutations.forEach(function(mutation){
//             //notify user of added elements
//             if(mutations.target && [...mutations.addNodes].length){
//                 console.log(`A Child Node ${mutation.target} has been added`)
//             }
//             // notify user of removed elements
//             if(mutations.target && [...mutations.removedNodes].length){
//                 console.log(`A Child Node ${mutation.target} has been removed`)
//             }
//             //Action I need
//         })
//     })

// // observer.observe(signUpForm,errorMsgCheckConfig);

//     function getChildCount(elem){
//         return elem.children().length;     
//     }
//     let signUpFormChildren = getChildCount(signUpForm);
// setInterval(getChildCount(signUpForm),1000)

// // Get the OffSetHeight or Clinet Height  of each error message
// function getErrorMsgHeight(){
//     let errorTotalMessageHeight = 0;
// for (i = 0; i < errorMessage.length; ++i) {
//   errorTotalMessageHeight
// }
// }
//     //addHeight
//     //subtractHeight
// //Simple cache the initial height of the form
// //post submitssion, compare the heights of the inital height compared to the post submit height
//     //account for the different(whther the form.height it needs to be added or subtracted)

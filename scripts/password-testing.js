'use strict';

export {passwordCheck}
/*
Password must have the following 
    * Have no whitespace  
    * At Least eight - {8,}
    * At Least 1 capital letter - \[A-Z] 
    * At Least 1 number 
    * At Least 1 special character 
*/  


const passwordRequirements = /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()\\\]\[{}'""/+_\-=;:\|,.<>?]).{8,}/g; 

//Default Export 
export default function passwordCheck(str){
    console.log('---------------------------------------------------');
    // console.log(str)
    if(passwordRequirements.test(str)==false){
        console.log('poot');
        let listContainer = document.createElement('div');
        let listHead = document.createElement("p");
        listHead.textContent = "Your password should have the following requirements:"
    //append
    listContainer.append(listHead);
    console.log(listContainer)
    listContainer.append(generateErrorMsg());
    return listContainer
    }
    else{
        console.log("This password meets all requirements")
    }
};

//creates an array containing error messages for future refactoring
export function generateErrorMsg(){
    //TODO remove pre-existing message
     
    const list = document.createElement("ul");

    const errors = ["Your password should have no whitespace",
    "Your password should have at Least eight characters",
    "Your password should have at least one capital letter",
    "Your password should have at least 1 number",
    "Your password should have 1 special character"]
    errors.forEach(function(err){
        const listItem = document.createElement("li");
        listItem.textContent = err; 
        listItem.alt = err;
        list.append(listItem);
} 
    )
    //return error message
    console.log(list)
    return list

// console.log(listHead.insertAdjacentElement('afterend',list);

}
// generateErrorMsg()
 //Test Cases
//  export let testWord1 = "Lauren!527";//-> Passes
//  export let testWord2 = "Lauren527";//-> Lack of special character 
//  export let testWord3 = "auren!527";//->Lack of capital letter
//  export let testWord4 = "auren!";//-> lack of numbers,capital letters, less than for characters
//  export let testWord5 = "auren!";//-> lack of numbers,capital letters
//  export let testWord6 = "aur e!n";//-> lack of numbers,capital letters
//  export let testWord7 = "L@uren527";//-> Passes
 
 
 //per submit, 
    //valiate password
        //if all checks pass, continue as is
        // console.log(checkPasswordReqs(passwordRequirements.requirements))
        // console.log(passwordCheck(testWord1))
        // console.log(passwordCheck(testWord2))
        // console.log(passwordCheck(testWord3))
        // console.log(passwordCheck(testWord4))
        // console.log(passwordCheck(testWord5))
        // console.log(passwordCheck(testWord6))
        // console.log(passwordCheck(testWord7))
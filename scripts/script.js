

'use strict';

// import {default as passwordCheck} from "./password-testing.js"

//Sign-Up Form
let signUpForm = $('#signup-form');
//email validation function
    function emailValidation(str){
        const atCheck = /\S+@\S+\.\S+/i;
       return atCheck.test(str);
    }

// increase Form height to height
function increaseFormHeight(){
    if(signUpForm.height() < 575.938){
        $('.signup-form-section form').height($('.signup-form-section form').height()+21);
    }
}
// decrease form height
function decreaseFormHeight(){
    if(signUpForm.height() > 500){
        signUpForm.height(signUpForm.height()-21)
    }
}
    $(document).ready(function(){
        // Check that email field is properly field out
        $('#signup-form').submit(function(e){
            let emailInput = $('#form-input-Email');
            let passwordInput = $('#form-input-password');
            //Gather input values from sign-up form
            $('.input-text-field').each(function(){
            //Remove any prior existing message
            console.log($(this).next());
                if($(this).next().hasClass('errorMsg')||$(this).next().hasClass('error-submessage')){
                    // $(this).next().remove();
                    $('.errorMsg').remove()
                decreaseFormHeight();
                }
            //append error message to input without user's input
            else if($(this).val()==""){
                $('.signup-form-section form input').attr('margin-top','16px');
                increaseFormHeight();
                $(`<p>${$(this).attr('name')} cannot be empty</p>`)
                .addClass('errorMsg').insertAfter($(this));
                }
            });
        //Email Vailidation
        if(emailValidation(emailInput.val()) === false && emailInput.val() !=="" ){
            $('.signup-form-section form input').attr('margin-top','16px');
            $(`<p>Looks like this is not an email</p>`)
            .addClass('errorMsg').insertAfter(emailInput);
        };
        //PassWord Validation(with password suggestion)
        if(passwordInput.val() !== ''){
        //    passwordInput.insertAfter(passwordCheck(passwordInput.val()))
        const passwordRequirements = /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()\\\]\[{}'""/+_\-=;:\|,.<>?]).{8,}/g; 
        if(passwordRequirements.test(passwordInput.val())==false){
            $('<p>Your password should have the following requirements:</p>\n <ul class="errorMsg error-submessage"><li>Your password should have no whitespace</li><li>Your password should have at least eight characters</li><li>Your password should have at least one capital letter<li>Your password should have at least 1 number</li><li>Your password should have 1 special character</li></ul>')   
        .addClass('errorMsg').insertAfter(passwordInput)
        }
            }
        e.preventDefault();
    })

})

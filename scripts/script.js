"use strict";

// import {default as passwordCheck} from "./password-testing.js"
const missingPasswordReqs ={
    noWhiteSpace:'<li>Your password should have no whitespace</li>',
    
}
//Sign-Up Form
let signUpForm = $("#signup-form");
//email validation function
function emailValidation(str) {
  const atCheck = /\S+@\S+\.\S+/i;
  return atCheck.test(str);
}

// increase Form height to height

//takes in height of errorMsg
function increaseFormHeight(eHeight) {
  if (signUpForm.height() < 556) {
    console.log(signUpForm.height());
    $(".signup-form-section form").height(
      $(".signup-form-section form").height() + eHeight
    );
  }
}
// decrease form height
function decreaseFormHeight(eHeight) {
  if (signUpForm.height() > 500) {
    signUpForm.height(signUpForm.height() - eHeight);
  }
}
$(document).ready(function() {
  // Check that email field is properly field out
  $("#signup-form").submit(function(e) {
    let emailInput = $("#form-input-Email");
    let passwordInput = $("#form-input-password");
    //Gather input values from sign-up form
    $(".input-text-field").each(function() {
      //Remove any prior existing message
      if ($(this).next().hasClass("errorMsg") && $(this).val() !== "") {
        $(".errorMsg").remove();
        decreaseFormHeight($(this).next().height());
      } else if ($(this).val() == "" && !$(this).next().hasClass("errorMsg")) {
        //append error message to input without user's input
        increaseFormHeight($(this).next().height());
        $(`<p>${$(this).attr("name")} cannot be empty</p>`)
          .addClass("errorMsg")
          .insertAfter($(this));
      }
    });
    //Email Vailidation
    if (
      emailValidation(emailInput.val()) === false &&
      emailInput.val() !== ""
    ) {
      $(`<p>Looks like this is not an email</p>`)
        .addClass("errorMsg")
        .insertAfter(emailInput);
    }
    //PassWord Validation(with password suggestion(ICEBOX))
    if (passwordInput.val() !== "") {
      const passwordRequirements = /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()\\\]\[{}'""/+_\-=;:\|,.<>?]).{8,}/g;
      if (
        passwordRequirements.test(passwordInput.val()) == false &&
        !passwordInput.next().hasClass("errorMsg")
      ) {
          //TODO refactor this string.
        $(
          '<div class="errorMsg"><p>Your password should have the following requirements:</p> <ul class="errorMsg error-submessage"><li>Your password should have at least eight characters</li><li>Your password should have at least one capital letter<li>Your password should have at least 1 number</li><li>Your password should have 1 special character</li></ul>'
        )
          .addClass("errorMsg")
          .insertAfter(passwordInput);
      }
    }
    e.preventDefault();
  });
});

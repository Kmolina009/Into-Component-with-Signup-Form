//Retrieve field in form element
// const form = $(form)
// console.log(document.documentElement.innerHTML)
let inputValues = {};
    //Check that all fields are  filled
    function emptyInputCheck(){
        for(let things in inputValues){
            if(inputValues[things] == ""){
                //return error message(append to respective field)
            console.log(`${things} cannot be empty`);
            }else{
                //
            }
         }
    }


// Check that email field is properly field out
$(document).ready(function(){
 
        $('#signup-form').submit(function(e){
            //Values collected from form are reset
            inputValues = {};
            //Gather input values from sign-up form
            $('.input-text-field').each(function(){
                // inputValues[$(this).attr('name')]=$(this).val();
                console.log($(this).val())
                //Remove any prior existing message
                if($(this).next().hasClass('errorMsg')){
                    console.log("Error message Deteched");
                    console.log($(this).next());
                    $(this).next().remove();
                };
                if($(this).val()==""){
                    //append error message to input without user's input
                    $('.signup-form-section form input').attr('margin-top','16px');
                    $(`<p>${$(this).attr('name')} cannot be empty</p>`).addClass('errorMsg').insertAfter($(this))
                }
            })
            //return the input in form
            // emptyInputCheck(inputValues);
            // $('')
        e.preventDefault();
    })



})
// console.log(inputValues) testing



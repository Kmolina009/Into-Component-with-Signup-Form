
    //email validation
    function emailValidation(str){
        const atCheck = /\S+@\S+\.\S+/i;
       return atCheck.test(str);
    }

    $(document).ready(function(){
        // Check that email field is properly field out
        $('#signup-form').submit(function(e){
            let emailInput = $('#form-input-Email');
            //Gather input values from sign-up form
            $('.input-text-field').each(function(){
            //Remove any prior existing message
                if($(this).next().hasClass('errorMsg')){
                    $(this).next().remove();
                };
            //append error message to input without user's input
            if($(this).val()==""){
                $('.signup-form-section form input').attr('margin-top','16px');
                //extend form as well by adding 16px to heigth
                $('.signup-form-section form').attr('height','16px');
                $(`<p>${$(this).attr('name')} cannot be empty</p>`)
                .addClass('errorMsg').insertAfter($(this));
                }
            });
        //Email Vailidation
        if(emailValidation(emailInput.val())===false&&emailInput.val() !==""){
            $('.signup-form-section form input').attr('margin-top','16px');
            $(`<p>Looks like this is not an email</p>`)
            .addClass('errorMsg').insertAfter(emailInput);
        };
            //PassWord Validation(with password suggestion)
        
        e.preventDefault();
    })



})



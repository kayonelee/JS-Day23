$(document).ready(function() {
    
    $('#submit').click(function(event){ //Create a function that will fire when the submit <button> is clicked
        event.preventDefault();  // Prevent form submission
    
    // create variables for each of the form inputs
    let nameInput = $('#name');
    let emailInput = $('#email');
    let phoneInput = $('#phone');
    
    // array
    let required =[nameInput,emailInput,phoneInput]
    let hasWarnings = false;
    // Utilize a for loop to iterate of the entire required array
    for (let i = 0; i< required.length; i++){
    $('label[for="' + $(required[i]).attr('id') + '"]').removeClass('warning')
    if(required[i].val()===""){
        $('#message').html("Please fill out the required fields").addClass('warning');  // populate the message p with the following text:, add the warning class to this message
        $('label[for="' + $(required[i]).attr('id') + '"]').addClass('warning')
        hasWarnings = true;
    }

    }
   
    if(!hasWarnings){
        $("form").css({display: "none"});
        $("h2").html("Thanks for your feedback!");
        }
        });
    
        })
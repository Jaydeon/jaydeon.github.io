$(function() {
	
	$('.error').hide();
    $(".subbutton").click(function() {
    
      // validate and process form here
     
      $('.error').hide();
  	  var name = $("#name").val();
  		if (name == "") {
        $("#name_error").show();
        $("#name").focus();
        return false;
      }
  		var email = $("#email").val();
  		if (email == "") {
        $("#email_error").show();
        $("#email").focus();
        return false;
      }
      var email = $("#email").val();
  		if ( !isValidEmailAddress( email ) ) {
        $("#email_invalid_error").show();
        $("#email").focus();
        return false;
      }
  		var message = $("#message").val();
  		if (message == "") {
        $("#message_error").show();
        $("#message").focus();
        return false;
      }
      
      
  var dataString = '<p><strong>Name: </strong> '+ name + '</p><p><strong>Email: </strong> ' + email + '</p><p><strong>Message: </strong> ' + message + '</p>';
  $.ajax({
    type: "POST",
    url: "script/send.php",
    data: { data: dataString, senderAddress: email },
    success: function() {
      
      
      
      // show a success message to your visitors
      
     
     
     // clear input field values
      $("#name").val('');
      $("#email").val('');
      $("#message").val('');
      
      
    }
  });
  return false;
    
    });
});
  


// Validate the email address
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};
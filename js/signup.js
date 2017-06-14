
/* function to validate email addresses */
var IsEmail = function(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

/* function to validate correct phone format */
var IsPhone = function(phone){
        var regex = /\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b/;
        return regex.test(phone);
    }

/* function to validate correct zipcode format */
var IsZip = function(zip) {
        var regexUSZipcode = /\b[0-9]{5}(?:-[0-9]{4})?\b/;
        var regexCDNZipcode = /\b[ABCEGHJKLMNPRSTVXY][0-9][A-Z] [0-9][A-Z][0-9]\b/;
        var regexUKZipcode = /\b[A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2}\b/;
        return regexUSZipcode.test(zip) || regexCDNZipcode.test(zip) || regexUKZipcode.test(zip);
 }



var IsValidNewsletterData = function(){
	var errors = 0;
if($("input[name=firstname]").val().length==0){
	$(".nlc_firstName").addClass("errorInput");
	errors += 1;
}else{
	$(".nlc_firstName").removeClass("errorInput");
}

if($("input[name=lastname]").val().length==0){
	$(".nlc_lastName").addClass("errorInput");
	errors += 1;
}else{
	$(".nlc_lastName").removeClass("errorInput");
}

if(!IsEmail($("input[name=email]").val())){
	$(".nlc_email").addClass("errorInput");
	errors += 1;
}else{
	$(".nlc_email").removeClass("errorInput");
}

if(!IsZip($("input[name=zip]").val())){
		$(".nlc_zipCode").addClass("errorInput");
		errors += 1;
}else {
		$(".nlc_zipCode").removeClass("errorInput");
}

if($("input[name=terms]").val()=="0"){
	errors += 1;
}

if(errors>0){
	return false;
}

return true;
}

var clearNewsletterErrors = function(){
     	$(".nlc_firstName").removeClass("errorInput");
		$(".nlc_lastName").removeClass("errorInput");
		$(".nlc_email").removeClass("errorInput");
		$(".nlc_phoneNumber").removeClass("errorInput");
		$(".nlc_zipCode").removeClass("errorInput");
}

var submitNewsletterForm = function(){
    alert("submit")
    if(IsValidNewsletterData()){
     		/*serialize form data to send to Exact Target*/
     		var data2send = $(".newsletterdata").serialize();
     		console.log("data");
     		console.log(data2send);
     		/* submit validated data to Exact Target */
     	     $.ajax({
            type: 'get',
            url: "http://social.houseofblues.com/facebooksignups/_ajax_signup.php",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            data: data2send,
            success: function(data){
            alert("submitted");
            $(".vbox-close").trigger("click");
            clearNewsletterErrors();
            $("#hiddenFrame").attr('src','thankyou-newslettersignup.html');
            setTimeout(function() { location.reload(); }, 3000);
            },
            error: function(data){
            console.log("error");
            }
            });
     	 }
    }

$("form[name=newslettersignup]").submit(function(e){
  e.preventDefault();
  submitNewsletterForm();
})

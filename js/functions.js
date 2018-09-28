
//Disappearing of the Alert Box//

var closeAlertBox = document.getElementById('close');
var alertBox = document.getElementById('alert-box');


closeAlertBox.addEventListener('click', () => {
  alertBox.className="hidden";
});

//Functionallity of the SEND Button//

var send = document.getElementById('send');
var userSearch=document.getElementById('user-search');
var userMessage=document.getElementById('user-message');

send.addEventListener('click',(e) => {
	if (userSearch.value==="" || userMessage.value==="" ) {
		alert("Please search a user and put in a message");
		

	}
	else {
		alert("Your message has been sent");
	}

		
	
});


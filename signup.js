function validate(){
    var name = document.getElementById("name").value;
    
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var Password = document.getElementById("Password").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(Password.length <= 10){
      text = "Please Enter a Strong Password";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
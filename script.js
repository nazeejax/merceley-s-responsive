function validate(){
    var name= document.getElementById("name");
    var email=document.getElementById("email");
    var phone=document.getElementById("phone");
    var message=document.getElementById("message");

    if(name.value.trim()=="")
    {
        name.style.border="solid 1px red";
        return false;
    }
    else if(email.value.trim()=="")
    {
        email.style.border="solid 1px red";
        return false;
    }
    else if(phone.value.trim()=="")
    {
        phone.style.border="solid 1px red";
        return false;
    }
    else if(message.value.trim()=="")
    {
        message.style.border="solid 1px red";
        return false;
    }
}
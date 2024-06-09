
function validDetails(){
    let name  = document.querySelector('#name').value;
    let email  = document.querySelector('#email').value;
    let number  = document.querySelector('#number').value;
    let password  = document.querySelector('#Password').value;

    if(name == null || name == ""){
        alert("Please Enter your name..");
    }

    if(email == null || email == ""){
        alert("Please enter your valid email or double cheak it.. !!");
    }
    else{
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let isEmail = reg.test(email);

        if(isEmail){}
        else{
            alert("Please enter your email in valid format or double cheak it..");
        }
    }

    if(number == null || number == ""){
        document.querySelector("#num").innerHTML = "Enter Your valid mobile number !";
    }
    else{
        document.querySelector("#num").innerHTML = "";
    }

    if(password == null || password == ""){
        document.querySelector('#pass').innerHTML = "Enter your correct password";
    }
    else{
        document.querySelector("#pass").innerHTML = "";
    }
}

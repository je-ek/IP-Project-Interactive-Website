// Validation code for Login Page

const APIKEY = "620a546534fd6215658584ff";

function setInputError(inputElement, message) {
    inputElement.classList.add("Input_Error");
    inputElement.parentElement.querySelector(".Input_Error_Message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("Input_Error");
    inputElement.parentElement.querySelector(".Input_Error_Message").textContent = "";

}

function setMessageLogin(type, message){
    let elementMessage = $(".Form_Message");

    if(type == "Success"){
        elementMessage.html(message);
        elementMessage.addClass(`Form_Message_${type}`);
    }else{
        elementMessage.html(message);
        elementMessage.addClass(`Form_Message_${type}`);
    }
}

document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault();
    const loginForm = document.querySelector("#Login");
    const createAccountForm = document.querySelector("#CreateAccount");

    document.querySelector("#createAccountLink").addEventListener("click", function(e){
        e.preventDefault
        loginForm.classList.add("Form_Hidden");
        createAccountForm.classList.remove("Form_Hidden");
    });
    document.querySelector("#loginLink").addEventListener("click", function(e){
        e.preventDefault
        loginForm.classList.remove("Form_Hidden");
        createAccountForm.classList.add("Form_Hidden");
    });

    Array.from(document.querySelectorAll(".Form_Input")).forEach(function(element) {
        element.addEventListener("blur", function(e) {
            let SUPassword = document.getElementById("SignUpPassword").value;
            let USUPassword = document.getElementById("ConfirmSignUpPassword").value;
            console.log(SUPassword,USUPassword);
            if ((SUPassword.length > 0) && (USUPassword.length > 0) && (SUPassword !== USUPassword) && (e.target.id === "ConfirmSignUpPassword")){
                setInputError(element, "Passwords must match");
            }else{}
        });
        element.addEventListener("input", function(e){
            clearInputError(element);
        });        
    });

});

$(document).ready(function () {
    $("#signUpButton").on("click",function(e) {
        e.preventDefault(); 

        let username = $("#SignUpUsername").val();
        let email = $("#SignUpEmail").val();
        let password = $("#SignUpPassword").val();
        let confirmpassword = $("#ConfirmSignUpPassword").val();

        if(username,email,password,confirmpassword < 1) {
            var loginDetailsCheck = "Error";
            setMessageLogin(loginDetailsCheck,"Please fill out all the fields!");
            $("#CreateAccount").children(".Form_Input_Group").children(".Form_Input").addClass("Input_Error");
        }

        else{
            var loginDetailsCheck = "Success";
            setMessageLogin(loginDetailsCheck,"Account Successfully Created! Please login");
            $("#CreateAccount").children(".Form_Input_Group").children(".Form_Input").removeClass("Input_Error");
            let jsondata = {
                "Username": username,
                "Email": email,
                "Password": password
            }

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://ipweb-2564.restdb.io/rest/userlogininfo",
                "method": "POST",
                "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
                "processData": false,
                "data": JSON.stringify(jsondata)
            }
          
            $.ajax(settings).done(function (response) {
                console.log(response);
            });

            function moveUser() {
                $("#CreateAccount").addClass("Form_Hidden");
                $("#Login").removeClass("Form_Hidden");
                $(".Form_Message").removeClass("Form_Message_Success").html("");
            }
            setTimeout(moveUser,800);
        }
    });

    $("#loginButton").on("click",function(e) {
        e.preventDefault(); 

        let username = $("#loginUsername").val();
        let password = $("#loginPassword").val();
        
        let inputdata = {
            "Username": username,
            "Password": password
        }

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://ipweb-2564.restdb.io/rest/userlogininfo",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
          }
          
        $.ajax(settings).done(function (response) {
            for (let i = 0; i < response.length; i ++){

                if ((`${response[i].Username}` === username || `${response[i].Email}` === username) && (`${response[i].Password}` === password)){
                    var loginDetailsCheck = "Success";
                    setMessageLogin(loginDetailsCheck, "Login Successful! Enjoy");
                    $("#Login").children(".Form_Input_Group").children(".Form_Input").removeClass("Input_Error").addClass("Input_Success");
                    break;
                }else {
                    var loginDetailsCheck = "Error";
                    setMessageLogin(loginDetailsCheck, "Incorrect Username/Password combination");
                    $("#Login").children(".Form_Input_Group").children(".Form_Input").addClass("Input_Error").removeClass("Input_Success");
                }

            };

            setMessageLogin(loginDetailsCheck,);
           
        });
        
    });
});

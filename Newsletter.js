document.addEventListener('DOMContentLoaded', function(){

    let emailElement = document.getElementById("email");

    document.getElementById("success").classList.add("hidden")

    let btn = document.getElementById('subscribe');
    btn.addEventListener('click', clickListener);

    function clickListener() {
        if(!validateEmail()) {     
            document.getElementById("email").classList.add("error");
            document.getElementById("invalid").classList.remove("hidden");
        } else {
            document.getElementById("success").classList.remove("hidden");
            document.getElementById('emailname').innerHTML = emailElement.value;
        }

        let backBtn = document.getElementById('dismiss');
        backBtn.addEventListener('click', clickListenerBack);
    
        function clickListenerBack() {
            document.getElementById('success').classList.add("hidden");
            document.getElementById("email").value = "";
        }
    
    }

    function validateEmail() {
        email = emailElement.value;
        if (email.includes('@')) {
            return true;
        } else {
            return false;
        }
    }
})

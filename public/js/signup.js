let $signup_email = document.getElementById('signup_email');
let $signup_password = document.getElementById('signup_password');
let $signup_username = document.getElementById('signup_username');
const $signup_submit = document.getElementById('signup_submit');
let $signUpMessage = document.querySelector('#signUpMessage');

async function signup(e) {
    e.preventDefault();
    try {
        const response = await fetch("/users/signup", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                username: $signup_username.value,
                email: $signup_email.value,
                password: $signup_password.value
            })
        });
        const data = await response.json();
        $signUpMessage.textContent = data;
        console.log(data);
        if (data == "You successfully signed up!") {
            location.href = "/myposts";
        }
    } catch (error) {
        console.log(error);
    }
}

$signup_submit.addEventListener('click', signup);

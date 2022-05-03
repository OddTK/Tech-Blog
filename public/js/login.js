let $login_email = document.querySelector("#login_email");
let $login_password = document.querySelector("#login_password");
let $login_submit = document.querySelector("#login_submit");
let $loginMessage = document.querySelector("#loginMessage");

async function login(e) {
  e.preventDefault();
  try {
    const response = await fetch("/users/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        email: $login_email.value,
        password: $login_password.value,
      }),
    });
    const data = await response.json();
    $loginMessage.textContent = data;
    $login_email.value = "";
    $login_password.value = "";
    if (
      data === "You must provide a valid email and password" ||
      data === "No user with that email" ||
      data === "Invalid password"
    ) {
      return;
    }
    setTimeout(() => {
      location.href = "/myposts";
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}

$login_submit.addEventListener("click", login);

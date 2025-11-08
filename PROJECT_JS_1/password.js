document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let current = "0987654";

    const oldPassword = document.getElementById("old").value;
    const newPassword = document.getElementById("new").value;

    if (oldPassword != current) {
        document.getElementById("show").innerHTML = `<h1>old password is not match</h1>`
    } else if (newPassword.length < 6) {
        document.getElementById("show").innerHTML = `<h1>password contains must be 6 character</h1>`
    } else if (newPassword === current) {
        document.getElementById("show").innerHTML = `<h1>same as old password</h1>`
    } else {
        document.getElementById("show").innerHTML = `<h1>password updated</h1>`
    }
})
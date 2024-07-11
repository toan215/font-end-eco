const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

const express = require('express');
const pasth = require('path');
const bcrypt = require('bcrypt');

const app = express();

//use ejs as view engine
app.set('view.egine', 'ejs');

app.get("/", (req, res) => {
	res.render("login");
});

app.get("/signup", (req, res) => {
	res.render("signup");
});


const port = 5000;
app.listen(port,() => {
    console.log('Server running on Port : ${port}');
})
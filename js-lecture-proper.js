document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = {
        firstName: document.querySelector(".FirstnameTXT").value.trim(),
        middleName: document.querySelector(".MiddlenameTXT").value.trim(),
        lastName: document.querySelector(".LastnameTXT").value.trim(),
        yearCourse: document.querySelector(".CourseTXT").value.trim(),
        contact: document.querySelector(".ContactTXT").value.trim(),
		studentNo: document.querySelector(".StudentNoTXT").value.trim(),
	    username: document.getElementById("UsernameTXT").value.trim(),
        password: document.getElementById("PasswordTXT").value.trim(),
		gender: document.querySelector('input[name="Gender"]:checked').value.trim()
    };

    console.log(formData);
});
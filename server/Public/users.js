document.addEventListener('DOMContentLoaded', function () {

    const authButtons = document.getElementById("auth-buttons");

    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    const userMenu = document.getElementById('user-menu');

    // פתיחת טופס הרשמה
    registerBtn.addEventListener('click', function () {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        registerBtn.parentElement.classList.add("hidden");
    });

    // פתיחת טופס התחברות
    loginBtn.addEventListener('click', function () {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        registerBtn.parentElement.classList.add("hidden");
    });

    const userNameSpan = document.getElementById('user-name');

    // סגירת טופס הרשמה
    document.getElementById('register-form-btn-close').addEventListener('click', function () {
        registerForm.classList.add('hidden');
        authButtons.classList.remove("hidden");

        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('email').value = "";
    });

    // הרשמה
    document.getElementById('register-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        try {
            const response = await axios.post(
                "http://localhost:3000/users/register",
                userData,
            );

            if (response.status === 200) {
                alert("ההרשמה בוצעה בהצלחה");
                const user = response.data.user;
                localStorage.setItem("user", JSON.stringify(user));

                userMenu.classList.remove("hidden");
                registerForm.classList.add('hidden');

                userNameSpan.textContent = user.firstName + " " + user.lastName;
            }

        } catch (error) {
            if (error.response.status === 400) {
                console.error("כתובת הדוא''ל כבר קיימת במערכת");
                alert("כתובת הדוא''ל כבר קיימת במערכת");

            }
            if (error.response.status === 500) {
                console.error("משהו השתבש, נסו שוב")
                alert("משהו השתבש, נסו שוב")
            }

            console.error(error);
            registerForm.classList.add('hidden');
            authButtons.classList.remove("hidden");
        }
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('email').value = "";

    });

    // סגירת טופס התחברות
    document.getElementById('login-form-btn-close').addEventListener('click', function () {
        loginForm.classList.add('hidden');
        authButtons.classList.remove("hidden");

        document.getElementById('loginEmail').value="";
    });

    // התחברות
    document.getElementById('login-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const userData = {
            email: email
        };

        try {
            const response = await axios.post(
                "http://localhost:3000/users/login",
                userData
            );

            if (response.status === 200) {
                const user = response.data.user;

                localStorage.setItem("user", JSON.stringify(user));
                alert("התחברת בהצלחה");

                loginForm.classList.add('hidden');
                userMenu.classList.remove("hidden");

                userNameSpan.textContent = user.firstName + " " + user.lastName;
            }
           
        }
        catch (error) {
            if (error.response.status === 400) {
                console.error("המשתמש לא קיים במערכת");
                alert("המשתמש לא קיים במערכת");
            }
            if (error.response.status === 500) {
                console.error("משהו השתבש, נסו שוב")
                alert("משהו השתבש, נסו שוב")
            }
            console.error(error);
            loginForm.classList.add('hidden');
            authButtons.classList.remove("hidden");
        }
        document.getElementById('loginEmail').value="";
    });

    // לחיצה על כפתור עריכה ועדכון שדות טופס עריכת פרטים
    const editBtn = document.getElementById("edit-details-btn");
    const editForm = document.getElementById("edit-form");
    editBtn.addEventListener('click', function () {
        userMenu.classList.add("hidden");
        editForm.classList.remove("hidden");

        const user = JSON.parse(localStorage.getItem("user"));

        document.getElementById('editFirstName').value = user.firstName;
        document.getElementById('editLastName').value = user.lastName;
        document.getElementById('editEmail').value = user.email;
    });

    // סגירת טופס עריכת פרטים
    document.getElementById('edit-form-btn-close').addEventListener('click', function () {
        editForm.classList.add('hidden');
        userMenu.classList.remove("hidden");
    });

    // עריכת פרטים
    editForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const firstName = document.getElementById('editFirstName').value;
        const lastName = document.getElementById('editLastName').value;
        const email = document.getElementById('editEmail').value;

        const user = JSON.parse(localStorage.getItem("user"));

        const userData = {
            _id: user._id,
            firstName: firstName,
            lastName: lastName,
            email: email,
        };

        try {
            const response = await axios.put(
                `http://localhost:3000/users/update/${userData._id}/`,
                userData
            );
            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                console.log("User updated:", response.data);
                alert("העדכון בוצע בהצלחה");
                editForm.classList.add("hidden");
                userMenu.classList.remove("hidden");

                userNameSpan.textContent = firstName + " " + lastName;

            }
        } catch (error) {
            if (error.response.status === 404) {
                console.error("המשתמש לא קיים במערכת");
                alert("המשתמש לא קיים במערכת");
            }
            if (error.response.status === 500) {
                console.error("משהו השתבש, נסו שוב")
                alert("משהו השתבש, נסו שוב")
            }
            editForm.classList.add("hidden");
            userMenu.classList.remove("hidden");
        }
    });

    // מחיקת חשבון
    const deleteBtn = document.getElementById("delete-account-btn");
    deleteBtn.addEventListener('click', async function () {
        const user = JSON.parse(localStorage.getItem("user"));
        try {
            const response = await axios.delete(
                `http://localhost:3000/users/delete/${user._id}`
            );
            if (response.status === 200) {
                alert("המשתמש נמחק בהצלחה");

                authButtons.classList.remove("hidden");
                userMenu.classList.add("hidden");
            }
        } catch (error) {
            if (error.response.status === 404) {
                console.error("המשתמש לא קיים במערכת");
                alert("המשתמש לא קיים במערכת");
            }
            if (error.response.status === 500) {
                console.error("משהו השתבש, נסו שוב")
                alert("משהו השתבש, נסו שוב")
            }
        }
    });
    // התנתקות מהחשבון
    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem("user");
        userMenu.classList.add("hidden");
        authButtons.classList.remove("hidden");
    });
});
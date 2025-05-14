console.log("validation.js chargé !");
function validation_login() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    if (email === "" && password === "") {
        alert("Please fill in both the Email and Password fields.");
        return false;
    }
    if (email === "") {
        alert("Please enter your Email.");
        return false;
    }
    if (password === "") {
        alert("Please enter your Password.");
        return false;
    }

    return true;
}
function infos_validation() {
    let name = document.getElementById("FirstName").value.trim();
    let lastname = document.getElementById("LastName").value.trim();
    let address = document.getElementById("address").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();
    let phonenumber = document.getElementById("tel").value.trim();
    let password = document.getElementById("Pass").value.trim();
    let confirmpassword = document.getElementById("CPass").value.trim();
    let gender = document.querySelector('input[name="Sexe_Clt"]:checked'); 
    let wilaya = document.getElementById("wilaya").value.trim();

    if (name === "") {
        alert("Your name field should not be empty!");
        return false;
    }
    if (lastname === "") {
        alert("Your lastname field should not be empty!");
        return false;
    }
    if (email === "") {
        alert("Your email field should not be empty!");
        return false;
    }
    if (address === "") {
        alert("Your address field should not be empty!");
        return false;
    }

    age = parseInt(age, 10);
    if (isNaN(age) || age < 17 || age > 100) {
        alert("Your age must be between 17 and 100 only!");
        return false;
    }

    if (phonenumber.length !== 9 && phonenumber.length !== 10) {
        alert("Phone number must contain 9 or 10 digits!");
        return false;
    }

    if (password === "" || confirmpassword === "") {
        alert("Password fields must not be empty!");
        return false;
    }

    if (password.length < 8 || confirmpassword.length < 8) {
        alert("Password must contain at least 8 characters!");
        return false;
    }

    if (password !== confirmpassword) {
        alert("Password and confirmation password do not match!");
        return false;
    }

    if (!gender) {
        alert("Please select a gender.");
        return false;
    }

    if (!wilaya) {
        alert("Please select a wilaya.");
        return false;
    }

    alert("You selected:\nWilaya: " + wilaya + "\nGender: " + gender.value);
    return true;
}
function validation_order() {
    // Récupère toutes les couleurs cochées
    let couleurs = [];
    document.querySelectorAll('input[name="couleur"]:checked').forEach(function(checkbox) {
        couleurs.push(checkbox.value);
    });

    // Vérifie qu'au moins une couleur est sélectionnée
    if (couleurs.length === 0) {
        alert("Veuillez sélectionner au moins une couleur.");
        return false;
    }

    // Récupère la quantité
    let quantite = document.querySelector('select[name="quantite"]').value;

    // Affiche la confirmation
    let message = "Vous avez sélectionné :\n\n";
    message += "- Couleur(s) : " + couleurs.join(", ") + "\n";
    message += "- Quantité : " + quantite + "\n\n";
    message += "Confirmez-vous votre commande ?";

    return confirm(message); // Affiche une boîte de confirmation
}

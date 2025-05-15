<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = ""; // À adapter selon votre configuration
$dbname = "Base_Client";

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérer les données du formulaire
$No_Clt = $_POST['No_Clt'];
$Pno_Clt = $_POST['Pno_Clt'];
$Age_Clt = $_POST['Age_Clt'];
$Wi_Clt = $_POST['Wi_Clt'];
$Tel_Clt = $_POST['Tel_Clt'];
$Mail_Clt = $_POST['Mail_Clt'];
$Adr_Clt = $_POST['Adr_Clt'];
$Mot_Clt = $_POST['Mot_Clt'];
$Confirm_Mot_Clt = $_POST['Confirm_Mot_Clt'];
$Sexe_Clt = $_POST['Sexe_Clt'];

// Vérification simple que les mots de passe correspondent
if ($Mot_Clt !== $Confirm_Mot_Clt) {
    echo "<h2 style='color:red; text-align:center;'>❌ Passwords do not match!</h2>";
    exit;
}

// Hacher le mot de passe
$Mot_Clt_hashed = password_hash($Mot_Clt, PASSWORD_DEFAULT);

// Préparer la requête d'insertion
$sql = "INSERT INTO Client (No_Clt, Pno_Clt, Age_Clt, Wi_Clt, Tel_Clt, Mail_Clt, Adr_Clt, Mot_Clt, Sexe_Clt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssissssss", $No_Clt, $Pno_Clt, $Age_Clt, $Wi_Clt, $Tel_Clt, $Mail_Clt, $Adr_Clt, $Mot_Clt_hashed, $Sexe_Clt);

// Exécuter la requête
if ($stmt->execute()) {
    echo '
    <div style="text-align: center; font-family: Arial, sans-serif; margin-top: 50px;">
        <h2 style="color: #4caf50;">✅ Registration Successful!</h2>
        <p>You will be redirected to the login page in 5 seconds...</p>
        <a href="login.html" style="
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #f06292;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            transition: background-color 0.3s;
        " onmouseover="this.style.backgroundColor=\'#ec407a\'" onmouseout="this.style.backgroundColor=\'#f06292\'">
            Go to Login Now
        </a>
    </div>
    <script>
        setTimeout(function() {
            window.location.href = "login.html";
        }, 5000);
    </script>
    ';
} else {
    echo "❌ Error: " . $stmt->error;
}

// Fermer la connexion
$stmt->close();
$conn->close();
?>

<html>
<head>
    <meta charset="UTF-8" />
    <title>Login Page</title>
    <link rel="stylesheet" href="loginStyle.css">
</head>
<body>
    <form method="post" action="./page/loginCheck.php">
        <div class="login-container">
            <div class="header-layer">
                <h1>Animo<span>Bites</span></h1>
            </div>
            <div class="login">
                <div class="input-field" id = "user">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username">
                </div>
                <div class="input-field">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password">
                </div>
                <div class="remember-me">
                    <input type="checkbox" id="remember" name="remember">
                    <label for="remember">Remember Me</label>
                </div>
                <button name="loginButton" class="login-button">Log in</button>
                <a class="forgot-password" href="">Forgot Password?</a>
                
            </div>
                <a class="home-link" href="#">← Go Back to Home</a>
        </div>
    </form>

    <?php
         if (isset($_GET["error"])) {
            $error = $_GET["error"];

            if ($error == 1) {
                echo "<script>alert('Username or password is incorrect.')</script>";
            }
         }
    ?>
</body>
</html>
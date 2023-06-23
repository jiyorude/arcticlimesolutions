  <link rel="apple-touch-icon" sizes="180x180" href="/Favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png">
	<link rel="manifest" href="/Favicon/site.webmanifest">
	<link rel="mask-icon" href="/Favicon/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="shortcut icon" href="/Favicon/favicon.ico">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-config" content="/Favicon/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">

<?php include "templates/include/header.php" ?>

      <form action="admin.php?action=login" method="post" style="width: 50%;">
        <input type="hidden" name="login" value="true" />

<?php if ( isset( $results['errorMessage'] ) ) { ?>
        <div class="errorMessage"><?php echo $results['errorMessage'] ?></div>
<?php } ?>

        <ul>

          <li>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Your admin username" required autofocus maxlength="20" />
          </li>

          <li>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Your admin password" required maxlength="20" />
          </li>

        </ul>

        <div class="buttons">
          <input type="submit" name="login" value="Login" />
        </div>

      </form>

<?php include "templates/include/footer.php" ?>


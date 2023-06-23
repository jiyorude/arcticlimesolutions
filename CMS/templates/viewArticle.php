      <link rel="apple-touch-icon" sizes="180x180" href="/Favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png">
	<link rel="manifest" href="/Favicon/site.webmanifest">
	<link rel="mask-icon" href="/Favicon/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="shortcut icon" href="/Favicon/favicon.ico">
	<link rel="stylesheet" type="text/css" href="/CMS/style.css" />
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-config" content="/Favicon/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">

<?php include "templates/include/header.php" ?>

      <h1 style="width: 85%;"><?php echo htmlspecialchars( $results['article']->title )?></h1>
      <div style="width: 85%; font-family: ClearSansThin; font-style: italic; padding-top: -5px; padding-bottom:20px;"><?php echo htmlspecialchars( $results['article']->summary )?></div>
      <div style="width: 95%;"><?php echo $results['article']->content?></div>
      <p class="pubDate" style="padding-top: 20px;">Published on <?php echo date('j F Y', $results['article']->publicationDate)?></p>

      <p><a href="./">Return to Newspage</a></p>

<?php include "templates/include/footer.php" ?>


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

      <ul id="headlines">

<?php foreach ( $results['articles'] as $article ) { ?>

        <li>
          <h2>
            <span class="pubDate"><?php echo date('j F', $article->publicationDate)?></span><a href=".?action=viewArticle&amp;articleId=<?php echo $article->id?>"><?php echo htmlspecialchars( $article->title )?></a>
          </h2>
          <p class="summary" style= "padding-top: -10px;"><?php echo htmlspecialchars( $article->summary )?></p>
        </li>

<?php } ?>

      </ul>

      <p><a href="./?action=archive" style="text-decoration:none;">News Archive</a></p>
      <p><a href="/index.html" style="text-decoration:none;">Back to Homepage</a></p>

<?php include "templates/include/footer.php" ?>


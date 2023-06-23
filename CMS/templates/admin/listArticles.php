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

      <div id="adminHeader">
        <h2>ARCTIC LIME NEWS PANEL</h2>
        <p>You are logged in as <b><?php echo htmlspecialchars( $_SESSION['username']) ?></b>. <a href="admin.php?action=logout"?>Log out</a></p>
      </div>

      <h1>All Articles</h1>

<?php if ( isset( $results['errorMessage'] ) ) { ?>
        <div class="errorMessage"><?php echo $results['errorMessage'] ?></div>
<?php } ?>


<?php if ( isset( $results['statusMessage'] ) ) { ?>
        <div class="statusMessage"><?php echo $results['statusMessage'] ?></div>
<?php } ?>

      <table>
        <tr>
          <th>Publication Date</th>
          <th>Article</th>
        </tr>

<?php foreach ( $results['articles'] as $article ) { ?>

        <tr onclick="location='admin.php?action=editArticle&amp;articleId=<?php echo $article->id?>'">
          <td><?php echo date('j M Y', $article->publicationDate)?></td>
          <td>
            <?php echo $article->title?>
          </td>
        </tr>

<?php } ?>

      </table>

      <p><?php echo $results['totalRows']?> article<?php echo ( $results['totalRows'] != 1 ) ? 's' : '' ?> in total.</p>

      <p><a href="admin.php?action=newArticle">Add a New Article</a></p>

<?php include "templates/include/footer.php" ?>


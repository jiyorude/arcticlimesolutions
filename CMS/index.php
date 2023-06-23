  <link rel="apple-touch-icon" sizes="180x180" href="/Favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png">
	<link rel="manifest" href="/Favicon/site.webmanifest">
	<link rel="mask-icon" href="/Favicon/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="shortcut icon" href="/Favicon/favicon.ico">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-config" content="/Favicon/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">

<?php

require( "config.php" );
$action = isset( $_GET['action'] ) ? $_GET['action'] : "";

switch ( $action ) {
  case 'archive':
    archive();
    break;
  case 'viewArticle':
    viewArticle();
    break;
  default:
    homepage();
}

function archive() {
  $results = array();
  $data = Article::getList();
  $results['articles'] = $data['results'];
  $results['totalRows'] = $data['totalRows'];
  $results['pageTitle'] = "ARCTIC LIME AudioVisual - News Archive";
  require( TEMPLATE_PATH . "/archive.php" );
}

function viewArticle() {
  if ( !isset($_GET["articleId"]) || !$_GET["articleId"] ) {
    homepage();
    return;
  }

  $results = array();
  $results['article'] = Article::getById( (int)$_GET["articleId"] );
  $results['pageTitle'] = "ARCTIC LIME AudioVisual -∏" . $results['article']->title;
  require( TEMPLATE_PATH . "/viewArticle.php" );
}

function homepage() {
  $results = array();
  $data = Article::getList( HOMEPAGE_NUM_ARTICLES );
  $results['articles'] = $data['results'];
  $results['totalRows'] = $data['totalRows'];
  $results['pageTitle'] = "ARCTIC LIME AudioVisual - News";
  require( TEMPLATE_PATH . "/homepage.php" );
}

?>

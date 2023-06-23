<?php
ini_set( "display_errors", true );
date_default_timezone_set( "Europe/Amsterdam" );  // http://www.php.net/manual/en/timezones.php
define( "DB_DSN", "mysql:host=rdbms.strato.de;dbname=dbs5897667" );
define( "DB_USERNAME", "dbu2093878" );
define( "DB_PASSWORD", "writemorearcticlime2022@@" );
define( "CLASS_PATH", "classes" );
define( "TEMPLATE_PATH", "templates" );
define( "HOMEPAGE_NUM_ARTICLES", 10 );
define( "ADMIN_USERNAME", "ARCTICLIME" );
define( "ADMIN_PASSWORD", "sI7hqHzw" );
require( CLASS_PATH . "/Article.php" );

function handleException( $exception ) {
  echo "Sorry, a problem occurred. Please try later.";
  error_log( $exception->getMessage() );
}

set_exception_handler( 'handleException' );
?>

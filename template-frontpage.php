<?php

/**
* Template Name: frontpage
*
* @package nata_theme
*/

get_header();

echo do_shortcode('[lifterlms_courses]');

get_sidebar();
get_footer(); ?>

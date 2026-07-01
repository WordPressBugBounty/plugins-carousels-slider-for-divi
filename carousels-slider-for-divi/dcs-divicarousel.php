<?php

/*
Plugin Name: Divi Carousel Lite
Plugin URI:  http://wordpress.org/plugins/carousels-slider-for-divi/
Description: Carousels Slider For Divi
Version:     2.0.1
Author:      Divi Carousels
Author URI:  https://divicarousels.com/
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: divi-carousels-lite
Domain Path: /languages
*/
if ( !defined( 'ABSPATH' ) ) {
    exit;
}
if ( !function_exists( 'csfd_fs' ) ) {
    function csfd_fs() {
        global $csfd_fs;
        if ( !isset( $csfd_fs ) ) {
            require_once dirname( __FILE__ ) . '/vendor/freemius/start.php';
            $csfd_fs = fs_dynamic_init( array(
                'id'               => '11830',
                'slug'             => 'carousels-slider-for-divi',
                'type'             => 'plugin',
                'public_key'       => 'pk_0fb838f35993dc976ba20cf9825a8',
                'is_premium'       => false,
                'has_addons'       => false,
                'has_paid_plans'   => true,
                'is_org_compliant' => true,
                'has_affiliation'  => 'selected',
                'menu'             => array(
                    'slug' => 'csfd-divi-carousels-lite',
                ),
                'is_live'          => true,
            ) );
        }
        return $csfd_fs;
    }

    csfd_fs();
    do_action( 'csfd_fs_loaded' );
}
define( 'DCS_DIVICAROUSEL_VERSION', '2.0.1' );
define( 'DCS_DIVICAROUSEL_FILE', __FILE__ );
define( 'DCS_DIVICAROUSEL_DIR', plugin_dir_path( __FILE__ ) );
define( 'DCS_DIVICAROUSEL_PATH', __DIR__ );
define( 'DCS_DIVICAROUSEL_URL', plugins_url( '', DCS_DIVICAROUSEL_FILE ) );
define( 'DCS_DIVICAROUSEL_PLUGIN_ASSETS', trailingslashit( DCS_DIVICAROUSEL_URL . '/admin/img' ) );
function activate_dcs_divicarousel() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-dcs-divicarousel-activator.php';
    DCS_Divicarousel_Activator::activate();
}

function deactivate_dcs_divicarousel() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-dcs-divicarousel-deactivator.php';
    DCS_Divicarousel_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_dcs_divicarousel' );
register_deactivation_hook( __FILE__, 'deactivate_dcs_divicarousel' );
require_once plugin_dir_path( __FILE__ ) . 'includes/class-dcs-divicarousel.php';
function dcs_initialize_extension() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/dcs-divicarousel.php';
}

add_action( 'divi_extensions_init', 'dcs_initialize_extension' );
function run_dcs_divicarousel() {
    $plugin = new DCS_Carousel();
    $plugin->run();
}

run_dcs_divicarousel();
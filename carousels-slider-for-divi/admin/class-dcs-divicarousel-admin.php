<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       divicarousels.com
 * @since      1.0.0
 *
 * @package    Divicarousel8
 * @subpackage Divicarousel8/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Divicarousel8
 * @subpackage Divicarousel8/admin
 * @author     Md Shariful Islam <si.nayon@gmail.com>
 */
class DCS_Divicarousel_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		add_filter( 'plugin_action_links_' . plugin_basename( DCS_DIVICAROUSEL_FILE ), array( __CLASS__, 'dcs_carousel_action_links' ) );
		add_action( 'admin_menu', array( __CLASS__, 'add_menu' ), 99 );
	}
	public static function dcs_carousel_action_links( $links ) {
		$links[] = '<a href="'. esc_url( get_admin_url(null, 'options-general.php?page=csfd-divi-carousels-lite') ) .'">Settings</a>'; 
		$links[] = '<a href="'. esc_url( get_admin_url(null, 'options-general.php?page=csfd-divi-carousels-lite-account') ) .'">License</a>'; 
		return $links;
	 }

	public static function add_menu() {
		add_menu_page(
			__( 'DiviCarousel', 'divi-carousels-lite' ),
			__( 'DiviCarousel', 'divi-carousels-lite' ),
			'manage_options',
			'csfd-divi-carousels-lite',
			array( __CLASS__, 'render_main' ),
			DCS_DIVICAROUSEL_PLUGIN_ASSETS . "/icon.png",
			111
		);

	}
	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Divicarousel8_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Divicarousel8_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/divicarousel-admin.css', array(), 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Divicarousel8_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Divicarousel8_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/divicarousel-admin.js', array( 'jquery' ), $this->version, false );

	}
	private static function load_template( $template ) {
		$file = DCS_DIVICAROUSEL_DIR . 'templates/admin-' . $template . '.php';
		if ( is_readable( $file ) ) {
			include $file;
		}
	}

	public static function render_main() {
		self::load_template( 'main' );
	}

}

<?php

class DCS_Divicarousel extends DiviExtension {

	/**
	 * The gettext domain for the extension's translations.
	 *
	 * @since 1.0.0
	 *
	 * @var string
	 */
	public $gettext_domain = 'dcs-divicarousel';

	/**
	 * The extension's WP Plugin name.
	 *
	 * @since 1.0.0
	 *
	 * @var string
	 */
	public $name = 'dcs-divicarousel';

	/**
	 * The extension's version
	 *
	 * @since 1.0.0
	 *
	 * @var string
	 */
	public $version = '2.0.1';

	/**
	 * DIVI8_Divicarousel8 constructor.
	 *
	 * @param string $name
	 * @param array  $args
	 */
	public function __construct( $name = 'dcs-divicarousel', $args = array() ) {
		$this->plugin_dir     = plugin_dir_path( __FILE__ );
		$this->plugin_dir_url = plugin_dir_url( $this->plugin_dir );

		parent::__construct( $name, $args );
	}
}

new DCS_Divicarousel;
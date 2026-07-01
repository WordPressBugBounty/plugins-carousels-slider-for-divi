// External Dependencies
import React,{ Component } from 'react';
import Swiper from '../../../public/js/swiper-bundle.min.js';
// Internal Dependencies
import './style.css';
import $ from 'jquery';

class DCS_ImageCarousel extends Component {

  static slug = 'divi8_image_carousel';
  
  randStr(len, chars='abc123') {
    let s = '';
    while (len--) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
  }
  sliderid = "imageswiper"+this.randStr(7);
  previd = "swiper-button-prev"+this.randStr(7);
  nextid = "swiper-button-next"+this.randStr(7);
  pagid = "swiper-pagination"+this.randStr(7);
  scrollid = "swiper-scrollbar"+this.randStr(7);

  constructor(props){
    super(props);
    this.state = {}
  }

  static css(props){
    var css = [];
    var pagination_show_hide;
    if (props.divi8_nav_show_hide === "on"){
      pagination_show_hide = "block";
    }else{
      pagination_show_hide = "none";
    }
    var navigation_show_hide;
    if (props.divi8_arrow_show_hide === "on"){
      navigation_show_hide = "";
    }else{
      navigation_show_hide = "none";
    }
    var text_show_hide;
    if (props.divi8_text_show_hide === "on"){
      text_show_hide = "";
    }else{
      text_show_hide = "none";
    }

    if (props.divi8_nav_bullettype === "long_active"){
      css.push([
        {
          selector : '%%order_class%% .swiper-pagination-bullet-active',
          declaration: `width: 25px !important; height: ${props.divi8_pagi_size}px; border-radius: 4px;`,
        },
      ])
    }
    if (props.divi8_arrow_position_vertical === "top"){
      css.push([
        {
          selector : '%%order_class%% .swiper-navi-container',
          declaration: `top: 0%;`,
        },
      ])
    }
    if (props.divi8_arrow_position_vertical === "bottom"){
      css.push([
        {
          selector : '%%order_class%% .swiper-navi-container',
          declaration: `top: auto;`,
        },
      ])
    }
    // pagination 
    css.push([
      {
        selector : '%%order_class%% .swiper-pagination',
        declaration: `margin: 15px; position: relative; display: ${pagination_show_hide}; text-align:${props.divi8_pagi_alignment}`,
      },
      {
        selector : '%%order_class%% .swiper-navi-container',
        declaration: `justify-content: ${props.divi8_arrow_position_horizontal};`,
      },
      {
        selector : '%%order_class%% .swiper-container-3d .swiper-slide-shadow-left',
        declaration: `background-image: linear-gradient(to left,${props.divi8_effect_slideshadow_dark},${props.divi8_effect_slideshadow_light});`,
      },
      {
        selector : '%%order_class%% .swiper-container-3d .swiper-slide-shadow-right',
        declaration: `background-image: linear-gradient(to right,${props.divi8_effect_slideshadow_dark},${props.divi8_effect_slideshadow_light});`,
      },
      {
        selector : '%%order_class%% .swiper-pagination-bullet',
        declaration: `width: ${props.divi8_pagi_size}px; height: ${props.divi8_pagi_size}px; background-color: ${props.divi8_pagi_bullet_color};`,
      },
      {
        selector : '%%order_class%% .swiper-button-prev',
        declaration: `display: ${navigation_show_hide}; color: ${props.divi8_arrow_color}; padding: ${props.divi8_arrow_padding}px; background-color: ${props.divi8_arrow_background}; border-radius: ${props.divi8_arrow_border_radius}px;`,
      },
      {
        selector : '%%order_class%% .swiper-button-next',
        declaration: `display: ${navigation_show_hide}; color: ${props.divi8_arrow_color}; padding: ${props.divi8_arrow_padding}px; background-color: ${props.divi8_arrow_background}; border-radius: ${props.divi8_arrow_border_radius}px;`,
      },
      {
        selector : '%%order_class%% .swiper-button-prev:hover',
        declaration: `padding: ${props.divi8_arrow_padding_hover}px;
        background-color: ${props.divi8_arrow_background_hover};
        color: ${props.divi8_arrow_color_hover};`,
      },
      {
        selector : '%%order_class%% .swiper-button-next:hover',
        declaration: `padding: ${props.divi8_arrow_padding_hover}px;
        background-color: ${props.divi8_arrow_background_hover};
        color: ${props.divi8_arrow_color_hover};`,
      },
      {
        selector : '%%order_class%% .swiper-button-next:after, %%order_class%% .swiper-button-prev:after',
        declaration: `    
        font-size: ${props.divi8_icon_size}px;`,
      },
      {
        selector : '%%order_class%% .carousel_content span',
        declaration: `font-size: ${props.headline_fontsize}px; padding: ${props.headline_padding}; color: ${props.headline_color};`,
      },
      {
        selector : '%%order_class%% .carousel_content p',
        declaration: `font-size: ${props.desc_fontsize}px; padding: ${props.desc_padding}; color: ${props.desc_color};`,
      },
      {
        selector : '%%order_class%% .divi8-icon-right, %%order_class%% .divi8-icon-left',
        declaration: `font-size: ${props.divi8_icon_size}px !important;`,
      },
      {
        selector : '%%order_class%% .divi8_image_carousel_item:last-child img',
        declaration: `width: ${props.divi8_img_size}%;`,
      },
      {
        selector : '%%order_class%% .divi8_image_carousel_item:last-child',
        declaration: `height: 100%;`,
      },
      {
        selector : '%%order_class%% .img_caro_text',
        declaration: `display:${text_show_hide};`,
      },

    ]);
    // custom margin and padding
    if(props.wrapper_spacing_margin !== undefined){
      var wrapper_spacing_margin = props.wrapper_spacing_margin.split("|");
      css.push([
        {
          selector : '%%order_class%% .own',
          declaration: `margin-top: ${wrapper_spacing_margin[0]}; margin-right:${wrapper_spacing_margin[1]}; margin-bottom:${wrapper_spacing_margin[2]};margin-left:${wrapper_spacing_margin[3]};`,
        }
      ])
    }
    if(props.wrapper_spacing_padding !== undefined){
      var wrapper_spacing_padding = props.wrapper_spacing_padding.split("|");
      css.push([
        {
          selector : '%%order_class%% .own',
          declaration: `padding-top: ${wrapper_spacing_padding[0]}; padding-right:${wrapper_spacing_padding[1]}; padding-bottom:${wrapper_spacing_padding[2]};padding-left:${wrapper_spacing_padding[3]};`,
        }
      ])
    }
    if(props.item_spacing_margin !== undefined){
      var item_spacing_margin = props.item_spacing_margin.split("|");
      css.push([
        {
          selector : '%%order_class%% .divi8_content_carousel_item',
          declaration: `margin-top: ${item_spacing_margin[0]}; margin-right:${item_spacing_margin[1]}; margin-bottom:${item_spacing_margin[2]};margin-left:${item_spacing_margin[3]};`,
        }
      ])
    }
    if(props.item_spacing_padding !== undefined){
      var item_spacing_padding = props.item_spacing_padding.split("|");
      css.push([
        {
          selector : '%%order_class%% .divi8_content_carousel_item',
          declaration: `padding-top: ${item_spacing_padding[0]}; padding-right:${item_spacing_padding[1]}; padding-bottom:${item_spacing_padding[2]};padding-left:${item_spacing_padding[3]};`,
        }
      ])
    }
    if(props.nav_spacing_margin !== undefined){
      var nav_spacing_margin = props.nav_spacing_margin.split("|");
      css.push([
        {
          selector : '%%order_class%% .swiper-navi-container',
          declaration: `margin-top: ${nav_spacing_margin[0]}; margin-right:${nav_spacing_margin[1]}; margin-bottom:${nav_spacing_margin[2]};margin-left:${nav_spacing_margin[3]};`,
        }
      ])
    }
    if(props.navi_spacing_padding !== undefined){
      var navi_spacing_padding = props.navi_spacing_padding.split("|");
      css.push([
        {
          selector : '%%order_class%% .swiper-navi-container',
          declaration: `padding-top: ${navi_spacing_padding[0]}; padding-right:${navi_spacing_padding[1]}; padding-bottom:${navi_spacing_padding[2]};padding-left:${navi_spacing_padding[3]};`,
        }
      ])
    }
    if(props.pagi_spacing_margin !== undefined){
      var pagi_spacing_margin = props.pagi_spacing_margin.split("|");
      css.push([
        {
          selector : '%%order_class%% .swiper-pagination',
          declaration: `margin-top: ${pagi_spacing_margin[0]}; margin-right:${pagi_spacing_margin[1]}; margin-bottom:${pagi_spacing_margin[2]};margin-left:${pagi_spacing_margin[3]};`,
        }
      ])
    }
    if(props.pagi_spacing_padding !== undefined){
      var pagi_spacing_padding = props.pagi_spacing_padding.split("|");
      css.push([
        {
          selector : '%%order_class%% .swiper-pagination',
          declaration: `padding-top: ${pagi_spacing_padding[0]}; padding-right:${pagi_spacing_padding[1]}; padding-bottom:${pagi_spacing_padding[2]};padding-left:${pagi_spacing_padding[3]};`,
        }
      ])
    }
    if(props.img_caro_text_padding !== undefined){
      var img_caro_text_padding = props.img_caro_text_padding.split("|");
      css.push([
        {
          selector : '%%order_class%% .img_caro_text',
          declaration: `padding-top: ${img_caro_text_padding[0]}; padding-right:${img_caro_text_padding[1]}; padding-bottom:${img_caro_text_padding[2]};padding-left:${img_caro_text_padding[3]};`,
        }
      ])
    }
    if(props.img_caro_text_margin !== undefined){
      var img_caro_text_margin = props.img_caro_text_margin.split("|");
      css.push([
        {
          selector : '%%order_class%% .img_caro_text',
          declaration: `margin-top: ${img_caro_text_margin[0]}; margin-right:${img_caro_text_margin[1]}; margin-bottom:${img_caro_text_margin[2]};margin-left:${img_caro_text_margin[3]};`,
        }
      ])
    }

    if (props.divi8_title_padding !== undefined){
      var title_padding = props.divi8_title_padding.split("|");
      css.push([
        {
          selector : '%%order_class%% .carousel_content span',
          declaration: `padding-top: ${title_padding[0]}; padding-right:${title_padding[1]}; padding-bottom:${title_padding[2]};padding-left:${title_padding[3]};`,
        }
      ])
    }
    if (props.divi8_title_margin !== undefined){
      var title_margin = props.divi8_title_margin.split("|");
      css.push([
        {
          selector : '%%order_class%% .carousel_content span',
          declaration: `margin-top: ${title_margin[0]}; margin-right:${title_margin[1]}; margin-bottom:${title_margin[2]};margin-left:${title_margin[3]};`,
        }
      ])
    }

    if (props.divi8_content_padding !== undefined){
      var content_padding = props.divi8_content_padding.split("|");
      css.push([
        {
          selector : '%%order_class%% .carousel_content p',
          declaration: `padding-top: ${content_padding[0]}; padding-right:${content_padding[1]}; padding-bottom:${content_padding[2]};padding-left:${content_padding[3]};`,
        }
      ])
    }
    if (props.divi8_title_margin !== undefined){
      var content_margin = props.divi8_title_margin.split("|");
      css.push([
        {
          selector : '%%order_class%% .carousel_content p',
          declaration: `margin-top: ${content_margin[0]}; margin-right:${content_margin[1]}; margin-bottom:${content_margin[2]};margin-left:${content_margin[3]};`,
        }
      ])
    }
    
    return css;
  }
  
  componentDidMount() {
    this.instanceSwiper()
  }

  instanceSwiper() {
    // var autoplay = false;
    // if (this.props.divi8_autoplay === "on"){
    //   autoplay = true;
    // }
    // if (this.props.divi8_autoplay_loop === "off"){
    //   autoplay = false;
    // }
  
    var swiperOptions = {
      slidesPerView: this.props.divi8_sliderperview, 
      breakpoints: {
        1024: {
          slidesPerView: parseInt(this.props.divi8_sliderperview),
        },
        768: {
          slidesPerView: 2,
        },
        479: {
          slidesPerView: 1,
        },
        200: {
          slidesPerView: 1,
        },
      },
      // loop : true,
      // autoHeight: "on" === this.props.divi8_auto_height,
      direction: 'horizontal',
      spaceBetween:  this.props.divi8_sliderspcbtn,
      effect: this.props.divi8_carousel_effects_types,
      coverflowEffect: {
        rotate: this.props.divi8_effect_sliderotate,
        stretch: this.props.divi8_effect_slidestretch,
        depth: this.props.divi8_effect_slidedepth,
        modifier: 1,
        slideShadows: this.props.divi8_effect_slideshadow,
      },
      grabCursor: this.props.divi8_nav_grab_cursor,
      zoom: true,
      speed: 1000,
      autoplay: {
        enabled: "on" === this.props.divi8_autoplay,
        delay: parseInt(this.props.divi8_slider_autoplaydelay),
      },
      // If we need pagination
      pagination: {
        el: '.'+this.pagid,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.'+this.nextid,
        prevEl: '.'+this.previd,
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.'+this.scrollid,
      },
      observer: true,  
      observeParents: true,
    };
  this.swiperObj = new Swiper("."+this.sliderid, swiperOptions);
    this.swiperObj.el.addEventListener('mouseenter', () => {
      this.swiperObj.autoplay.stop();
    });
    this.swiperObj.el.addEventListener('mouseleave', () => {
      this.swiperObj.autoplay.start();
    });
  }
  componentDidUpdate() {

    $(".divi8_image_carousel_item").addClass("swiper-slide");

    var autoplay;
    if (this.props.divi8_autoplay === "on"){
      autoplay = true;
    }
    if (this.props.divi8_autoplay_loop === "off"){
      autoplay = false;
    }

    // Fade Effects
    this.swiperObj.params.effect = this.props.divi8_carousel_effects_types;
    // this.swiperObj.params.slidesPerView = this.props.divi8_sliderperview;
    this.swiperObj.params.breakpoints["1024"].slidesPerView = parseInt(this.props.divi8_sliderperview);
    this.swiperObj.params.breakpoints["768"].slidesPerView = parseInt(this.props.divi8_sliderperview_tablet);
    this.swiperObj.params.breakpoints["479"].slidesPerView = parseInt(this.props.divi8_sliderperview_phone);
    this.swiperObj.params.breakpoints["200"].slidesPerView = parseInt(this.props.divi8_sliderperview_phone);
    this.swiperObj.params.spaceBetween = +this.props.divi8_sliderspcbtn;
    this.swiperObj.params.grabCursor = "on" === this.props.divi8_nav_grab_cursor;
    this.swiperObj.params.mousewheel.enabled =  "on" === this.props.divi8_nav_mousewheel;
    this.swiperObj.params.speed = parseInt(this.props.divi8_sliderspeed);
    this.swiperObj.params.coverflowEffect.rotate = +this.props.divi8_effect_sliderotate;
    this.swiperObj.params.coverflowEffect.stretch =  +this.props.divi8_effect_slidestretch;
    this.swiperObj.params.coverflowEffect.depth = +this.props.divi8_effect_slidedepth;
    // this.swiperObj.params.loop = true;
    this.swiperObj.params.autoplay.enabled = autoplay;
    this.swiperObj.params.autoplay.delay = +this.props.divi8_slider_autoplaydelay;
    if(this.props.divi8_nav_grab_cursor === "off"){
      this.swiperObj.unsetGrabCursor();
    }else{
      this.swiperObj.setGrabCursor();
    }
    //keyboard on off
    if(this.props.divi8_nav_keyboard === "off"){
      this.swiperObj.keyboard.disable();
    }else{
      this.swiperObj.keyboard.enable();
    }
    //Mousewheel on off
    if(this.props.divi8_nav_mousewheel === "off"){
    this.swiperObj.mousewheel.disable();
    }else{
      this.swiperObj.mousewheel.enable();
    }
    if(this.props.divi8_nav_dynamicbullet === "on"){
      this.swiperObj.params.pagination.dynamicBullets = true;
    }else{
      this.swiperObj.params.pagination.dynamicBullets = false;
    }
    //Slide Shadow Type 
    if(this.props.divi8_effect_slideshadow === "on"){
      this.swiperObj.params.coverflowEffect.slideShadows = true;
    }else{
      this.swiperObj.params.coverflowEffect.slideShadows = false;
    }

    this.swiperObj.autoplay.stop();
    if (autoplay){
      this.swiperObj.autoplay.start();
    }
    this.swiperObj.update();

  }
  
  componentWillReceiveProps = (nextProps) => {
    const { list: oldList } = this.props
    const { list: newList } = nextProps
    if (oldList !== newList) {
        this.swiperObj.destroy();
        this.swiperObj = null;
        this.instanceSwiper()
    }
  }
  componentWillUnmount() {
    if ( this.swiperObj.destroy) {
        this.swiperObj.destroy();
        this.swiperObj = null;
   }
  }

  leftIconShow(){
    if (this.props.divi8_left_icon){
      return (
        <i className={'et-pb-icon divi8-icon-left'}>
          {window.ET_Builder.API.Utils.processFontIcon(this.props.divi8_left_icon)}
        </i>
      )
    }else{
      return(
        <i className={'et-pb-icon divi8-icon-left'}>4</i>
      )
    }
  }
  rightIconShow(){
    if (this.props.divi8_right_icon){
      return (
        <i className={'et-pb-icon divi8-icon-right'}>
          {window.ET_Builder.API.Utils.processFontIcon(this.props.divi8_right_icon)}
        </i>
      )
    }else{
      return(
        <i className={'et-pb-icon divi8-icon-right'}>5</i>
      )
    }
  }
  render() {

    var sliderclassname = "swiper-container "+ this.sliderid;
    var nextel = "swiper-button-next " + this.nextid;
    var prevel = "swiper-button-prev " + this.previd;
    var pagicls = "swiper-pagination " + this.pagid;

    return (
      <div className="own">
        <div className={sliderclassname}>
          <div className="swiper-wrapper">
            {this.props.content}
          </div>  
        </div>
        <div className="swiper-navi-container">
          <div className={prevel}>{this.leftIconShow()}</div>
          <div className={nextel}>{this.rightIconShow()}</div>
        </div>
        <div className={pagicls}></div>
      </div>
    ) ;
  }
}

export default DCS_ImageCarousel;
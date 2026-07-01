// External Dependencies
import React,{ Component } from 'react';
import Swiper from '../../../public/js/swiper-bundle.min.js';

// Internal Dependencies
import './style.css';
import $ from 'jquery';
class TestimonialCarouselDivi8 extends Component {

  static slug = 'divi8_testimonial_carousel_lite';
  randStr(len, chars='abc123') {
    let s = '';
    while (len--) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
  }
  sliderid = "testiswiper"+this.randStr(7);
  previd = "testi-swiper-button-prev"+this.randStr(7);
  nextid = "testi-swiper-button-next"+this.randStr(7);
  pagid = "testi-swiper-pagination"+this.randStr(7);
  scrollid = "testi-swiper-scrollbar"+this.randStr(7);
  constructor(props){
    super(props);
    this.state = {
      slidesPerView: 3, 
      direction: 'horizontal',
      loop: true,
      spaceBetween:  10,
      effect: 'slide',
      coverflowrotate: 0,
      coverflowstretch: 80,
      coverflowdepth: 200,
      coverflowmodifier: 1,
      coverflowslideShadows: false,
      grabCursor: true,
      cubeshadow: true,
      cubeslideShadows: true,
      cubeshadowOffset: 20,
      cubeshadowScale: 0.94,
      centeredSlides: true,
      zoom: true,
      speed: 1000,
      autoplaydelay: 3000,
      
    }
  }
  static css(props){
    var css = [];
    var pagination_show_hide;
    if (props.divi8_testimonial_nav_show_hide === "on"){
      pagination_show_hide = "block";
    }else{
      pagination_show_hide = "none";
    }
    var navigation_show_hide;
    if (props.divi8_testimonial_arrow_show_hide === "on"){
      navigation_show_hide = "";
    }else{
      navigation_show_hide = "none";
    }
    // pagination
    css.push([
      {
        selector : '%%order_class%% .swiper-pagination',
        declaration: `margin: 15px;position: relative;`,
      }
    ]);
    css.push([
      {
        selector : '%%order_class%% .swiper-pagination-bullet',
        declaration: `width: ${props.divi8_testimonial_pagi_size}px;height: ${props.divi8_testimonial_pagi_size}px;background-color: ${props.divi8_testimonial_pagi_bullet_color};`,
      }
    ]);
    // navigation
    css.push([
      {
        selector : '%%order_class%% .swiper-button-prev',
        declaration: `left: ${props.divi8_testimonial_arrow_position}px;`,
      },
      {
        selector : '%%order_class%% .swiper-button-next',
        declaration: `right: ${props.divi8_testimonial_arrow_position}px;`,
      }
    ]);
    // Rating
    css.push([
      {
        selector : '%%order_class%% .divi8-star-fill:before',
        declaration: `color: ${props.divi8_testimonial_rating_color};`,
      }
    ]); 
    //previous next button color
    css.push([
      {
        selector : '%%order_class%% .swiper-button-prev',
        declaration: `    
        color: ${props.divi8_testimonial_arrow_color};`,
      },
      {
        selector : '%%order_class%% .swiper-button-next',
        declaration: `    
        color: ${props.divi8_testimonial_arrow_color};`,
      }
    ]);
    css.push([
      {
        selector : '%%order_class%% .swiper-button-prev, .swiper-container-rtl .swiper-button-next, .swiper-button-next',
        declaration: `    
        padding: ${props.divi8_testimonial_arrow_padding}px;`,

      },
      {
        selector : '%%order_class%% .swiper-button-prev:hover, .swiper-container-rtl:hover .swiper-button-next:hover, .swiper-button-next:hover',
        declaration: `    
        padding: ${props.divi8_testimonial_arrow_padding_hover}px;`,
      }
    ]);

    css.push([
      {
        selector : '%%order_class%% .swiper-button-prev, .swiper-container-rtl .swiper-button-next, .swiper-button-next',
        declaration: `    
        background-color: ${props.divi8_testimonial_arrow_background};
        border-radius:${props.divi8_testimonial_arrow_border_radius}px`,
      },
      {
        selector : '%%order_class%% .swiper-button-prev:hover, .swiper-container-rtl:hover .swiper-button-next:hover, .swiper-button-next:hover',
        declaration: `    
        background-color: ${props.divi8_testimonial_arrow_background_hover};`,
      }
    ]);
    // Content Design
    css.push([
      {
        selector : '%%order_class%% .carousel_content span',
        declaration: `font-size: ${props.headline_fontsize}px;
        padding: ${props.headline_padding};
        color: ${props.headline_color};`,
      },
      {
        selector : '%%order_class%% .carousel_content p',
        declaration: `font-size: ${props.desc_fontsize}px;
        padding: ${props.desc_padding};
        color: ${props.desc_color};`,
      },
      {
        selector : '%%order_class%% .carousel_content a',
        declaration: `background: ${props.divi8_testimonial_learnmore_bg_color};
        float: ${props.divi8_testimonial_lm_position};`,
      },
      {
        selector : '%%order_class%% .carousel_content a:hover',
        declaration: `background: ${props.divi8_testimonial_learnmore_bg_color_hover};`,
      },
      {
        selector : '%%order_class%% .content_lft',
        declaration: `float: ${props.divi8_testimonial_content_position};
        width: 50%;`,
      },
      {
        selector : '%%order_class%% .content_rght',
        declaration: `float: ${props.divi8_testimonial_content_position};
        width: 50%;`,
      },
      {
        selector : '%%order_class%% .swiper-pagination',
        declaration: `display: ${pagination_show_hide};`,
      },
      {
        selector : '%%order_class%% .swiper-button-prev',
        declaration: `display: ${navigation_show_hide};`,
      },
      {
        selector : '%%order_class%% .swiper-button-next',
        declaration: `display: ${navigation_show_hide};`,
      },
      {
        selector : '%%order_class%% .social-media',
        declaration: ` justify-content: center!important; position:relative;display: flex;flex-flow: nowrap;max-width: 78%; height: 26px; `,
      },
      {
        selector : '%%order_class%% .social-media li',
        declaration: `    list-style: none;`,
      },
      {
        selector : '%%order_class%% .carousel_content .image_circle',
        declaration: ` border-radius: 50% 50% 50% 50%; overflow: hidden;`,
      },
    ]);

    return css;
  }

  componentDidMount() {
    this.instanceSwiper()
  }

  instanceSwiper() {
        var swiperOptions = {
          slidesPerView: this.state.slidesPerView, 
          breakpoints: {
            1024: {
              slidesPerView: parseInt(this.state.slidesPerView),
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
          direction: this.state.direction,
          loop: this.state.loop,
          spaceBetween:  this.state.spaceBetween,
          
          effect: "slide",
          coverflowEffect: {
            rotate: this.state.coverflowrotate,
            stretch: this.state.coverflowstretch,
            depth: this.state.coverflowdepth,
            modifier: this.state.coverflowmodifier,
            slideShadows: this.state.coverflowslideShadows,
        },
        grabCursor: this.state.grabCursor,
        cubeEffect: {
          shadow: this.state.cubeshadow,
          slideShadows: this.state.cubeslideShadows,
          shadowOffset: this.state.cubeshadowOffset,
          shadowScale: this.state.cubeshadowScale,
        },
        centeredSlides: this.state.centeredSlides,
        zoom: this.state.zoom,
        speed: this.state.speed,
        autoplay: {
          delay: this.state.autoplaydelay,
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
      $('.swiper-slide').on('mouseover', function() {
        this.swiperObj.autoplay.stop();
      });
      $('.swiper-slide').on('mouseout', function() {
        this.swiperObj.autoplay.start();
      });

  }
  componentDidUpdate() {
    this.swiperObj.params.effect = "slide";
    this.swiperObj.params.slidesPerView = +this.props.divi8_testimonial_sliderperview_desktop;
    this.swiperObj.params.spaceBetween = +this.props.divi8_testimonial_sliderspcbtn;
    this.swiperObj.params.grabCursor = "on" === this.props.divi8_testimonial_nav_grab_cursor;
    // this.swiperObj.params.autoHeight =  "on" === this.props.divi8_testimonial_auto_height;
    this.swiperObj.params.mousewheel.enabled =  "on" === this.props.divi8_testimonial_nav_mousewheel;
    this.swiperObj.params.speed = parseInt(this.props.divi8_testimonial_sliderspeed);
    this.swiperObj.params.coverflowEffect.rotate = +this.props.divi8_testimonial_effect_sliderotate;
    this.swiperObj.params.coverflowEffect.stretch =  +this.props.divi8_testimonial_effect_slidestretch;
    this.swiperObj.params.coverflowEffect.depth = +this.props.divi8_testimonial_effect_slidedepth;

    if (this.props.divi8_testimonial_autoplay === "off"){
      this.swiperObj.autoplay.stop();
    }else{
      this.swiperObj.autoplay.start();

    }

    if (this.props.divi8_testimonial_centered_slides === "on"){
      this.swiperObj.params.centeredSlides = true;
    }else{
      this.swiperObj.params.centeredSlides = false;
    }
    if (this.props.divi8_testimonial_autoplay_loop === "off"){
      this.swiperObj.params.loop = false;

    }else{
      this.swiperObj.params.loop = true;
    }
    if (this.props.divi8_testimonial_auto_height === "off"){
      this.swiperObj.params.calculateHeight = false;
      this.swiperObj.params.autoHeight = false;
    }else{

      this.swiperObj.params.calculateHeight = true;
      this.swiperObj.params.autoHeight = true;
    }
    if (this.props.divi8_testimonial_autoplay_pause === "on"){
      this.swiperObj.params.autoplayHoverPause = true;

    }else{
      this.swiperObj.params.autoplayHoverPause = false;
    }
    this.swiperObj.params.autoplay.delay = +this.props.divi8_testimonial_slider_autoplaydelay;
    if(this.props.divi8_testimonial_nav_grab_cursor === "off"){
      this.swiperObj.unsetGrabCursor();
    }else{
      this.swiperObj.setGrabCursor();
    }
    //keyboard on off
    if(this.props.divi8_testimonial_nav_keyboard === "off"){
      this.swiperObj.keyboard.disable();
    }else{
      this.swiperObj.keyboard.enable();
    }
   //Mousewheel on off
   if(this.props.divi8_testimonial_nav_mousewheel === "off"){
    this.swiperObj.mousewheel.disable();
  }else{
    this.swiperObj.mousewheel.enable();
  }
  if(this.props.divi8_testimonial_nav_dynamicbullet === "on"){
    this.swiperObj.params.pagination.dynamicBullets = true;
  }else{
    this.swiperObj.params.pagination.dynamicBullets = false;
  }
  //Slide Shadow Type
  if(this.props.divi8_testimonial_effect_slideshadow === "on"){
    this.swiperObj.params.coverflowEffect.slideShadows = true;
  }else{
    this.swiperObj.params.coverflowEffect.slideShadows = false;
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

  ratingshow = (prop) =>{
    
    var default_rating;
    if(prop.rating !== undefined ){
      default_rating = prop.rating;
    }else{
      default_rating = 3;
    }

    if(default_rating === 5){
      return (
          // <div class="social-media-container">
            <ul class="divi8-rating">
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
            </ul>
					// </div>
              
      );
            
    }else if(default_rating === 4){
      return (
          // <div class="social-media-container">
            <ul class="divi8-rating">
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
            </ul>
          //  </div>
      );
    }else if(default_rating === 3){
      return (
          // <div class="social-media-container">
            <ul class="divi8-rating">
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
              <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
              <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
            </ul>
          //  </div>
      );
    }else if(default_rating === 2){
      return (
        // <div class="social-media-container">
          <ul class="divi8-rating">
            <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
            <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
            <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
            <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
            <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
          </ul>
        //  </div>
    );
  }else if(default_rating === 1){
    return (
      // <div class="social-media-container">
        <ul class="divi8-rating">
          <li><span class="divi8-star-fill" aria-hidden="true"></span></li>
          <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
          <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
          <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
          <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
        </ul>
      //  </div>
  );
  }else{
    return (
      // <div class="social-media-container">
        <ul class="divi8-rating">
          <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
          <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
          <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
          <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
          <li><span class="divi8-star_alt" aria-hidden="true"></span></li>
        </ul>
      //  </div>
  );

  }
  }
  contentPosition = (prop) =>{
    var get_description = prop.description; //get the description
    var temp = document.createElement("DIV");
    temp.innerHTML = get_description;
    var defaultimage_url;
    var default_name;
    var default_position;
    var clean_description= temp.textContent || temp.innerText || ""; //clean html tag from description
    if(prop.img !== undefined ){
      defaultimage_url = prop.img;
    }else{
      defaultimage_url = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI1NDAiIHZpZXdCb3g9IjAgMCAxMDgwIDU0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0VCRUJFQiIgZD0iTTAgMGgxMDgwdjU0MEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik00NDUuNjQ5IDU0MGgtOTguOTk1TDE0NC42NDkgMzM3Ljk5NSAwIDQ4Mi42NDR2LTk4Ljk5NWwxMTYuMzY1LTExNi4zNjVjMTUuNjItMTUuNjIgNDAuOTQ3LTE1LjYyIDU2LjU2OCAwTDQ0NS42NSA1NDB6IiBmaWxsLW9wYWNpdHk9Ii4xIiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgICAgICA8Y2lyY2xlIGZpbGwtb3BhY2l0eT0iLjA1IiBmaWxsPSIjMDAwIiBjeD0iMzMxIiBjeT0iMTQ4IiByPSI3MCIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDgwIDM3OXYxMTMuMTM3TDcyOC4xNjIgMTQwLjMgMzI4LjQ2MiA1NDBIMjE1LjMyNEw2OTkuODc4IDU1LjQ0NmMxNS42Mi0xNS42MiA0MC45NDgtMTUuNjIgNTYuNTY4IDBMMTA4MCAzNzl6IiBmaWxsLW9wYWNpdHk9Ii4yIiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvZz4KPC9zdmc+Cg==';
    }
    if(prop.name !== undefined ){
      default_name = prop.name;
    }else{
      default_name = 'Name';
    }
    if(prop.position !== undefined ){
      default_position = prop.heading;
    }else{
      default_position = 'Position';
    }
   
    //silder all data sent
    if(this.props.divi8_testimonial_content_position==='layout1'){
      return (
        <div className="carousel_content">
          <img src={defaultimage_url} alt="" />
          <span class ="name_design">{default_name}</span>
          <span class = "position_design">{default_position}</span>
          <p>{clean_description}</p>
          {this.ratingshow(prop)}
        </div>
    );
    }else if(this.props.divi8_testimonial_content_position==='layout2'){
      return (
        <div className="carousel_content">
          
          <span class ="name_design">{default_name}</span>
          <span class = "position_design">{default_position}</span>
          <img src={defaultimage_url} alt="" class="image_circle" />
          {this.ratingshow(prop)}
          <p>{clean_description}</p>



        </div>
    );
    }else if(this.props.divi8_testimonial_content_position==='layout3'){
      return (
        <div className="carousel_content">
          <img src={defaultimage_url} alt="" class="image_circle" />
           {this.ratingshow(prop)}
          <span class ="name_design">{default_name}</span>
          <span class = "position_design">{default_position}</span>
          <p>{clean_description}</p>
          
        
          
        </div>
    );
    }
  }
  leftIconShow(){
    if (this.props.divi8_left_icon){
      return (
        <i className={'et-pb-icon divi8-testi-icon-left'}>
          {window.ET_Builder.API.Utils.processFontIcon(this.props.divi8_left_icon)}
        </i>
      )
    }else{
      return(
        <i className={'et-pb-icon divi8-testi-icon-left'}>4</i>
      )
    }
  }
  rightIconShow(){
    if (this.props.divi8_right_icon){
      return (
        <i className={'et-pb-icon divi8-testi-icon-right'}>
          {window.ET_Builder.API.Utils.processFontIcon(this.props.divi8_right_icon)}
        </i>
      )
    }else{
      return(
        <i className={'et-pb-icon divi8-testi-icon-right'}>5</i>
      )
    }
  }
  render() {
      if(this.props.content){
      var my_data = this.props.content.map(
        (item, index) => {
          const props = item.props.attrs;
          return(
          <div key={index} className="swiper-slide">
            {this.contentPosition(props)}
          </div>
          );
        }
      );
      }else{
        my_data = null;
      }
      var sliderclassname = "swiper-container testimonial-swiper "+ this.sliderid;
      var nextel = "swiper-button-next " + this.nextid;
      var prevel = "swiper-button-prev " + this.previd;
      var pagicls = "swiper-pagination " + this.pagid;
    return (
      <div className="own">
        <div className={sliderclassname}>
          <div className="swiper-wrapper">
            {my_data}
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

export default TestimonialCarouselDivi8;
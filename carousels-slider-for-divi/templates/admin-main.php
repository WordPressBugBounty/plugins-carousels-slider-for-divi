<?php
/**
 * Admin main template
 */

defined( 'ABSPATH' ) || die();

$modules = [

    [
        'title' => 'Image Carousel',
        'icon'  => 'image-carousel-icon.png',
        'badge' => 'FREE',
        'color' => 'success',
        'url'   => 'https://divicarousels.com/divi-image-carousel/',
        'desc'  => 'Create beautiful responsive image sliders.'
    ],

    [
        'title' => 'Logo Carousel',
        'icon'  => 'logo-carousel-icon.png',
        'badge' => 'FREE',
        'color' => 'success',
        'url'   => 'https://divicarousels.com/divi-logo-carousel/',
        'desc'  => 'Display client and partner logos.'
    ],

    [
        'title' => 'Testimonial Carousel Lite',
        'icon'  => 'testimonial-carousel-icon.png',
        'badge' => 'FREE',
        'color' => 'success',
        'url'   => 'https://divicarousels.com/divi-testimonial-carousel/',
        'desc'  => 'Build customer testimonials.'
    ],

    [
        'title' => 'Twitter Carousel',
        'icon'  => 'twitter-carousel-icon.png',
        'badge' => 'FREE',
        'color' => 'success',
        'url'   => '#',
        'desc'  => 'Display Twitter feeds beautifully.'
    ],

    [
        'title' => 'Parallax Carousel',
        'icon'  => 'parallax-carousel-icon.png',
        'badge' => 'FREE',
        'color' => 'success',
        'url'   => '#',
        'desc'  => 'Amazing parallax scrolling effects.'
    ],

    [
        'title' => 'Content Carousel',
        'icon'  => 'content-carousel-icon.png',
        'badge' => 'PRO',
        'color' => 'primary',
        'url'   => 'https://divicarousels.com/divi-content-carousel/',
        'desc'  => 'Create engaging content sliders.'
    ],

    [
        'title' => 'Blog Carousel',
        'icon'  => 'blog-carousel-icon.png',
        'badge' => 'PRO',
        'color' => 'primary',
        'url'   => 'https://divicarousels.com/divi-post-carousel/',
        'desc'  => 'Display blog posts dynamically.'
    ],

    [
        'title' => 'Testimonial Carousel',
        'icon'  => 'testimonial-carousel-icon.png',
        'badge' => 'PRO',
        'color' => 'primary',
        'url'   => 'https://divicarousels.com/divi-testimonial-carousel/',
        'desc'  => 'Advanced testimonial layouts.'
    ],

    [
        'title' => 'Instagram Carousel',
        'icon'  => 'instagram-facebook-icon.png',
        'badge' => 'PRO',
        'color' => 'primary',
        'url'   => 'https://divicarousels.com/divi-instagram-carousel/',
        'desc'  => 'Display Instagram posts.'
    ],

    [
        'title' => 'Google Reviews',
        'icon'  => 'google-review-carousel-icon.png',
        'badge' => 'PRO',
        'color' => 'primary',
        'url'   => 'https://divicarousels.com/divi-google-review-carousel/',
        'desc'  => 'Show Google Business reviews.'
    ],

    [
        'title' => 'Team Carousel',
        'icon'  => 'team-carousel-icon.png',
        'badge' => 'PRO',
        'color' => 'primary',
        'url'   => 'https://divicarousels.com/divi-team-carousel',
        'desc'  => 'Present your team professionally.'
    ],

    [
        'title' => 'Product Carousel',
        'icon'  => 'product-carousel-icon.png',
        'badge' => 'PRO',
        'color' => 'primary',
        'url'   => 'https://divicarousels.com/divi-product-carousel/',
        'desc'  => 'WooCommerce product sliders.'
    ],

    [
        'title' => 'Facebook Carousel',
        'icon'  => 'facebook-carousel-icon.png',
        'badge' => 'PRO',
        'color' => 'primary',
        'url'   => 'https://divicarousels.com/divi-facebook-carousel/',
        'desc'  => 'Display Facebook content.'
    ],

    [
        'title' => 'Video Carousel',
        'icon'  => 'divi-youtube-carousel.png',
        'badge' => 'PRO',
        'color' => 'primary',
        'url'   => '#',
        'desc'  => 'Responsive YouTube & Vimeo sliders.'
    ],

    [
        'title' => 'Multirow Carousel',
        'icon'  => 'multirow-carousel-icon.png',
        'badge' => 'COMING',
        'color' => 'warning',
        'url'   => '#',
        'desc'  => 'Coming soon.'
    ],

    [
        'title' => 'Cube Carousel',
        'icon'  => 'cube-carousel-icon.png',
        'badge' => 'COMING',
        'color' => 'warning',
        'url'   => '#',
        'desc'  => 'Coming soon.'
    ],

    [
        'title' => 'Card Carousel',
        'icon'  => 'card-carousel-icon.png',
        'badge' => 'COMING',
        'color' => 'warning',
        'url'   => '#',
        'desc'  => 'Coming soon.'
    ],

];
?>
<style>
    .module-card{
        transition:.25s;
    }

    .module-card:hover{
        transform:translateY(-6px);
        box-shadow:0 15px 35px rgba(0,0,0,.08)!important;

    }

    .module-card img{
        transition:.3s;
    }

    .module-card:hover img{
        transform:scale(1.08);
    }
</style>

<div class="caro-container">
    <div class="container-fluid px-4 py-4">

        <!-- ==========================
            Header
        =========================== -->

        <div class="dc-header bg-white shadow-sm rounded-4 p-4 mb-4">

            <div class="row align-items-center">

                <div class="col-lg-4">

                    <img
                        src="<?php echo DCS_DIVICAROUSEL_PLUGIN_ASSETS; ?>divi-carousel-logo-2.png"
                        class="img-fluid"
                        style="max-height:70px;"
                        alt="Divi Carousel">

                </div>

                <div class="col-lg-8 text-end">

                    <a class="btn btn-light mx-1"
                       href="https://divicarousels.com/docs/"
                       target="_blank">

                        📖 Documentation

                    </a>

                    <a class="btn btn-light mx-1"
                       href="https://divicarousels.com/modules/"
                       target="_blank">

                        🧩 Modules

                    </a>

                    <a class="btn btn-light mx-1"
                       href="https://wordpress.org/support/plugin/carousels-slider-for-divi/"
                       target="_blank">

                        💬 Support

                    </a>

                    <a class="btn btn-primary mx-1"
                       href="https://divicarousels.com/pricing/"
                       target="_blank">

                        🚀 Upgrade Pro

                    </a>

                </div>

            </div>

        </div>

        <!-- ==========================
            Welcome Hero
        =========================== -->

        <div class="border-0 shadow-sm rounded-4 mb-4">

            <div class="card-body p-5">

                <div class="row align-items-center">

                    <div class="col-lg-8">

                        <span class="badge bg-primary mb-3">
                            Version 2.0.1
                        </span>

                        <h2 class="fw-bold">

                            Welcome to Divi Carousel 👋

                        </h2>

                        <p class="lead text-muted mb-4">

                            Create stunning responsive carousels inside the Divi Builder.
                            Build Image, Logo, Testimonial, WooCommerce,
                            Team, Blog, Product and many more carousel layouts
                            without writing a single line of code.

                        </p>

                        <a href="https://divicarousels.com/docs/"
                           target="_blank"
                           class="btn btn-primary btn-lg me-2">

                            📖 Get Started

                        </a>

                        <a href="https://www.youtube.com/@divicarousels"
                           target="_blank"
                           class="btn btn-outline-primary btn-lg">

                            ▶ Watch Tutorials

                        </a>

                    </div>

                    <div class="col-lg-4 text-center">

                        <img
                            src="<?php echo DCS_DIVICAROUSEL_PLUGIN_ASSETS; ?>divi-carousel-logo-2.png"
                            class="img-fluid"
                            style="max-height:180px;opacity:.9;">

                    </div>

                </div>

            </div>

        </div>

        <!-- ==========================
            Statistics
        =========================== -->

        <div class="row g-4 mb-4">

            <div class="col-lg-3 col-md-6">

                <div class="card border-0 shadow-sm rounded-4">

                    <div class="card-body">

                        <small class="text-muted">
                            Plugin Version
                        </small>

                        <h3 class="mt-2 mb-0">
                            2.0.1
                        </h3>

                    </div>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">

                <div class="card border-0 shadow-sm rounded-4">

                    <div class="card-body">

                        <small class="text-muted">
                            License
                        </small>

                        <h3 class="mt-2 text-success">
                            FREE
                        </h3>

                    </div>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">

                <div class="card border-0 shadow-sm rounded-4">

                    <div class="card-body">

                        <small class="text-muted">
                            Carousel Modules
                        </small>

                        <h3 class="mt-2">
                            17+
                        </h3>

                    </div>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">

                <div class="card border-0 shadow-sm rounded-4">

                    <div class="card-body">

                        <small class="text-muted">
                            Ready Layouts
                        </small>

                        <h3 class="mt-2">
                            50+
                        </h3>

                    </div>

                </div>

            </div>

        </div>

        <!-- ==========================
            Quick Actions
        =========================== -->

        <div class="border-0 shadow-sm rounded-4 mb-5">

            <div class="card-body">

                <h4 class="mb-4">

                    Quick Actions

                </h4>

                <div class="row text-center">

                    <div class="col-lg-3 col-md-6 mb-3">

                        <a class="btn btn-outline-primary w-100 p-3"

                           href="https://divicarousels.com/docs/"

                           target="_blank">

                            📖 Documentation

                        </a>

                    </div>

                    <div class="col-lg-3 col-md-6 mb-3">

                        <a class="btn btn-outline-success w-100 p-3"

                           href="https://www.youtube.com/@divicarousels"

                           target="_blank">

                            🎥 Video Tutorials

                        </a>

                    </div>

                    <div class="col-lg-3 col-md-6 mb-3">

                        <a class="btn btn-outline-warning w-100 p-3"

                           href="https://wordpress.org/support/plugin/carousels-slider-for-divi/reviews/?filter=5"

                           target="_blank">

                            ⭐ Leave Review

                        </a>

                    </div>

                    <div class="col-lg-3 col-md-6 mb-3">

                        <a class="btn btn-outline-danger w-100 p-3"

                           href="https://wordpress.org/support/plugin/carousels-slider-for-divi/"

                           target="_blank">

                            💬 Get Support

                        </a>

                    </div>

                </div>

            </div>

        </div>

        <!-- =======================================
            What's New + Upgrade + Resources
        ======================================= -->

        <div class="row g-4 mb-5">

            <!-- ===========================
                What's New
            ============================ -->

            <div class="col-lg-8">

                <div class="card border-0 shadow-sm rounded-4 h-100">

                    <div class="card-body p-4">

                        <span class="badge bg-success mb-3">
                            NEW
                        </span>

                        <h3 class="fw-bold mb-4">

                            What's New in Version 2.0.1

                        </h3>

                        <div class="row">

                            <div class="col-md-6">

                                <ul class="list-unstyled">

                                    <li class="mb-3">
                                        ✅ Improved overall stability
                                    </li>

                                    <li class="mb-3">
                                        ✅ Performance improvements
                                    </li>

                                    <li class="mb-3">
                                        ✅ Security enhancements
                                    </li>

                                    <li class="mb-3">
                                        ✅ Better module compatibility
                                    </li>

                                </ul>

                            </div>

                            <div class="col-md-6">

                                <ul class="list-unstyled">

                                    <li class="mb-3">
                                        ✅ Bug fixes
                                    </li>

                                    <li class="mb-3">
                                        ✅ Better user experience
                                    </li>

                                    <li class="mb-3">
                                        ✅ Cleaner dashboard
                                    </li>

                                    <li class="mb-3">
                                        🚀 More features coming soon
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- ===========================
                Upgrade Card
            ============================ -->

            <div class="col-lg-4">

                <div class="card border-0 shadow rounded-4 text-center h-100">

                    <div class="card-body p-4">

                        <span class="badge bg-warning text-dark mb-3">

                            PRO

                        </span>

                        <h3 class="fw-bold">

                            Unlock Pro

                        </h3>

                        <p class="text-muted">

                            Get access to premium carousel modules,
                            advanced settings, priority support,
                            and future updates.

                        </p>

                        <ul class="list-unstyled text-start my-4">

                            <li class="mb-2">
                                ✔ Blog Carousel
                            </li>

                            <li class="mb-2">
                                ✔ Team Carousel
                            </li>

                            <li class="mb-2">
                                ✔ Product Carousel
                            </li>

                            <li class="mb-2">
                                ✔ Instagram Carousel
                            </li>

                            <li class="mb-2">
                                ✔ Google Reviews
                            </li>

                            <li class="mb-2">
                                ✔ Facebook Carousel
                            </li>

                            <li class="mb-2">
                                ✔ Video Carousel
                            </li>

                        </ul>

                        <a href="https://divicarousels.com/pricing/"
                        target="_blank"
                        class="btn btn-primary btn-lg w-100">

                            🚀 Upgrade Now

                        </a>

                    </div>

                </div>

            </div>

        </div>

        <!-- =======================================
            Resources
        ======================================= -->

        <div class="border-0 shadow-sm rounded-4 mb-5">

            <div class="card-body p-4">

                <h3 class="fw-bold mb-4">

                    Helpful Resources

                </h3>

                <div class="row">

                    <div class="col-lg-3 col-md-6 mb-4">

                        <div class="border rounded-4 p-4 text-center h-100">

                            <div style="font-size:40px;">📖</div>

                            <h5 class="mt-3">

                                Documentation

                            </h5>

                            <p class="text-muted small">

                                Learn every module and option.

                            </p>

                            <a href="https://divicarousels.com/docs/"
                            target="_blank"
                            class="btn btn-outline-primary">

                                Open

                            </a>

                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">

                        <div class="border rounded-4 p-4 text-center h-100">

                            <div style="font-size:40px;">🎥</div>

                            <h5 class="mt-3">

                                Video Tutorials

                            </h5>

                            <p class="text-muted small">

                                Learn visually with videos.

                            </p>

                            <a href="https://www.youtube.com/@divicarousels"
                            target="_blank"
                            class="btn btn-outline-success">

                                Watch

                            </a>

                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">

                        <div class="border rounded-4 p-4 text-center h-100">

                            <div style="font-size:40px;">💬</div>

                            <h5 class="mt-3">

                                Support

                            </h5>

                            <p class="text-muted small">

                                Need help?
                                We're here.

                            </p>

                            <a href="https://wordpress.org/support/plugin/carousels-slider-for-divi/"
                            target="_blank"
                            class="btn btn-outline-danger">

                                Contact

                            </a>

                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">

                        <div class="border rounded-4 p-4 text-center h-100">

                            <div style="font-size:40px;">⭐</div>

                            <h5 class="mt-3">

                                Leave a Review

                            </h5>

                            <p class="text-muted small">

                                Love the plugin?
                                Share your experience.

                            </p>

                            <a href="https://wordpress.org/support/plugin/carousels-slider-for-divi/reviews/?filter=5"
                            target="_blank"
                            class="btn btn-outline-warning">

                                Review

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>



        <div class="mb-5">

            <h2 class="fw-bold mb-2">

                Carousel Modules

            </h2>

            <p class="text-muted mb-4">

                Choose from a growing collection of powerful Divi Carousel modules.

            </p>

            <div class="row g-4">

                <?php foreach ($modules as $module) : ?>

                    <div class="col-xl-3 col-lg-4 col-md-6">

                        <div class="card h-100 border-0 shadow-sm rounded-4 module-card">

                            <div class="card-body text-center p-4">

                                <span class="badge bg-<?php echo $module['color']; ?> mb-3">

                                    <?php echo $module['badge']; ?>

                                </span>

                                <div class="mb-3">

                                    <img
                                        src="<?php echo DCS_DIVICAROUSEL_PLUGIN_ASSETS . $module['icon']; ?>"
                                        style="height:72px;"
                                        alt="">

                                </div>

                                <h5 class="fw-bold">

                                    <?php echo $module['title']; ?>

                                </h5>

                                <p class="text-muted small mb-4">

                                    <?php echo $module['desc']; ?>

                                </p>

                                <a
                                    href="<?php echo $module['url']; ?>"
                                    target="_blank"
                                    class="btn btn-outline-primary rounded-pill px-4">

                                    Learn More →

                                </a>

                            </div>

                        </div>

                    </div>

                <?php endforeach; ?>

            </div>

        </div>

            <!-- =====================================
                Community
            ===================================== -->

        <div class="row g-4 mb-5">

            <div class="col-lg-8">

                <div class="card border-0 shadow-sm rounded-4 h-100">

                    <div class="card-body p-5">

                        <h3 class="fw-bold mb-3">

                            Join Our Community

                        </h3>

                        <p class="text-muted mb-4">

                            Stay updated with new modules, tutorials,
                            feature announcements, and Divi tips.

                        </p>

                        <div class="d-flex flex-wrap gap-3">

                            <a href="https://www.facebook.com/divicarousels"
                            target="_blank"
                            class="btn btn-primary">

                                Facebook Community

                            </a>

                            <a href="https://www.youtube.com/@divicarousels"
                            target="_blank"
                            class="btn btn-danger">

                                YouTube Channel

                            </a>

                            <a href="https://divicarousels.com/blog/"
                            target="_blank"
                            class="btn btn-outline-primary">

                                Read Blog

                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <div class="col-lg-4">

                <div class="card border-0 shadow-sm rounded-4 h-100">

                    <div class="card-body text-center p-5">

                        <div style="font-size:48px">

                            ⭐⭐⭐⭐⭐

                        </div>

                        <h4 class="fw-bold mt-3">

                            Enjoying Divi Carousel?

                        </h4>

                        <p class="text-muted">

                            Your review helps thousands of Divi users
                            discover our plugin.

                        </p>

                        <a href="https://wordpress.org/support/plugin/carousels-slider-for-divi/reviews/?filter=5"
                        target="_blank"
                        class="btn btn-warning">

                            Leave a Review

                        </a>

                    </div>

                </div>

            </div>

        </div>

        <!-- =====================================
            Our Services
        ===================================== -->

        <div class="border-0 shadow-sm rounded-4 mb-5">

            <div class="card-body p-5">

                <h2 class="fw-bold mb-2">

                    Need Professional Help?

                </h2>

                <p class="text-muted mb-5">

                    Beyond Divi Carousel, our experienced team offers professional
                    WordPress and Divi development services to help you build,
                    optimize, and grow your website.

                </p>

                <div class="row g-4">

                    <div class="col-lg-3 col-md-6">

                        <div class="border rounded-4 p-4 text-center h-100">

                            <div style="font-size:40px;">🎨</div>

                            <h5 class="mt-3">

                                Divi Website

                            </h5>

                            <p class="text-muted small">

                                Custom Divi websites built for speed,
                                conversions, and SEO.

                            </p>

                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6">

                        <div class="border rounded-4 p-4 text-center h-100">

                            <div style="font-size:40px;">⚡</div>

                            <h5 class="mt-3">

                                Speed Optimization

                            </h5>

                            <p class="text-muted small">

                                Improve Core Web Vitals and
                                website performance.

                            </p>

                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6">

                        <div class="border rounded-4 p-4 text-center h-100">

                            <div style="font-size:40px;">🛒</div>

                            <h5 class="mt-3">

                                WooCommerce

                            </h5>

                            <p class="text-muted small">

                                Build high-converting online stores
                                with Divi.

                            </p>

                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6">

                        <div class="border rounded-4 p-4 text-center h-100">

                            <div style="font-size:40px;">💻</div>

                            <h5 class="mt-3">

                                Custom Development

                            </h5>

                            <p class="text-muted small">

                                Bespoke plugins, integrations,
                                and custom functionality.

                            </p>

                        </div>

                    </div>

                </div>

                <div class="text-center mt-5">

                    <a href="https://divicarousels.com/contact/"
                    target="_blank"
                    class="btn btn-primary btn-lg">

                        Hire Our Team

                    </a>

                </div>

            </div>

        </div>

        <!-- =====================================
            Footer
        ===================================== -->

        <footer class="border-0 shadow-sm rounded-4">

            <div class="card-body">

                <div class="row align-items-center">

                    <div class="col-md-6">

                        <strong>

                            Divi Carousel

                        </strong>

                        <br>

                        <small class="text-muted">

                            Build beautiful carousel experiences for Divi.

                        </small>

                    </div>

                    <div class="col-md-6 text-md-end mt-3 mt-md-0">

                        <a href="https://divicarousels.com/docs/"
                        target="_blank"
                        class="text-decoration-none me-3">

                            Documentation

                        </a>

                        <a href="https://wordpress.org/support/plugin/carousels-slider-for-divi/"
                        target="_blank"
                        class="text-decoration-none me-3">

                            Support

                        </a>

                        <a href="https://divicarousels.com/pricing/"
                        target="_blank"
                        class="text-decoration-none">

                            Upgrade Pro

                        </a>

                    </div>

                </div>

                <hr>

                <div class="text-center text-muted">

                    © <?php echo date('Y'); ?> Divi Carousel.
                    Made with ❤️ for the Divi Community.

                </div>

            </div>

        </footer>

    </div><!-- container-fluid -->

</div><!-- caro-container -->

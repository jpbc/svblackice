const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.styles([
    'resources/assets/css/bootstrap.min.css',
    'resources/assets/css/font-awesome.min.css',
    'resources/assets/css/material-dashboard.css'
], 'public/css/template.css')
.scripts([	
	'resources/assets/js/jquery-3.1.1.min.js',
	'resources/assets/js/jquery-ui.min.js',
	'resources/assets/js/bootstrap.min.js', 
	'resources/assets/js/material.min.js',
	'resources/assets/js/perfect-scrollbar.jquery.min.js',
	'resources/assets/js/jquery.validate.min.js',
	'resources/assets/js/moment.min.js',
	'resources/assets/js/chartist.min.js',
	'resources/assets/js/jquery.bootstrap-wizard.js',
	'resources/assets/js/bootstrap-notify.js',  
	'resources/assets/js/jquery.sharrre.js',
    'resources/assets/js/bootstrap-datetimepicker.js',
    'resources/assets/js/jquery-jvectormap.js',    
    'resources/assets/js/nouislider.min.js',  
    'resources/assets/js/googleapis.js',   
    'resources/assets/js/jquery.select-bootstrap.js',   
    'resources/assets/js/jquery.datatables.js',
    'resources/assets/js/sweetalert2.js',   
    'resources/assets/js/jasny-bootstrap.min.js',    
    'resources/assets/js/fullcalendar.min.js',     
    'resources/assets/js/jquery.tagsinput.js',    
    'resources/assets/js/material-dashboard.js',
    'resources/assets/js/demo.js',
    'resources/assets/js/material-dashboard.js'    
], 'public/js/template.js')

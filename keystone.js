// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'Soshace',
	'brand': 'Soshace',

	'less': 'public',
	'static': 'dist',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs'
	}).engine,

	'port': process.env.PORT,

	'host': process.env.HOST,

	'mongo': process.env.MONGO_URI,

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));


// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

// keystone.set('email locals', {
// 	logo_src: '/images/logo-email.gif',
// 	logo_width: 194,
// 	logo_height: 76,
// 	theme: {
// 		email_bg: '#f9f9f9',
// 		link_color: '#2697de',
// 		buttons: {
// 			color: '#fff',
// 			background_color: '#2697de',
// 			border_color: '#1a7cb7'
// 		}
// 	}
// });

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

// keystone.set('email rules', [{
// 	find: '/images/',
// 	replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/images/' : 'http://localhost:3000/images/'
// }, {
// 	find: '/keystone/',
// 	replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/keystone/' : 'http://localhost:3000/keystone/'
// }]);

// Load your project's email test routes

//keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'projects': 'projects',
	'developers': 'developers',
	'features': 'features',
	'skills': 'skills',
	'companies': 'companies',
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();

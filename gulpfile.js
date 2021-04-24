'use strict';

const { series, parallel } = require('gulp');

const { config } = require('./__lib/functions/config.js');
const { log }    = require('./__lib/vars/log.js');
const { msg }    = require('./__lib/vars/notifications.js');
const { debug }  = require('./__lib/vars/debug.js');

//
// Test function for debugging
//

// function test(done) {
//   log(msg.debug(()));
//   done();
// }
// exports.test = test;

//
// Tasks
//

const taskDir = './__lib/tasks/';

const clean           = require(taskDir + 'clean.js');
const buildSass       = require(taskDir + 'buildSass.js');
const watchSass       = require(taskDir + 'watchSass.js');
const processTemplates = require(taskDir + 'handlebars.js');
const listTemplates   = require(taskDir + 'listTemplates.js');
const handlebars      = require(taskDir + 'handlebars.js');
const buildHTML       = require(taskDir + 'buildHTML.js');
const watchHTML       = require(taskDir + 'watchHTML.js');
const buildText       = require(taskDir + 'buildText.js');
const watchText       = require(taskDir + 'watchText.js');
const formatTemplates = require(taskDir + 'formatTemplates.js');
const formatSass      = require(taskDir + 'formatSass.js');

// Sets
exports.default = series(
  clean,
  buildSass,
  buildHTML,
  buildText
);

exports.build = exports.default;

exports.watch = parallel(
  watchSass,
  watchHTML,
  watchText
);

// Build
exports.buildHTML = buildHTML;
exports.buildHTML.description = "Builds HTML files from MJML templates.\n                                  Options:\n                                    --prod: Renders a production file, minified and with HTML comments stripped out.\n                                    -d:     Specifies design folder to use. (Default: _templates)\n                                    -e:     Specifies email folder to render.";
exports.buildText = buildText;
exports.buildText.description = "Generates a plain-text version of the email.";
exports.buildSass = buildSass;
exports.buildSass.description = "Compiles Sass files in the 'theme' directory.";

exports.processTemplates = processTemplates;

// Watch
exports.watchHTML = watchHTML;
exports.watchHTML.description = "Watches and renders HTML files for development (formatted, with comments).";
exports.watchSass = watchSass;
exports.watchSass.description = "Watches Sass files in the 'theme' directory.";
exports.watchText = watchText;
exports.watchText.description = "Watches rendered HTML file and regenerates plain-text version.";

// Format
exports.formatTemplates = formatTemplates;
exports.formatTemplates.description = "Format your MJML templates with Prettier.";
exports.formatSass = formatSass;
exports.formatSass.description = "Format your Sass code with Prettier.";

// Debug
exports.listTemplates = listTemplates;
exports.listTemplates.description = "List all templates that will be processed. Useful for debugging.";
exports.clean = clean;
exports.clean.description = "Remove all generated files from the current design or email."

A quick-start setup for those writing email code in [MJML](https://mjml.io/),
the email templating language, using Node and Gulp.

The templates included are
[valid](https://mjml.io/documentation/#validating-mjml) under
[MJML version 4](https://github.com/mjmlio/mjml/releases).

One `index.html` file will be rendered, as well as (optionally) a plain-text
version, ready to import into your emailer of choice.
[See an example of the default layout.](https://rootwork.github.io/mjml-quickstart/designs/_templates/index.html)

<!-- The following section, from "ts" to "te", is an automatically-generated
  table of contents, updated whenever this file changes. Do not edit within
  this section. -->
<!-- prettier-ignore-start -->

<!--ts-->
* [Overview](#overview)
   * [Requirements](#requirements)
* [Setup](#setup)
* [Usage](#usage)
   * [Setting options](#setting-options)
   * [Creating a new design](#creating-a-new-design)
   * [Creating a new email from an existing design](#creating-a-new-email-from-an-existing-design)
   * [Rendering the email for production](#rendering-the-email-for-production)
   * [Formatting your code files](#formatting-your-code-files)
* [Full list of options](#full-list-of-options)
* [Known issues](#known-issues)
* [Thanks and Sponsorships](#thanks-and-sponsorships)
* [License](#license)

<!-- Added by: runner, at: Wed Apr 28 22:32:28 UTC 2021 -->

<!--te-->
<!-- prettier-ignore-end -->

# Overview

If you're here, you are probably already familiar with MJML, but if not you
should [read a little about it](https://documentation.mjml.io) first. It's a
component-based templating system that makes writing marketing or transactional
emails vastly easier, more compatible, and mobile-responsive. If you're
comfortable with HTML code, MJML will likely be much faster for you than any
drag-and-drop visual editor provided by an email service provider like
Mailchimp, Constant Contact, etc.

This project gives you a structure and workflow in which you can create
different email designs in MJML, then create individual emails based on those
designs. The resulting `index.html` file (and plain-text `index.txt` file, if
you've chosen the text option) is optimized to render correctly in
[the vast majority of email systems and clients](https://mjml.io/faq#email-clients).
When you're done, just drop the code from the file into your email service
provider's system.

## Requirements

You need to have at least [Node](https://nodejs.org/en/download/) 10.10.0. This
tool uses
[Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) 4.0.2+ and
[MJML](https://github.com/mjmlio/mjml/releases) 4.9.1+, but these are installed
automatically during setup, so it's only important to check these if you already
have them installed.

# Setup

- Go to the [Releases](https://github.com/rootwork/mjml-quickstart/releases)
  page and grab the most recent stable version. Alternatively, you can simply
  fork this repo and clone it locally.
- Remove the `.github` folder if you are using your own GitHub repo and don't
  want [GitHub Actions](https://docs.github.com/en/actions) running on it.
- Install with `npm i`
- MJML has [plugins](https://documentation.mjml.io/#applications-and-plugins)
  for Visual Studio Code, Atom, and Sublime Text 3.

# Usage

Run `gulp --tasks` if you want to see all of the options quickly, or skip down
to the [full list of options](#full-list-of-options).

## Setting options

Look at the [`config.yaml`](config.yaml) file at the root of the project.

Here you'll find options for setting the names of your `designs` and `emails`
directories, which will hold individual designs and emails, respectively. You
can also change the name of the master template file, and what types of files
(`.tpl`, by default) the tool processes as templates.

Under "Email-building options," you'll see preferences you can set on the
rendered emails: Whether to generate a plain-text version, and options on what
to include in that version.

## Creating a new design

Look in the `designs` subdirectory. This will hold each of the designs
(structure and styling) for your emails. For instance, you might have a
newsletter design, a welcome message design, and a special holiday design.

The `_templates` directory holds an example design. You can choose to use this
design and modify it, or write your own.

If you're starting out for the first time and want to create a new design with
the name "postmodern", for instance, you'd do the following in your console:

```sh
cd designs
cp -r _templates postmodern
cd postmodern
```

Within each design directory, you'll find the following:

- `index.tpl`: This file includes all the component files. You shouldn't
  normally need to edit this unless you are re-ordering the structure or
  changing the `lang` value.
- `content`: This directory holds files that will _always_ change in each email
  -- the title, preview text, header/hero area and main body.
- `structure`: This directory holds files that may _sometimes_ change in each
  email -- top and bottom navigation menus, social media links, and the footer
  area.
- `theme`: This directory contains the CSS attributes that, ideally, _will not_
  change from project to project.
- `dist`: This directory contains the output `index.html` for you to use.

In your console, run `gulp watch` with the `-d` option, followed by the
directory name of your design. Using the example above with a design named
"postmodern", you'd run `gulp watch -d postmodern`.

This will watch for any changes in any `index.tpl` files (including any
partials referenced with `<mj-include>`), and re-render the `index.html` file in
unminified form in the `dist` subdirectory of your design. You can leave a web
browser open to this page.

If you don't want to continuously watch your files, use `gulp build`, or just
`gulp` instead. Again using the "postmodern" example, that would be
`gulp build -d postmodern`. This will create the `index.html` file and then
stop.

## Creating a new email from an existing design

Instructions TK.

## Rendering the email for production

In your console, append `--prod`, e.g. with a design named "postmodern," you'd
use `gulp build -d postmodern --prod`. This will render `index.html`
[in minified form](https://github.com/mjmlio/mjml/blob/master/packages/mjml-cli/README.md#minify-and-beautify-the-output-html)
in the `dist` subdirectory.

Images can be included locally while you're drafting the email, but MJML doesn't
do anything magical in terms of hosting these images -- you'll still have to
upload them somewhere and change the references to the hosted images.

Once the production email is rendered, you can:

- import directly (as HTML) into your emailer of choice
- share the `index.html` file with colleagues
- upload the file as part of a repo and use something like
  [GitHub Pages](https://pages.github.com/) to view/share it in a browser; for
  instance
  [here's the rendered file](https://rootwork.github.io/mjml-quickstart/designs/_templates/dist/index.html)
  from the sample templates
- use the plain-text version, if you've chosen to have one created, in the
  appropriate place provided by your emailer

## Formatting your code files

Run `gulp formatTemplates` to auto-format all of your `.tpl` files using
[Prettier](https://prettier.io/).

Run `gulp formatStyles` to auto-format all of your `.scss` files using
[Prettier](https://prettier.io/).

# Full list of options

Append `--debug` to any command to see additional output on your current
configuration and files being processed.

`gulp --tasks`

```
├─┬ default
│ └─┬ <series>
│   ├── clean
│   ├── buildStyles
│   ├── buildTemplates
│   ├── buildHTML
│   ├── buildText
│   └── removeTemp
├─┬ build
│ └─┬ <series>
│   ├── clean
│   ├── buildStyles
│   ├── buildTemplates
│   ├── buildHTML
│   ├── buildText
│   └── removeTemp
├─┬ watch
│ └─┬ <parallel>
│   ├── watchStyles
│   ├── watchHTML
│   └── watchText
├── buildHTML        Builds HTML files from MJML templates.
                       Options:
                         --prod: Renders a production file, minified and with HTML comments stripped out.
                         -d:     Specifies design folder to use. (Default: _templates)
                         -e:     Specifies email folder to render.
├── buildText        Generates a plain-text version of the email.
├── buildStyles      Compiles Sass files in the 'theme' directory.
├── buildTemplates   Builds MJML templates from Handlebars templates.
├── watchHTML        Watches and renders HTML files for development (formatted, with comments).
├── watchStyles      Watches Sass files in the 'theme' directory.
├── watchText        Watches rendered HTML file and regenerates plain-text version.
├── formatTemplates  Format your MJML templates with Prettier.
├── formatStyles     Format your Sass code with Prettier.
├── listTemplates    List all templates that will be processed. Useful for debugging.
├── clean            Remove all generated files from the current design or email.
└── removeTemp       Remove temporary files generated during individual tasks.

```

# Known issues

- [Gulp output includes MJML depreciation notices](https://github.com/mjmlio/mjml/issues/2205)
  over which we have no control. The options `mjml` is warning us about will be
  moved to `mjml-cli` once we're given a way to do that.

- The `signoff.mjml` template, used for a signature or closing with a person's
  image, uses a regular `<img>` tag with inline styles. This will be moved to a
  custom component in a future release.

# Thanks and Sponsorships

Work funded in part by [Multi-Etch, LLC](https://www.multietch.com/).

**Consider [sponsoring me](https://github.com/sponsors/rootwork) and have your
name or logo included here!**

Built with original inspiration from
[dalefish/mjml-boilerplate-win](https://github.com/dalefish/mjml-boilerplate-win).

Thanks, of course, to the folks working on
[mjmlio/mjml](https://github.com/mjmlio/mjml). You are the light in the terrible
email-HTML darkness.

# License

GPLv3. See [LICENSE](LICENSE).

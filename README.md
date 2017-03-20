## You can use this template as a starting point for building static sites. ##

### What's included?

 - [Sass](http://sass-lang.com/)
 - [Panini](https://github.com/zurb/panini)
 - [UIkit 3](https://getuikit.com/)
 - [Gulp Bundle Assets](https://github.com/dowjones/gulp-bundle-assets)
 - [jQuery](https://jquery.com/)
 - [Browsersync](https://www.browsersync.io/)
 - [Autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
 - [Image optimization](https://github.com/sindresorhus/gulp-imagemin)

### Usage

Clone repository

    git clone git@github.com:paweltar/static-site-template.git my-project-name
    cd my-project-name

Remove git tracking and initialize your own

    rm -rf .git
    git init

Download dependencies

    npm install && bower install

Build project and start watching for changes

    gulp

Create /dist folder for the production website

    gulp build

## You can use this template as a starting point for building static sites. ##

----------
###What's included?

 - [Sass](http://sass-lang.com/)
 - [Panini](https://github.com/zurb/panini)
 - [UIkit 3](https://getuikit.com/)
 - [Gulp Bundle Assets](https://github.com/dowjones/gulp-bundle-assets)
 - [jQuery](https://jquery.com/)
 - [Browsersync](https://www.browsersync.io/)
 - [Autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
 - [Image optimization](https://github.com/sindresorhus/gulp-imagemin)

###Usage

**CLONE REPOSITORY**

    git clone git@github.com:paweltar/static-site-template.git my-project-name
    cd my-project-name

**REMOVE GIT TRACKING AND INITIALIZE YOUR OWN**

    rm -rf .git
    git init

**DOWNLOAD DEPENDENCIES**

    npm install && bower install

**BUILD PROJECT AND START WATCHING FOR CHANGES**

    gulp

**CREATE /DIST FOLDER FOR THE PRODUCTION WEBSITE**

    gulp build

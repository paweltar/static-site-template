module.exports = {
  bundle: {
    main: {
      scripts: [
        './src/assets/js/app.js'
      ]
    },
    vendor: {
      scripts: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/uikit/dist/js/uikit.js',
          './bower_components/uikit/dist/js/uikit-icons.js'
      ]
    }
  }
};

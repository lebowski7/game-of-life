module.exports = function(config) {
  config.set({        
    frameworks: ['mocha'],         
    files: [
      {pattern: './src/**/*.spec.js', watched: false},      
    ],
    
    preprocessors: {                  
      './src/**/*.spec.js': ['webpack', 'sourcemap'],
      './src/**/*.js': ['webpack', 'sourcemap']
    },       
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },       
    reporters: ['mocha'],    
    port: 9876,    
    colors: true,    
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      //dir: require('path').join(__dirname, './output/coverage/jest'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    sonarqubeReporter: {
      basePath: 'src/app',        // test files folder
      filePattern: '**/*spec.ts', // test files glob pattern
      encoding: 'utf-8',          // test files encoding
      outputFolder: 'reports',    // report destination
      legacyMode: false,          // report for Sonarqube < 6.2 (disabled)
      reportName: (metadata) => { // report name callback, accepts also a string (reportName: 'report.xml') to generate a single file
        /**
         * Report metadata array:
         * - metadata[0] = browser name
         * - metadata[1] = browser version
         * - metadata[2] = plataform name
         * - metadata[3] = plataform version
         */
         return metadata.concat('xml').join('.');
      }
    },

    reporters: ['coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true,

    // Default configuration


        // // any of these options are valid: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39
        // coverageIstanbulReporter: {
        //   // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
        //   reports: ['html', 'lcovonly', 'text-summary'],
     
        //   // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
        //   //dir: path.join(__dirname, 'coverage'),
        //   dir: require('path').join(__dirname, './output/coverage/jest'),
        //   // Combines coverage information from multiple browsers into one report rather than outputting a report
        //   // for each browser.
        //   combineBrowserReports: true,
     
        //   // if using webpack and pre-loaders, work around webpack breaking the source path
        //   fixWebpackSourcePaths: true,
     
        //   // Omit files with no statements, no functions and no branches from the report
        //   skipFilesWithNoCoverage: true,
     
        //   // Most reporters accept additional config options. You can pass these through the `report-config` option
        //   'report-config': {
        //     // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
        //     html: {
        //       // outputs the report in ./coverage/html
        //       subdir: 'html'
        //     }
        //   },
     
        //   // enforce percentage thresholds
        //   // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
        //   thresholds: {
        //     emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
        //     // thresholds for all files
        //     global: {
        //       statements: 100,
        //       lines: 100,
        //       branches: 100,
        //       functions: 100
        //     },
        //     // thresholds per file
        //     each: {
        //       statements: 100,
        //       lines: 100,
        //       branches: 100,
        //       functions: 100,
        //       overrides: {
        //         'baz/component/**/*.js': {
        //           statements: 98
        //         }
        //       }
        //     }
        //   },
     
        //   verbose: true, // output config used by istanbul for debugging
     
        //   // `instrumentation` is used to configure Istanbul API package.
        //   instrumentation: {
        //     // To include `node_modules` code in the report.
        //     'default-excludes': false
        //   }
        // }
  });
};

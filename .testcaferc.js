const timeoutUnits = 10000;

module.exports = {
  browsers: "chrome:headless --disable-features=PasswordLeakDetection",
  disablePageCaching: true,
  disableMultipleWindows: true,
  disableNativeAutomation: true,
  screenshots: {
    takeOnFails: true,
    path: "screenshots",
    fullPage: true,
    pathPatternOnFails:
      "${DATE}_${TIME}/failedTests/${FIXTURE}/${USERAGENT}/${TEST}_${QUARANTINE_ATTEMPT}.png",
  },
  concurrency: 1,
  speed: 1,
  pageLoadTimeout: 20000,
  assertionTimeout: timeoutUnits,
  selectorTimeout: timeoutUnits,
  pageRequestTimeout: 20000,
  ajaxRequestTimeout: 20000,
  testExecutionTimeout: 300000,
  skipUncaughtErrors: true,
  ignoreCertificateErrors: true,
  skipJsErrors: true,
  testWithLogs: true,
  reporter: [
    {
      name: "spec",
    },
    {
      name: "junit",
      output: "reports/junit-report.xml",
    },
  ],
  quarantineMode: {
    successThreshold: 1,
    attemptLimit: 2,
  },
};

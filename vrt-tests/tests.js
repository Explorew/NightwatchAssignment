module.exports = {

      'Successful Credential Login With Text Validation': (browser) => {
        const page = browser.page.loginPage();
        page
          .navigate()
          .loginFilter('admin', '12345')
          .assert.containsText('#case_login', 'WELCOME :)','Successful credential login with text validation')
        browser.end();
      },
      
      'Successful Credential Login With Image Validation': (browser) => {
        const page = browser.page.loginPage();
        page
          .navigate()
          .loginFilter('admin', '12345')
          .assert.screenshotIdenticalToBaseline('#case_login','successfulCredential')      
        browser.end();
      },

      'Invalid Credential Login With Text Validation': (browser) => {
        const page = browser.page.loginPage();
        page
          .navigate()
          .loginFilter('incorrectUsername', 'incorrectPassword')
          .assert.containsText('#case_login', 'ACCESS DENIED!','Invalid credential login with text validation');
        browser.end();
  
      },

      'Invalid Credential Login With Text And Image Validation': (browser) => {
        const page = browser.page.loginPage();
        page
          .navigate()
          .loginFilter('incorrectUsername', 'incorrectPassword')          
          .assert.screenshotIdenticalToBaseline('#case_login','invalidCredential')   
          .assert.containsText('#case_login', 'ACCESS DENIED!','Invalid credential login with text validation');
        browser.end();
      }
  

  };
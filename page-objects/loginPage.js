module.exports = {
    url: 'http://testing-ground.scraping.pro/login',
    elements: {
        emailField: 'input[name="usr"]',
        passwordField: 'input[name="pwd"]',
        button: 'input[type="submit"]'
    },
    commands: [{
        loginFilter(username, password){
            return this
                .waitForElementVisible('@emailField')
                .setValue('@emailField', username)
                .waitForElementVisible('@passwordField')
                .setValue('@passwordField', password)
                .waitForElementVisible('@button')
                .click('@button');
        }
    }]
}
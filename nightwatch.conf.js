module.exports = {
  "src_folders" : ["vrt-tests"],
  "page_objects_path" : ['page-objects'],

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "skip_testcases_on_fail": false,
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}
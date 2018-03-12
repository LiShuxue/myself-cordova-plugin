var exec = require('cordova/exec');
var ContactPicker = function(){};

ContactPicker.prototype.pickContact = function(success, failure) {
    exec(success, failure, "ContactPicker", "pickContact", []);
};

ContactPicker.prototype.findAll = function(success, failure) {
    exec(success, failure, "ContactPicker", "findAll", []);
};

var contactpicker = new ContactPicker();
module.exports = contactpicker;
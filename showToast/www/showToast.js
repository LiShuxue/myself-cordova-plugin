var exec = require('cordova/exec');
var myFunc = function(){};

// arg1：成功回调
// arg2：失败回调
// arg3：将要调用类配置的标识,要在feature中配置的
// arg4：调用的原生方法名
// arg5：参数，json格式
myFunc.prototype.show=function(success, fail) {
    exec(success, fail, "ShowToast", "show", []);
};

var showtoast = new myFunc();
module.exports = showtoast;
# myself-cordova-plugin
<br/>

##第一次提交：添加Toast插件和调系统通讯录插件

>### 一、showToast

>>使用方法：

>>1.下载插件，然后将插件添加进项目中 cordova plugin add + “下载后的showToast的绝对路径”

>>2.在代码中引用

>><pre><code>
    myPlugin.showToast.show(
	function(msg){
	    console.log(msg);
	},
	function(msg){
	    console.log(msg);
	}
    );
>></code></pre>

>### 二、contactPicker

>>添加插件并在代码中引用

>><pre><code>
    myPlugin.ContactPicker.pickContact(
	function (contact) {
	     setTimeout(function () {
	          var phoneNumber = contact.phoneNumber;
	          phoneNumber = phoneNumber.replace(/[^0-9]/ig,"");
	          console.log(phoneNumber);
	     }, 100);
	}, 
	function(){}
    );
>></code></pre>
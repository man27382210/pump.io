# pump.io with facebook Bridge Example

Version 0.0.2

This is a very simple facebook Bridge Example for pump.io, which you have already know about pump.io
and want to add facebook message sync function.

Version 0.0.2 Have new function to checkin, using google map API and get place by facebook graph api.

[![Build Status](https://secure.travis-ci.org/e14n/pump.io.png)](http://travis-ci.org/e14n/pump.io)

## License

Copyright 2011-2013, E14N https://e14n.com/

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## What's the bridge doing?

As you already have your own pump.io instance, this example use
[pump.io-facebook-bridge](https://github.com/man27382210/pump.io-facebook-bridge)
plugin to implement facebook message sync.

You can use the live demo on 
[pumpio.zapto.org](http://pumpio.zapto.org)
register a new user for the exmaple pump.io instance. 

In this example will show you how to use facebook-bridge.
Otherwise, you can just use it by your way.

## Using Step

* Step 1. You should have your own facebook app for your pump.io instance.
It means you will have the appId, which will use after few steps.
Just use this app for Facebook login, type your pump.io instance URL.

![image](https://raw.github.com/man27382210/pump.io/master/readme_img/image_facebook_app_edit-0.png)
![image](https://raw.github.com/man27382210/pump.io/master/readme_img/image_facebook_app_edit-1.png)
![image](https://raw.github.com/man27382210/pump.io/master/readme_img/image_facebook_app_edit-2.png)

* Stpe 2. Add facebookconncet.js into folder public/javascript/pump, and change the appId for your's.

* Step 3. Add following code into the `public/template/layout.utml`, which will initialize the facebookconnect.js code.
	You can see the code in the line number `124 ~ 126`

		<script src="http://connect.facebook.net/en_US/all.js"></script>
    	<script src="/javascript/facebookconnect.js"></script>
    	<div id='fb-root'></div>


* Step 4. Add following code into the `public/template/nav-loggedin.utml`, which will become a new button for facebook login.
	You can see the code in the line number `14 ~ 18`

		<button type="button" class="btn btn-small primary" id="post-FB-button" title="Connect FB">
        <span class="hidden-phone">FB </span>
        <i class="icon-thumbs-up"></i>
        <i class="icon-thumbs-down"></i>
    	</button>


* Step 5. Add following cdoe into the `public/template/post-note.utml`,which will become a new checkbox to make sure you want to post the message to facebook.
	You can see the code in the line number `16 ~ 18`
	
		<div>
            <input id="FBcheckbox" type="checkbox" name="FB-post" value="FB-post"> post to facebook
        </div>

* Stpe 6. Add following code into the  `public/javascript/pump/view.js`.
	* First part will listen on 'fbStatusChange', it will check if user already authenticate facebook app or not at the begin.
It will change UI to let user realize the login status.

			$(this).on('fbStatusChange', function (event, data) {
	        if (data.status === 'connected') {
	            $('#post-FB-button .icon-thumbs-up').show();
	            $('#post-FB-button .icon-thumbs-down').hide();
	            $('#post-note #FBcheckbox').show();
	        } else {
	            $('#post-FB-button .icon-thumbs-up').hide();
	            $('#post-FB-button .icon-thumbs-down').show();
	            $('#post-note #FBcheckbox').hide();
	        	}
	    	});


   * Secound part is the button click function, this function is same as 'fbStatusChange', it just use if user didn't login or authenticate at the first time.
	
			"click #post-FB-button":"getFBLogin",
			"click #post-place-button": "postPlaceModal"},
        	getFBLogin: function() {
            facebookconnect.loginFB(function(res){
                if (res) {
                    $('#post-FB-button .icon-thumbs-up').show();
                    $('#post-FB-button .icon-thumbs-down').hide();
                    $('#post-note #FBcheckbox').show();
                } else {
                    $('#post-FB-button .icon-thumbs-up').hide();
                    $('#post-FB-button .icon-thumbs-down').show();
                    $('#post-note #FBcheckbox').hide();
                }
            });
            return false;
        	},

	* Third part is add funtion when the view endLoad.
It will happen on some situation such as re-login.

			endLoad: function() {
            	var view = this;
            	view.$("a.brand").spin(false);
            	facebookconnect.getStatusFB();
        	}
        	
   * Fourth part is the function for post to faebook.
Check out the checkbox status, if true, call the postFB with act.

			Pump.newMajorActivity(act, function(err, act) {
                if (err) {
                    view.showError(err);
                    view.stopSpin();
                } else {
                    //FB post
                    if(checkbox){
                        facebookconnect.postFB(act);
                    }else{
                        console.log('you dont want to post to FB');
                    }
                    view.stopSpin();
                    view.$el.modal('hide');
                    Pump.resetWysihtml5(view.$('#note-content'));
                    // Reload the current page
                    Pump.addMajorActivity(act);
                    view.remove();
                }
            });

* We can see the message on the facebook!
![image](https://raw.github.com/man27382210/pump.io/master/readme_img/image_facebook_sync_message-2.png)
![image](https://raw.github.com/man27382210/pump.io/master/readme_img/image_facebook_sync_message-1.png)

## Other things
* Fancy Avatars, © 2009 Brandon Mathis, http://brandonmathis.com/projects/fancy-avatars/ (CC-By)
* Glyphicons, http://glyphicons.com/ (CC-By)

This sample photo is used for the main page:

* http://www.flickr.com/photos/pshab/ (CC-by)

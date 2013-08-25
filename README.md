# pump.io with facebook Bridge Example

Version 0.0.1

This is a very simple facebook Bridge Example for pump.io, which you have already know about pump.io
and want to add facebook message sync function.

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

## What's the bridge do?

As you already have your own pump.io instance, this example use
http://github....
plugin to implement facebook message sync.

You can use the live demo on 
http://.....
register a new user for the exmaple pump.io instance, 

In this example will show you how to use facebook-bridge.
Otherwise, you can just use it by your way.

## Using Step

* Step 1. You should have your own facebook app for your pump.io instance.
It means you will have the appId, which will use after few steps.
Just use this app for Facebook login, type your pump.io instance URL.

* Stpe 2. Add facebookconncet.js into folder public/javascript/pump, 
and change the appId for your's.

* Step 3. Add following code into the public/template/layout.utml,
which will initialize the facebookconnect.js code.

* Step 4. Add following code into the public/template/nav-loggedin.utml,
which will become a new button for facebook login.

* Step 5. Add following cdoe into the public/template/post-note.utml,
which will become a new checkbox to make sure you want to post the message to facebook.

* Stpe 6. Add following code into the  public/javascript/pump/view.js.

	* First part will listen on 'fbStatusChange', it will check if user already authenticate facebook app or not at the begin.
It will change UI to let user realize the login status.

	* Secound part is the button click function, this function is same as 'fbStatusChange', it just use if user didn't login or authenticate at the first time.

	* Third part is add funtion when the view endLoad.
It will happen on some situation such as re-login.

	* Fourth part is the function for post to faebook.
Check out the checkbox status, if true, call the postFB with act.

* We can see the message on the facebook!

## Other things
* Fancy Avatars, © 2009 Brandon Mathis, http://brandonmathis.com/projects/fancy-avatars/ (CC-By)
* Glyphicons, http://glyphicons.com/ (CC-By)

This sample photo is used for the main page:

* http://www.flickr.com/photos/pshab/ (CC-by)

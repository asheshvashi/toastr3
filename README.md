# toastr3

> Note: this is a fork of [toastr](https://github.com/asheshvashiJPeer264/toastr). This library is made to use it without jQuery and with Typescript

**toastr** is a Javascript library for non-blocking notifications The goal is to create a simple core library that can be customized and extended.

[![Build Status](https://travis-ci.org/asheshvashi/toastr.svg)](https://travis-ci.org/asheshvashi/toastr)
Browser testing provided by BrowserStack.

#### Animation Changes
The following animations options have been deprecated and should be replaced:

 - Replace `options.fadeIn` with `options.showDuration`
 - Replace `options.onFadeIn` with `options.onShown`
 - Replace `options.fadeOut` with `options.hideDuration`
 - Replace `options.onFadeOut` with `options.onHidden`

## Quick Start

### 2 Easy Steps
For other API calls, see the [demo](http://codeseven.github.io/toastr/demo.html).

1. Import toastr3 (js and css)
	```js
	import Toastr from 'toastr3';

	import 'toastr3/dist/toastr3.min.css;

	const toastr = new Toastr();
	```

2. use toastr to display a toast for info, success, warning or error
	```js
	// Display an info toast with no title
	toastr.info('Are you the 6 fingered man?')
	```

### Other Options
```js
// Display a warning toast, with no title
toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

// Display a success toast, with a title
toastr.success('Have fun storming the castle!', 'Miracle Max Says')

// Display an error toast, with a title
toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

// Immediately remove current toasts without using animation
toastr.remove()

// Remove current toasts using animation
toastr.clear()

// Override global options
toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000})
```

### Escape HTML characters
In case you want to escape HTML characters in title and message

	toastr.options.escapeHtml = true;

### Close Button
Optionally enable a close button
```js
toastr.options.closeButton = true;
```

Optionally override the close button's HTML.

```js
toastr.options.closeHtml = '<button><i class="icon-off"></i></button>';
```

You can also override the CSS/LESS for `#toast-container .toast-close-button`

Optionally override the hide animation when the close button is clicked (falls back to hide configuration).
```js
toastr.options.closeMethod = 'fadeOut';
toastr.options.closeDuration = 300;
toastr.options.closeEasing = 'swing';
```

### Display Sequence
Show newest toast at bottom (top is default)
```js
toastr.options.newestOnTop = false;
```

### Callbacks
```js
// Define a callback for when the toast is shown/hidden/clicked
toastr.options.onShown = () => console.log('hello');
toastr.options.onHidden = () => console.log('goodbye');
toastr.options.onclick = () => console.log('clicked');
toastr.options.onCloseClick = () => console.log('close button clicked');
```

### Animation Options
Toastr will supply default animations, so you do not have to provide any of these settings. However you have the option to override the animations if you like.

#### Easings
Optionally override the animation easing to show or hide the toasts. Default is swing. swing and linear are built into jQuery.
```js
toastr.options.showEasing = 'swing';
toastr.options.hideEasing = 'linear';
toastr.options.closeEasing = 'linear';
```

Using the jQuery Easing plugin (http://www.gsgd.co.uk/sandbox/jquery/easing/)
```js
toastr.options.showEasing = 'easeOutBounce';
toastr.options.hideEasing = 'easeInBack';
toastr.options.closeEasing = 'easeInBack';
```

#### Animation Method
Use the jQuery show/hide method of your choice. These default to fadeIn/fadeOut. The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.
```js
toastr.options.showMethod = 'slideDown';
toastr.options.hideMethod = 'slideUp';
toastr.options.closeMethod = 'slideUp';
```

### Prevent Duplicates
Rather than having identical toasts stack, set the preventDuplicates property to true. Duplicates are matched to the previous toast based on their message content.
```js
toastr.options.preventDuplicates = true;
```

### Timeouts
Control how toastr interacts with users by setting timeouts appropriately.
```js
toastr.options.timeOut = 30; // How long the toast will display without user interaction
toastr.options.extendedTimeOut = 60; // How long the toast will display after a user hovers over it
```

### Prevent from Auto Hiding
To prevent toastr from closing based on the timeouts, set the `timeOut` and `extendedTimeOut` options to `0`. The toastr will persist until selected.

```js
toastr.options.timeOut = 0;
toastr.options.extendedTimeOut = 0;
```

### Progress Bar
Visually indicate how long before a toast expires.
```js
toastr.options.progressBar = true;
```

### rtl
Flip the toastr to be displayed properly for right-to-left languages.
```js
toastr.options.rtl = true;
```

## Building Toastr

To build the minified and css versions of Toastr you will need [node](http://nodejs.org) installed. (Use Homebrew or Chocolatey.)

```
npm install
```

At this point the dependencies have been installed and you can build Toastr

- Run the analytics `npm run lint`
- Run the test `npm test`
- Run the build `npm run build`

## Contributing

For a pull request to be considered it must resolve a bug, or add a feature which is beneficial to a large audience.

Pull requests must pass existing unit tests, CI processes, and add additional tests to indicate successful operation of a new feature, or the resolution of an identified bug.

Requests must be made against the `develop` branch. Pull requests submitted against the `master` branch will not be considered.

All pull requests are subject to approval by the repository owners, who have sole discretion over acceptance or denial.

## Authors
**John Papa**

+ [http://twitter.com/John_Papa](http://twitter.com/John_Papa)

**Tim Ferrell**

+ [http://twitter.com/ferrell_tim](http://twitter.com/ferrell_tim)

**Hans Fjällemark**

+ [http://twitter.com/hfjallemark](http://twitter.com/hfjallemark)

## Credits
Inspired by https://github.com/Srirangan/notifer.js/.

## Copyright
Copyright © 2012-2015

## License
toastr is under MIT license - http://www.opensource.org/licenses/mit-license.php

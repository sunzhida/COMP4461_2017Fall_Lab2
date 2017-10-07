# Smart Device Programming
> Lab materials for how to create smart home applications with Philips Hue.

> Venue: Room 4221, Teaching Lab 1, Academic Building.

> Date: Oct. 11, 2017

[![Bootstrap][bootstrap-image]][bootstrap-url]
[![HTML][html-image]][html-url]
[![jshue][jshue-image]][jshue-url]
[![License][license-image]][license-url]
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

<!-- [![Inline docs](http://inch-ci.org/github/sunzhida/COMP4461_2017Fall_Lab2.svg?branch=master)](http://inch-ci.org/github/sunzhida/COMP4461_2017Fall_Lab2) -->
<!-- [![Build Status][travis-image]][travis-url] -->

In this lab, we will introduce how to program with Philips Hue by JavaScript. In this repository, there is a framework created for you to get started.

## Table of contents

- [Overview](#overview)
- [Configuration](#configuration)
- [Development](#development)
- [Tips](#tips)
- [Contribute](#contribute)
- [Meta](#meta)

## Overview

### What is Philips Hue?
[Philips Hue](https://en.wikipedia.org/wiki/Philips_Hue) is a line of color changing LED lamps and white bulbs created by Philips. It can provide an immersive
experience with various user-defined lighting. There are different kinds of products in this line, and we are going to
use ‘[Philips Hue White and Color Wireless Ambiance Starter Kit A19 E27](https://www.apple.com/hk/shop/product/HJCA2PA/B/philips-hue-white-and-color-wireless-ambiance-starter-kit-a19-e27)’ in this lab.
The set of Philips Hue that we used in our project consists of four parts:
* Three Hue light bulbs
* One Hue bridge
* Power adapter for Hue bridge
* LAN cable to connect the Hue bridge to your router

### How Philips Hue works?
There are [four components](https://developers.meethue.com/) within Hue system:
* __Applications__: The control part of the system. It provides the interface for the users to make the lights do smart things.
* __Portal__: The connection part of the system. It delivers control commands from outside and keeps your software in the bridge up-to-date. The portal presents a utility API to help you discover the address of your bridge.
* __Bridge__: The communication part of the system. It enables the bulbs to communicate with each other as well as the portal through the Internet.
* __Lights__: The output of the system. They are connected to the bridge via an open standards protocol called ZigBee Light Link. These smart bulbs contain three types of LED specially chosen to produce a range of colors and intensities.

![](Structure.png)

## Configuration

### How to set up Philips Hue?
First, we need to prepare all the components as mentioned above. Make sure that:
* The application connects the local network created by the Wi-Fi router.
* The Wi-Fi router connects the Internet.
* The bridge connects the Wi-Fi router, and all the blue lights are on without blinking.

Note that your application and the bridge should be in the same local network.

### How to get the bridge details?
You can acquire the detail information about the bridge through [this](https://account.meethue.com/login), like the Internal IP Address, Gateway, etc. You need this information to debug with the lights when you develop your applications.

## Development

### Mobile demo
[Philips Hue](https://itunes.apple.com/us/app/philips-hue/id1055281310?mt=8) (by Philips Lighting BV) is a mobile application that lets you easily control your lights from any device and create the right ambience for every moment.

### Web demo
[Harmony for Philips Hue](http://benknight.github.io/hue-harmony/) is an open sourced web application that sets Philips Hue lights colors based on the color relationships.

### Live Demo
We will follow the tutorials [here](https://developers.meethue.com/documentation/getting-started) to show how to get familiar with the programming environments with Hue.

First, we need to obtain the _Internal IP Address_ and bridge assigned _Username_. After get connected with Hue bulb(s) via your devices, we can acquire all the bulbs' state through the link:

```
http://<Internal IP Address>/api/<Username>/lights
```

The structure of the data is like (here we use only one bulb):

```json
{
	"1": {
		"state": {
			"on": true,
			"bri": 254,
			"hue": 14910,
			"sat": 144,
			"effect": "none",
			"xy": [0.4596, 0.4105],
			"ct": 370,
			"alert": "none",
			"colormode": "ct",
			"reachable": true
		},
		"swupdate": {
			"state": "transferring",
			"lastinstall": null
		},
		"type": "Extended color light",
		"name": "Hue color lamp 1",
		"modelid": "LCT007",
		"manufacturername": "Philips",
		"uniqueid": "(omit)",
		"swversion": "5.38.1.14919"
	}
}
```

Then we can try to modify the bulb's state via:

```
http://<Internal IP Address>/api/<Username>/lights/1/state
```

with ``PUT`` method.

Note that the range for ``bri`` and ``sat`` are from ``0`` to ``254``, and the range for ``hue`` is from ``0`` to ``65535``. The bulbs we used are in ``LCT007`` model and the CIE color space is in [Gamut B](https://developers.meethue.com/documentation/core-concepts#color_gets_more_complicated).

### About the framework

This framework is built upon HTML5 Boilerplate V6.0.1, Boostrap v4 and jsHue v2.1.1. After extract the content into your server (e.g. Apache), you can get the bridge _IP Address_ from `console`.

The console information will also tell you the current state. If you get `error` message then you need to press the button on the bridge, otherwise you will receive a string generated by bridge as your _Username_. Copy the _Username_ to your local JavaScript code and save it in the `user` variable.

```js
var user = bridge.user("<your username>");
```
You will take the variable as a key to communicate with Hue.

After that you can follow the [instruction of jsHue](https://github.com/blargoner/jshue) to pass your commands to the bridge through your devices.

## Tips
+ Involve in the development community to get inspired, e.g., [Hue Pro Development Community](https://plus.google.com/communities/117365177082293877496).
+ Philips Hue [API](https://developers.meethue.com/philips-hue-api).
+ Philips Hue Python RGB / CIE1931 "xy" [Converter](https://github.com/benknight/hue-python-rgb-converter).
+ You can learn from the other developers’ works from [here](https://developers.meethue.com/tools-and-sdks).


## Contribute

We would love you for the contribution to **Lab2**, check the ``LICENSE`` file for more information.

## Meta

[Zhida Sun](http://zsunaj.student.ust.hk/). Distributed under the MIT license. See ``LICENSE`` for more information.

[html-image]:https://img.shields.io/badge/HTML5Boilerplate-6.0.1-008C96.svg
[html-url]: https://html5boilerplate.com/
[jshue-image]:https://img.shields.io/badge/jsHue-2.1.1-008C96.svg?style=flat
[jshue-url]: https://github.com/blargoner/jshue
[bootstrap-image]:https://img.shields.io/badge/Bootstrap-4.0.0-008C96.svg?style=flat
[bootstrap-url]: https://getbootstrap.com/
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: ./LICENSE.md
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[codebeat-image]: https://codebeat.co/badges/c19b47ea-2f9d-45df-8458-b2d952fe9dad
[codebeat-url]: https://codebeat.co/projects/github-com-vsouza-awesomeios-com

# Smart Device Programing
> Lab materials for how to create smart home applications with Philips Hue.

[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

In this lab, we will introduce how to program with Philips Hue by JavaScript. In this repository, there is a framework created for you to get started.

![](header.png)

## Table of contents

- [Overview](#overview)
- [Configuration](#configuration)
- [Development](#development)
- [Tips](#tips)
- [Contributing](#contributing)
- [License](#license)

## Overview

### What is Philips Hue?
Philips Hue is a line of color changing LED lamps and white bulbs created by Philips [1]. It can provide an immersive
experience with various user-defined lighting. There are different kinds of products in this line, and we are going to
use ‘[Philips Hue White and Color Wireless Ambiance Starter Kit A19 E27](https://www.apple.com/hk/shop/product/HJCA2PA/B/philips-hue-white-and-color-wireless-ambiance-starter-kit-a19-e27)’ in this lab.
The set of Philips Hue that we used in our project consists of four parts:
* Three Hue light bulbs
* One Hue bridge
* Power adapter for Hue bridge
* LAN cable to connect the Hue bridge to your router

### How Philips Hue works?
There are four components within Hue system [3]:
* Applications: The control part of the system. It provides the interface for the users to make the lights do smart things.
* Portal: The connection part of the system. It delivers control commands from outside and keeps your software in the bridge up-to-date. The portal presents a utility API to help you discover the address of your bridge.
* Bridge: The communication part of the system. It enables the bulbs to communicate with each other as well as the portal through the Internet.
* Lights: The output of the system. They are connected to the bridge via an open standards protocol called ZigBee Light Link. These smart bulbs contain three types of LED specially chosen to produce a range of colors and intensities.





- iOS 8.0+
- Xcode 7.3

## Installation

#### CocoaPods
You can use [CocoaPods](http://cocoapods.org/) to install `YourLibrary` by adding it to your `Podfile`:

```ruby
platform :ios, '8.0'
use_frameworks!
pod 'YourLibrary'
```

To get the full benefits import `YourLibrary` wherever you import UIKit

``` swift
import UIKit
import YourLibrary
```
#### Carthage
Create a `Cartfile` that lists the framework and run `carthage update`. Follow the [instructions](https://github.com/Carthage/Carthage#if-youre-building-for-ios) to add `$(SRCROOT)/Carthage/Build/iOS/YourLibrary.framework` to an iOS project.

```
github "yourUsername/yourlibrary"
```
#### Manually
1. Download and drop ```YourLibrary.swift``` in your project.  
2. Congratulations!  

## Usage example

```swift
import EZSwiftExtensions
ez.detectScreenShot { () -> () in
    print("User took a screen shot")
}
```

## Contribute

We would love you for the contribution to **YourLibraryName**, check the ``LICENSE`` file for more info.

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

[swift-image]:https://img.shields.io/badge/swift-3.0-orange.svg
[swift-url]: https://swift.org/
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[codebeat-image]: https://codebeat.co/badges/c19b47ea-2f9d-45df-8458-b2d952fe9dad
[codebeat-url]: https://codebeat.co/projects/github-com-vsouza-awesomeios-com

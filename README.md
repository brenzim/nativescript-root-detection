# NativeScript Root Detection

A NativeScript module for detecting root on Android and JailBroken on iOS

## Installation

From the command prompt of your app's root folder, execute the following

```javascript
tns plugin add nativescript-root-detection
```

## Usage 

To use the plugin do the following
	
	```javascript
	import {RootDetection} from 'nativescript-root-detection';
	.....
	const rooted = RootDetection.isDeviceRooted();
	if(rooted) {
	    // Any logic that you need
	}
    ```

## Android Detection

For Android the following library is used for detection 

https://github.com/scottyab/rootbeer
    
## iOS Detection

For iOS the following paths are checked, if any are present the device is deemed to be JailBroken
* "/Applications/Cydia.app", 
* "/Applications/blackra1n.app",
* "/Applications/FakeCarrier.app",
* "/Applications/Icy.app",
* "/Applications/IntelliScreen.app",
* "/Applications/MxTube.app",
* "/Applications/RockApp.app",
* "/Applications/SBSettings.app",
* "/Applications/WinterBoard.app",
* "/Library/MobileSubstrate/DynamicLibraries/LiveClock.plist",
* "/Library/MobileSubstrate/DynamicLibraries/Veency.plist",
* "/private/var/lib/apt",
* "/private/var/lib/cydia",
* "/private/var/mobile/Library/SBSettings/Themes",
* "/private/var/stash",
* "/private/var/tmp/cydia.log",
* "/System/Library/LaunchDaemons/com.ikey.bbot.plist",
* "/System/Library/LaunchDaemons/com.saurik.Cydia.Startup.plist",
* "/usr/bin/sshd",
* "/usr/libexec/sftp-server",
* "/usr/sbin/sshd"

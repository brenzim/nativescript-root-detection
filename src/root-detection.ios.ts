import {Common} from './root-detection.common';
import {File, Folder} from 'tns-core-modules/file-system';

const knownLocations = [
    "/Applications/Cydia.app",
    "/Applications/blackra1n.app",
    "/Applications/FakeCarrier.app",
    "/Applications/Icy.app",
    "/Applications/IntelliScreen.app",
    "/Applications/MxTube.app",
    "/Applications/RockApp.app",
    "/Applications/SBSettings.app",
    "/Applications/WinterBoard.app",
    "/Library/MobileSubstrate/DynamicLibraries/LiveClock.plist",
    "/Library/MobileSubstrate/DynamicLibraries/Veency.plist",
    "/private/var/lib/apt",
    "/private/var/lib/cydia",
    "/private/var/mobile/Library/SBSettings/Themes",
    "/private/var/stash",
    "/private/var/tmp/cydia.log",
    "/System/Library/LaunchDaemons/com.ikey.bbot.plist",
    "/System/Library/LaunchDaemons/com.saurik.Cydia.Startup.plist",
    "/usr/bin/sshd",
    "/usr/libexec/sftp-server",
    "/usr/sbin/sshd"
];


export class RootDetection extends Common {

    public static isDeviceRooted(): boolean {
        let rooted = false;
        knownLocations.forEach(location => {
            if (File.exists(location)) {
                rooted = true;
            }
        });
        if (!rooted) {
            return this.canWriteToSystemDirectories();
        }
        return rooted;
    }

    private static canWriteToSystemDirectories(): boolean {
        let stringToWrite = "Jailbreak Test";
        let privateDir = "/private/";
        let applicationDir = "/Applications";
        if (Folder.exists(privateDir)) {
            let path = "/private/jailbreak.txt";
            let systemDir = File.fromPath(path);

            systemDir.writeText(stringToWrite).then(result => {
                return true;
            }).catch(err => {
            });
        }
        if (Folder.exists(applicationDir)) {
            let path = "/Applications/jailbreak.txt";
            let dir = File.fromPath(path);

            dir.writeText(stringToWrite).then(result => {
                return true;
            }).catch(err => {
            });
        }
        return false;
    }

}

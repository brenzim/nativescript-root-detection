import {Common} from './root-detection.common';
import * as Utils from 'tns-core-modules/utils/utils'


declare module com {
    export module scottyab {
        export module rootbeer {
            export class RootBeer extends java.lang.Object {
                public constructor(context: any);

                public isRooted(): boolean;
            }
        }
    }
}

export class RootDetection extends Common {

    public static isDeviceRooted(): boolean {
        const appContext = Utils.ad.getApplicationContext();
        const rootBeer = new com.scottyab.rootbeer.RootBeer(appContext);
        return rootBeer.isRooted();
    }

}

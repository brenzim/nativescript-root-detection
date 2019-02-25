import {Observable} from 'tns-core-modules/data/observable';
import {RootDetection} from 'nativescript-root-detection';

export class HelloWorldModel extends Observable {
    public message: string;

    constructor() {
        super();

        this.message = "" + RootDetection.isDeviceRooted();
    }
}

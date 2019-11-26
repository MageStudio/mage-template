import { App } from 'mage-engine';

export default class FirstScene extends App {

    progressAnimation = (callback) => {
        setTimeout(() => {
            document.querySelector('.loader').classList.add('fadeout');
        }, 5000);
        setTimeout(() => {
            document.querySelector('.loader').classList.add('invisible');
        }, 6000);
        callback();
    }

    onCreate() {

    }
}

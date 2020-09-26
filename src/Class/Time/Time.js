import Key from '../../Key/key';
import Style from '../../Style/style';
import Config from '../../Config/config';

export default class Time {
    constructor(scene, keyTime = Key.time) {
        this.scene = scene;
        this.time();
    }

    time() {
        this.txtTime = this.scene.add.text(Config.width - 100, Config.height - 20,
            '', Style.txtTime);
        //function callbackTimeOut
        this.callbackTimeOut();
        //event loop time
        this.scene.time.addEvent({
            delay: 1000,
            callback: this.callbackTimeOut,
            callbackScope: this,
            loop: true
        });
    }

    /*end function time*/

    callbackTimeOut() {
        const date = new Date();
        let hours = date.getHours();
        hours = hours >= 10 ?  hours : '0' + hours;  
        let minutes = date.getMinutes();
        minutes = minutes >= 10 ? minutes : '0' + minutes;
        const time = hours + ':' + minutes;
        this.txtTime.setText(time);
    }

    /*end function callbackTimeOut*/
}
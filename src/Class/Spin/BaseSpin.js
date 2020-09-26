import Key from '../../Key/key';
import Options from '../../Constants/options';
import Config from '../../Config/config';
//Import Class
import TweenContainer from '../TweenContainer/TweenContainer';
//class BaseSpin
export default class BaseSpin {
    constructor(scene, KeyBaseSpin = KeyBaseSpin.KeyBaseSpin) {
        this.scene = scene;
        this.baseSpin();
    }

    baseSpin() {
        this.btnSpin = this.scene.add.sprite(Config.width / 2, Config.height - 75, 
            'buttons', 'btn_spin.png').setScale(0.7).setInteractive();
        //play spin
        this.btnSpin.on('pointerdown', this.playSpin, this);
    }

    /*end function base spin*/
    playSpin() {
        if(!Options.click) {
            this.btnSpin.setFrame('btn_stop_spin.png');
            //function setTint
            this.setTint();
            //set click = true
            Options.click = true;
            //Class Tween Container
            this.classTweenContainer = new TweenContainer(this.scene, Key.tweenContainer);
        }
    }

    /*end function play spin*/

    setTint() {
        this.btnSpin.setTint(0x212121);
        this.scene.classPayTable.btnPayTable.setTint(0x212121);
        this.scene.classAutoSpin.btnAutoSpin.setTint(0x212121);
        this.scene.classCoin.btnCoin.setTint(0x212121);
    }
}
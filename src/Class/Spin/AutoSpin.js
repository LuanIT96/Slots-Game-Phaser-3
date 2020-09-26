import Key from '../../Key/key';
import Options from '../../Constants/options';
import Config from '../../Config/config';

export default class AutoSpin {
    constructor(scene, keyAutoSpin = Key.autospin) {
        this.scene = scene;
        this.autoSpin();
    }

    autoSpin() {
        this.btnAutoSpin = this.scene.add.sprite(Config.width - 826, Config.height - 53, 
            'buttons', 'btn_auto_spin.png').setScale(1.2).setInteractive();
        this.btnAutoSpin.on('pointerover', () => {
            if(!Options.click) {
                this.btnAutoSpin.setScale(1.3);
            }
        });
        this.btnAutoSpin.on('pointerout', () => {
            if(!Options.click) {
                this.btnAutoSpin.setScale(1.2);   
            }
        });
    }

    /*end function autoSpin*/
}
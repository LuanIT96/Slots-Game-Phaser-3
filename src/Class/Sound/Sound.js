import Key from '../../Key/key';
import Config from '../../Config/config';

export default class Sound {
    constructor(scene, keySound = Key.sound) {
        this.scene = scene;
        this.sound();
    }

    sound() {
        this.btnSound = this.scene.add.sprite(Config.width - 1864, Config.height - 53, 
            'buttons', 'btn_sound.png').setScale(1.2).setInteractive();
        this.btnSound.on('pointerdown', this.onSound, this);
        this.btnSound.on('pointerover', () => this.btnSound.setScale(1.3));
        this.btnSound.on('pointerout', () => this.btnSound.setScale(1.2));
    }

    /*end function sound*/

    onSound() {
        
    }

    /*end function onSound*/
}
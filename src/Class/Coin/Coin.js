import Key from '../../Key/key';
import Options from '../../Constants/options';
import Config from '../../Config/config';

export default class Coin {
    constructor(scene, keyCoin = Key.coin) {
        this.scene = scene;
        this.coin();
    }

    coin() {
        this.btnCoin = this.scene.add.sprite(Config.width - 525, Config.height - 54, 
            'buttons', 'btn_coin.png').setScale(1.6).setInteractive();
        this.btnCoin.on('pointerover', () => {
            if(!Options.click) {
                this.btnCoin.setScale(1.7);
            }
        });
        this.btnCoin.on('pointerout', () => {
            if(!Options.click) {
                this.btnCoin.setScale(1.6);   
            }
        });
    }

    /*end function coin*/
}
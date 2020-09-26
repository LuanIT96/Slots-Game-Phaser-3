import Key from '../../Key/key';
import Options from '../../Constants/options';
import Config from '../../Config/config';

//Class PayTable
export default class PayTable {
    constructor(scene, keyPayTable = Key.paytable) {
        this.scene = scene;
        this.payTable();
    }

    payTable() {
        this.btnPayTable = this.scene.add.sprite(Config.width - 1099, Config.height - 51, 
            'buttons', 'btn_paytable.png').setScale(1.5).setInteractive();
        this.btnPayTable.on('pointerover', () => {
            if(!Options.click) {
                this.btnPayTable.setScale(1.6);
            }
        });
        this.btnPayTable.on('pointerout', () => {
            if(!Options.click) {
                this.btnPayTable.setScale(1.5);
            }
        });
    }

    /*end function payTable*/
}
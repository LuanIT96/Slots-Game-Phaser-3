import Key from '../Key/key';
import Config from '../Config/config';
import Container from '../Class/Container';
//Import Class
import BaseSpin from '../Class/Spin/BaseSpin';

//Class GameScene
export default class GameScene extends Phaser.Scene {
    constructor() {
        super(Key.gameScene);
    }

    preload() {
        //load image
        this.load.path = '../../local_assets/';
        this.load.atlas('backgroundColor', 'images/backgroundColor/background_color.png',
            'images/backgroundColor/background_color.json');
        this.load.atlas('symbols', 'images/symbols/symbols/symbols.png',
            'images/symbols/symbols/symbols.json');
        this.load.atlas('symbolsBlur', 'images/symbols/symbols_blur/symbols_blur.png',
            'images/symbols/symbols_blur/symbols_blur.json');
        this.load.atlas('buttons', 'images/button/button.png',
            'images/button/button.json');
    }

    /*end function preload*/

    create() {
        const backgroundColumn = this.add.sprite(Config.width / 2 - 590, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        const backgroundColumn2 = this.add.sprite(Config.width / 2 - 357, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        const backgroundColumn3 = this.add.sprite(Config.width / 2 - 120, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        const backgroundColumn4 = this.add.sprite(Config.width / 2 + 118, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        const backgroundColumn5 = this.add.sprite(Config.width / 2 + 355, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        const backgroundColumn6 = this.add.sprite(Config.width / 2 + 585, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        //Class Container
        this.container = new Container(this, Config.width - 1550, Config.height - 20);
        this.container2 = new Container(this, Config.width - 1320, Config.height - 20);
        this.container3 = new Container(this, Config.width - 1080, Config.height - 20);
        this.container4 = new Container(this, Config.width - 840, Config.height - 20);
        this.container5 = new Container(this, Config.width - 610, Config.height - 20);
        this.container6 = new Container(this, Config.width - 375, Config.height - 20);
        const backgroundColor = this.add.sprite(Config.width / 2, Config.height / 2,
        'backgroundColor', 'backgroundColor.png');
        //Class BaseSpin
        this.classBaseSpin = new BaseSpin(this, Key.baseSpin);
    }

    /*end function create*/

    update() {

    }

    /*end function update*/
}
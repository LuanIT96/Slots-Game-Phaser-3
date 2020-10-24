import Key from '../Key/key';
import Config from '../Config/config';
import Options from '../Constants/options';
import Style from '../Style/style';
import Container from '../Class/Container';
//Import Class
import Time from '../Class/Time/Time';
import BaseSpin from '../Class/Spin/BaseSpin';
import Sound from '../Class/Sound/Sound';
import PayTable from '../Class/PayTable/PayTable';
import AutoSpin from '../Class/Spin/AutoSpin';
import Coin from '../Class/Coin/Coin';

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
        this.load.atlas('buttons', 'images/buttons/buttons.png',
            'images/buttons/buttons.json');
    }

    /*end function preload*/

    create() {
        const backgroundColumn1 = this.add.sprite(Config.width / 2 - 590, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        const backgroundColumn2 = this.add.sprite(Config.width / 2 - 355, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        const backgroundColumn3 = this.add.sprite(Config.width / 2 - 120, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        const backgroundColumn4 = this.add.sprite(Config.width / 2 + 118, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        const backgroundColumn5 = this.add.sprite(Config.width / 2 + 355, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        const backgroundColumn6 = this.add.sprite(Config.width / 2 + 590, Config.height / 2 - 30,
            'backgroundColor', 'background_column.png');
        //Class Container
        this.container = new Container(this, Config.width - 1550, Config.height - 20);
        this.container2 = new Container(this, Config.width - 1315, Config.height - 20);
        this.container3 = new Container(this, Config.width - 1080, Config.height - 20);
        this.container4 = new Container(this, Config.width - 842, Config.height - 20);
        this.container5 = new Container(this, Config.width - 605, Config.height - 20);
        this.container6 = new Container(this, Config.width - 370, Config.height - 20);
        const backgroundColor = this.add.sprite(Config.width / 2, Config.height / 2,
        'backgroundColor', 'backgroundColor.png');
        //Class Time
        this.classTime = new Time(this, Key.time);
        //Class Sound
        this.classSounds = new Sound(this, Key.sound);
        //Class PayTable
        this.classPayTable = new PayTable(this, Key.paytable);
        //Class AutoSpin
        this.classAutoSpin = new AutoSpin(this, Key.autospin);
        //Class Coin
        this.classCoin = new Coin(this, Key.coin);
        //Class BaseSpin
        this.classBaseSpin = new BaseSpin(this, Key.baseSpin);
        //Add text Maxbet
        this.txtMaxBet = this.add.text(Config.width - 1340, Config.height - 56, 
            Options.maxBet, Style.txtMaxBet);
        //Add text Surplus
        this.txtSurplus = this.add.text(Config.width - 1290, Config.height - 20, 
            Options.surplus + 'VND', Style.txtSurplus);
        //Add text Bet
        this.txtBet = this.add.text(Config.width - 1085, Config.height - 20, 
            Options.bet + 'VND', Style.txtSurplus);
        //Add text Win
        this.txtWin = this.add.text(Config.width - 820, Config.height - 20, 
            Options.win + 'VND', Style.txtSurplus);
        //Add text Credit
        this.txtCredit = this.add.text(Config.width - 615, Config.height - 20, 
            Options.credit, Style.txtSurplus);
        //Add text Coin Value
        this.txtCoinValue = this.add.text(Config.width - 665, Config.height - 60, 
            Options.coinValue + 'VND', Style.txtCoinValue);
    }

    /*end function create*/

    update() {}

    /*end function update*/
}
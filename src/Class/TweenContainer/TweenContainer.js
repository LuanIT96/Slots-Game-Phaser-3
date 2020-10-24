import Key from '../../Key/key';
import Options from '../../Constants/options';
import Spin from '../../Class/Spin/Spin';

export default class TweenContainer {
    constructor(scene, KeyTween = Key.tweenContainer) {
        this.scene = scene;
        this.tweenContainer();
    }

    tweenContainer() {
        //column tweens 1
        this.columnTween1 = this.scene.tweens.add({
            targets: this.scene.container,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration }},
            repeat: Options.repeat[0],
            onRepeat: function() {
                const randomNumber = Phaser.Math.RND.between(1, 10);
                //update y
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].last.y = this.targets[0].first.y - Options.symbolHeight;
                const symbol = this.targets[0].last;
                //set texture symbols blur
                symbol.setVisible(true).setTexture('symbolsBlur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 0);
            },
            onComplete: function() {
                //update y
                this.updateTo('y', this.targets[0].y -= Options.symbolHeight, true);
                //set texture symbols
                for (let i = 0; i < 5; i++) {
                    const symbolsName = this.targets[0].list[i].frame.name;
                    this.targets[0].list[i].setTexture('symbols', symbolsName);
                }
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "+=" + Options.speed, 
                        duration: Options.duration * 2 } },
                    onComplete : function() {
                        this.targets[0].y -= Options.speed;
                    }
                }); 
            }
        }, this);
        //column tweens 2
        this.columnTween2 = this.scene.tweens.add({
            targets: this.scene.container2,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration } },
            repeat: Options.repeat[1],
            onRepeat: function() {
                const randomNumber = Phaser.Math.RND.between(1, 10);
                //update y
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].last.y = this.targets[0].first.y - Options.symbolHeight;
                const symbol = this.targets[0].last;
                //set texture symbols blur
                symbol.setVisible(true).setTexture('symbolsBlur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 0);
            },
            onComplete: function() {
                //update y
                this.updateTo('y', this.targets[0].y -= Options.symbolHeight, true);
                //set texture symbols
                for (let i = 0; i < 5; i++) {
                    const symbolsName = this.targets[0].list[i].frame.name;
                    this.targets[0].list[i].setTexture('symbols', symbolsName);
                }
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "+=" + Options.speed, 
                        duration: Options.duration * 2 } },
                    onComplete : function() {
                        this.targets[0].y -= Options.speed;
                    }
                }); 
            }
        }, this);
        //column tweens 3
        this.columnTween3 = this.scene.tweens.add({
            targets: this.scene.container3,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration } },
            repeat: Options.repeat[2],
            onRepeat: function() {
                const randomNumber = Phaser.Math.RND.between(1, 11);
                //update y
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].last.y = this.targets[0].first.y - Options.symbolHeight;
                const symbol = this.targets[0].last;
                //set texture symbols blur
                symbol.setVisible(true).setTexture('symbolsBlur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 0);
            },
            onComplete: function() {
                //update y
                this.updateTo('y', this.targets[0].y -= Options.symbolHeight, true);
                //set texture symbols
                for (let i = 0; i < 5; i++) {
                    const symbolsName = this.targets[0].list[i].frame.name;
                    this.targets[0].list[i].setTexture('symbols', symbolsName);
                }
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "+=" + Options.speed, 
                        duration: Options.duration * 2 } },
                    onComplete : function() {
                        this.targets[0].y -= Options.speed;
                    }
                }); 
            }
        }, this);
        //column tweens 4
        this.columnTween4 = this.scene.tweens.add({
            targets: this.scene.container4,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration } },
            repeat: Options.repeat[3],
            onRepeat: function() {
                const randomNumber = Phaser.Math.RND.between(1, 11);
                //update y
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].last.y = this.targets[0].first.y - Options.symbolHeight;
                const symbol = this.targets[0].last;
                //set texture symbols blur
                symbol.setVisible(true).setTexture('symbolsBlur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 0);
            },
            onComplete: function() {
                //update y
                this.updateTo('y', this.targets[0].y -= Options.symbolHeight, true);
                //set texture symbols
                for (let i = 0; i < 5; i++) {
                    const symbolsName = this.targets[0].list[i].frame.name;
                    this.targets[0].list[i].setTexture('symbols', symbolsName);
                }
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "+=" + Options.speed, 
                        duration: Options.duration * 2 } },
                    onComplete : function() {
                        this.targets[0].y -= Options.speed;
                    }
                }); 
            }
        }, this);
        //column tweens 5
        this.columnTween5 = this.scene.tweens.add({
            targets: this.scene.container5,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration } },
            repeat: Options.repeat[4],
            onRepeat: function() {
                const randomNumber = Phaser.Math.RND.between(1, 11);
                //update y
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].last.y = this.targets[0].first.y - Options.symbolHeight;
                const symbol = this.targets[0].last;
                //set texture symbols blur
                symbol.setVisible(true).setTexture('symbolsBlur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 0);
            },
            onComplete: function() {
                //update y
                this.updateTo('y', this.targets[0].y -= Options.symbolHeight, true);
                //set texture symbols
                for (let i = 0; i < 5; i++) {
                    const symbolsName = this.targets[0].list[i].frame.name;
                    this.targets[0].list[i].setTexture('symbols', symbolsName);
                }
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "+=" + Options.speed, 
                        duration: Options.duration * 2 } },
                    onComplete : function() {
                        this.targets[0].y -= Options.speed;
                    }
                }); 
            }
        }, this);
        //column tweens 6
        this.columnTween6 = this.scene.tweens.add({
            targets: this.scene.container6,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration } },
            repeat: Options.repeat[5],
            onRepeat: function() {
                const randomNumber = Phaser.Math.RND.between(1, 10);
                //update y
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].last.y = this.targets[0].first.y - Options.symbolHeight;
                const symbol = this.targets[0].last;
                //set texture symbols blur
                symbol.setVisible(true).setTexture('symbolsBlur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 0);
            },
            onComplete: function() {
                //update y
                this.updateTo('y', this.targets[0].y -= Options.symbolHeight, true);
                //set texture symbols
                for (let i = 0; i < 5; i++) {
                    const symbolsName = this.targets[0].list[i].frame.name;
                    this.targets[0].list[i].setTexture('symbols', symbolsName);
                }
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "+=" + Options.speed, 
                        duration: Options.duration * 2 } },
                    onComplete : function() {
                        this.targets[0].y -= Options.speed;
                        //set btn spin
                        this.targets[0].scene.classBaseSpin.btnSpin.setFrame('btn_spin.png');
                        //clear Tint
                        this.targets[0].scene.classBaseSpin.btnSpin.clearTint();
                        this.targets[0].scene.classPayTable.btnPayTable.clearTint();
                        this.targets[0].scene.classAutoSpin.btnAutoSpin.clearTint();
                        this.targets[0].scene.classCoin.btnCoin.clearTint();
                        //Options click = false
                        Options.click = false;
                        //Class Spin
                        this.spins = new Spin(this.targets[0].scene, Key.spin);
                    }
                }); 
            }
        }, this);
    }

    /*end function tween container*/
}
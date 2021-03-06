import Options from '../Constants/options';
//Class Container
export default class Container extends Phaser.GameObjects.Container {
    constructor(scene, x, y, children) {
        super(scene, x, y, children);
        scene.add.existing(this);
        const symbols1 = scene.add.sprite(0, - Options.symbolHeight * 4, 'symbols', 'symbols_' + this.random(1, 9) + '.png');
        const symbols2 = scene.add.sprite(0, - Options.symbolHeight * 3, 'symbols', 'symbols_' + this.random(1, 9) + '.png');
        const symbols3 = scene.add.sprite(0, - Options.symbolHeight * 2, 'symbols', 'symbols_' + this.random(1, 9) + '.png');
        const symbols4 = scene.add.sprite(0, - Options.symbolHeight, 'symbols', 'symbols_' + this.random(1, 9) + '.png');
        const symbols5 = scene.add.sprite(0, 0, 'symbols', 'symbols_' + this.random(1, 9) + '.png');
        this.add([symbols1, symbols2, symbols3, symbols4, symbols5]);
    }
    
    random(min, max) {
        return Phaser.Math.Between(min, max);
    }

    /* end function radom */
}
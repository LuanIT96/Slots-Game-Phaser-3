import Key from '../../Key/key';

export default class Spin {
    constructor(scene, KeySpin = Key.spin) {
        this.scene = scene;
        this.getResultSpin();
    }

    getResultSpin() {
        this.resultArray = [];
        let s1 = this.scene.classBaseSpin.classTweenContainer.
        columnTween1.targets[0]; 
        let s2 = this.scene.classBaseSpin.classTweenContainer.
        columnTween2.targets[0]; 
        let s3 = this.scene.classBaseSpin.classTweenContainer.
        columnTween3.targets[0]; 
        let s4 = this.scene.classBaseSpin.classTweenContainer.
        columnTween4.targets[0]; 
        let s5 = this.scene.classBaseSpin.classTweenContainer.
        columnTween5.targets[0];
        let s6 = this.scene.classBaseSpin.classTweenContainer.
        columnTween6.targets[0];
        this.resultArray.push([s1.list[1].frame.name, s1.list[2].frame.name, s1.list[3].frame.name], 
        [s2.list[1].frame.name, s2.list[2].frame.name, s2.list[3].frame.name], 
        [s3.list[1].frame.name, s3.list[2].frame.name, s3.list[3].frame.name], 
        [s4.list[1].frame.name, s4.list[2].frame.name, s4.list[3].frame.name], 
        [s5.list[1].frame.name, s5.list[2].frame.name, s5.list[3].frame.name], 
        [s6.list[1].frame.name, s6.list[2].frame.name, s6.list[3].frame.name]);
        this.getWinningLines(this.resultArray);
    }
    /*end function getResultSpin*/
    getWinningLines(arrResult) {
        //console.log(arrResult);
    }
    /*end function getWinningLines*/
}
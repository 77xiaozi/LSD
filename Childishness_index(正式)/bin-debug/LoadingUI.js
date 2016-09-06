var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        _super.call(this);
        this.WIDTH = 350;
        this.HEIGHT = 20;
        this.createView();
    }
    var d = __define,c=LoadingUI,p=c.prototype;
    p.createView = function () {
        var bgImage = createBitmapByName("loadingBg_jpg");
        this.addChild(bgImage);
        var boarderShape = new egret.Shape();
        boarderShape.graphics.lineStyle(2, 0xffffff, 0.8);
        boarderShape.graphics.drawRoundRect(0, 0, this.WIDTH, this.HEIGHT, 20, 20);
        boarderShape.x = 200;
        boarderShape.y = 614;
        this.addChild(boarderShape);
        this.innerShape = new egret.Shape();
        this.innerShape.graphics.beginFill(0xffffff);
        this.innerShape.graphics.drawRoundRect(0, 0, 0, this.HEIGHT, 20, 20);
        this.innerShape.graphics.endFill();
        this.innerShape.x = 200;
        this.innerShape.y = 614;
        this.addChild(this.innerShape);
    };
    p.setProgress = function (current, total) {
        var percent = current / total;
        var color = 0xffffff;
        this.innerShape.graphics.beginFill(color);
        this.innerShape.graphics.drawRoundRect(0, 0, this.WIDTH * percent, this.HEIGHT, 20, 20);
        this.innerShape.graphics.endFill();
        this.innerShape.alpha = 1 * percent;
    };
    return LoadingUI;
}(egret.Sprite));
egret.registerClass(LoadingUI,'LoadingUI');

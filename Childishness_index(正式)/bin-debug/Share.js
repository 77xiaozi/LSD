var Share = (function (_super) {
    __extends(Share, _super);
    function Share() {
        _super.call(this);
        this.share();
    }
    var d = __define,c=Share,p=c.prototype;
    p.share = function () {
        var self = this;
        var share = new egret.Sprite();
        var share_bg = createBitmapByName("shareBG_jpg");
        var star1_1 = createBitmapByName("ShareStar1_png");
        var star1_2 = createBitmapByName("ShareStar2_png");
        var star1_3 = createBitmapByName("ShareStar3_png");
        share.addChild(share_bg);
        this.addChild(share);
        star1_1.anchorOffsetX = star1_1.width / 2;
        star1_1.anchorOffsetY = star1_1.height / 2;
        star1_1.x = 634 + star1_1.width / 2;
        star1_1.y = 144 + star1_1.height / 2;
        share.addChild(star1_1);
        egret.Tween.get(star1_1, { loop: true })
            .to({ scaleX: 1.1, scaleY: 1.1, alpha: 0.8 }, 600)
            .to({ scaleX: 0.8, scaleY: 0.8, alpha: 1 }, 600);
        star1_2.anchorOffsetX = star1_2.width / 2;
        star1_2.anchorOffsetY = star1_2.height / 2;
        star1_2.x = 492 + star1_2.width / 2;
        star1_2.y = 198 + star1_2.height / 2;
        share.addChild(star1_2);
        egret.Tween.get(star1_2, { loop: true })
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500)
            .to({ scaleX: 0.8, scaleY: 0.8, alpha: 0.8 }, 500);
        star1_3.anchorOffsetX = star1_3.width / 2;
        star1_3.anchorOffsetY = star1_3.height / 2;
        star1_3.x = 298 + star1_3.width / 2;
        star1_3.y = 316 + star1_3.height / 2;
        share.addChild(star1_3);
        egret.Tween.get(star1_3, { loop: true })
            .to({ scaleX: 1.3, scaleY: 1.3, alpha: 0.8 }, 600)
            .to({ scaleX: 1.2, scaleY: 1.2, alpha: 1 }, 600);
        share_bg.touchEnabled = true;
        share_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.cardStock = new CardStock();
            self.stage.addChild(self.cardStock);
            self.stage.removeChild(self);
        }, this);
    };
    return Share;
}(egret.DisplayObjectContainer));
egret.registerClass(Share,'Share');

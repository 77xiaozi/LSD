var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        _super.call(this);
        this.sprites = [];
        this.HomePage();
    }
    var d = __define,c=HomePage,p=c.prototype;
    p.HomePage = function () {
        var homepage = new egret.Sprite();
        var bg1 = createBitmapByName("1backGround_jpg");
        var musicBtn = createBitmapByName("musicBtn_png");
        var bt1_1 = createBitmapByName("startButton1_png");
        var star1_1 = createBitmapByName("1star1_png");
        var star1_2 = createBitmapByName("1star2_png");
        var star1_3 = createBitmapByName("1star3_png");
        var star1_4 = createBitmapByName("1star4_png");
        homepage.addChild(bg1);
        homepage.addChild(bt1_1);
        this.addChild(homepage);
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        homepage.addChild(musicBtn);
        egret.Tween.get(musicBtn, { loop: true })
            .to({ rotation: 360 }, 3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            soundPlay();
        }, this);
        bt1_1.x = 284.5;
        bt1_1.y = 1084.3;
        star1_1.anchorOffsetX = star1_1.width / 2;
        star1_1.anchorOffsetY = star1_1.height / 2;
        star1_1.x = 48 + star1_1.width / 2;
        star1_1.y = 170 + star1_1.height / 2;
        homepage.addChild(star1_1);
        egret.Tween.get(star1_1, { loop: true })
            .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0.8 }, 500)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        star1_2.anchorOffsetX = star1_2.width / 2;
        star1_2.anchorOffsetY = star1_2.height / 2;
        star1_2.x = 646 + star1_2.width / 2;
        star1_2.y = 156 + star1_2.height / 2;
        homepage.addChild(star1_2);
        egret.Tween.get(star1_2, { loop: true })
            .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0.8 }, 500)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        star1_3.anchorOffsetX = star1_3.width / 2;
        star1_3.anchorOffsetY = star1_3.height / 2;
        star1_3.x = 18 + star1_3.width / 2;
        star1_3.y = 486 + star1_3.height / 2;
        homepage.addChild(star1_3);
        egret.Tween.get(star1_3, { loop: true })
            .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0.8 }, 500)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        star1_4.anchorOffsetX = star1_4.width / 2;
        star1_4.anchorOffsetY = star1_4.height / 2;
        star1_4.x = 26 + star1_4.width / 2;
        star1_4.y = 946 + star1_4.height / 2;
        homepage.addChild(star1_4);
        egret.Tween.get(star1_4, { loop: true })
            .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0.8 }, 500)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        var self = this;
        bt1_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.question = new Question();
            self.stage.addChild(self.question);
            self.stage.removeChild(self);
        }, this);
        bt1_1.touchEnabled = true;
        var hX;
        var homePageChange = function (e) {
            if (Math.abs(e.stageX - hX) > 20) {
                if (e.stageX < hX) {
                    self.stage.addChild(self.question);
                    self.stage.removeChild(self);
                }
            }
        };
        homepage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            hX = e.stageX;
        }, this);
        homepage.addEventListener(egret.TouchEvent.TOUCH_END, homePageChange, this);
        homepage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, homePageChange, this);
        homepage.touchEnabled = true;
        this.sprites.push(homepage);
    };
    return HomePage;
}(egret.DisplayObjectContainer));
egret.registerClass(HomePage,'HomePage');

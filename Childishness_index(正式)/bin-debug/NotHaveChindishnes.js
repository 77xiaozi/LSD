var NotHaveChindishnes = (function (_super) {
    __extends(NotHaveChindishnes, _super);
    function NotHaveChindishnes() {
        _super.call(this);
        this.notHaveChindishnes();
    }
    var d = __define,c=NotHaveChindishnes,p=c.prototype;
    p.notHaveChindishnes = function () {
        var self = this;
        var notHaveChindishnes = new egret.Sprite();
        var notHave_bg = createBitmapByName("ComeOn_jpg");
        var musicBtn = createBitmapByName("musicBtn_png");
        var oneMoreTime = createBitmapByName("OneMoreTime_png");
        var back = createBitmapByName("back_png");
        notHaveChindishnes.addChild(notHave_bg);
        this.addChild(notHaveChindishnes);
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        notHaveChindishnes.addChild(musicBtn);
        egret.Tween.get(musicBtn, { loop: true })
            .to({ rotation: 360 }, 3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            soundPlay();
        }, this);
        oneMoreTime.x = 253.5;
        oneMoreTime.y = 1091.2;
        notHaveChindishnes.addChild(oneMoreTime);
        back.x = 672;
        back.y = 1115;
        notHaveChindishnes.addChild(back);
        oneMoreTime.touchEnabled = true;
        oneMoreTime.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            paraEmpty();
            self.question = new Question();
            self.stage.addChild(self.question);
            self.stage.removeChild(self);
        }, this);
        back.touchEnabled = true;
        back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            paraEmpty();
            self.question = new Question();
            self.stage.addChild(self.question);
            self.stage.removeChild(self);
        }, this);
        var paraEmpty = function () {
            right_answer_count = 0;
            q1_btn = 0;
            q2_btn = 0;
            q3_btn = 0;
            q4_btn = 0;
            q5_btn = 0;
            q6_btn = 0;
            q1_a = false;
            q2_a = false;
            q3_a = false;
            q4_a = false;
            q5_a = false;
            q6_a = false;
            q1_b = false;
            q2_b = false;
            q3_b = false;
            q4_b = false;
            q5_b = false;
            q6_b = false;
            q1_c = false;
            q2_c = false;
            q3_c = false;
            q4_c = false;
            q5_c = false;
            q6_c = false;
            q1_d = false;
            q2_d = false;
            q3_d = false;
            q4_d = false;
            q5_d = false;
            q6_d = false;
        };
    };
    return NotHaveChindishnes;
}(egret.DisplayObjectContainer));
egret.registerClass(NotHaveChindishnes,'NotHaveChindishnes');

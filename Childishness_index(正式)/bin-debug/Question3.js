var q3_a;
var q3_b;
var q3_c;
var q3_d;
var Question3 = (function (_super) {
    __extends(Question3, _super);
    function Question3() {
        _super.call(this);
        this.sprites = [];
        this.Question3();
    }
    var d = __define,c=Question3,p=c.prototype;
    p.Question3 = function () {
        var question3 = new egret.Sprite();
        var bg4 = createBitmapByName("4backGround_jpg");
        var musicBtn = createBitmapByName("musicBtn_png");
        var line4 = createBitmapByName("vLine4_png");
        var bt4_1 = createBitmapByName("back4_png");
        var bt4_2 = createBitmapByName("next4_png");
        var bt4_a = new egret.Bitmap();
        var bt4_b = new egret.Bitmap();
        var bt4_c = new egret.Bitmap();
        var bt4_d = new egret.Bitmap();
        var star4_1 = createBitmapByName("4star1_png");
        var star4_2 = createBitmapByName("4star2_png");
        question3.addChild(bg4);
        question3.addChild(bt4_1);
        question3.addChild(bt4_2);
        this.addChild(question3);
        if (q3_a == true) {
            bt4_a.texture = RES.getRes("4a4_png");
        }
        else {
            bt4_a.texture = RES.getRes("4A_png");
        }
        if (q3_b == true) {
            bt4_b.texture = RES.getRes("4b4_png");
        }
        else {
            bt4_b.texture = RES.getRes("4B_png");
        }
        if (q3_c == true) {
            bt4_c.texture = RES.getRes("4c4_png");
        }
        else {
            bt4_c.texture = RES.getRes("4C_png");
        }
        if (q3_d == true) {
            bt4_d.texture = RES.getRes("4d4_png");
        }
        else {
            bt4_d.texture = RES.getRes("4D_png");
        }
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        question3.addChild(musicBtn);
        egret.Tween.get(musicBtn, { loop: true })
            .to({ rotation: 360 }, 3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            soundPlay();
        }, this);
        star4_1.anchorOffsetX = star4_1.width / 2;
        star4_1.anchorOffsetY = star4_1.height / 2;
        star4_1.x = 58 + star4_1.width / 2;
        star4_1.y = 604 + star4_1.height / 2;
        question3.addChild(star4_1);
        egret.Tween.get(star4_1, { loop: true })
            .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0.8 }, 500)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        star4_2.anchorOffsetX = star4_2.width / 2;
        star4_2.anchorOffsetY = star4_2.height / 2;
        star4_2.x = 666 + star4_2.width / 2;
        star4_2.y = 748 + star4_2.height / 2;
        question3.addChild(star4_2);
        egret.Tween.get(star4_2, { loop: true })
            .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0.8 }, 500)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        line4.anchorOffsetY = line4.height;
        line4.scaleY = 0;
        line4.x = 507.9;
        line4.y = 660 + line4.height;
        question3.addChild(line4);
        bt4_1.x = 22.8;
        bt4_1.y = 1125.3;
        bt4_2.x = 668.3;
        bt4_2.y = 1099.4;
        bt4_a.anchorOffsetX = bt4_a.width;
        bt4_a.scaleX = 0;
        bt4_a.x = 396 + bt4_a.width;
        bt4_a.y = 660;
        question3.addChild(bt4_a);
        bt4_b.scaleX = 0;
        bt4_b.x = 507.9;
        bt4_b.y = 770.5;
        question3.addChild(bt4_b);
        bt4_c.anchorOffsetX = bt4_c.width;
        bt4_c.scaleX = 0;
        bt4_c.x = 396 + bt4_c.width;
        bt4_c.y = 884.3;
        question3.addChild(bt4_c);
        bt4_d.scaleX = 0;
        bt4_d.x = 507.9;
        bt4_d.y = 993.9;
        question3.addChild(bt4_d);
        var self = this;
        bt4_1.touchEnabled = true;
        bt4_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log(1);
            self.question2 = new Question2();
            self.stage.addChild(self.question2);
            self.stage.removeChild(self);
        }, this);
        bt4_2.touchEnabled = true;
        bt4_2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.question4 = new Question4();
            self.stage.addChild(self.question4);
            self.stage.removeChild(self);
        }, this);
        bt4_a.touchEnabled = true;
        bt4_a.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            q3_btn = 1;
            q3_a = true;
            q3_b = false;
            q3_c = false;
            q3_d = false;
            question3.touchEnabled = false;
            bt4_1.touchEnabled = false;
            bt4_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        }, this);
        bt4_b.touchEnabled = true;
        bt4_b.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            q3_btn = 1;
            q3_b = true;
            q3_a = false;
            q3_c = false;
            q3_d = false;
            question3.touchEnabled = false;
            bt4_1.touchEnabled = false;
            bt4_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        }, this);
        bt4_c.touchEnabled = true;
        bt4_c.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            q3_btn = 1;
            q3_c = true;
            q3_a = false;
            q3_b = false;
            q3_d = false;
            question3.touchEnabled = false;
            bt4_1.touchEnabled = false;
            bt4_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        }, this);
        bt4_d.touchEnabled = true;
        bt4_d.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            q3_btn = 1;
            q3_d = true;
            q3_a = false;
            q3_b = false;
            q3_c = false;
            question3.touchEnabled = false;
            bt4_1.touchEnabled = false;
            bt4_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
            console.log("count=" + right_answer_count);
        }, this);
        var q4X;
        var question3Change = function (e) {
            if (Math.abs(e.stageX - q4X) > 20) {
                if (e.stageX < q4X) {
                    self.question4 = new Question4();
                    self.stage.addChild(self.question4);
                    self.stage.removeChild(self);
                }
                else {
                    self.question2 = new Question2();
                    self.stage.addChild(self.question2);
                    self.stage.removeChild(self);
                }
            }
        };
        question3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            q4X = e.stageX;
        }, this);
        question3.addEventListener(egret.TouchEvent.TOUCH_END, question3Change, this);
        question3.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, question3Change, this);
        question3.touchEnabled = true;
        this.sprites.push(question3);
        egret.Tween.get(line4)
            .to({ scaleY: 1 }, 500)
            .call(function () {
            egret.Tween.get(bt4_a)
                .to({ scaleX: 1 }, 200);
            egret.Tween.get(bt4_b)
                .to({ scaleX: 1 }, 200);
            egret.Tween.get(bt4_c)
                .to({ scaleX: 1 }, 200);
            egret.Tween.get(bt4_d)
                .to({ scaleX: 1 }, 200);
        });
        var nextpage = function () {
            if (q3_btn == 1) {
                setTimeout(function () {
                    self.question4 = new Question4();
                    self.stage.addChild(self.question4);
                    self.stage.removeChild(self);
                }, 500);
            }
        };
        var chooseAnswerStatus = function () {
            if (q3_a == true) {
                bt4_a.texture = RES.getRes("4a4_png");
                if (q3_answer == 1) {
                    right_answer_count = right_answer_count - q3_answer;
                    q3_answer = 0;
                }
            }
            else {
                bt4_a.texture = RES.getRes("4A_png");
            }
            if (q3_b == true) {
                bt4_b.texture = RES.getRes("4b4_png");
                if (q3_answer == 1) {
                    right_answer_count = right_answer_count - q3_answer;
                    q3_answer = 0;
                }
            }
            else {
                bt4_b.texture = RES.getRes("4B_png");
            }
            if (q3_c == true) {
                bt4_c.texture = RES.getRes("4c4_png");
                if (q3_answer == 1) {
                    right_answer_count = right_answer_count - q3_answer;
                    q3_answer = 0;
                }
            }
            else {
                bt4_c.texture = RES.getRes("4C_png");
            }
            if (q3_d == true) {
                bt4_d.texture = RES.getRes("4d4_png");
                if (q3_answer == 0) {
                    q3_answer = 1;
                    right_answer_count = right_answer_count + q3_answer;
                }
            }
            else {
                bt4_d.texture = RES.getRes("4D_png");
            }
        };
    };
    return Question3;
}(egret.DisplayObjectContainer));
egret.registerClass(Question3,'Question3');

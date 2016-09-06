var q5_a;
var q5_b;
var q5_c;
var q5_d;
var Question5 = (function (_super) {
    __extends(Question5, _super);
    function Question5() {
        _super.call(this);
        this.sprites = [];
        this.Question5();
    }
    var d = __define,c=Question5,p=c.prototype;
    p.Question5 = function () {
        var question5 = new egret.Sprite();
        var line6 = createBitmapByName("vLine6_png");
        var bg6 = createBitmapByName("6backGround_jpg");
        var musicBtn = createBitmapByName("musicBtn_png");
        var bt6_1 = createBitmapByName("back6_png");
        var bt6_2 = createBitmapByName("next6_png");
        var bt6_a = new egret.Bitmap();
        var bt6_b = new egret.Bitmap();
        var bt6_c = new egret.Bitmap();
        var bt6_d = new egret.Bitmap();
        var star6_1 = createBitmapByName("6star1_png");
        var star6_2 = createBitmapByName("6star2_png");
        question5.addChild(bg6);
        question5.addChild(bt6_1);
        question5.addChild(bt6_2);
        this.addChild(question5);
        if (q5_a == true) {
            bt6_a.texture = RES.getRes("6a6_png");
        }
        else {
            bt6_a.texture = RES.getRes("6A_png");
        }
        if (q5_b == true) {
            bt6_b.texture = RES.getRes("6b6_png");
        }
        else {
            bt6_b.texture = RES.getRes("6B_png");
        }
        if (q5_c == true) {
            bt6_c.texture = RES.getRes("6c6_png");
        }
        else {
            bt6_c.texture = RES.getRes("6C_png");
        }
        if (q5_d == true) {
            bt6_d.texture = RES.getRes("6d6_png");
        }
        else {
            bt6_d.texture = RES.getRes("6D_png");
        }
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        question5.addChild(musicBtn);
        egret.Tween.get(musicBtn, { loop: true })
            .to({ rotation: 360 }, 3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            soundPlay();
        }, this);
        star6_1.anchorOffsetX = star6_1.width / 2;
        star6_1.anchorOffsetY = star6_1.height / 2;
        star6_1.x = 22 + star6_1.width / 2;
        star6_1.y = 148 + star6_1.height / 2;
        question5.addChild(star6_1);
        egret.Tween.get(star6_1, { loop: true })
            .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0.8 }, 500)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        star6_2.anchorOffsetX = star6_2.width / 2;
        star6_2.anchorOffsetY = star6_2.height / 2;
        star6_2.x = 292 + star6_2.width / 2;
        star6_2.y = 656 + star6_2.height / 2;
        question5.addChild(star6_2);
        egret.Tween.get(star6_2, { loop: true })
            .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0.8 }, 500)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        line6.anchorOffsetY = line6.height;
        line6.scaleY = 0;
        line6.x = 515.8;
        line6.y = 650.5 + line6.height;
        question5.addChild(line6);
        bt6_1.x = 20;
        bt6_1.y = 1117;
        bt6_2.x = 671;
        bt6_2.y = 1104;
        bt6_a.anchorOffsetX = bt6_a.width;
        bt6_a.scaleX = 0;
        bt6_a.x = 404 + bt6_a.width;
        bt6_a.y = 650.5;
        question5.addChild(bt6_a);
        bt6_b.scaleX = 0;
        bt6_b.x = 515.8;
        bt6_b.y = 761.4;
        question5.addChild(bt6_b);
        bt6_c.anchorOffsetX = bt6_c.width;
        bt6_c.scaleX = 0;
        bt6_c.x = 404 + bt6_c.width;
        bt6_c.y = 873.3;
        question5.addChild(bt6_c);
        bt6_d.scaleX = 0;
        bt6_d.x = 515.8;
        bt6_d.y = 986;
        question5.addChild(bt6_d);
        var self = this;
        bt6_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.question4 = new Question4;
            self.stage.addChild(self.question4);
            self.stage.removeChild(self);
        }, this);
        bt6_1.touchEnabled = true;
        bt6_2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.question6 = new Question6;
            self.stage.addChild(self.question6);
            self.stage.removeChild(self);
        }, this);
        bt6_2.touchEnabled = true;
        bt6_a.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            q5_btn = 1;
            q5_a = true;
            q5_b = false;
            q5_c = false;
            q5_d = false;
            question5.touchEnabled = false;
            bt6_1.touchEnabled = false;
            bt6_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
            console.log("count=" + right_answer_count);
        }, this);
        bt6_a.touchEnabled = true;
        bt6_b.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            q5_btn = 1;
            q5_b = true;
            q5_a = false;
            q5_c = false;
            q5_d = false;
            question5.touchEnabled = false;
            bt6_1.touchEnabled = false;
            bt6_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        }, this);
        bt6_b.touchEnabled = true;
        bt6_c.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            q5_btn = 1;
            q5_c = true;
            q5_a = false;
            q5_b = false;
            q5_d = false;
            question5.touchEnabled = false;
            bt6_1.touchEnabled = false;
            bt6_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        }, this);
        bt6_c.touchEnabled = true;
        bt6_d.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            q5_btn = 1;
            q5_d = true;
            q5_a = false;
            q5_b = false;
            q5_c = false;
            question5.touchEnabled = false;
            bt6_1.touchEnabled = false;
            bt6_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        }, this);
        bt6_d.touchEnabled = true;
        var q6X;
        var question5Change = function (e) {
            if (Math.abs(e.stageX - q6X) > 20) {
                if (e.stageX < q6X) {
                    self.question6 = new Question6;
                    self.stage.addChild(self.question6);
                    self.stage.removeChild(self);
                }
                else {
                    self.question4 = new Question4;
                    self.stage.addChild(self.question4);
                    self.stage.removeChild(self);
                }
            }
        };
        question5.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            q6X = e.stageX;
        }, this);
        question5.addEventListener(egret.TouchEvent.TOUCH_END, question5Change, this);
        question5.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, question5Change, this);
        question5.touchEnabled = true;
        this.sprites.push(question5);
        egret.Tween.get(line6)
            .to({ scaleY: 1 }, 500)
            .call(function () {
            egret.Tween.get(bt6_a)
                .to({ scaleX: 1 }, 200);
            egret.Tween.get(bt6_b)
                .to({ scaleX: 1 }, 200);
            egret.Tween.get(bt6_c)
                .to({ scaleX: 1 }, 200);
            egret.Tween.get(bt6_d)
                .to({ scaleX: 1 }, 200);
        });
        var nextpage = function () {
            if (q5_btn == 1) {
                setTimeout(function () {
                    self.question6 = new Question6();
                    self.stage.addChild(self.question6);
                    self.stage.removeChild(self);
                }, 500);
            }
        };
        var chooseAnswerStatus = function () {
            if (q5_a == true) {
                bt6_a.texture = RES.getRes("6a6_png");
                if (q5_answer == 0) {
                    q5_answer = 1;
                    right_answer_count = right_answer_count + q5_answer;
                }
            }
            else {
                bt6_a.texture = RES.getRes("6A_png");
            }
            if (q5_b == true) {
                bt6_b.texture = RES.getRes("6b6_png");
                if (q5_answer == 1) {
                    right_answer_count = right_answer_count - q5_answer;
                    q5_answer = 0;
                }
            }
            else {
                bt6_b.texture = RES.getRes("6B_png");
            }
            ;
            if (q5_c == true) {
                bt6_c.texture = RES.getRes("6c6_png");
                if (q5_answer == 1) {
                    right_answer_count = right_answer_count - q5_answer;
                    q5_answer = 0;
                }
            }
            else {
                bt6_c.texture = RES.getRes("6C_png");
            }
            if (q5_d == true) {
                bt6_d.texture = RES.getRes("6d6_png");
                if (q5_answer == 1) {
                    right_answer_count = right_answer_count - q5_answer;
                    q5_answer = 0;
                }
            }
            else {
                bt6_d.texture = RES.getRes("6D_png");
            }
        };
    };
    return Question5;
}(egret.DisplayObjectContainer));
egret.registerClass(Question5,'Question5');

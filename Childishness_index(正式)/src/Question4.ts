
var q4_a;
var q4_b;
var q4_c;
var q4_d;

class Question4 extends egret.DisplayObjectContainer{
	public constructor() {
        super();
        this.Question4();
	}
    private sprites = [];
    private question3: Question3;
    private question5: Question5;
	private Question4(){

        //问题4
        var question4: egret.Sprite = new egret.Sprite();
        var bg5: egret.Bitmap = createBitmapByName("5backGround_jpg"); 
        var musicBtn: egret.Bitmap = createBitmapByName("musicBtn_png");
        var line5: egret.Bitmap = createBitmapByName("vLine5_png");
        var bt5_1: egret.Bitmap = createBitmapByName("back5_png");
        var bt5_2: egret.Bitmap = createBitmapByName("next5_png");
        var bt5_a: egret.Bitmap = new egret.Bitmap();
        var bt5_b: egret.Bitmap = new egret.Bitmap();
        var bt5_c: egret.Bitmap = new egret.Bitmap();
        var bt5_d: egret.Bitmap = new egret.Bitmap();
        var star5_1: egret.Bitmap = createBitmapByName("5star1_png");
        var star5_2: egret.Bitmap = createBitmapByName("5star2_png");
        question4.addChild(bg5);
        question4.addChild(bt5_1);
        question4.addChild(bt5_2);
        this.addChild(question4);

        //答案的状态
        if(q4_a == true) { bt5_a.texture = RES.getRes("5a5_png"); }
        else { bt5_a.texture = RES.getRes("5A_png"); }
        if(q4_b == true) { bt5_b.texture = RES.getRes("5b5_png"); }
        else { bt5_b.texture = RES.getRes("5B_png"); }
        if(q4_c == true) { bt5_c.texture = RES.getRes("5c5_png"); }
        else { bt5_c.texture = RES.getRes("5C_png"); }
        if(q4_d == true) { bt5_d.texture = RES.getRes("5d5_png"); }
        else { bt5_d.texture = RES.getRes("5D_png"); } 
        
        //音乐按钮
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        question4.addChild(musicBtn);
        egret.Tween.get(musicBtn,{ loop: true })
            .to({ rotation: 360 },3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            soundPlay();
        },this);
        
        //星星
        star5_1.anchorOffsetX = star5_1.width / 2;
        star5_1.anchorOffsetY = star5_1.height / 2;
        star5_1.x = 18 + star5_1.width / 2;
        star5_1.y = 218 + star5_1.height / 2;
        question4.addChild(star5_1);
        egret.Tween.get(star5_1,{ loop: true })
            .to({ scaleX: 1.2,scaleY: 1.2,alpha: 0.8 },500)
            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);
        star5_2.anchorOffsetX = star5_2.width / 2;
        star5_2.anchorOffsetY = star5_1.height / 2;
        star5_2.x = 662 + star5_2.width / 2;
        star5_2.y = 474 + star5_2.height / 2;
        question4.addChild(star5_2);
        egret.Tween.get(star5_2,{ loop: true })
            .to({ scaleX: 1.2,scaleY: 1.2,alpha: 0.8 },500)
            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);
        //线
        line5.anchorOffsetY = line5.height;
        line5.scaleY = 0;
        line5.x = 231;
        line5.y = 670.8 + line5.height;
        question4.addChild(line5);
        //按钮位置
        bt5_1.x = 17.2;
        bt5_1.y = 1102;
        bt5_2.x = 665;
        bt5_2.y = 1125;

        bt5_a.anchorOffsetX = bt5_a.width;
        bt5_a.scaleX = 0;
        bt5_a.x = 120.7 + bt5_a.height;
        bt5_a.y = 670.8;
        question4.addChild(bt5_a);

        bt5_b.scaleX = 0;
        bt5_b.x = 231;
        bt5_b.y = 782.9;
        question4.addChild(bt5_b);

        bt5_c.anchorOffsetX = bt5_c.width;
        bt5_c.scaleX = 0;
        bt5_c.x = 120.7 + bt5_c.width;;
        bt5_c.y = 892.4
        question4.addChild(bt5_c);

        bt5_d.scaleX = 0;
        bt5_d.x = 231;
        bt5_d.y = 1003.6;
        question4.addChild(bt5_d);
        //注册监听
        var self = this;
        bt5_1.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            self.question3 = new Question3();
            self.stage.addChild(self.question3);
            self.stage.removeChild(self);
        },this);
        bt5_1.touchEnabled = true;

        
        bt5_2.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            self.question5 = new Question5();
            self.stage.addChild(self.question5);
            self.stage.removeChild(self);
        },this);
        bt5_2.touchEnabled = true;

        bt5_a.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q4_btn = 1; 
            q4_a = true;
            q4_b = false;
            q4_c = false;
            q4_d = false;
            question4.touchEnabled = false;
            bt5_1.touchEnabled = false;
            bt5_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
            console.log("count=" + right_answer_count);

        },this);
        bt5_a.touchEnabled = true;
        bt5_b.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q4_btn = 1; 
            q4_b = true;
            q4_a = false;
            q4_c = false;
            q4_d = false;
            question4.touchEnabled = false;
            bt5_1.touchEnabled = false;
            bt5_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        },this);
        bt5_b.touchEnabled = true;
        bt5_c.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q4_btn = 1;
            q4_c = true;
            q4_a = false;
            q4_b = false;
            q4_d = false;
            question4.touchEnabled = false;
            bt5_1.touchEnabled = false;
            bt5_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        },this);
        bt5_c.touchEnabled = true;
        bt5_d.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q4_btn = 1;
            q4_d = true;
            q4_a = false;
            q4_b = false;
            q4_c = false;
            question4.touchEnabled = false;
            bt5_1.touchEnabled = false;
            bt5_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        },this);
        bt5_d.touchEnabled = true;
        var q5X: number;
        var question4Change: Function = function(e: egret.TouchEvent) {
            if(Math.abs(e.stageX - q5X) > 20) {
                if(e.stageX < q5X) {
                    self.question5 = new Question5();
                    self.stage.addChild(self.question5);
                    self.stage.removeChild(self);
                } else {
                    self.question3 = new Question3();
                    self.stage.addChild(self.question3);
                    self.stage.removeChild(self);
                }
            }
        };
        question4.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(e: egret.TouchEvent) {
            q5X = e.stageX;
        },this);
        question4.addEventListener(egret.TouchEvent.TOUCH_END,question4Change,this);
        question4.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,question4Change,this);
        question4.touchEnabled = true;
        this.sprites.push(question4);
        
        
        egret.Tween.get(line5)
            .to({ scaleY: 1 },500)
            .call(function() {
                egret.Tween.get(bt5_a)
                    .to({ scaleX: 1 },200)
                egret.Tween.get(bt5_b)
                    .to({ scaleX: 1 },200)
                egret.Tween.get(bt5_c)
                    .to({ scaleX: 1 },200)
                egret.Tween.get(bt5_d)
                    .to({ scaleX: 1 },200)
            });
        

        //1秒后进入下一页
        var nextpage: Function = function() {

            if(q4_btn == 1) {
                setTimeout(function() {
                    self.question5 = new Question5();
                    self.stage.addChild(self.question5);
                    self.stage.removeChild(self);
                },500);
            }
        }
        
        var chooseAnswerStatus: Function = function() {
            //答案的状态
            if(q4_a == true) { bt5_a.texture = RES.getRes("5a5_png"); 
                if(q4_answer == 0) { q4_answer = 1; right_answer_count = right_answer_count + q4_answer; }}
            else { bt5_a.texture = RES.getRes("5A_png"); }
            if(q4_b == true) { bt5_b.texture = RES.getRes("5b5_png"); 
                if(q4_answer == 1) { right_answer_count = right_answer_count - q4_answer; q4_answer = 0; }}
            else { bt5_b.texture = RES.getRes("5B_png"); }
            if(q4_c == true) { bt5_c.texture = RES.getRes("5c5_png"); 
                if(q4_answer == 1) { right_answer_count = right_answer_count - q4_answer; q4_answer = 0; }}
            else { bt5_c.texture = RES.getRes("5C_png"); }
            if(q4_d == true) { bt5_d.texture = RES.getRes("5d5_png"); 
                if(q4_answer == 1) { right_answer_count = right_answer_count - q4_answer; q4_answer = 0; }}
            else { bt5_d.texture = RES.getRes("5D_png"); } 
        }
	}
}

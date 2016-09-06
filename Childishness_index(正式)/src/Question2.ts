
var q2_a;
var q2_b;
var q2_c;
var q2_d;

class Question2 extends egret.DisplayObjectContainer{

    public constructor() {
        super();
        this.Question2();
    }
    
    
    private sprites = [];
    private question: Question;
    private question3: Question3;
    
    private Question2(){

        //问题2
        var question2: egret.Sprite = new egret.Sprite();
        var bg3: egret.Bitmap = createBitmapByName("3backGround_jpg");
        var musicBtn: egret.Bitmap = createBitmapByName("musicBtn_png");
        var line3: egret.Bitmap = createBitmapByName("vLine3_png");
        var bt3_1: egret.Bitmap = createBitmapByName("back3_png");
        var bt3_2: egret.Bitmap = createBitmapByName("next3_png");
        var bt3_a: egret.Bitmap = new egret.Bitmap();
        var bt3_b: egret.Bitmap = new egret.Bitmap();
        var bt3_c: egret.Bitmap = new egret.Bitmap();
        var bt3_d: egret.Bitmap = new egret.Bitmap();
        var star3_1: egret.Bitmap = createBitmapByName("3star1_png");
        question2.addChild(bg3);
        question2.addChild(bt3_1);
        question2.addChild(bt3_2);
        this.addChild(question2);
        
        //答案的状态
        if(q2_a == true) { bt3_a.texture = RES.getRes("3a3_png"); }
        else { bt3_a.texture = RES.getRes("3A_png"); }
        if(q2_b == true) { bt3_b.texture = RES.getRes("3b3_png"); }
        else { bt3_b.texture = RES.getRes("3B_png"); }
        if(q2_c == true) { bt3_c.texture = RES.getRes("3c3_png"); }
        else { bt3_c.texture = RES.getRes("3C_png"); }
        if(q2_d == true) { bt3_d.texture = RES.getRes("3d3_png"); }
        else { bt3_d.texture = RES.getRes("3D_png"); } 
        
        //音乐按钮
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        question2.addChild(musicBtn);
        egret.Tween.get(musicBtn,{ loop: true })
            .to({ rotation: 360 },3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            soundPlay();
        },this);
        
        //星星
        star3_1.anchorOffsetX = star3_1.width / 2;
        star3_1.anchorOffsetY = star3_1.height / 2;
        star3_1.x = 604 + star3_1.width / 2;
        star3_1.y = 654 + star3_1.height / 2;
        question2.addChild(star3_1);
        egret.Tween.get(star3_1,{ loop: true })
            .to({ scaleX: 1.2,scaleY: 1.2,alpha: 0.8 },500)
            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);

        //线
        line3.anchorOffsetY = line3.height;
        line3.scaleY = 0;
        line3.x = 200;
        line3.y = 691.4 + line3.height;
        question2.addChild(line3);
        //按钮位置
        bt3_1.x = 17.2;
        bt3_1.y = 1102;
        bt3_2.x = 665;
        bt3_2.y = 1125;

        bt3_a.anchorOffsetX = bt3_a.width;
        bt3_a.scaleX = 0;
        bt3_a.x = 88.7 + bt3_a.width;
        bt3_a.y = 691.4;
        question2.addChild(bt3_a);

        bt3_b.scaleX = 0;
        bt3_b.x = 200;
        bt3_b.y = 803;
        question2.addChild(bt3_b);

        bt3_c.anchorOffsetX = bt3_c.width;
        bt3_c.scaleX = 0;
        bt3_c.x = 88.7 + bt3_c.width;
        bt3_c.y = 911;
        question2.addChild(bt3_c);

        bt3_d.scaleX = 0;
        bt3_d.x = 200;
        bt3_d.y = 1019.9;
        question2.addChild(bt3_d);
        //注册监听
        var self = this;
        bt3_1.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            self.question = new Question();
            self.stage.addChild(self.question);
            self.stage.removeChild(self);
        },this);
        bt3_1.touchEnabled = true;
        
        bt3_2.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {            
            self.question3 = new Question3();
            self.stage.addChild(self.question3);
            self.stage.removeChild(self);
        },this);
        bt3_2.touchEnabled = true;

        bt3_a.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q2_btn = 1;
            q2_a = true;
            q2_b = false;
            q2_c = false;
            q2_d = false;
            question2.touchEnabled = false;
            bt3_1.touchEnabled = false;
            bt3_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        },this);
        bt3_a.touchEnabled = true;
        bt3_b.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q2_btn = 1;
            q2_b = true;
            q2_a = false;
            q2_c = false;
            q2_d = false;
            question2.touchEnabled = false;
            bt3_1.touchEnabled = false;
            bt3_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        },this);
        bt3_b.touchEnabled = true;
        bt3_c.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q2_btn = 1;
            q2_c = true;
            q2_a = false;
            q2_b = false;
            q2_d = false;
            question2.touchEnabled = false;
            bt3_1.touchEnabled = false;
            bt3_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
        },this);
        bt3_c.touchEnabled = true;
        bt3_d.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q2_btn = 1;
            q2_d = true;
            q2_a = false;
            q2_b = false;
            q2_c = false;
            question2.touchEnabled = false;
            bt3_1.touchEnabled = false;
            bt3_2.touchEnabled = false;
            chooseAnswerStatus();
            nextpage();
            console.log("count=" + right_answer_count);

        },this);
        bt3_d.touchEnabled = true;
        var q3X: number;
        var question2Change: Function = function(e: egret.TouchEvent) {
            if(Math.abs(e.stageX - q3X) > 20) {
                if(e.stageX < q3X) {
                    self.question3 = new Question3();
                    self.stage.addChild(self.question3);
                    self.stage.removeChild(self);
                } else {

                    self.question = new Question();
                    self.stage.addChild(self.question);
                    self.stage.removeChild(self);
                }
            }
        };
        question2.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(e: egret.TouchEvent) {
            q3X = e.stageX;
        },this);
        question2.addEventListener(egret.TouchEvent.TOUCH_END,question2Change,this);
        question2.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,question2Change,this);
        question2.touchEnabled = true;
        this.sprites.push(question2);
        
        //注册监听
        
        egret.Tween.get(line3)
            .to({ scaleY: 1 },500)
            .call(function() {
                egret.Tween.get(bt3_a)
                    .to({ scaleX: 1 },200)
                egret.Tween.get(bt3_b)
                    .to({ scaleX: 1 },200)
                egret.Tween.get(bt3_c)
                    .to({ scaleX: 1 },200)
                egret.Tween.get(bt3_d)
                    .to({ scaleX: 1 },200)
            });
            
            
        //1秒后进入下一页
        var nextpage: Function = function() {
            if(q2_btn == 1) {
                setTimeout(function() {
                    self.question3 = new Question3();
                    self.stage.addChild(self.question3);
                    self.stage.removeChild(self);
                },500);
            } 
        }
        
        var chooseAnswerStatus: Function = function() {
            //答案的状态
            if(q2_a == true) { bt3_a.texture = RES.getRes("3a3_png"); 
                if(q2_answer == 1) { right_answer_count = right_answer_count - q2_answer; q2_answer = 0; }}
            else { bt3_a.texture = RES.getRes("3A_png"); }
            if(q2_b == true) { bt3_b.texture = RES.getRes("3b3_png"); 
                if(q2_answer == 1) { right_answer_count = right_answer_count - q2_answer; q2_answer = 0; }}
            else { bt3_b.texture = RES.getRes("3B_png"); }
            if(q2_c == true) { bt3_c.texture = RES.getRes("3c3_png"); 
                if(q2_answer == 1) { right_answer_count = right_answer_count - q2_answer; q2_answer = 0; }}
            else { bt3_c.texture = RES.getRes("3C_png"); }
            if(q2_d == true) { bt3_d.texture = RES.getRes("3d3_png"); 
                if(q2_answer == 0) { q2_answer = 1; right_answer_count = right_answer_count + q2_answer;  }}
            else { bt3_d.texture = RES.getRes("3D_png"); } 
        }
    }
}

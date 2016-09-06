
var q6_a;
var q6_b;
var q6_c;
var q6_d;

class Question6 extends egret.DisplayObjectContainer{
	public constructor() {
        super();
        this.Question7();
	}
    private sprites = [];
    private question5: Question5;
    private notHaveChindishnes: NotHaveChindishnes;
    private noneselected: Noneselected;
    private fractionPage: FractionPage;
    
    private Question7(){
        
        //问题6
        var question6: egret.Sprite = new egret.Sprite();
        var line7: egret.Bitmap = createBitmapByName("vLine7_png");
        var bg7: egret.Bitmap = createBitmapByName("7backGround_jpg");
        var musicBtn: egret.Bitmap = createBitmapByName("musicBtn_png");
        var bt7_1: egret.Bitmap = createBitmapByName("back7_png");
        var bt7_2: egret.Bitmap = createBitmapByName("submit7_png");
        var bt7_a: egret.Bitmap = createBitmapByName("7A_png");
        var bt7_b: egret.Bitmap = createBitmapByName("7B_png");
        var bt7_c: egret.Bitmap = createBitmapByName("7C_png");
        var bt7_d: egret.Bitmap = createBitmapByName("7D_png");
        var star7_1: egret.Bitmap = createBitmapByName("7star1_png");
        var star7_2: egret.Bitmap = createBitmapByName("7star2_png");
        question6.addChild(bg7);
        question6.addChild(bt7_1);
        question6.addChild(bt7_2);
        this.addChild(question6);
        
        //答案的状态
        if(q6_a == true) { bt7_a.texture = RES.getRes("7a7_png"); }
        else { bt7_a.texture = RES.getRes("7A_png"); }
        if(q6_b == true) { bt7_b.texture = RES.getRes("7b7_png"); }
        else { bt7_b.texture = RES.getRes("7B_png"); }
        if(q6_c == true) { bt7_c.texture = RES.getRes("7c7_png"); }
        else { bt7_c.texture = RES.getRes("7C_png"); }
        if(q6_d == true) { bt7_d.texture = RES.getRes("7d7_png"); }
        else { bt7_d.texture = RES.getRes("7D_png"); }

        //音乐按钮
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 10 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        question6.addChild(musicBtn);
        egret.Tween.get(musicBtn,{ loop: true })
            .to({ rotation: 360 },3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            soundPlay();
        },this);
        
        //星星
        star7_1.anchorOffsetX = star7_1.width / 2;
        star7_1.anchorOffsetY = star7_1.height / 2;
        star7_1.x = 48 + star7_1.width / 2;
        star7_1.y = 604 + star7_1.height / 2;
        question6.addChild(star7_1);
        egret.Tween.get(star7_1,{ loop: true })
            .to({ scaleX: 1.2,scaleY: 1.2,alpha: 0.8 },500)
            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);

        star7_2.anchorOffsetX = star7_2.width / 2;
        star7_2.anchorOffsetY = star7_2.height / 2;
        star7_2.x = 672 + star7_2.width / 2;
        star7_2.y = 738 + star7_2.height / 2;
        question6.addChild(star7_2);
        egret.Tween.get(star7_2,{ loop: true })
            .to({ scaleX: 1.2,scaleY: 1.2,alpha: 0.8 },500)
            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);

        //线
        line7.anchorOffsetY = line7.height;
        line7.scaleY = 0;
        line7.x = 244;
        line7.y = 664.4 + line7.height;
        question6.addChild(line7);
        //按钮位置
        bt7_1.x = 22;
        bt7_1.y = 1109.7;
        
        bt7_2.anchorOffsetX = bt7_2.width / 2;
        bt7_2.anchorOffsetY = bt7_2.height / 2;
        bt7_2.x = 588 + bt7_2.width/2;
        bt7_2.y = 1063 + bt7_2.height/2;
        egret.Tween.get(bt7_2,{ loop: true })
            .to({ scaleX: 1.2,scaleY: 1.2,alpha: 0.9 },500)
            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);

        bt7_a.anchorOffsetX = bt7_a.width;
        bt7_a.scaleX = 0;
        bt7_a.x = 134.4 + bt7_a.width;
        bt7_a.y = 664.4;
        question6.addChild(bt7_a);

        bt7_b.scaleX = 0;
        bt7_b.x = 244;
        bt7_b.y = 776.9;
        question6.addChild(bt7_b);

        bt7_c.anchorOffsetX = bt7_c.width;
        bt7_c.scaleX = 0;
        bt7_c.x = 134.4 + bt7_c.width;
        bt7_c.y = 887.6;
        question6.addChild(bt7_c);

        bt7_d.scaleX = 0;
        bt7_d.x = 244;
        bt7_d.y = 999;
        question6.addChild(bt7_d);
        //注册监听
        var self = this;
        bt7_1.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            self.question5 = new Question5();
            self.stage.addChild(self.question5);
            self.stage.removeChild(self);
        },this);
        bt7_1.touchEnabled = true;
        bt7_2.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            if(right_answer_count == 0 && q6_btn == 1 && q5_btn == 1 && q4_btn == 1 && q3_btn == 1 && q2_btn == 1 && q1_btn == 1){
                self.notHaveChindishnes = new NotHaveChindishnes();
                self.stage.addChild(self.notHaveChindishnes);
                self.stage.removeChild(self);
            }else if(q6_btn == 1 && q5_btn == 1 && q4_btn == 1 && q3_btn == 1 && q2_btn == 1 && q1_btn == 1) { 
                self.fractionPage = new FractionPage();
                self.stage.addChild(self.fractionPage);
                self.stage.removeChild(self); 
            } else if(q6_btn != 1 || q5_btn != 1 || q4_btn != 1 || q3_btn != 1 || q2_btn != 1 || q1_btn != 1) {
                self.noneselected = new Noneselected();
                self.stage.addChild(self.noneselected);
                self.stage.removeChild(self);
            } 
        },this);
        bt7_2.touchEnabled = true;

        bt7_a.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { 
            q6_btn = 1;
            q6_a = true;
            q6_b = false;
            q6_c = false;
            q6_d = false;
            chooseAnswerStatus();
        },this);
        bt7_a.touchEnabled = true;
        bt7_b.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q6_btn = 1;
            q6_b = true;
            q6_a = false;
            q6_c = false;
            q6_d = false;
            chooseAnswerStatus();
        },this);
        bt7_b.touchEnabled = true;
        bt7_c.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q6_btn = 1;
            q6_c = true;
            q6_a = false;
            q6_b = false;
            q6_d = false;
            chooseAnswerStatus();
        },this);
        bt7_c.touchEnabled = true;
        bt7_d.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            q6_btn = 1;
            q6_d = true;
            q6_a = false;
            q6_b = false;
            q6_c = false;
            chooseAnswerStatus();
            console.log("count=" + right_answer_count);

        },this);
        bt7_d.touchEnabled = true;
        this.sprites.push(question6);
        var q7X: number;
        var question6Change: Function = function(e: egret.TouchEvent) {
            if(Math.abs(e.stageX - q7X) > 20) {
                if(e.stageX < q7X) {
                } else {
                    self.question5 = new Question5();
                    self.stage.addChild(self.question5);
                    self.stage.removeChild(self);
                }
            }
        };
        question6.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(e: egret.TouchEvent) {
            q7X = e.stageX;
        },this);
        question6.addEventListener(egret.TouchEvent.TOUCH_END,question6Change,this);
        question6.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,question6Change,this);
        question6.touchEnabled = true;
        this.sprites.push(question6);
        
        
        egret.Tween.get(line7)
            .to({ scaleY: 1 },500)
            .call(function() {
                egret.Tween.get(bt7_a)
                    .to({ scaleX: 1 },200)
                egret.Tween.get(bt7_b)
                    .to({ scaleX: 1 },200)
                egret.Tween.get(bt7_c)
                    .to({ scaleX: 1 },200)
                egret.Tween.get(bt7_d)
                    .to({ scaleX: 1 },200)
            })
                
        var chooseAnswerStatus: Function = function() {
            //答案的状态
            if(q6_a == true) { bt7_a.texture = RES.getRes("7a7_png");
                if(q6_answer == 1) { right_answer_count = right_answer_count - q6_answer; q6_answer = 0;}}
            else { bt7_a.texture = RES.getRes("7A_png"); }
            if(q6_b == true) { bt7_b.texture = RES.getRes("7b7_png"); 
                if(q6_answer == 1) { right_answer_count = right_answer_count - q6_answer; q6_answer = 0;}}
            else { bt7_b.texture = RES.getRes("7B_png"); }
            if(q6_c == true) { bt7_c.texture = RES.getRes("7c7_png"); 
                if(q6_answer == 1) { right_answer_count = right_answer_count - q6_answer; q6_answer = 0;}}
            else { bt7_c.texture = RES.getRes("7C_png"); }
            if(q6_d == true) { bt7_d.texture = RES.getRes("7d7_png"); 
                if(q6_answer == 0) { q6_answer = 1; right_answer_count = right_answer_count + q6_answer;}}
            else { bt7_d.texture = RES.getRes("7D_png"); }
        }
	}
}

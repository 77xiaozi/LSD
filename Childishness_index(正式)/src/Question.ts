
var q1_a;
var q1_b;
var q1_c;
var q1_d;


class Question extends egret.DisplayObjectContainer{
    
    public constructor() {
        super();
        this.Question();
    }    
    
    private sprites = [];
    private question2: Question2;

    
    //创建显示内容
     private Question(){

         //问题1
         var question1: egret.Sprite = new egret.Sprite();
         var bg2: egret.Bitmap = createBitmapByName("2backGround_jpg");
         var musicBtn: egret.Bitmap = createBitmapByName("musicBtn_png");
         var line2: egret.Bitmap = createBitmapByName("vLine2_png");
         var bt2_1: egret.Bitmap = createBitmapByName("next2_png");
         var bt2_a: egret.Bitmap = new egret.Bitmap();
         var bt2_b: egret.Bitmap = new egret.Bitmap();
         var bt2_c: egret.Bitmap = new egret.Bitmap();
         var bt2_d: egret.Bitmap = new egret.Bitmap();
         var star2_1: egret.Bitmap = createBitmapByName("2star1_png")
         var star2_2: egret.Bitmap = createBitmapByName("2star2_png")
         question1.addChild(bg2);
         question1.addChild(bt2_1);
         this.addChild(question1);
         
         //音乐按钮
         musicBtn.width = 70;
         musicBtn.height = 70;
         musicBtn.anchorOffsetX = musicBtn.width/2;
         musicBtn.anchorOffsetY = musicBtn.height/2;
         musicBtn.x = 655 + musicBtn.width/2;
         musicBtn.y = 30 + musicBtn.height/2;
         musicBtn.touchEnabled = true;
         musicBtn.rotation = 0;
         question1.addChild(musicBtn);
         egret.Tween.get(musicBtn,{loop: true})
             .to({ rotation: 360},3000);
         musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
             soundPlay();
         },this);

         //答案的状态
         if(q1_a == true) { bt2_a.texture = RES.getRes("2a2_png"); }
         else { bt2_a.texture = RES.getRes("2A_png"); }
         if(q1_b == true) { bt2_b.texture = RES.getRes("2b2_png"); }
         else { bt2_b.texture = RES.getRes("2B_png"); }
         if(q1_c == true) { bt2_c.texture = RES.getRes("2c2_png"); }
         else { bt2_c.texture = RES.getRes("2C_png"); }
         if(q1_d == true) { bt2_d.texture = RES.getRes("2d2_png"); }
         else { bt2_d.texture = RES.getRes("2D_png"); } 

         //星星
         star2_1.anchorOffsetX = star2_1.width / 2;
         star2_1.anchorOffsetY = star2_1.height / 2;
         star2_1.x = 618 + star2_1.width / 2;
         star2_1.y = 298 + star2_1.height / 2;
         question1.addChild(star2_1);
         egret.Tween.get(star2_1,{ loop: true })
             .to({ scaleX: 1.2,scaleY: 1.2,alpha: 0.8 },500)
             .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);

         star2_2.anchorOffsetX = star2_2.width / 2;
         star2_2.anchorOffsetY = star2_2.height / 2;
         star2_2.x = 84 + star2_2.width / 2;
         star2_2.y = 628 + star2_2.height / 2;
         question1.addChild(star2_2);
         egret.Tween.get(star2_2,{ loop: true })
             .to({ scaleX: 1.2,scaleY: 1.2,alpha: 0.8 },500)
             .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);

         //线
         line2.anchorOffsetY = line2.height;
         line2.scaleY = 0;
         line2.x = 499;
         line2.y = 653 + line2.height;
         question1.addChild(line2);


         //按钮位置
         bt2_1.x = 665;
         bt2_1.y = 1125;
         //选项
         bt2_a.anchorOffsetX = bt2_a.width;
         bt2_a.scaleX = 0;
         bt2_a.x = 390 + bt2_a.width;
         bt2_a.y = 653;
         question1.addChild(bt2_a);

         bt2_b.scaleX = 0;
         bt2_b.x = 499;
         bt2_b.y = 760.5;
         question1.addChild(bt2_b);

         bt2_c.anchorOffsetX = bt2_c.width;
         bt2_c.scaleX = 0;
         bt2_c.x = 390 + bt2_c.width;
         bt2_c.y = 872.3;
         question1.addChild(bt2_c);

         bt2_d.scaleX = 0;
         bt2_d.x = 499;
         bt2_d.y = 983.3;
         question1.addChild(bt2_d);
         
         
         var self = this;
         bt2_1.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
             this.question2 = new Question2(); 
             self.stage.addChild(self.question2);
             self.stage.removeChild(self);
         },this);
         bt2_1.touchEnabled = true;
         bt2_a.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
             q1_btn = 1;
             q1_a = true;
             q1_b = false;
             q1_c = false;
             q1_d = false;
             question1.touchEnabled = false;
             bt2_1.touchEnabled = false;
             chooseAnswerStatus();
             nextpage();
         },this);
         bt2_a.touchEnabled = true;
         bt2_b.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
             q1_btn = 1;
             q1_b = true;
             q1_a = false;
             q1_c = false;
             q1_d = false;
             question1.touchEnabled = false;
             bt2_1.touchEnabled = false;
             chooseAnswerStatus();
             nextpage();
         },this);
         bt2_b.touchEnabled = true;
         bt2_c.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
             q1_btn = 1;
             q1_c = true;
             q1_a = false;
             q1_b = false;
             q1_d = false;
             question1.touchEnabled = false;
             bt2_1.touchEnabled = false;
             chooseAnswerStatus();
             nextpage();
         },this);
         bt2_c.touchEnabled = true;
         bt2_d.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
             q1_btn = 1;
             q1_d = true;
             q1_a = false;
             q1_b = false;
             q1_c = false;
             question1.touchEnabled = false;
             bt2_1.touchEnabled = false;
             chooseAnswerStatus();
             nextpage();
             console.log("count=" + right_answer_count);

         },this);
         bt2_d.touchEnabled = true;
         
         
         
         var q2X: number;
         var question1Change: Function = function(e: egret.TouchEvent) {
             if(Math.abs(e.stageX - q2X) > 20) {
                 if(e.stageX < q2X) {
                     self.question2 = new Question2();
                     self.stage.addChild(self.question2);
                     self.stage.removeChild(self);
                 }
             }
         };
         question1.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(e: egret.TouchEvent) {
             q2X = e.stageX;
         },this);
         question1.addEventListener(egret.TouchEvent.TOUCH_END,question1Change,this);
         question1.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,question1Change,this);
         question1.touchEnabled = true;
         
         
         egret.Tween.get(line2)
             .to({ scaleY: 1 },500)
             .call(function() {
                 egret.Tween.get(bt2_a)
                     .to({ scaleX: 1 },200)
                 egret.Tween.get(bt2_b)
                     .to({ scaleX: 1 },200)   
                 egret.Tween.get(bt2_c)
                     .to({ scaleX: 1 },200)    
                 egret.Tween.get(bt2_d)
                     .to({ scaleX: 1 },200)   
             });
         
         //1秒后进入下一页
         var nextpage: Function = function() {
             if(q1_btn == 1) {
                 setTimeout(function() {
                     self.question2 = new Question2();
                     self.stage.addChild(self.question2);
                     self.stage.removeChild(self);
                 },500);
             }
           
         }
         
         var chooseAnswerStatus: Function = function() {
             //答案的状态
             if(q1_a == true) { bt2_a.texture = RES.getRes("2a2_png"); 
                 if(q1_answer == 1) { right_answer_count = right_answer_count - q1_answer; q1_answer = 0; }}
             else { bt2_a.texture = RES.getRes("2A_png"); }
             if(q1_b == true) { bt2_b.texture = RES.getRes("2b2_png"); 
                 if(q1_answer == 1) { right_answer_count = right_answer_count - q1_answer; q1_answer = 0; }}
             else { bt2_b.texture = RES.getRes("2B_png"); }
             if(q1_c == true) { bt2_c.texture = RES.getRes("2c2_png"); 
                 if(q1_answer == 1) { right_answer_count = right_answer_count - q1_answer; q1_answer = 0; }}
             else { bt2_c.texture = RES.getRes("2C_png"); }
             if(q1_d == true) { bt2_d.texture = RES.getRes("2d2_png"); 
                 if(q1_answer == 0) { q1_answer = 1; right_answer_count = right_answer_count + q1_answer;}}
             else { bt2_d.texture = RES.getRes("2D_png"); }
         }
         

         
     
     
     }
}




class Noneselected extends egret.DisplayObjectContainer{
	public constructor() {
        super();
        this.Noneselected();
	}
    private sprites = [];
    private question: Question;
    private question2: Question2;
    private question3: Question3;
    private question4: Question4;
    private question5: Question5;
    private question6: Question6;
    
    private no_timer: egret.Timer;
    private Noneselected(){
        
        var self = this;
        //未选择的问题
        var noneselected: egret.Sprite = new egret.Sprite();
        var ns_bg: egret.Bitmap = createBitmapByName("fuzzycontext_jpg");
        var musicBtn: egret.Bitmap = createBitmapByName("musicBtn_png");
        var ns_view: egret.Bitmap = createBitmapByName("notSelect_png");
        var ns_btn: egret.Bitmap = createBitmapByName("ns_subimt_png");
        var ns_q1: egret.Bitmap = createBitmapByName("Q1_png");
        var ns_q2: egret.Bitmap = createBitmapByName("Q2_png");
        var ns_q3: egret.Bitmap = createBitmapByName("Q3_png");
        var ns_q4: egret.Bitmap = createBitmapByName("Q4_png");
        var ns_q5: egret.Bitmap = createBitmapByName("Q5_png");
        var ns_q6: egret.Bitmap = createBitmapByName("Q6_png");
        noneselected.addChild(ns_bg);
        this.addChild(noneselected);
        
        //音乐按钮
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        noneselected.addChild(musicBtn);
        egret.Tween.get(musicBtn,{ loop: true })
            .to({ rotation: 360 },3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            soundPlay();
        },this);
        
        //你还有多少题没有选择
        ns_view.x = 21;
        ns_view.y = 589;
        noneselected.addChild(ns_view);
        ns_view.touchEnabled = true;
        ns_view.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            self.no_timer.stop();
            GoBackToTheAnswer();
        },this);

        
        nonesekectedQuestion(); 

        ns_btn.x = 556;
        ns_btn.y = 1056;
        noneselected.addChild(ns_btn);
        ns_btn.touchEnabled = true;
        ns_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            self.no_timer.stop();
            GoBackToTheAnswer();
        },this);
        
        
        // 定时器
        this.no_timer = new egret.Timer(5000,1);
        this.no_timer.addEventListener(egret.TimerEvent.TIMER,GoBackToTheAnswer,this);
        this.no_timer.start();
        
        
        function nonesekectedQuestion(): void {
            var answers = [q1_btn, q2_btn, q3_btn, q4_btn, q5_btn, q6_btn];
            var ns_qs = [ns_q1,ns_q2,ns_q3,ns_q4,ns_q5,ns_q6];
            var labelSprite: egret.Sprite = new egret.Sprite();
            var noSelectedIndex: number = 0;
            for(var index: number = 0;index<6;index++){
                if(!answers[index]){
                    ns_qs[index].x = (ns_qs[index].width+10) * noSelectedIndex;
                    labelSprite.addChild(ns_qs[index]);
                    noSelectedIndex++;
                }
            }
            labelSprite.anchorOffsetX = labelSprite.width/2;
            labelSprite.anchorOffsetY = labelSprite.height/2;
            labelSprite.x = 375;
            labelSprite.y = 759+labelSprite.height/2;
            noneselected.addChild(labelSprite);
        }
        
        function GoBackToTheAnswer(): void{
            if(q1_btn != 1) {
                self.question = new Question();
                self.stage.addChild(self.question);
                self.stage.removeChild(self);
            } else if(q2_btn != 1) {
                self.question2 = new Question2();
                self.stage.addChild(self.question2);
                self.stage.removeChild(self);
            } else if(q3_btn != 1) {
                self.question3 = new Question3();
                self.stage.addChild(self.question3);
                self.stage.removeChild(self);
            } else if(q4_btn != 1) {
                self.question4 = new Question4();
                self.stage.addChild(self.question4);
                self.stage.removeChild(self);
            } else if(q5_btn != 1) {
                self.question5 = new Question5();
                self.stage.addChild(self.question5);
                self.stage.removeChild(self);
            } else if(q6_btn != 1) {
                self.question6 = new Question6();
                self.stage.addChild(self.question6);
                self.stage.removeChild(self);
            }
        }
        
        
        
        

	}
}

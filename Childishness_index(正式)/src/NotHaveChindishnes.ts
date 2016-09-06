
class NotHaveChindishnes extends egret.DisplayObjectContainer{
	public constructor() {
    	super();
    	this.notHaveChindishnes();
	}
	
	
    private question: Question;
    
	private notHaveChindishnes(){
    	
        var self = this;
        //没有童心
        var notHaveChindishnes: egret.Sprite = new egret.Sprite();
        var notHave_bg: egret.Bitmap = createBitmapByName("ComeOn_jpg");
        var musicBtn: egret.Bitmap = createBitmapByName("musicBtn_png");
        var oneMoreTime: egret.Bitmap = createBitmapByName("OneMoreTime_png");//按钮
        var back: egret.Bitmap = createBitmapByName("back_png");//返回按钮
        notHaveChindishnes.addChild(notHave_bg);
        this.addChild(notHaveChindishnes);
        
        //音乐按钮
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        notHaveChindishnes.addChild(musicBtn);
        egret.Tween.get(musicBtn,{ loop: true })
            .to({ rotation: 360 },3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            soundPlay();
        },this);
        
        oneMoreTime.x = 253.5;
        oneMoreTime.y = 1091.2;
        notHaveChindishnes.addChild(oneMoreTime);
        
        back.x = 672;
        back.y = 1115;
        notHaveChindishnes.addChild(back); 
        
        oneMoreTime.touchEnabled = true;
        oneMoreTime.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            paraEmpty();
            self.question = new Question();
            self.stage.addChild(self.question);
            self.stage.removeChild(self);
        },this);
        
        back.touchEnabled = true;
        back.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            paraEmpty();
            self.question = new Question();
            self.stage.addChild(self.question);
            self.stage.removeChild(self);
        },this);

        
        
        var paraEmpty: Function = function() {
            //正确数清空/清空选择的题目
            right_answer_count = 0; q1_btn = 0; q2_btn = 0; q3_btn = 0; q4_btn = 0; q5_btn = 0; q6_btn = 0;
            //清空选择状态
            q1_a = false; q2_a = false; q3_a = false; q4_a = false; q5_a = false; q6_a = false;
            q1_b = false; q2_b = false; q3_b = false; q4_b = false; q5_b = false; q6_b = false;
            q1_c = false; q2_c = false; q3_c = false; q4_c = false; q5_c = false; q6_c = false;
            q1_d = false; q2_d = false; q3_d = false; q4_d = false; q5_d = false; q6_d = false;
        }
	}
}

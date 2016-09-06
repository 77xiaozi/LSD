
var fpNumber: number;//最终得分
var textfield = new egret.TextField();  
class FractionPage extends egret.DisplayObjectContainer{
	public constructor() {
    	super();
    	this.fractionPage();
	}
	
    private sprites = [];
    private question: Question;
    private cardStock: CardStock;
    
    private data;
    private txtr;
    private mcf: egret.MovieClipDataFactory;
    private fishSwim: egret.MovieClip;
    

	//加载分数详情页
	private fractionPage(){
//        right_answer_count = 6;
    	  var self = this;
        fpNumber = 0; 
    	  //分数详情
        var fractionPage: egret.Sprite = new egret.Sprite();
        var fraction: egret.Bitmap = new egret.Bitmap();
        var fp_bg: egret.Bitmap = createBitmapByName("fpBG_jpg");
        var musicBtn: egret.Bitmap = createBitmapByName("musicBtn_png");
        var forPaying: egret.Bitmap = createBitmapByName("ForPaying_png");//旗子
        var thePole: egret.Bitmap = createBitmapByName("ThePole_png");//旗杆
        var getTheRewards: egret.Bitmap = createBitmapByName("GetTheRewards_png");//按钮
        var HotAirBalloon: egret.Bitmap = createBitmapByName("HotAirBalloon_png");//热气球
        var perfect: egret.Bitmap = createBitmapByName("perfect_png");//满分
        var passable: egret.Bitmap = createBitmapByName("passable_png");//60
        var hotHave: egret.Bitmap = createBitmapByName("hotHave_png");//30
        var back: egret.Bitmap = createBitmapByName("back_png");//返回按钮
        var childishnessNumber: egret.Bitmap = createBitmapByName("childishnessNumber_png");
        var d1: egret.Bitmap = createBitmapByName("d1_png"); 
        var d2: egret.Bitmap = createBitmapByName("d2_png");
        var d3: egret.Bitmap = createBitmapByName("d3_png");
        var d4: egret.Bitmap = createBitmapByName("d4_png");
        var d5: egret.Bitmap = createBitmapByName("d5_png");
        var d6: egret.Bitmap = createBitmapByName("d6_png");
        var d7: egret.Bitmap = createBitmapByName("d7_png");
        var d8: egret.Bitmap = createBitmapByName("d8_png");
        var d9: egret.Bitmap = createBitmapByName("d9_png");
        var d10: egret.Bitmap = createBitmapByName("d10_png");
        var d11: egret.Bitmap = createBitmapByName("d11_png");
        var d12: egret.Bitmap = createBitmapByName("d12_png");
        fractionPage.addChild(fp_bg);
        this.addChild(fractionPage);
        
        //音乐按钮
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        fractionPage.addChild(musicBtn);
        egret.Tween.get(musicBtn,{ loop: true })
            .to({ rotation: 360 },3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            soundPlay();
        },this);
        //满分
        perfect.x = 192;
        perfect.y = 250;
        perfect.alpha = 0;
        perfect.visible = false;
        fractionPage.addChild(perfect);
        //60分
        passable.x = 176;
        passable.y = 248;
        passable.alpha = 0;
        passable.visible = false;
        fractionPage.addChild(passable);
        //30分
        hotHave.x = 154;
        hotHave.y = 252;
        hotHave.alpha = 0;
        hotHave.visible = false;
        fractionPage.addChild(hotHave);
        //热气球
        HotAirBalloon.x = 394;
        HotAirBalloon.y = 484.7;
        fractionPage.addChild(HotAirBalloon);
        
        //旗杆
        thePole.x = 290;
        thePole.y = 129.2;
        fractionPage.addChild(thePole);
        //童心指数
        childishnessNumber.x = 382.3;
        childishnessNumber.y = 138;
        fractionPage.addChild(childishnessNumber);
        //分数翻滚
        textfield.size = 120;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.textColor = 0xffffff;
        fractionPage.addChild(textfield);
        //领取奖励
        getTheRewards.x = 253.5;
        getTheRewards.y = 1091.2;
        fractionPage.addChild(getTheRewards);
        getTheRewards.touchEnabled = true;
        getTheRewards.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            self.cardStock = new CardStock();
            self.stage.addChild(self.cardStock);
            self.stage.removeChild(self);
        },this);
        //重新开始
        back.x = 672;
        back.y = 1115;
        fractionPage.addChild(back);
        back.touchEnabled = true;
        back.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            paraEmpty();
            self.question = new Question();
            self.stage.addChild(self.question);
            self.stage.removeChild(self);
        },this);
        //小泡泡
        d1.anchorOffsetX = d1.width / 2; d1.x = 110 + d1.width / 2;
        d1.anchorOffsetY = d1.height / 2; d1.y = 112 + d1.height / 2;
        d2.anchorOffsetX = d2.width / 2; d2.x = 108.4 + d2.width / 2;
        d2.anchorOffsetY = d2.height / 2; d2.y = 202 + d2.height / 2;
        d3.anchorOffsetX = d3.width / 2; d3.x = 156.7 + d3.width / 2;
        d3.anchorOffsetY = d3.height / 2; d3.y = 170.8 + d3.height / 2;
        d4.anchorOffsetX = d4.width / 2; d4.x = 205.1 + d4.width / 2;
        d4.anchorOffsetY = d4.height / 2; d4.y = 150 + d4.height / 2;
        d5.anchorOffsetX = d5.width / 2; d5.x = 105.9 + d5.width / 2;
        d5.anchorOffsetY = d5.height / 2; d5.y = 260 + d5.height / 2;
        d6.anchorOffsetX = d6.width / 2; d6.x = 193.5 + d6.width / 2;
        d6.anchorOffsetY = d6.height / 2; d6.y = 198.4 + d6.height / 2;
        d7.anchorOffsetX = d7.width / 2; d7.x = 238 + d7.width / 2;
        d7.anchorOffsetY = d7.height / 2; d7.y = 179 + d7.height / 2;
        d8.anchorOffsetX = d8.width / 2; d8.x = 485 + d8.width / 2;
        d8.anchorOffsetY = d8.height / 2; d8.y = 518 + d8.height / 2;
        d9.anchorOffsetX = d9.width / 2; d9.x = 548 + d9.width / 2;
        d9.anchorOffsetY = d9.height / 2; d9.y = 542 + d9.height / 2;
        d10.anchorOffsetX = d10.width / 2; d10.x = 542.6 + d10.width / 2;
        d10.anchorOffsetY = d10.height / 2; d10.y = 570.1 + d10.height / 2;
        d11.anchorOffsetX = d11.width / 2; d11.x = 604 + d11.width / 2;
        d11.anchorOffsetY = d11.height / 2; d11.y = 534 + d11.height / 2;
        d12.anchorOffsetX = d12.width / 2; d12.x = 628 + d12.width / 2;
        d12.anchorOffsetY = d12.height / 2; d12.y = 615.8 + d12.height / 2;
        fractionPage.addChild(d1); fractionPage.addChild(d2); fractionPage.addChild(d3);
        fractionPage.addChild(d4); fractionPage.addChild(d5); fractionPage.addChild(d6);
        fractionPage.addChild(d7); fractionPage.addChild(d8); fractionPage.addChild(d9);
        fractionPage.addChild(d10); fractionPage.addChild(d11); fractionPage.addChild(d12);
        //正确率
        if(right_answer_count == 6) {
            forPaying.x = 302;
            forPaying.y = 409 + forPaying.height;
            fraction.x = 369;
            fraction.y = 218;
            textfield.x = 400;
            textfield.y = 210;
            fraction.texture = RES.getRes("100_png");
            egret.Tween.get(forPaying)
                .to({ y: 148 },1000)
                .call(function() {
                    fractionPage.removeChild(textfield);
                    fractionPage.addChild(fraction);
                })
            // 定时器
            var timer: egret.Timer = new egret.Timer(20,50);
            timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
            timer.start();
            var setTime = 1000+50;
        }
        else if(right_answer_count == 3 || right_answer_count == 4 || right_answer_count == 5) {
            forPaying.x = 302;
            forPaying.y = 409 + forPaying.height;
            
            fraction.x = 419;
            fraction.y = 204;
            textfield.x = 400;
            textfield.y = 210;
            fraction.texture = RES.getRes("60_png");

            egret.Tween.get(forPaying)
                .to({ y: 260 },600)
                .call(function() {
                    fractionPage.removeChild(textfield);
                    fractionPage.addChild(fraction);
                })

            // 定时器
            var timer: egret.Timer = new egret.Timer(20,30);
            timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
            timer.start();
            var setTime = 600 + 50;
        }
        else if(right_answer_count == 2 || right_answer_count == 1) {
            forPaying.x = 302;
            forPaying.y = 409 + forPaying.height;
            
            fraction.x = 425.3;
            fraction.y = 205;
            textfield.x = 400;
            textfield.y = 210;
            fraction.texture = RES.getRes("30_png");

            egret.Tween.get(forPaying)
                .to({ y: 409 },450)
                .call(function() {
                    fractionPage.removeChild(textfield);
                    fractionPage.addChild(fraction);
                })

            // 定时器
            var timer: egret.Timer = new egret.Timer(30,15);
            timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
            timer.start();
            var setTime = 450 + 50;
        }
        fractionPage.addChild(forPaying);
        
        setTimeout(function(){
            egret.Tween.get(forPaying).to({ alpha: 0 },500).call(function() { fractionPage.removeChild(forPaying); });
            egret.Tween.get(thePole).to({ alpha: 0 },500).call(function() { fractionPage.removeChild(thePole); });
            egret.Tween.get(HotAirBalloon).to({ alpha: 0 },500)
                .call(function(){
                    fractionPage.removeChild(HotAirBalloon);
                },self);
            egret.Tween.get(childishnessNumber).to({ alpha: 0 },500).call(function() { fractionPage.removeChild(childishnessNumber); });
            egret.Tween.get(fraction).to({ alpha: 0 },500)
                    .call(function() {
                        var HotAirBalloonMove: egret.Bitmap = createBitmapByName("HotAirBalloon_png");//热气球
                        HotAirBalloonMove.x = 657;
                        HotAirBalloonMove.y = 586;
                        fractionPage.addChild(HotAirBalloonMove);
                        egret.Tween.get(HotAirBalloonMove,{ loop: true })
                            .to({ x: 657,y: 586 },20)
                            .to({ x: 602.3,y: 131.6 },5000)
                            .to({ x: 657,y: 586 },5000)
                        if(right_answer_count == 6){
                            perfect.visible = true;
                            egret.Tween.get(perfect)
                                .to({ alpha : 1},1000)
                        }
                        else if(right_answer_count == 3 || right_answer_count == 4 || right_answer_count == 5){
                            passable.visible = true;
                            egret.Tween.get(passable)
                                .to({ alpha: 1 },1000)
                        }
                        else if(right_answer_count == 2 || right_answer_count == 1){
                            hotHave.visible = true;
                            egret.Tween.get(hotHave)
                                .to({ alpha: 1 },1000)
                        }
                        egret.Tween.get(d1,{ loop: true })
                            .to({ scaleX: 1.89,scaleY: 1.89,alpha: 0.8 },500)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },700);
                        egret.Tween.get(d2,{ loop: true })
                            .to({ scaleX: 1.67,scaleY: 1.67,alpha: 0.7 },900)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },1000);
                        egret.Tween.get(d3,{ loop: true })
                            .to({ scaleX: 1.78,scaleY: 1.78,alpha: 0.59 },550)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },700);
                        egret.Tween.get(d4,{ loop: true })
                            .to({ scaleX: 1.8,scaleY: 1.8,alpha: 0.6 },550)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },700);
                        egret.Tween.get(d5,{ loop: true })
                            .to({ scaleX: 1.4,scaleY: 1.4,alpha: 0.9 },800)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);
                        egret.Tween.get(d6,{ loop: true })
                            .to({ scaleX: 1.7,scaleY: 1.7,alpha: 0.5 },800)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);
                        egret.Tween.get(d7,{ loop: true })
                            .to({ scaleX: 1.8,scaleY: 1.8,alpha: 0.9 },800)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);
                        egret.Tween.get(d8,{ loop: true })
                            .to({ scaleX: 1.9,scaleY: 1.9,alpha: 0.78 },780)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },900);
                        egret.Tween.get(d9,{ loop: true })
                            .to({ scaleX: 1.5,scaleY: 1.5,alpha: 0.8 },500)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },480);
                        egret.Tween.get(d10,{ loop: true })
                            .to({ scaleX: 1.3,scaleY: 1.3,alpha: 0.8 },1200)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },950);
                        egret.Tween.get(d11,{ loop: true })
                            .to({ scaleX: 1.2,scaleY: 1.2,alpha: 0.7 },500)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },450);
                        egret.Tween.get(d12,{ loop: true })
                            .to({ scaleX: 2,scaleY: 2,alpha: 0.9 },800)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);
                        egret.Tween.get(HotAirBalloon,{ loop: true })
                            .to({ x: 2,scaleY: 2,alpha: 0.9 },800)
                            .to({ scaleX: 1,scaleY: 1,alpha: 1 },500);
                            
                            
                            
                            
                            
                        });

        },1500)
        

        var paraEmpty:Function = function(){
            //正确数清空/清空选择的题目
            right_answer_count = 0;q1_btn = 0;q2_btn = 0;q3_btn = 0;q4_btn = 0;q5_btn = 0;q6_btn = 0;
            //清空选择状态
            
            q1_a = false; q2_a = false; q3_a = false; q4_a = false; q5_a = false; q6_a = false;
            q1_b = false; q2_b = false; q3_b = false; q4_b = false; q5_b = false; q6_b = false;
            q1_c = false; q2_c = false; q3_c = false; q4_c = false; q5_c = false; q6_c = false;
            q1_d = false; q2_d = false; q3_d = false; q4_d = false; q5_d = false; q6_d = false;
            q1_answer = 0; q2_answer = 0; q3_answer = 0; q4_answer = 0; q5_answer = 0; q6_answer = 0;
        }

        
    }    
    private timerFunc(event: egret.TimerEvent) {
        fpNumber +=2;
        console.log(fpNumber);
        textfield.text = "" + fpNumber;
    }
}

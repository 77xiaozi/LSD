

class ActivityTime extends egret.DisplayObjectContainer{
	public constructor() {
    	super();
        this.activityTime();
	}
	
    private cardStock: CardStock;

    private activityTime() {
        
        var self = this;
        var activityTime: egret.Sprite = new egret.Sprite();
        var dc_bg: egret.Bitmap = createBitmapByName("DetailedContent_jpg");
        var musicBtn: egret.Bitmap = createBitmapByName("musicBtn_png");
        var activity_time: egret.Bitmap = createBitmapByName("content_png");
        var closeBtn: egret.Bitmap = createBitmapByName("closeBtn_png");
        activityTime.addChild(dc_bg);
        this.addChild(activityTime);

        activity_time.x = 82;
        activity_time.y = 84;
        activityTime.addChild(activity_time);
        
        //音乐按钮
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        activityTime.addChild(musicBtn);
        egret.Tween.get(musicBtn,{ loop: true })
            .to({ rotation: 360 },3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            soundPlay();
        },this);
        
        closeBtn.x = 283;
        closeBtn.y = 974;
        activityTime.addChild(closeBtn);
        closeBtn.touchEnabled = true;
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
            self.cardStock = new CardStock();
            self.stage.addChild(self.cardStock);
            self.stage.removeChild(self);
        },this);
    }
}

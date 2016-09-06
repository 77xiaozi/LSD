var ActivityTime = (function (_super) {
    __extends(ActivityTime, _super);
    function ActivityTime() {
        _super.call(this);
        this.activityTime();
    }
    var d = __define,c=ActivityTime,p=c.prototype;
    p.activityTime = function () {
        var self = this;
        var activityTime = new egret.Sprite();
        var dc_bg = createBitmapByName("DetailedContent_jpg");
        var musicBtn = createBitmapByName("musicBtn_png");
        var activity_time = createBitmapByName("content_png");
        var closeBtn = createBitmapByName("closeBtn_png");
        activityTime.addChild(dc_bg);
        this.addChild(activityTime);
        activity_time.x = 82;
        activity_time.y = 84;
        activityTime.addChild(activity_time);
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        activityTime.addChild(musicBtn);
        egret.Tween.get(musicBtn, { loop: true })
            .to({ rotation: 360 }, 3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            soundPlay();
        }, this);
        closeBtn.x = 283;
        closeBtn.y = 974;
        activityTime.addChild(closeBtn);
        closeBtn.touchEnabled = true;
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.cardStock = new CardStock();
            self.stage.addChild(self.cardStock);
            self.stage.removeChild(self);
        }, this);
    };
    return ActivityTime;
}(egret.DisplayObjectContainer));
egret.registerClass(ActivityTime,'ActivityTime');

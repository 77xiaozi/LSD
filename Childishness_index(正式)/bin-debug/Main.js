var serverHost = "http://play.9where.com/";
var myId;
var sound;
var music_position;
var soundChannel;
var sound_isPlay = false;
var q1_btn = 0;
var q2_btn = 0;
var q3_btn = 0;
var q4_btn = 0;
var q5_btn = 0;
var q6_btn = 0;
var right_answer_count = 0;
var q1_answer = 0;
var q2_answer = 0;
var q3_answer = 0;
var q4_answer = 0;
var q5_answer = 0;
var q6_answer = 0;
var stageW;
var stageH;
var choose_count;
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        Tracking(0);
        readyWX();
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        stageW = this.stage.width;
        stageH = this.stage.height;
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("loading", 1);
        RES.loadGroup("preload");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
        else if (event.groupName == "loading") {
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
        }
    };
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    p.onResourceLoadError = function (event) {
        console.warn("Group:" + event.groupName + " has failed to load");
        this.onResourceLoadComplete(event);
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        var self = this;
        this.HomePage = new HomePage();
        self.stage.addChild(this.HomePage);
        self.stage.removeChild(this);
        messageSound();
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
function createBitmapByName(name) {
    var result = new egret.Bitmap();
    var texture = RES.getRes(name);
    result.texture = texture;
    return result;
}
function messageSound() {
    this.sound = RES.getRes("sound_mp3");
    this.soundChannel = sound.play(0, 0);
    soundChannel.volume = 0.2;
}
function soundPlay() {
    if (sound_isPlay == true) {
        sound_isPlay = false;
        soundChannel = sound.play(0, 0);
    }
    else {
        sound_isPlay = true;
        soundChannel.stop();
    }
}
function readyWX() {
    $.getJSON("http://play.9where.com/LSD/signature", { "url": location.href.split('#')[0] }, function (r) {
        wx.config({
            debug: false,
            appId: r.appId,
            timestamp: r.timestamp,
            nonceStr: r.nonceStr,
            signature: r.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'addCard',
                'chooseCard'
            ]
        });
        wx.ready(function () {
            var pageUrl = location.href.split('?')[0];
            var sdata = new BodyMenuShareTimeline;
            sdata.title = "不想长大的你，快来测测你的童心指数";
            sdata.link = pageUrl;
            sdata.imgUrl = 'http://play.9where.com/wxservice/LSD/resource/shareLog.jpg';
            sdata.success = function () {
                Tracking(1);
            };
            wx.onMenuShareTimeline(sdata);
            var sadata = new BodyMenuShareAppMessage;
            sadata.title = "不想长大的你，快来测测你的童心指数";
            sadata.desc = "懂孩子 从眼前开始";
            sadata.link = pageUrl;
            sadata.imgUrl = 'http://play.9where.com/wxservice/LSD/resource/shareLog.jpg';
            sadata.success = function () {
                Tracking(1);
            };
            wx.onMenuShareAppMessage(sadata);
        });
    });
}
function Tracking(share) {
    $.getJSON("http://play.9where.com/LSD/tracking", { openId: myId, share: share }, function (r) {
        console.log(r.errmsg);
    });
}

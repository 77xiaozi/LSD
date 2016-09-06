var serverHost = "http://play.9where.com/"
var myId;
//背景音乐
var sound: egret.Sound;
var music_position;
var soundChannel;
var sound_isPlay = false;
//查看那个题没有答
var q1_btn = 0;
var q2_btn = 0;
var q3_btn = 0;
var q4_btn = 0;
var q5_btn = 0;
var q6_btn = 0;

//分数规则
var right_answer_count = 0;

var q1_answer = 0;//6个题答案
var q2_answer = 0;
var q3_answer = 0;
var q4_answer = 0;
var q5_answer = 0;
var q6_answer = 0;

var stageW: number;
var stageH: number;

var choose_count;

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView:LoadingUI;
    private HomePage: HomePage;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        //tracking
        Tracking(0);
        readyWX();
    }

    private onAddToStage(event:egret.Event) {
        //设置加载进度界面
        stageW = this.stage.width;
        stageH = this.stage.height;
        //Config to load process interface
//        this.loadingView = new LoadingUI();
//        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("loading",1);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        } else if(event.groupName == "loading") {
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
//    private fish: egret.Bitmap;
    private createGameScene():void {
        var self = this;
        this.HomePage = new HomePage();
        self.stage.addChild(this.HomePage);
        self.stage.removeChild(this);
        messageSound();
    }
}


    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
function createBitmapByName(name:string):egret.Bitmap {
    var result = new egret.Bitmap();
    var texture: egret.Texture = RES.getRes(name);
    result.texture = texture;
    return result;
}

function messageSound(): void {

    this.sound = RES.getRes("sound_mp3");
    this.soundChannel = sound.play(0,0);
    soundChannel.volume = 0.2;
}

function soundPlay(): void {
    if(sound_isPlay == true) {
        sound_isPlay = false;
        soundChannel = sound.play(0,0);
    }
    else {
        sound_isPlay = true;
        soundChannel.stop();
    }
}

function readyWX() {
    $.getJSON("http://play.9where.com/LSD/signature",{"url": location.href.split('#')[0]},function(r) {
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

        wx.ready(function() {
            var pageUrl = location.href.split('?')[0];

            //朋友圈
            var sdata = new BodyMenuShareTimeline;
            sdata.title = "不想长大的你，快来测测你的童心指数";
            sdata.link = pageUrl;
            sdata.imgUrl = 'http://play.9where.com/wxservice/LSD/resource/shareLog.jpg';
            sdata.success = function () {
                //tracking
                Tracking(1);
            };
            wx.onMenuShareTimeline(sdata);
            //朋友消息
            var sadata = new BodyMenuShareAppMessage;
            sadata.title = "不想长大的你，快来测测你的童心指数";
            sadata.desc = "懂孩子 从眼前开始";
            sadata.link = pageUrl;
            sadata.imgUrl = 'http://play.9where.com/wxservice/LSD/resource/shareLog.jpg';
            sadata.success = function () {
                //tracking
                Tracking(1);
            };
            wx.onMenuShareAppMessage(sadata);
        });
    });
}

function Tracking(share){
    $.getJSON("http://play.9where.com/LSD/tracking",{openId: myId, share: share},function(r) {
        console.log(r.errmsg);
    });
}

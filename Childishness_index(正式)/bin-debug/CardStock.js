var CardStock = (function (_super) {
    __extends(CardStock, _super);
    function CardStock() {
        _super.call(this);
        this.cardStock();
    }
    var d = __define,c=CardStock,p=c.prototype;
    p.cardStock = function () {
        var self = this;
        var cardStock = new egret.Sprite();
        var cs_bg = createBitmapByName("cardStock_jpg");
        var musicBtn = createBitmapByName("musicBtn_png");
        var cs_addBtn = createBitmapByName("addCardPackage_png");
        var cs_detailsBtn = createBitmapByName("detailsBtn_png");
        var cs_InviteFriends = createBitmapByName("InviteFriends_png");
        var star1_1 = createBitmapByName("CardStar1_png");
        var star1_2 = createBitmapByName("CardStar2_png");
        this.addChild(cardStock);
        cardStock.addChild(cs_bg);
        musicBtn.width = 70;
        musicBtn.height = 70;
        musicBtn.anchorOffsetX = musicBtn.width / 2;
        musicBtn.anchorOffsetY = musicBtn.height / 2;
        musicBtn.x = 655 + musicBtn.width / 2;
        musicBtn.y = 30 + musicBtn.height / 2;
        musicBtn.touchEnabled = true;
        musicBtn.rotation = 0;
        cardStock.addChild(musicBtn);
        egret.Tween.get(musicBtn, { loop: true })
            .to({ rotation: 360 }, 3000);
        musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            soundPlay();
        }, this);
        star1_1.anchorOffsetX = star1_1.width / 2;
        star1_1.anchorOffsetY = star1_1.height / 2;
        star1_1.x = 622 + star1_1.width / 2;
        star1_1.y = 92 + star1_1.height / 2;
        cardStock.addChild(star1_1);
        egret.Tween.get(star1_1, { loop: true })
            .to({ scaleX: 1.1, scaleY: 1.1, alpha: 0.8 }, 500)
            .to({ scaleX: 0.8, scaleY: 0.8, alpha: 1 }, 500);
        star1_2.anchorOffsetX = star1_2.width / 2;
        star1_2.anchorOffsetY = star1_2.height / 2;
        star1_2.x = 426 + star1_2.width / 2;
        star1_2.y = 344 + star1_2.height / 2;
        cardStock.addChild(star1_2);
        egret.Tween.get(star1_2, { loop: true })
            .to({ scaleX: 1.5, scaleY: 1.5, alpha: 0.9 }, 800)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 800);
        cs_addBtn.x = 310.7;
        cs_addBtn.y = 773.5;
        cardStock.addChild(cs_addBtn);
        cs_addBtn.touchEnabled = true;
        cs_addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            $.getJSON("http://play.9where.com/LSD/cardSignature", { openId: myId }, function (r) {
                if (r.timestamp) {
                    wx.addCard({
                        cardList: [{
                                cardId: r.cardId,
                                cardExt: JSON.stringify({
                                    "openid": r.openid,
                                    "nonce_str": r.nonceStr,
                                    "timestamp": r.timestamp,
                                    "signature": r.cardSign
                                })
                            }],
                        success: function (res) {
                            var cardList = res.cardList;
                        }
                    });
                }
                else {
                    alert(r.error);
                }
            });
        }, this);
        cs_detailsBtn.x = 266;
        cs_detailsBtn.y = 1095;
        cardStock.addChild(cs_detailsBtn);
        cs_detailsBtn.touchEnabled = true;
        cs_detailsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.activityTime = new ActivityTime();
            self.stage.addChild(self.activityTime);
            self.stage.removeChild(self);
        }, this);
        cs_InviteFriends.anchorOffsetX = cs_InviteFriends.width / 2;
        cs_InviteFriends.anchorOffsetY = cs_InviteFriends.height / 2;
        cs_InviteFriends.x = 172 + cs_InviteFriends.width / 2;
        cs_InviteFriends.y = 963 + cs_InviteFriends.height / 2;
        cardStock.addChild(cs_InviteFriends);
        cs_InviteFriends.touchEnabled = true;
        cs_InviteFriends.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.share = new Share();
            self.stage.addChild(self.share);
            self.stage.removeChild(self);
        }, this);
        egret.Tween.get(cs_InviteFriends, { loop: true })
            .to({ scaleX: 1.2, scaleY: 1.2 }, 500)
            .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        var request = function () {
            var nonceStr = Math.random();
            var acode = "21D12J9JNS03NJD982091N983HDV726X02J";
            var acodes = new md5().hex_md5(acode + nonceStr);
            console.log(acodes);
            console.log(nonceStr);
            $.ajax({
                url: "http://wx.lenscrafters.com.cn/interface/getApi_ticket.jhtml?authorizationCode=" + acodes + "&nonceStr=" + nonceStr,
                type: 'GET',
                success: function (res) {
                },
                complete: function (msg) {
                }
            });
        };
    };
    return CardStock;
}(egret.DisplayObjectContainer));
egret.registerClass(CardStock,'CardStock');

class LoadingUI extends egret.Sprite {

    public constructor() {
        super();
        this.createView();
    }
    private innerShape: egret.Shape;
    private WIDTH: number = 350;
    private HEIGHT: number = 20;
    private createView():void {
        var bgImage: egret.Bitmap = createBitmapByName("loadingBg_jpg");
        this.addChild(bgImage);
        
        var boarderShape: egret.Shape = new egret.Shape();
        boarderShape.graphics.lineStyle(2,0xffffff,0.8);
        boarderShape.graphics.drawRoundRect(0,0,this.WIDTH,this.HEIGHT,20,20);
        boarderShape.x = 200;
        boarderShape.y = 614;
        this.addChild(boarderShape);
        
        this.innerShape = new egret.Shape();
        this.innerShape.graphics.beginFill(0xffffff);
        this.innerShape.graphics.drawRoundRect(0,0,0,this.HEIGHT,20,20);
        this.innerShape.graphics.endFill();
        this.innerShape.x = 200;
        this.innerShape.y = 614;
        this.addChild(this.innerShape);
        
        
        


        
        
//        var nonceStr = Math.random();
//        var acode = "21D12J9JNS03NJD982091N983HDV726X02J";//加密字符串
//        var acodes = new md5().hex_md5(acode + nonceStr);//MD5固定加密串
//        $.ajax({
//            url: "http://wx.lenscrafters.com.cn/interface/getApi_ticket.jhtml?authorizationCode="+acodes,        
//            type: 'GET',
//            dataType: 'jsonp',
//            success: function(res) {
//            if(res.success) {
//                alert("成功");
//            }else {
//                alert("失败");
//            }
//            }
//        });
        
        
    }

    public setProgress(current:number, total:number):void {
        var percent: number = current/total;
        var color = 0xffffff;
        this.innerShape.graphics.beginFill(color);
        this.innerShape.graphics.drawRoundRect(0,0,this.WIDTH*percent,this.HEIGHT,20,20);
        this.innerShape.graphics.endFill();
        this.innerShape.alpha = 1*percent;
//        this.textField.text = `Loading...${current}/${total}`; 
//        this.textField.text = `Loading...${current*100/total}`;
    }
}

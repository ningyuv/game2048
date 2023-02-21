(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];
lib.scale=Math.min(document.documentElement.clientWidth,document.documentElement.clientHeight)/1000;


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.num = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 图层_2
    this.text = new cjs.Text("2", "bold 72px 'DengXian'", "#776E65");
    this.text.name = "text";
    this.text.lineHeight = 77;
    this.text.lineWidth = 40;
    this.text.parent = this;
    this.text.setTransform(-19.8,-37.2);

    this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

    // 图层_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#333333").s().p("ArbOEQioAAAAinIAA24QAAioCoAAIW3AAQCoAAAACoIAAW4QAACnioAAg");

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        
    const stageSize = 1000;
    const blockSize = 200;
    const times = 10;
    const that = this;
    cjs.Ticker.setFPS(60);
    this.locate = function (i,j) {
        this.x=(j+1)*blockSize;
        this.y=(i+1)*blockSize;
    }
    this.moveUp = function (fn) {
        const that = this;
        cjs.Ticker.addEventListener("tick", up);
        var cnt = 0;
        function up(e){
            that.y-=blockSize/times;
            ++cnt;
            if(cnt==times){
                cjs.Ticker.removeEventListener("tick", up);
                if(typeof(fn)=="function"){
                    fn();
                }
            }
        }
    }
    this.moveDown = function (fn) {
        const that = this;
        cjs.Ticker.addEventListener("tick", down);
        var cnt = 0;
        function down(e){
            that.y+=blockSize/times;
            ++cnt;
            if(cnt==times){
                cjs.Ticker.removeEventListener("tick", down);
                if(typeof(fn)=="function"){
                    fn();
                }
            }
        }
    }
    this.moveLeft = function (fn) {
        const that = this;
        cjs.Ticker.addEventListener("tick", left);
        var cnt = 0;
        function left(e){
            that.x-=blockSize/times;
            ++cnt;
            if(cnt==times){
                cjs.Ticker.removeEventListener("tick", left);
                if(typeof(fn)=="function"){
                    fn();
                }
            }
        }
    }
    this.moveRight = function (fn) {
        const that = this;
        cjs.Ticker.addEventListener("tick", right);
        var cnt = 0;
        function right(e){
            that.x+=blockSize/times;
            ++cnt;
            if(cnt==times){
                cjs.Ticker.removeEventListener("tick", right);
                if(typeof(fn)=="function"){
                    fn();
                }
            }
        }
    }
    this.appear = function (s){
        const that = this;
        this.alpha = s;
        cjs.Ticker.addEventListener("tick", apr);
        function apr(e){
            that.alpha+=0.1;
            if(1-that.alpha<0.001){
                that.alpha=1;
                cjs.Ticker.removeEventListener("tick", apr);
            }
        }
    }

}).prototype = getMCSymbolPrototype(lib.num, new cjs.Rectangle(-90,-90,180,180), null);


(lib.num4096 = function() {
    this.text.text = "4096";
    this.text.color = "#F9F6F2";
    this.text.lineHeight = 77;
    this.text.lineWidth = 162;
    this.shape.graphics._fill.style = "#3C3A32";
    this.text.setTransform(-81,-37.5);
}).prototype = new lib.num();


(lib.num2048 = function() {
    this.text.text = "2048";
    this.text.color = "#F9F6F2";
    this.text.lineHeight = 77;
    this.text.lineWidth = 162;
    this.shape.graphics._fill.style = "#EDC22E";
    this.text.setTransform(-81,-37.5);
}).prototype = new lib.num();


(lib.num1024 = function() {
    this.text.text = "1024";
    this.text.color = "#F9F6F2";
    this.text.lineHeight = 77;
    this.shape.graphics._fill.style = "#EDC53F";
    this.text.setTransform(-80,-37.5);
}).prototype = new lib.num();


(lib.num512 = function() {
    this.text.text = "512";
    this.text.color = "#F9F6F2";
    this.text.lineHeight = 77;
    this.shape.graphics._fill.style = "#EDC850";
    this.text.setTransform(-59.8,-37.5);
}).prototype = new lib.num();


(lib.num256 = function() {
    this.text.text = "256";
    this.text.color = "#F9F6F2";
    this.text.lineHeight = 77;
    this.text.lineWidth = 121;
    this.shape.graphics._fill.style = "#EDCC61";
    this.text.setTransform(-60.6,-37.5);
}).prototype = new lib.num();


(lib.num128 = function() {
    this.text.text = "128";
    this.text.color = "#F9F6F2";
    this.text.lineHeight = 77;
    this.shape.graphics._fill.style = "#EECF72";
    this.text.setTransform(-60,-37.5);
}).prototype = new lib.num();


(lib.num64 = function() {
    this.text.text = "64";
    this.text.color = "#F9F6F2";
    this.text.lineHeight = 77;
    this.shape.graphics._fill.style = "#F65E3B";
    this.text.setTransform(-40,-37.5);
}).prototype = new lib.num();


(lib.num32 = function() {
    this.text.text = "32";
    this.text.color = "#F9F6F2";
    this.text.lineHeight = 77;
    this.text.lineWidth = 81;
    this.shape.graphics._fill.style = "#F67C5F";
    this.text.setTransform(-40.6,-37.5);
}).prototype = new lib.num();


(lib.num16 = function() {
    this.text.text = "16";
    this.text.color = "#F9F6F2";
    this.text.lineHeight = 77;
    this.shape.graphics._fill.style = "#F59563";
    this.text.setTransform(-40,-37.5);
}).prototype = new lib.num();


(lib.num8 = function() {
    this.text.text = "8";
    this.text.color = "#F9F6F2";
    this.text.lineHeight = 77;
    this.text.lineWidth = 40;
    this.shape.graphics._fill.style = "#F2B179";
    this.text.setTransform(-20.2,-37.5);
}).prototype = new lib.num();


(lib.num4 = function() {
    this.text.text = "4";
    this.text.color = "#776E65";
    this.text.lineHeight = 77;
    this.shape.graphics._fill.style = "#EDE0C8";
    this.text.setTransform(-19.8,-37.2);
}).prototype = new lib.num();


(lib.num2 = function() {
    this.text.text = "2";
    this.text.color = "#776E65";
    this.text.lineHeight = 77;
    this.text.lineWidth = 40;
    this.shape.graphics._fill.style = "#EEE4DA";
    this.text.setTransform(-19.8,-37.2);
}).prototype = new lib.num();


(lib.block = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 图层_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(1,1,1).p("AvnvnIfPAAIAAfPI/PAAg");

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#BBADA0").s().p("AvnPoIAA/PIfPAAIAAfPg");

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.block, new cjs.Rectangle(-101,-101,202,202), null);

(lib.layout = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 图层_1
    this.instance = new lib.block();
    this.instance.parent = this;
    this.instance.setTransform(300,300);

    this.instance_1 = new lib.block();
    this.instance_1.parent = this;
    this.instance_1.setTransform(100,300);

    this.instance_2 = new lib.block();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-100,300);

    this.instance_3 = new lib.block();
    this.instance_3.parent = this;
    this.instance_3.setTransform(-300,300);

    this.instance_4 = new lib.block();
    this.instance_4.parent = this;
    this.instance_4.setTransform(300,100);

    this.instance_5 = new lib.block();
    this.instance_5.parent = this;
    this.instance_5.setTransform(100,100);

    this.instance_6 = new lib.block();
    this.instance_6.parent = this;
    this.instance_6.setTransform(-100,100);

    this.instance_7 = new lib.block();
    this.instance_7.parent = this;
    this.instance_7.setTransform(-300,100);

    this.instance_8 = new lib.block();
    this.instance_8.parent = this;
    this.instance_8.setTransform(300,-100);

    this.instance_9 = new lib.block();
    this.instance_9.parent = this;
    this.instance_9.setTransform(100,-100);

    this.instance_10 = new lib.block();
    this.instance_10.parent = this;
    this.instance_10.setTransform(-100,-100);

    this.instance_11 = new lib.block();
    this.instance_11.parent = this;
    this.instance_11.setTransform(-300,-100);

    this.instance_12 = new lib.block();
    this.instance_12.parent = this;
    this.instance_12.setTransform(300,-300);

    this.instance_13 = new lib.block();
    this.instance_13.parent = this;
    this.instance_13.setTransform(100,-300);

    this.instance_14 = new lib.block();
    this.instance_14.parent = this;
    this.instance_14.setTransform(-100,-300);

    this.instance_15 = new lib.block();
    this.instance_15.parent = this;
    this.instance_15.setTransform(-300,-300);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_13},{t:this.instance_14},{t:this.instance_15},{t:this.instance_8},{t:this.instance_9},{t:this.instance_10},{t:this.instance_11},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.layout, new cjs.Rectangle(-400.5,-400.5,801,801), null);


// stage content:
(lib._2048 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		const that = this;
		this.on("click",()=>{console.log("click");});
        window.onresize = resize;
        function resize(){
            lib.scale=Math.min(document.documentElement.clientWidth,document.documentElement.clientHeight)/1000;
            stage.scaleX=stage.scaleY=lib.scale;
            canvas.width=canvas.height=lib.scale*1000;
            anim_container.style.width=anim_container.style.height=(Number)(lib.scale*1000).toString()+"px";
            canvas.style.width=canvas.style.height=(Number)(lib.scale*1000).toString()+"px";
            dom_overlay_container.style.width=dom_overlay_container.style.height=(Number)(lib.scale*1000).toString()+"px";
        }
        resize();
		const mapSize = 4;

		var cnt = 0;
		var moved = 0;
		var mapNum = [
		    [0,0,0,0],
		    [0,0,0,0],
		    [0,0,0,0],
		    [0,0,0,0]
		];
		var mapInstance = [
		    [],[],[],[]
		];
		addRandomBlock();
		addRandomBlock();
		var canMerge = [
		    [1,1,1,1],
		    [1,1,1,1],
		    [1,1,1,1],
		    [1,1,1,1]
		];
		document.onkeydown = down;
		document.onkeyup = up;
		function up(e){
		    document.onkeydown = down;
		}
		function down(e){
		    document.onkeydown = null;
		    if(e.keyCode==37){
		        //left
		        flowLeft();
		    }
		    if(e.keyCode==38){
		        //up
		        flowUp();
		    }
		    if(e.keyCode==39){
		        //right
		        flowRight();
		    }
		    if(e.keyCode==40){
		        //down
		        flowDown();
		    }
		    if(moved){
		        moved = 0;
		        addRandomBlock();
		    }
		    else{
		        if(cnt == mapSize*mapSize){
		            //gameover();
		        }
		    }
		    canMerge = [
		        [1,1,1,1],
		        [1,1,1,1],
		        [1,1,1,1],
		        [1,1,1,1]
		    ];
		    for(var i=0;i<4;++i){
		        console.log(cnt, mapNum[i][0],mapNum[i][1],mapNum[i][2],mapNum[i][3]);
		    }
		    for(var i=0;i<4;++i){
		        console.log(cnt, mapInstance[i][0],mapInstance[i][1],mapInstance[i][2],mapInstance[i][3]);
		    }
		    console.log();
		}
		function addRandomBlock(){
		    var randNum = Math.round(Math.random()*(mapSize*mapSize-cnt-1))+1;
		    for(var i=0;i<mapSize;++i){
		        for(var j=0;j<mapSize;++j){
		            if(randNum>0){
		                if(mapNum[i][j]==0){
		                    --randNum;
		                }
		                if(randNum==0){
		                    mapNum[i][j] = (Math.round(Math.random()*10)+1)>2?2:4;
		                    eval("mapInstance[i][j] = new lib.num"+mapNum[i][j]+"();");
		                    // mapInstance[i][j] = new that["num_"+mapNum[i][j]].constructor();
		                    mapInstance[i][j].locate(i,j);
                            stage.addChild(mapInstance[i][j]);
                            mapInstance[i][j].appear(0);
                            ++cnt;
		                }
		            }
		        }
		    }
		}
		function flowUp(){
		    for(var j=0;j<mapSize;++j){
		        for(var i=1;i<mapSize;++i){
		            if(mapNum[i][j]!=0){
		                for(var k=i-1;k>=0;--k){
		                    if(mapNum[k][j]==0){
		                        mapNum[k][j]=mapNum[k+1][j];
		                        mapNum[k+1][j]=0;
		                        moved = 1;
		                        //move
		                        mapInstance[k+1][j].moveUp(null);
		                        mapInstance[k][j]=mapInstance[k+1][j];
		                        mapInstance[k+1][j]=null;
		                    }
		                    else{
		                        if(mapNum[k][j]==mapNum[k+1][j] && canMerge[k][j]){
		                            canMerge[k][j] = 0;
		                            mapNum[k][j]*=2;
		                            mapNum[k+1][j]=0;
		                            --cnt;
		                            moved = 1;
		                            //move
		                            var item1 = mapInstance[k+1][j];
		                            var item2 = mapInstance[k][j];
		                            mapInstance[k+1][j]=null;
		                            // mapInstance[k][j]=new that["num_"+mapNum[k][j]].constructor();
		                            eval("mapInstance[k][j] = new lib.num"+mapNum[k][j]+"();");
		                            mapInstance[k][j].locate(k,j);
		                            var item3 = mapInstance[k][j];
		                            (function(item1,item2,item3){
		                                item1.moveUp(function(){
		                                    stage.removeChild(item1);
		                                    stage.removeChild(item2);
		                                    stage.addChild(item3);
		                                    item3.appear(0.5);
		                                });
		                            })(item1,item2,item3);
		                        }
		                        break;
		                    }
		                }
		            }
		        }
		    }
		}
		function flowLeft(){
		    for(var i=0;i<mapSize;++i){
		        for(var j=1;j<mapSize;++j){
		            if(mapNum[i][j]!=0){
		                for(var k=j-1;k>=0;--k){
		                    if(mapNum[i][k]==0){
		                        mapNum[i][k]=mapNum[i][k+1];
		                        mapNum[i][k+1]=0;
		                        moved = 1;
		                        //move
		                        mapInstance[i][k+1].moveLeft(null);
		                        mapInstance[i][k]=mapInstance[i][k+1];
		                        mapInstance[i][k+1]=null;
		                    }
		                    else{
		                        if(mapNum[i][k]==mapNum[i][k+1] && canMerge[i][k]){
		                            canMerge[i][k] = 0;
		                            mapNum[i][k]*=2;
		                            mapNum[i][k+1]=0;
		                            --cnt;
		                            moved = 1;
		                            //move
		                            var item1 = mapInstance[i][k+1];
		                            var item2 = mapInstance[i][k];
		                            mapInstance[i][k+1]=null;
		                            // mapInstance[i][k]=new that["num_"+mapNum[i][k]].constructor();
		                            eval("mapInstance[i][k] = new lib.num"+mapNum[i][k]+"();");
		                            mapInstance[i][k].locate(i,k);
		                            var item3 = mapInstance[i][k];
		                            (function(item1,item2,item3){
		                                item1.moveLeft(function(){
		                                    stage.removeChild(item1);
		                                    stage.removeChild(item2);
		                                    stage.addChild(item3);
		                                    item3.appear(0.5);
		                                });
		                            })(item1,item2,item3);
		                        }
		                        break;
		                    }
		                }
		            }
		        }
		    }
		}
		function flowRight(){
		    for(var i=0;i<mapSize;++i){
		        for(var j=mapSize-2;j>=0;--j){
		            if(mapNum[i][j]!=0){
		                for(var k=j+1;k<mapSize;++k){
		                    if(mapNum[i][k]==0){
		                        mapNum[i][k]=mapNum[i][k-1];
		                        mapNum[i][k-1]=0;
		                        moved = 1;
		                        //move
		                        mapInstance[i][k-1].moveRight(null);
		                        mapInstance[i][k]=mapInstance[i][k-1];
		                        mapInstance[i][k-1]=null;
		                    }
		                    else{
		                        if(mapNum[i][k]==mapNum[i][k-1] && canMerge[i][k]){
		                            canMerge[i][k] = 0;
		                            mapNum[i][k]*=2;
		                            mapNum[i][k-1]=0;
		                            --cnt;
		                            moved = 1;
		                            //move
		                            var item1 = mapInstance[i][k-1];
		                            var item2 = mapInstance[i][k];
		                            mapInstance[i][k-1]=null;
		                            // mapInstance[i][k]=new that["num_"+mapNum[i][k]].constructor();
		                            eval("mapInstance[i][k] = new lib.num"+mapNum[i][k]+"();");
		                            mapInstance[i][k].locate(i,k);
		                            var item3 = mapInstance[i][k];
		                            (function(item1,item2,item3){
		                                item1.moveRight(function(){
		                                    stage.removeChild(item1);
		                                    stage.removeChild(item2);
		                                    stage.addChild(item3);
		                                    item3.appear(0.5);
		                                });
		                            })(item1,item2,item3);
		                        }
		                        break;
		                    }
		                }
		            }
		        }
		    }
		}
		function flowDown(){
		    for(var j=0;j<mapSize;++j){
		        for(var i=mapSize-2;i>=0;--i){
		            if(mapNum[i][j]!=0){
		                for(var k=i+1;k<mapSize;++k){
		                    if(mapNum[k][j]==0){
		                        mapNum[k][j]=mapNum[k-1][j];
		                        mapNum[k-1][j]=0;
		                        moved = 1;
		                        //move
		                        mapInstance[k-1][j].moveDown(null);
		                        mapInstance[k][j]=mapInstance[k-1][j];
		                        mapInstance[k-1][j]=null;
		                    }
		                    else{
		                        if(mapNum[k][j]==mapNum[k-1][j] && canMerge[k][j]){
		                            canMerge[k][j] = 0;
		                            mapNum[k][j]*=2;
		                            mapNum[k-1][j]=0;
		                            --cnt;
		                            moved = 1;
		                            //move
		                            var item1 = mapInstance[k-1][j];
		                            var item2 = mapInstance[k][j];
		                            mapInstance[k-1][j]=null;
		                            // mapInstance[k][j]=new that["num_"+mapNum[k][j]].constructor();
		                            eval("mapInstance[k][j] = new lib.num"+mapNum[k][j]+"();");
		                            mapInstance[k][j].locate(k,j);
		                            var item3 = mapInstance[k][j];
		                            (function(item1,item2,item3){
		                                item1.moveDown(function(){
		                                    stage.removeChild(item1);
		                                    stage.removeChild(item2);
		                                    stage.addChild(item3);
		                                    item3.appear(0.5);
		                                });
		                            })(item1,item2,item3);
		                        }
		                        break;
		                    }
		                }
		            }
		        }
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// // 图层_3
	// this.numb = new lib.num2();
	// this.numb.name = "numb";
	// this.numb.parent = this;
	// this.numb.setTransform(200,200);

	this.background = new lib.layout();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(500,500);
	this.background.shadow = new cjs.Shadow("#666666",-8,8,24);
    console.log(this.background);
    console.log(lib);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.background}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(564.5,581.5,857,857);
// library properties:
lib.properties = {
	id: 'AC4D70229A99C64891039E84E2B63904',
	width: 1000,
	height: 1000,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AC4D70229A99C64891039E84E2B63904'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
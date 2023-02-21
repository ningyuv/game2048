

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
    function num() {
        // constructor code
    }
    function locate(i,j) {
        this.x=(j+1)*blockSize;
        this.y=(i+1)*blockSize;
    }
    function moveUp(fn) {
        const goal = this.y - blockSize;
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
    function moveDown(fn) {
        const goal = this.y + blockSize;
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
    function moveLeft(fn) {
        const goal = this.x - blockSize;
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
    function moveRight(fn) {
        const goal = this.x + blockSize;
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
    function appear(s){
        this.alpha = s;
        cjs.Ticker.addEventListener("tick", apr);
        function apr(e){
            that.alpha+=0.1;
            if(1-that.alpha<0.1){
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

    this.background = new lib.layout();
    this.background.name = "background";
    this.background.parent = this;
    this.background.setTransform(500,500);
    this.background.shadow = new cjs.Shadow("#666666",-8,8,24);

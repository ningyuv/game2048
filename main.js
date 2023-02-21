import flash.events.KeyboardEvent;
const mapSize = 4;

var cnt = 0;
var moved = 0;
var mapNum = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
var num_2 = new lib.num2();
var num_4 = new lib.num4();
var num_8 = new lib.num8();
var num_16 = new lib.num16();
var num_32 = new lib.num32();
var num_64 = new lib.num64();
var num_128 = new lib.num128();
var num_256 = new lib.num256();
var num_512 = new lib.num512();
var num_1024 = new lib.num1024();
var num_2048 = new lib.num2048();
var num_4096 = new lib.num4096();
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
        trace(cnt, mapNum[i][0],mapNum[i][1],mapNum[i][2],mapNum[i][3]);
    }
    for(var i=0;i<4;++i){
        trace(cnt, mapInstance[i][0],mapInstance[i][1],mapInstance[i][2],mapInstance[i][3]);
    }
    trace();
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
                    mapInstance[i][j] = new this["num_"+mapNum[i][j]].constructor();
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
                            mapInstance[k][j]=new this["num_"+mapNum[k][j]].constructor();
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
                            mapInstance[i][k]=new this["num_"+mapNum[i][k]].constructor();
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
                            mapInstance[i][k]=new this["num_"+mapNum[i][k]].constructor();
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
                            mapInstance[k][j]=new this["num_"+mapNum[k][j]].constructor();
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
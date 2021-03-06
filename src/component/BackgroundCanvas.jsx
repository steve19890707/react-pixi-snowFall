import React,{ useEffect } from 'react';
import styled from 'styled-components';
import * as PIXI from 'pixi.js';

const CanvasBG = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1;
`
const Canvas = (location) => {
    const PixiApp = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        transparent: true,
    });
    const createSnow = (snow, widthSize, heightSize, positionX, positionY, Alpha, img) => {
        snow = new PIXI.Sprite.from(img);
        snow.alpha = 0.1* Alpha;
        snow.anchor.set(0.5);
        snow.width = widthSize;
        snow.height = heightSize;
        snow.x = positionX;
        snow.y = positionY;
        PixiApp.stage.addChild(snow);
        return snow;
    }
    const snowListOne = [0,1,2,3,4];
    const snowListTwo = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    // right
    snowListOne.map((element,index) => {
        const Random = Math.floor(Math.random()*30);
        const SnowSize = Math.floor(Math.random()*10)+40;
        const SpeedRandom = Math.floor(Math.random()*60);
        setTimeout(()=> {
            let snowStyleOne = createSnow(element,SnowSize,SnowSize,(PixiApp.screen.width/4) * index, -SnowSize, 10,'./dis/images/snow.png');
            PixiApp.ticker.add((delta)=>{
                snowStyleOne.x += (0.1*Random);
                snowStyleOne.rotation += 0.05 * delta;
                if(snowStyleOne.y > (window.innerHeight + snowStyleOne.height/2)) { 
                    snowStyleOne.y = -SnowSize ;snowStyleOne.x = (PixiApp.screen.width/4) * index 
                } else { snowStyleOne.y += (0.1*SpeedRandom)+1; }
            })
        },1000*Random)
    })
    snowListTwo.map((element,index) => {
        const Random = Math.floor(Math.random()*30);
        const SnowSize = Math.floor(Math.random()*8)+8;
        const SpeedRandom = Math.floor(Math.random()*60);
        setTimeout(()=> {
            let snowStyleTwo = createSnow(element,SnowSize,SnowSize,(PixiApp.screen.width/25) * index, 0, 5,'./dis/images/white_snow.png');
            PixiApp.ticker.add(()=>{
                snowStyleTwo.x += (0.1*Random);
                if(snowStyleTwo.y > (window.innerHeight + snowStyleTwo.height/2)) { 
                    snowStyleTwo.y = 0 ;snowStyleTwo.x = (PixiApp.screen.width/25) * index 
                } else { snowStyleTwo.y += (0.1*SpeedRandom)+1; }
            })
        },1000*Random)
    })
    setTimeout(()=> {
        snowListOne.map((element,index) => {
            const Random = Math.floor(Math.random()*30);
            const SnowSize = Math.floor(Math.random()*5)+30;
            const SpeedRandom = Math.floor(Math.random()*60);
            setTimeout(()=> {
                let snowStyleOne = createSnow(element,SnowSize,SnowSize,(PixiApp.screen.width/4) * index, -SnowSize, 5,'./dis/images/snow.png');
                PixiApp.ticker.add((delta)=>{
                    snowStyleOne.x += (0.1*Random);
                    snowStyleOne.rotation += 0.05 * delta;
                    if(snowStyleOne.y > (window.innerHeight + snowStyleOne.height/2)) { 
                        snowStyleOne.y = -SnowSize ;snowStyleOne.x = (PixiApp.screen.width/4) * index 
                    } else { snowStyleOne.y += (0.1*SpeedRandom)+1; }
                })
            },1000*Random)
        })
        snowListTwo.map((element,index) => {
            const Random = Math.floor(Math.random()*30);
            const SnowSize = Math.floor(Math.random()*16)+16;
            const SpeedRandom = Math.floor(Math.random()*60);
            setTimeout(()=> {
                let snowStyleTwo = createSnow(element,SnowSize,SnowSize,(PixiApp.screen.width/25) * index, 0, 10,'./dis/images/white_snow.png');
                PixiApp.ticker.add(()=>{
                    snowStyleTwo.x += (0.1*Random);
                    if(snowStyleTwo.y > (window.innerHeight + snowStyleTwo.height/2)) { 
                        snowStyleTwo.y = 0 ;snowStyleTwo.x = (PixiApp.screen.width/25) * index 
                    } else { snowStyleTwo.y += (0.1*SpeedRandom)+1; }
                })
            },1000*Random)
        })
    },6000)
    // left
    setTimeout(()=> {
        snowListOne.map((element,index) => {
            const Random = Math.floor(Math.random()*30);
            const SnowSize = Math.floor(Math.random()*5)+30;
            const SpeedRandom = Math.floor(Math.random()*60);
            setTimeout(()=> {
                let snowStyleOne = createSnow(element,SnowSize,SnowSize,(PixiApp.screen.width/4) * index, -SnowSize, 5,'./dis/images/snow.png');
                PixiApp.ticker.add((delta)=>{
                    snowStyleOne.x -= (0.1*Random);
                    snowStyleOne.rotation -= 0.05 * delta;
                    if(snowStyleOne.y > (window.innerHeight + snowStyleOne.height/2)) { 
                        snowStyleOne.y = -SnowSize ;snowStyleOne.x = (PixiApp.screen.width/4) * index 
                    } else { snowStyleOne.y += (0.1*SpeedRandom+1); }
                })
            },1000*Random)
        })
        snowListTwo.map((element,index) => {
            const Random = Math.floor(Math.random()*30);
            const SnowSize = Math.floor(Math.random()*8)+8;
            const SpeedRandom = Math.floor(Math.random()*60);
            setTimeout(()=> {
                let snowStyleTwo = createSnow(element,SnowSize,SnowSize,(PixiApp.screen.width/25) * index, 0, 5,'./dis/images/white_snow.png');
                PixiApp.ticker.add(()=>{
                    snowStyleTwo.x -= (0.1*Random);
                    if(snowStyleTwo.y > (window.innerHeight + snowStyleTwo.height/2)) { 
                        snowStyleTwo.y = 0 ;snowStyleTwo.x = (PixiApp.screen.width/25) * index 
                    } else { snowStyleTwo.y += (0.1*SpeedRandom)+1; }
                })
            },1000*Random)
        })
    },3000)
    setTimeout(()=> {
        snowListOne.map((element,index) => {
            const Random = Math.floor(Math.random()*30);
            const SnowSize = Math.floor(Math.random()*5)+30;
            const SpeedRandom = Math.floor(Math.random()*60);
            setTimeout(()=> {
                let snowStyleOne = createSnow(element,SnowSize,SnowSize,(PixiApp.screen.width/4) * index, -SnowSize, 5,'./dis/images/snow.png');
                PixiApp.ticker.add((delta)=>{
                    snowStyleOne.x -= (0.1*Random);
                    snowStyleOne.rotation -= 0.05 * delta;
                    if(snowStyleOne.y > (window.innerHeight + snowStyleOne.height/2)) { 
                        snowStyleOne.y = -SnowSize ;snowStyleOne.x = (PixiApp.screen.width/4) * index 
                    } else { snowStyleOne.y += (0.1*SpeedRandom+1); }
                })
            },1000*Random)
        })
        snowListTwo.map((element,index) => {
            const Random = Math.floor(Math.random()*30);
            const SnowSize = Math.floor(Math.random()*16)+16;
            const SpeedRandom = Math.floor(Math.random()*60);
            setTimeout(()=> {
                let snowStyleTwo = createSnow(element,SnowSize,SnowSize,(PixiApp.screen.width/25) * index, 0, 10,'./dis/images/white_snow.png');
                PixiApp.ticker.add(()=>{
                    snowStyleTwo.x -= (0.1*Random);
                    if(snowStyleTwo.y > (window.innerHeight + snowStyleTwo.height/2)) { 
                        snowStyleTwo.y = 0 ;snowStyleTwo.x = (PixiApp.screen.width/25) * index 
                    } else { snowStyleTwo.y += (0.1*SpeedRandom)+1; }
                })
            },1000*Random)
        })
    },9000)
    
    PixiApp.ticker.add(() => {
        PixiApp.renderer.autoResize = true;
        PixiApp.renderer.resize(window.innerWidth,window.innerHeight)
    }); 
    location.appendChild(PixiApp.view);
}

export default () => {
    useEffect(()=>{
        Canvas(document.getElementById('snow-background'))
    },[])
    return(
        <CanvasBG id="snow-background" />
    )
}
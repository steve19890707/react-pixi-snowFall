import React from 'react';
import styled from 'styled-components';
import CssRest from './component/CssRest.jsx';
import BackgroundCanvas from './component/BackgroundCanvas.jsx';

const H1 = styled.h1`
    color:#fff;
    font-size:50px;
    font-weight:bold;
    text-align:center;
    padding-top:100px;
`
const Main = styled.main`
    position:relative;
    top:0;
    width:100%;
    z-index:2;
    width:1200px;
    margin: 0 auto;
    .fakearea {
        background:#fff; 
        border-radius:5px;
        box-sizing:border-box;
        padding:30px 15px;
        margin-top:15px;
        li {
            font-size:0;
            padding-bottom:10px;
            &:last-child {
                padding-bottom:0;
            }
            &.caption {
                text-align:center;
                color:green;
                font-size:40px;
            }
            &.fifty {
                width:48%;
                margin:1%;
                display:inline-block;
                vertical-align:top;
            }
            span {
                color:#1a1a1a;
                font-size:24px;
                display:inline-block;
                margin-bottom:10px;
            }
            img {
                width:100%;
            }
        }
    }
`
const App = () => {
    return(
        <>
        <CssRest />
        <Main>
            <H1>hello world!!</H1>
            <ul className="fakearea">
                <li className="caption"> demo for christmas activity!!</li>
                <li className="fifty">
                    <span>1. banner-1</span> 
                    <img src="../dis/images/banner1.jpg" alt=""/>
                </li>
                <li className="fifty">
                    <span>1. banner-2</span> 
                    <img src="../dis/images/banner3.jpg" alt=""/>
                </li>
                <li>
                    <span>1. banner-3</span> 
                    <img src="../dis/images/banner2.jpg" alt=""/>
                </li>
            </ul>
        </Main>
        <BackgroundCanvas></BackgroundCanvas>
        </>
    )
}
export default App;
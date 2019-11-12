import React,{ useState, useRef } from 'react';
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
            &.serach-area {
                box-sizing:border-box;
                padding:10px;
                #serach-area {
                    li {
                        font-size:18px;
                        span {
                            color:#00a2a2;
                            margin-bottom:0;
                        }
                        border-bottom: 1px solid #cccccc;
                        margin-bottom:10px;
                        &:last-child {
                            border-bottom: 0;
                            margin-bottom:0
                        }
                    }
                }
            }
            &.inputStyle {
                box-sizing:border-box;
                padding:10px;
                display:flex;
                align-items:center;
                label {
                    display:flex;
                    align-items:center;
                    span { 
                        display:inline-block;
                        margin-bottom:0; 
                    }
                    input {
                        font-size:16px;
                        padding:10px;
                        border-radius:5px;
                        border:0;
                        margin-left:10px;
                        background: #e0e0e07a;
                    }
                }
                button {
                    font-size:16px;
                    padding:10px;
                    border-radius:5px;
                    border:0;
                    margin-left:10px;
                    background:#00bcd4;
                    color:#fff;
                    outline:none;
                    transition:0.2s;
                    cursor: pointer;
                    &:active {
                        transform: scale(0.9,0.9);
                    }
                }
            }
        }
    }
`
const staticArrayList = [
    {
        name:'Connie Glover',
        phone:'0910-123456',
    },
    {
        name:'Rochelle Reed',
        phone:'0920-123456',
    },
    {
        name:'Christina Kelley',
        phone:'0930-123456',
    },
    {
        name:'Jean Price',
        phone:'0940-123456',
    },
    {
        name:'Josefina Weber',
        phone:'0950-123456',
    },
]
const App = () => {
    const [ staticProps, setStaticProps ] = useState(
        { staticList: [...staticArrayList] }
    )
    const creatList = (array) => {
        return array.map((element,index)=>{
            return (
            <li key={index}>
                <span>{element.name}</span> : <span>{element.phone}</span>
            </li>
            );
        });
    }
    const serachValue = useRef(null);
    const pushValue = (traget,List) => {
        let updatList = [];
        let tragetValue = traget.current.value;
        List.map((element)=>{
            (element.name.indexOf(tragetValue) !== -1 || element.name.toLowerCase().indexOf(tragetValue) !== -1 || 
            element.phone.indexOf(tragetValue) !== -1 || element.phone.toLowerCase().indexOf(tragetValue) !== -1) && updatList.push(element);
        });
        traget !== '' ? setStaticProps({staticList:[...updatList]}) : setStaticProps({staticList:[...staticArrayList]})  
    }
    return(
        <>
        <CssRest />
        <Main>
            <H1>hello world!!</H1>
            <ul className="fakearea">
                <li className="caption"> demo for christmas activity!!</li>
                <li className="inputStyle">
                    <label>
                        <span>SERACH: </span>
                        <input type="text" ref={serachValue}/>
                    </label>
                    <button onClick={()=>{pushValue(serachValue,staticArrayList)}}>SUMIT</button>
                </li>
                <li className="serach-area">
                    <ol id="serach-area" >{creatList(staticProps.staticList)}</ol>
                </li>
                <li className="fifty">
                    <span>1. banner-1</span> 
                    <img src="./dis/images/banner1.jpg" alt=""/>
                </li>
                <li className="fifty">
                    <span>1. banner-2</span> 
                    <img src="./dis/images/banner3.jpg" alt=""/>
                </li>
                <li>
                    <span>1. banner-3</span> 
                    <img src="./dis/images/banner2.jpg" alt=""/>
                </li>
            </ul>
        </Main>
        <BackgroundCanvas></BackgroundCanvas>
        </>
    )
}
export default App;
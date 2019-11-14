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
    max-width:1200px;
    margin: 0 auto;
    z-index:2;
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
    .pageStyle {
        width:100%;
        margin:20px 0;
        padding:30px;
        background-color:#00bcd4;
        border-radius:5px;
        box-sizing:border-box;
        .title {
            color:#fff;
            font-size:28px;
            font-weight:bold;
            padding-bottom:15px;
            margin-bottom:15px;
            border-bottom:1px solid #55ecff;
        }
        .list-area {
            display:flex;
            flex-wrap:wrap;
            .list {
                width:31.3333%;
                margin:15px 3% 15px 0;
                box-sizing:border-box;
                padding:20px;
                background-color:#0096a9;
                border-radius:5px;
                &:nth-child(3n) {
                    margin:15px 0;
                }
                img {
                    width:100%;
                }
                .caption {
                    color:#fff;
                    font-size:20px;
                    padding-top:10px;
                    border-top:1px solid #00bcd4; 
                    margin-top:15px;
                }
            }
        }
        .pages {
            text-align:center;
            margin-top:15px;
            .pageBtn {
                display:inline-block;
                padding:10px;
                margin-right:10px;
                border-radius:5px;
                font-size:18px;
                color:#000;
                background-color:#fff;
                outline:none;
                transition:.2s;
                cursor: pointer;
                &:active {
                    transform: scale(0.9,0.9);
                }
                &:last-child {
                    margin-right:0;
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

const pageStyleList = [
    {
        title:'njrgb',
    },
    {
        title:'hgrh',
    },
    {
        title:'jugrm',
    },
    {
        title:'rwhwr',
    },
    {
        title:'miopbns',
    },
    {
        title:'miobtemk',
    },
    {
        title:'mionbdf',
    },
    {
        title:'incbx',
    },
    {
        title:'bcsyiv',
    },
    {
        title:'pjbfue',
    },
    {
        title:'nyisv',
    },
    {
        title:'okjfdni',
    },
    {
        title:'mionbdf',
    },
    {
        title:'incbx',
    },
    {
        title:'bcsyiv',
    },
    {
        title:'pjbfue',
    },
    {
        title:'nyisv',
    },
    {
        title:'okjfdni',
    },
    {
        title:'mionbdf',
    },
    {
        title:'incbx',
    },
    {
        title:'bcsyiv',
    },
    {
        title:'pjbfue',
    },
    {
        title:'nyisv',
    },
    {
        title:'okjfdni',
    },
    {
        title:'mionbdf',
    },
    {
        title:'incbx',
    },
    {
        title:'bcsyiv',
    },
    {
        title:'pjbfue',
    },
    {
        title:'nyisv',
    },
]
const creatList = (array) => {
    return array.map((element,index)=>{
        return (
        <li key={index}>
            <span>{element.name}</span> : <span>{element.phone}</span>
        </li>
        );
    });
}
const creatImgList = (array = [], start, end) => {
    return array.map((element,index)=>{
        if(index >= start && index <= end) {
            return (
                <div key={index} className="list">
                    <img src="./dis/images/banner1.jpg" alt=""/>
                    <div className="caption">I'm image-{index+1}: {element.title}</div>
                </div>
                );
        } else {
            return null;
        }
    });
}
const creatPageBtn = (array = [], listNumber, setFun) => {
    const totalBtnList = [];
    const totalBtn = Math.ceil(array.length / (listNumber));
    for(let i=0;i< totalBtn; i++){
        totalBtnList.push(i);
    }
    return totalBtnList.map((element, index)=> {
        const startNumber = index*(listNumber-1);
        const endNumber = (index*(listNumber-1))+(listNumber-1);
        return (
            <button key={index} className="pageBtn"
                onClick={()=>{setFun({start: startNumber, end: endNumber})}}
            >{element+1}</button>
        )
    })
}
const App = () => {
    const [ staticProps, setStaticProps ] = useState(
        { staticList: [...staticArrayList] }
    )
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
    const [pageShowNumber, setPageShowNumber] = useState({ start: 0, end: 8})
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
            </ul>
            <ul className="pageStyle">
                <li className="title">~ List for Pages ~</li>
                <li className="list-area">{creatImgList(pageStyleList,pageShowNumber.start,pageShowNumber.end)}</li>
                <li className="pages">{creatPageBtn(pageStyleList,9,setPageShowNumber)}</li>
            </ul>
        </Main>
        <BackgroundCanvas></BackgroundCanvas>
        </>
    )
}
export default App;
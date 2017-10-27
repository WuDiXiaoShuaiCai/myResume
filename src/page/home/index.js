import React, { Component } from 'react';
import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import './index.scss';

class HomePage extends Component {
    render() {
                return (
                
                <div className="yo-flex">
                    {
                    <div className='yo-flex'>
                        <Header title="信&emsp;息" left={false}/>
                        
                        <Scroller extraClass="flex" onScroll={() => {
                        }}>
                                    
                        <div className="header m-content" style={{height:"150px"}}>
                            <Touchable touchClass="m-content-active" onTap={() => {
                                yoHistory.push('/list');
                            }}>
                                <div className="Header">
                                    <div className="headerImg">
                                        <img src=''  width="120px" height="130px"/>
                                    </div>
                                    <div className="headerInfo">
                                        <h3>晋&emsp;韶&emsp;帅</h3>
                                        <p className="tel">18357026864</p>
                                        <p className="email">876991244@qq.com</p>
                                        <p>性别：男</p>
                                    </div> 
                                </div>
                            </Touchable>
                        </div>
                        <div className="yo-list yo-list-group yo-scroller content">
                            <h3 className="label">身份信息：</h3>
                            <div className="item"><div className="mark">生&emsp;&emsp;日:</div><div className="flex"></div></div>
                            <div className="item"><div className="mark">身份证号:</div><div className="flex"></div></div>
                            <div className="item" style={{borderBottom:'solid #ccc 1px'}}><div className="mark">地&emsp;&emsp;址:</div><div className="flex"></div></div>
                            
                            <h3 className="label">教育背景：</h3>
                            <div className="item"><div className="mark">学&emsp;&emsp;校:</div><div className="flex"></div></div>
                            <div className="item"><div className="mark">专&emsp;&emsp;业:</div><div className="flex"></div></div>
                            <div className="item"><div className="mark">入&emsp;&emsp;学:</div><div className="flex"></div></div>
                            <div className="item" style={{borderBottom:'solid #ccc 1px'}}><div className="mark">学&emsp;&emsp;历:</div><div className="flex"></div></div>
                        
                            <h3 className="label">求职意向：</h3>
                            <div className="item"><div className="mark">工作类型:</div><div className="flex"></div></div>
                            <div className="item"><div className="mark">地&emsp;&emsp;点:</div><div className="flex"></div></div>
                            <div className="item"><div className="mark">求职意向:</div><div className="flex"></div></div>
                            <div className="item" style={{borderBottom:'solid #ccc 1px'}}><div className="mark">期望薪资:</div><div className="flex"></div></div>  
                        </div>
                    </Scroller>
                    <Footer/>
                 </div> 
                }
                </div>
            
            )
        } 
    }

export default HomePage;

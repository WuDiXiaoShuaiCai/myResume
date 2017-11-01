import React, { Component } from 'react';
import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import './index.scss';

class Home extends Component {
    render() {
        return (
            <div className="yo-flex">
                 <Header title="首页" left={false}/>
                <Scroller  onScroll={() => {
                }}>
				<div>
					<img src="../../images/home.jpg" style={{width:"100%"}}/>
				</div>
                </Scroller>
            <Footer indexLink="true" indexLink1="false" indexLink2="false" indexLink3="false" />                  
            </div>
        )
    }
}

export default Home;

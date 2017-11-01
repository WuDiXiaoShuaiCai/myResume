import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import './index.scss';
require('isomorphic-fetch');

class Skill extends Component {
	constructor(){
		super();
		this.state = {
			skill:[]
		}
	}

	componentWillMount(){
		fetch('http://localhost:3000/skill')
		.then(res=>{
			return res.json();
		})
		.then(stories=>{
			this.setState({
				skill:stories
			})
		})
	}

    render() {
		const {skill} = this.state;
		// console.log(skill)
        return (
            <div className="yo-flex">
                <Header title="我的技能"/>
                <Scroller extraClass="flex">
                    <div className="yo-list yo-list-group">
                    	{
                    		skill.map((item,index)=>{
                    			var arr = item.children.map((v,i)=>{
		                    				return [
		                    						<div className="item" key={i}  style={{borderBottom:"0.01rem solid lightgray"}}>
			                							<img src={v.img}/>
			                							<div className="flex">
			                								<h3 className="title">{v.title}</h3>
			                								<p className="detail">{v.detail}</p>
			                							</div>
			                						</div>
		                    					]
		                    				})
                    			return [<h3 className="label" key={index}>{item.mainTitle}</h3>,arr]
                    		})
                    	}
					</div>
                </Scroller>
                <Footer indexLink="false" indexLink1="true" indexLink2="false" indexLink3="false"/>
            </div>
        )
    }
}

export default Skill;
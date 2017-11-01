import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import './index.scss';
require('isomorphic-fetch');

class Record extends Component {
	constructor(){
		super();
		this.state = {
			experiences:[
				{"title1":"","addr1":"","addr2":"","university":"","edu":"","bachelor1":"","bachelor2":""},
				{"title1":"","addr1":"","addr2":"","university":"","edu":"","bachelor1":"","bachelor2":""}				
			]
		}
	}

	componentWillMount(){
		fetch('http://localhost:3000/experiences')
		.then(res=>{
			return res.json();
		})
		.then(stories=>{
			this.setState({
				experiences:stories
			})
		})
	}

    render() {
		const {experiences} = this.state;
		// console.log(experiences)
        return (
            <div className="yo-flex">
            	<Header title="个人经历"/>

				<Scroller extraClass="flex">

					<ul className="yo-list">
						<li className="item demo-list-item">
							<div className="wrapper" style={{boxShadow:"0 0 0.05rem"}}>
							<h2 className="comment-title ellipsis" style={{color:"green",background:"Pink", fontSize:"0.2rem",fontFamily:"华文彩云",textAlign:"center"}}>{experiences[0].title}</h2>
								<a className="img-wrap">
									<img src={experiences[0].show} style={{width:"100%",height: 200}}></img>
								</a>
								<div className="comment-wrap">
									<p className="comment-detail ellipsis" style={{margin:"0.2rem"}}>
										<span className="yo-badge-new" style={{padding:"0.03rem",margin:"0.2rem"}}>{experiences[0].addr1}</span>
										<span className="yo-badge-new" style={{padding:"0.03rem",margin:"0.3rem"}}>{experiences[0].addr2}</span>										
										<span className="yo-badge-new" style={{padding:"0.03rem",margin:"0.5rem"}}>{experiences[0].university}</span>										
									</p>
									<p className="comment-detail ellipsis" style={{margin:"0.1rem"}}>
										<span className="yo-badge-new" style={{padding:"0.03rem",margin:"0.5rem"}}>{experiences[0].edu}</span>									
										<span className="yo-badge-new" style={{padding:"0.03rem",margin:"0.2rem"}}>{experiences[0].bachelor1}</span>
										<span className="yo-badge-new" style={{padding:"0.03rem",margin:"0.5rem"}}>{experiences[0].bachelor2}</span>										
									</p>					
								</div>
							</div>
						</li>

						<li className="item demo-list-item">
							<div className="wrapper" style={{boxShadow:"0 0 0.05rem"}}>
							<h2 className="comment-title ellipsis" style={{color:"green",background:"Pink", fontSize:"0.2rem",fontFamily:"华文彩云",textAlign:"center"}}>{experiences[1].title}</h2>
								<a className="img-wrap">
									<img src={experiences[1].show} style={{width:"100%",height: 200}}></img>
								</a>
								<div className="comment-wrap">
									<p className="comment-detail ellipsis" style={{margin:"0.2rem"}}>
										<span className="yo-badge-new" style={{padding:"0.03rem",margin:"0.1rem"}}>{experiences[1].addr1}</span>
										<span className="yo-badge-new" style={{padding:"0.03rem",margin:"0.2rem"}}>{experiences[1].company}</span>
										<span className="yo-badge-new" style={{padding:"0.03rem",margin:"0.3rem"}}>{experiences[1].type}</span>																																															
									</p>
									<p className="comment-detail ellipsis" style={{margin:"0.2rem"}}>
										<span className="yo-badge-new" style={{padding:"0.03rem",margin:"0.3rem"}}>{experiences[1].addr2}</span>																				
									</p>					
								</div>
							</div>
						</li>
					</ul>
				
                </Scroller>
				
				<Footer indexLink="false" indexLink1="false" indexLink2="true" indexLink3="false" />                  
            </div>
        )
    }
}

export default Record;
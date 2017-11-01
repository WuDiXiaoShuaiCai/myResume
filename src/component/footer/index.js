import React, { Component } from 'react';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';

class Footer extends Component {
    render() {
        return (
           	<ul className="yo-tab yo-tab-view" style={{padding:"0.05rem"}}>
				<Touchable touchClass="m-content-active" onTap={() => {
				
    				yoHistory.push('/home');
				}}>
					{
						this.props.indexLink=="true"?
						<li className="item item-y-ico  item-on">
							<i className="icon iconfont icon-jishunengli yo-ico"></i>
							home
						</li>:
						<li className="item item-y-ico">
							<i className="icon iconfont icon-jishunengli yo-ico"></i>
							home
						</li>
					}
	            </Touchable>
           		<Touchable touchClass="m-content-active" onTap={() => {
				
    				yoHistory.push('/list');
				}}>
					{
						this.props.indexLink1=="true"?
						<li className="item item-y-ico item-on">
							<i className="icon iconfont icon-jishunengli yo-ico"></i>
							Skill
						</li>:
						<li className="item item-y-ico">
							<i className="icon iconfont icon-jishunengli yo-ico"></i>
							Skill
						</li>
					}
	            </Touchable>
	            <Touchable touchClass="m-content-active" onTap={() => {
    				yoHistory.push('/record');
				}}>
					{
						this.props.indexLink2=="true"?
						<li className="item item-y-ico item-on">
							<i className="icon iconfont icon-gongzuo yo-ico"></i>
							record
						</li>:
						<li className="item item-y-ico">
							<i className="icon iconfont icon-gongzuo yo-ico"></i>
							record
						</li>
					}
	                
                </Touchable>
                <Touchable touchClass="m-content-active" onTap={() => {
    				yoHistory.push('/project');
				}}>
					{
						this.props.indexLink3=="true"?
						<li className="item item-y-ico item-on">
							<i className="icon iconfont icon-xiangmu yo-ico"></i>
							Project
						</li>:
						<li className="item item-y-ico">
							<i className="icon iconfont icon-xiangmu yo-ico"></i>
							Project
						</li>
					}
	                
                </Touchable>
                <Touchable touchClass="m-content-active" onTap={() => {
    				yoHistory.push('/mine');
				}}>
					{
						this.props.indexLink4=="true"?					
						<li className="item item-y-ico item-on">
							<i className="icon iconfont icon-wode yo-ico"></i>
							Mine
						</li>:
						<li className="item item-y-ico">
						<i className="icon iconfont icon-wode yo-ico"></i>
						Mine
					</li>
					}
					
	            </Touchable>
            </ul>
        )
    }
}

Footer.defaultProps = {
    indexLink:"true",
    indexLink1:'false',
    indexLink2:'false',
	indexLink3:'false',
    indexLink4:'false'
}
export default Footer;

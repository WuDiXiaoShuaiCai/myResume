import React, { Component } from 'react';
import { Scroller, Touchable } from '$yo-component';

import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import './index.scss';
//引入一个list的组件
import { List } from '$yo-component';

class Project extends Component {
    constructor() {
        super();
        this.state = {
            getData:[
                {key:1}
            ]
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/item')
            .then((response)=> {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((stories)=> {
                const getData = stories;
                this.setState({
                    getData
                })
            });
    }


    render() {
        let guid = -1;
        return (
            <div className="yo-flex">
                <Header title="实战-项目" right={{ title: '撩我', onTap: () => alert('hello') }}/>
                {/*中间滚动的履历栏目*/}
                <Scroller extraClass="flex"
                        ref='list'
                        usePullRefresh={true}
                        onRefresh={() => {
                            setTimeout(() => {
                            //  this.refresh();
                                this.refs.list.stopRefreshing(true);
                            }, 500);
                        }}
                        useLoadMore={true}
                        onLoad={() => {
                            setTimeout(() => {
                            //  this.fetch();
                                this.refs.list.stopLoading(true);
                            }, 500);
                        }}
                >
                    {/*普通列表页*/}
                    <List
                        dataSource={this.state.getData}
                        renderItem={(item,i)=>{
                            return (
                                <div key={i}>
                                    <img className="my-list-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4158793556,1968627572&fm=11&gp=0.jpg"/>
                                    <h4>{`${item.itemName}  ---${item.url}`}</h4>
                                    <h6>{`${item.company}  ---${item.position}`}</h6>
                                    <hr/>
                                    <p>{item.mywork}</p>
                                    <hr/>
                                    <h6>Tips</h6>
                                    <p>sdfsdfsdf</p>
                                </div>
                            );
                        }}
                    />
                    
                </Scroller>
                {/*//底部导航tab*/}
                <Footer indexLink='false' indexLink2='false' indexLink3='true' indexLink4='false' />
            </div>
        )
    }
}

export default Project;

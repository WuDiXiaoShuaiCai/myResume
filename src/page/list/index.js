import React, { Component } from 'react';
import { List,Scroller } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import './index.scss';
require('isomorphic-fetch');

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [{text:null,key:0}]
        };
    }

    componentWillMount(){
         fetch('http://localhost:3000/posts')
        .then((res)=> {
            return res.json();
        })
        .then((posts)=>{
            console.log(posts)
            this.setState({
                dataSource:posts
            })
        });
    }

    handleClick(){
        fetch('http://localhost:3000/posts')
        .then((res)=> {
            return res.json();
        })
        .then((posts)=>{
            this.setState({
                dataSource:posts
            })
        });
    }
    refresh() {
        this.setState({ dataSource: getData() });
    }

    fetch(){
        this.setState({dataSource:this.state.dataSource.concat(getData())});
    }

    // render() {
    //     return (
    //         <div className="yo-flex">
    //             <Header title="列表页" right={{ title: '点我', onTap: () => alert('hello') }}/>

    //             {/* <div className="yo-btn yo-btn-m yo-btn-light" onClick={this.handleClick.bind(this)}>获取数据</div> */}
    //             <List
    //                 ref="list"
    //                 extraClass="flex m-list"
    //                 dataSource={this.state.dataSource}
    //                 renderItem={(item, i) => <div>{i + ':' + item.title}</div>}
    //                 infinite={true}
    //                 infiniteSize={20}
    //                 itemHeight={44}
    //                 usePullRefresh={true}
    //                 onRefresh={() => {
    //                     setTimeout(() => {
    //                         this.refresh();
    //                         this.refs.list.stopRefreshing(true);
    //                     }, 500);
    //                 }}
    //                 useLoadMore={true}
    //                 onLoad={() => {
    //                     setTimeout(() => {
    //                         this.fetch();
    //                         this.refs.list.stopLoading(true);
    //                     }, 500);
    //                 }}
    //                 itemExtraClass={(item, i) => {
    //                     return 'item ' + i;
    //                 }}
    //                 onItemTap={(item, i, ds) => {
    //                     yoHistory.push('/detail');
    //                 }}
    //             />
    //         </div>
    //     )
    // }

    render() {
        return (
            <div className="yo-flex" style={{background:"#eee"}} id="list">
                <Header title="SKILL" right={{ title: '点我', onTap: () => scan() }} />

                <Scroller extraClass="flex" onScroll={() => {
                    }}>

                {/* 基础技能 */}
                <p style={{background:"#eee",padding:"0.05rem",width:"100%"}}><b style={{marginRight:"10px",fontSize:"18px"}}>基础技能</b></p>
                <List
                    ref="list"
                    extraClass="m-list"
                    dataSource={this.state.dataSource}
                    renderItem={(item, i) =>
                    <any className="flex" style={{width:"100%"}}>
                    	<div style={{float:"left",padding:"0.1rem"}}>
                    		<img src='' width="60px" height="60px"/>
                    	</div>
                        <div className="flex" style={{marginLeft:"90px"}}>
                           <p style={{padding:"0.1rem"}}>
                                <span style={{color:"#00bcd4",display:"block",fontSize:"0.2rem"}}>{item.id?item.id[0].aa:null}</span>
                                <span style={{color:"#ccc",display:"block"}}>{item.id?item.id[1].bb:null}</span>                                
                            </p>
                        </div>
                    </any>
                    
                    }
                    onItemTap={(item, i, ds) => {
                        yoHistory.push(`/detail/${item.id}`);
                    }}
                />
                    
                <p style={{background:"#eee",padding:"0.05rem",width:"100%"}}><b style={{marginRight:"10px",fontSize:"18px"}}>基础技能</b></p>
                <List
                    ref="list"
                    extraClass="m-list"
                    dataSource={this.state.dataSource}
                    renderItem={(item, i) =>
                    <any className="flex" style={{width:"100%"}}>
                    	<div style={{float:"left",padding:"0.1rem"}}>
                    		<img src='' width="60px" height="60px"/>
                    	</div>
                        <div className="flex" style={{marginLeft:"90px"}}>
                           <p style={{padding:"0.1rem"}}>
                                <span style={{color:"#00bcd4",display:"block",fontSize:"0.2rem"}}>111</span>
                                <span style={{color:"#ccc",display:"block"}}>111</span>                                
                            </p>
                        </div>
                    </any>
                    
                    }
                    onItemTap={(item, i, ds) => {
                        yoHistory.push(`/detail/${item.id}`);
                    }}
                />





                </Scroller>
                <Footer/>
            </div>
        )
    }

}

let guid = -1;



function getData() {
    
        fetch('http://localhost:3000/posts')
            .then(function(response) {
                return response.json();
            })
            .then(function(posts) {
                return posts;
            });
}


export default Detail;

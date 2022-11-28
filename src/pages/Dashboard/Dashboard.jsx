// const Dashboard = () => {
//   console.log("Richa");
//   return <div className="title"> Dashboard</div>;
// };

// export default Dashboard;

import React, { Component, PureComponent } from 'react';
import Post from './post/Post';
import './Dashboard.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Model from '../../Components/model/model.jsx';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            fullpost:{},
            postSearch:'',
            openModel: false,
            popuppost:[] 
        }
    }

    componentDidMount() {
        // HTTP Request
        axios.get(`https://meme-api.herokuapp.com/gimme/${this.props.value1}50`)
            .then(response => {
                this.setState({posts:response.data.memes})
                console.log(response)
            })
            .catch(error => console.log("error"))
        }
        componentDidUpdate() {
            // HTTP Request
            if(this.state.postSearch!=this.props.value1){
                this.setState({postSearch:this.props.value1})
            axios.get(`https://meme-api.herokuapp.com/gimme/${this.props.value1}50`)
                .then(response => {
                    this.setState({posts:response.data.memes})
                    console.log(response)
                })
                .catch(error => console.log(error))
            }}

        onModalCLickHandler = (post) => {
            this.setState({openModel:!(this.state.openModel)})
            this.setState({popuppost: post})
        }

    render () {
        // if(this.state.fullpost=={}){
        //     FullPost={};
        // }
        return (
            <div  class="bar">
            {/* <SideBar></SideBar>  */}
      
      
     
                <section className="Posts">
                    { 
                        this.state.posts.map(post => 
                            <Post 
                                url={post.url}
                                title={post.title}
                                Click={ () => this.onModalCLickHandler(post) }
                                color={this.props.color}
                                />)  
                    }
                </section>
                {/* <button onclick={}>SHOW MORE</button> */}
                {/* <div>{this.state.openModel}</div> */}
                <Model open={this.state.openModel} post={this.state.popuppost}></Model>
            </div>
            // post={this.state.popuppost}
        );
    }
}

export default Dashboard;
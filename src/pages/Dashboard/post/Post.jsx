import React , { useState }from 'react';

import './post.css';

const Post = (props) => (
    
    
    <article style={{width:'300px'}} onClick={props.Click} className="Post">
        <h1><img style={{width:"100%"}}src={props.url}></img></h1>
        <div className="Info">
            <div className="Author" style={{color:`${props.color}`}}>{props.title}</div>
        </div>
    </article>
);

//export default Post;
export default Post;
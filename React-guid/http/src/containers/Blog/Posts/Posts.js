import React, {Component} from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import { Route, Link } from "react-router-dom";
import FullPost from "../FullPost/FullPost"
import "./Posts.css";

class Posts extends Component {
    state = {
        posts:[]
    }

    componentDidMount (){
        console.log(this.props)
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return{
                        ...post,
                        author: "Max"
                    }
                })
                this.setState({posts:updatedPosts});
            })
            .catch(error=>{
                console.log(error)
                // this.setState({error:true})
            })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId:id})
    }

    render(){
        let posts = <p style={{textAlign:"center"}}>Something went wrong!</p>;
        if (!this.state.error){
            posts = this.state.posts.map(post=>{
                return (
                    <Link to={"/posts/"+post.id} key={post.id}>
                        <Post  
                        title={post.title} 
                        author={post.author}
                        // {...this.props} passes all the props to posts component
                        clicked={()=>this.postSelectedHandler(post.id)}/>
                    </Link>
                    );
            })   
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={(this.props.match.url)+"/:id"} exact component={FullPost}/>
            </div>           
        )
    }
}

export default Posts;
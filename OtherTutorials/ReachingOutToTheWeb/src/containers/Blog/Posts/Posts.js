import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';


class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                //console.log(response);
            })
            .catch(error => {
                //this.setState({ error: true });
                console.log('[AXIOS] ' + error);
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };


    render() {
        let posts = <strong style={{ textAlign: 'center' }}> Something went wrong!!</strong >;

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;
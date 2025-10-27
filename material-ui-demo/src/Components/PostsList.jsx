// import React, { Component } from 'react';

// class PostsList extends Component {
//   state = {
//     posts: [],
//     errorMsg: ''
//   };

//   async componentDidMount() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       console.log(data);
//       this.setState({ posts: data });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       this.setState({ errorMsg: 'Error retrieving the data' });
//     }
//   }

//   render() {
//     const { posts, errorMsg } = this.state;
//     return (
//       <div>
//         {posts.length
//           ? posts.map((post) => <div key={post.id}>{post.title}</div>)
//           : null}

//         {errorMsg && <div>{errorMsg}</div>}
//       </div>
//     );
//   }
// }

// export default PostsList;

// import React, { Component } from 'react';

// class PostsList extends Component {
//   state = {
//     posts: [],
//     errorMsg: '',
//   };

//   async componentDidMount() {
//     await this.fetchPosts(); 
//   }

//   fetchPosts = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//       const data = await response.json();
//       this.setState({ posts: data });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       this.setState({ errorMsg: 'Error retrieving the data' });
//     }
//   };

//   createPost = async () => {
//     const newPost = {
//       title: 'New Post from Fetch',
//       body: 'This is a test post created using fetch.',
//       userId: 1,
//     };

//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newPost),
//       });

//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//       const data = await response.json();
//       console.log('Post created:', data);
//       alert('New post created successfully!');
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   updatePost = async (id) => {
//     const updatedPost = {
//       title: 'Updated Post Title',
//       body: 'This post was updated using fetch PUT.',
//       userId: 1,
//     };

//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatedPost),
//       });

//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//       const data = await response.json();
//       console.log('Post updated:', data);
//       alert(`Post ${id} updated successfully!`);
//     } catch (error) {
//       console.error('Error updating post:', error);
//     }
//   };

//   deletePost = async (id) => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//       console.log(`Post ${id} deleted`);
//       alert(`Post ${id} deleted successfully!`);
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   render() {
//     const { posts, errorMsg } = this.state;

//     return (
//       <div>
//         <h2>Posts List (using Fetch)</h2>
//         <button onClick={this.createPost}>Create Post</button>
//         <button onClick={() => this.updatePost(1)}>Update Post (id: 1)</button>
//         <button onClick={() => this.deletePost(1)}>Delete Post (id: 1)</button>

//         <div>
//           {posts.length
//             ? posts.slice(0, 5).map((post) => (
//                 <div key={post.id}>
//                   <strong>{post.title}</strong>
//                   <p>{post.body}</p>
//                 </div>
//               ))
//             : null}
//         </div>

//         {errorMsg && <div>{errorMsg}</div>}
//       </div>
//     );
//   }
// }

// export default PostsList;

import React, { Component } from 'react'
import axios from 'axios'

class PostsList extends Component {
    state = {
        posts: [],
        errorMsg: ''
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.error(error)
                this.setState({ errorMsg: "Error retreiving the data" })
            })
    }
    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div>
                {
                    posts.length ?
                        posts.map((post) => {
                            return <div key={post.id}>{post.title} </div>
                        }) :
                        null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default PostsList
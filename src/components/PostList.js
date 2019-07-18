import React, { Component } from "react";

import PostItem from "./PostItem";
import NewPost from "./NewPost";
import "./PostList.css";

class PostList extends Component {
  state = {
    newPost: {},
    posts: [
      {
        id: 1,
        author: {
          name: "Vanessa Romero",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            date: "04 Jun 2019",
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: `2`,
        author: {
          name: "Neil Cook",
          avatar: "https://i.pravatar.cc/150?img=8"
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            date: "04 Jun 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            date: "04 Jun 2019",
            content:
              "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/150?img=51"
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            date: "04 Jun 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            date: "04 Jun 2019",
            content:
              "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes"
          }
        ]
      }
    ]
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      posts: [this.state.newPost, ...this.state.posts],
      newPost: null
    });
  };

  handleInputChange = e => {
    let newPost = {
      id: this.state.posts.length + 1,
      author: {
        name: "Robinson Silva Junior",
        avatar: "https://avatars1.githubusercontent.com/u/21206530"
      },
      date: `${new Date().getDate()} Jul 2019`,
      content: e.target.value,
      comments: []
    };
    this.setState({ newPost: newPost });
  };

  render() {
    return (
      <>
        <NewPost
          inputChange={this.handleInputChange}
          formSubmit={this.handleSubmit}
          valueState={this.state.newPost ? this.state.newPost.content : ""}
        />
        <div className="postlist">
          {this.state.posts.map(post => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </>
    );
  }
}

export default PostList;

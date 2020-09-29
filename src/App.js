import React from 'react';
import Home from "./Home";
import FormPage from "./FormPage";
import './App.css';

import { useHistory } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      allDevelopers: [],
      developer: {
        logo: "",
        imgURL: "",
        imgTitle: "",
        title: "",
        totalExp: "",
        totalProjects: "",
        desc: "",
        location: ""
      }
    };
    this.getDevelopers = this.getDevelopers.bind(this);
    // this.getList = this.getList.bind(this);
    this.createDeveloper = this.createDeveloper.bind(this);
    // this.updateList = this.updateList.bind(this);
    // this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getDevelopers();
  }

  getDevelopers() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3000/items")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            allDevelopers: result
          })
        )
        .catch(console.log);
    });
  }

  createDeveloper() {
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.developer)
    }).then(
      this.setState({
        developer: {
          logo: "",
          imgURL: "",
          imgTitle: "",
          title: "",
          totalExp: "",
          totalProjects: "",
          desc: "",
          location: ""
        }
      })
    );
  }

  handleChange(event) {
    var logo = this.state.developer.logo;
    var imgURL = this.state.developer.imgURL;
    var imgTitle = this.state.developer.imgTitle;
    var title = this.state.developer.title;
    var totalExp = this.state.developer.totalExp;
    var totalProjects = this.state.developer.totalProjects;
    var desc = this.state.developer.desc;
    var location =  this.state.developer.location;

    switch (event.target.id) {
      case 'title': title = event.target.value; break;
      case 'logo': logo = event.target.value; break;
      case 'imgURL': imgURL = event.target.value; break;
      case 'imgTitle': imgTitle = event.target.value; break;
      case 'totalExp': totalExp = event.target.value;break;
      case 'totalProjects':  totalProjects = event.target.value;break;
      case 'desc':  desc = event.target.value;break;
      case 'location':  location = event.target.value;break;
      default:
    }

    this.setState({
      developer: {
        logo: logo,
        imgURL: imgURL,
        imgTitle: imgTitle,
        title: title,
        totalExp: totalExp,
        totalProjects: totalProjects,
        desc: desc,
        location: location
      }
    });
  }

  //
  // getList(event, id) {
  //   this.setState(
  //     {
  //       developer: {
  //         title: "Loading...",
  //         author: "Loading..."
  //       }
  //     },
  //     () => {
  //       fetch("https://jsonplaceholder.typicode.com/posts/" + id)
  //         .then(res => res.json())
  //         .then(result => {
  //           this.setState({
  //             developer: {
  //               title: result.title,
  //               author: result.author ? result.author : ""
  //             }
  //           });
  //         });
  //     }
  //   );
  // }
  //
  // updateList(event, id) {
  //   fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(this.state.developer)
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       this.setState({
  //         developer: {
  //           title: "",
  //           author: ""
  //         }
  //       });
  //       this.getDevelopers();
  //     });
  // }
  //
  // deleteList(event, id) {
  //   fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
  //     method: "DELETE"
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       this.setState({
  //         developer: {
  //           title: "",
  //           author: ""
  //         }
  //       });
  //       this.getDevelopers();
  //     });
  // }

  render() {
    return (
      <div className="container">
        <Home
          allDevelopers={this.state.allDevelopers}
        />
        <FormPage
          developer={this.state.developer}
            createDeveloper={this.createDeveloper}
            handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

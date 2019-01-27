import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const Movies = [
  {
    title:"어바웃타임",
    poster:"https://recos.io/files/RULdvMePv5ALExtYvzZI7y1dds63BuFr_.jpg"
  },
  {
    title:"너의 결혼식",
    poster:"http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2018/07/2018071816393569599-540x774.jpg"
  },
  {
    title:"국가 부도의 날",
    poster:"https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F274291ad9da34893b93fa702335536501540800387124"
  },
  {
    title:"더 킹",
    poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/8/86/%EB%8D%94_%ED%82%B9_2017.jpg/250px-%EB%8D%94_%ED%82%B9_2017.jpg"
  }
]

class App extends Component {

  state = {
    greeting : "hello"
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        greeting:"hihihi222"
      })
    },2000)
  }
  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {Movies.map((movie,index) => {
         return  <Movie title={movie.title} poster={movie.poster} key={index} />
        
        })};
      </div>
    );
  }
}

export default App;

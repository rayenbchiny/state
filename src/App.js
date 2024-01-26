
import React,{Component} from "react";
import "./App.css"

class App extends Component {
constructor(){
super()
this.state={
  Person:{
  fullName: "Rayen Bchiny",
  bio: "A passionate React developer",
  imageSrc:"https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg",
  Profession:"web developer"
 }, 
 Boolean:false,
 mountTime: 0, // début d compteur 

}  
}
componentDidMount() {
setInterval(() => {
  this.setState({mountTime:this.state.mountTime+1})
}, 1000);
}

 render() {
    return(
   <div>
{  this.state.Boolean ? <div>
    <h1>hello {this.state.Person.fullName}</h1>
    <h1>{this.state.Person.bio}</h1>;
    <img src={this.state.Person.imageSrc}/>;
    <h2> {this.state.Person.Profession}</h2>;

     </div>:null}
   <button onClick={()=>this.setState({Boolean:!this.state.Boolean})}>click here </button>
     <p>Temps depuis le montage du composant: {this.state.mountTime} secondes</p>      
    
  </div>
  
 )
}
}


export default App
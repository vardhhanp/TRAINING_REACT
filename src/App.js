// import React from "react";
// function App(){
// // let x = React.createElement("div" , {className:"App"} ,
// // React.createElement("h1" ,null, "Welcome to React")

//   let username = "Sathvik";
//   return(
// // <div className="App">
// //<h1>Welcome to React</h1>
// //<img />
// // </div>
// // x
//     <div>
//       <h1>ExcleR</h1>
//       <p>para</p>
//       {username}
//       {100*100}
//     </div>
//   );
// }
import React, {Component} from "react";
import CBCPropExample1 from "./propsexample/CBCPropExample1";
export default class App extends Component{
  render(){
    return(
      <div>
        App
        <CBCPropExample1
        username="vardhan"
        age={20}
        hobbies={["playing", "eating","sleeping"]}
        address={{city:"HYD", area:"MYSDA"}}
        isMarried={false}
        sendFun={function(){alert("Hi vardhan")}}
        />
      </div>
    )
  }
}

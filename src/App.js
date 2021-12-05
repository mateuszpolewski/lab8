import React, {Component} from 'react';

class App extends Component {
  
constructor(props){
super(props);

this.state = {
  num : '',
  x : ''
}

this.updateInput = this.updateInput.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}


updateInput(event){
  this.setState({num : event.target.value})
}


handleSubmit(){
console.log('Your input value is: ' + this.state.num)
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= this.state.num; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
this.setState({x : n1})

}

  render() {
    return (
      <div className="App">
      <p>Dla ciągu fibonacciego przy założeniu, że F0 = 0, F1 = 1,... podaj wartość k-tego elementu: </p>
       <input type="text" onChange={this.updateInput}></input>
    <input value="Przelicz" type="submit" onClick={this.handleSubmit} ></input>
    <p>Wartość k-tego elementu ciągu fibonacciego wynosi: {this.state.x}</p>

      </div>
    );
  }
}
export default App;
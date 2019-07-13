import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles ,styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';


const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 25,
  padding: '0 30px',
});

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input: "", 
      output: "",
    };
    
  }

  BubbleSort(id){

    var swapp;
    var copiedInput=this.state.input;

    var commaInput = copiedInput.split(',');
    var n = commaInput.length;
   
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
          // Decreasing.
          if(id===0){

            if (commaInput[i] < commaInput[i+1])
            {
              console.log('commaInput[i]')

              console.log(commaInput[i])

               var temp = commaInput[i];
               commaInput[i] = commaInput[i+1];
               commaInput[i+1] = temp;
               swapp = true;
            }

          //Increasing
          }else{
            if (commaInput[i] > commaInput[i+1])
            {

               var temp = commaInput[i];
               commaInput[i] = commaInput[i+1];
               commaInput[i+1] = temp;
               swapp = true;
            }
          }
            
        }
        
        n--;
    } while (swapp);

    this.setState({
      input:"",
    })

    const numArrayCopy = commaInput;

    for (var j=0; j < commaInput.length; j++){
      if(j!=numArrayCopy.length-1){
        numArrayCopy[j]+=', '
      }
      
      
    }

    this.setState({
      output:numArrayCopy,
    })


  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };
  
 
  render() {

    return (
      <div className="App-header">
      <React.Fragment>
        <form>
        <h2 id="name">Bubble Sort!</h2>
          <h3 id="input">Enter your array here (separate them with comma): </h3>
          <input
            class="center-block" 
            style={{backgroundColor: 'pink'}}
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
          />
           <MyButton id="0" type="button" value="0" onClick={() =>this.BubbleSort(0)} >Decreasing</MyButton>
           <MyButton id="1" type="button" value="1" onClick={() =>this.BubbleSort(1)} >Increasing</MyButton>
           <h3 align = 'center'>Your sorted array is:</h3>
           <b align = 'center' >{this.state.output}</b>
        </form>
      </React.Fragment>
      </div>
    );
  }

  
}

export default App;

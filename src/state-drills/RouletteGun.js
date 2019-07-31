import React from 'react';


export default class RouletteGun extends React.Component{
  
  static defaultProps ={ bulletInChamber: 8 } 
  
  state = {
    chamber: null,
    spinningTheChamber: false
  }
  

renderDisplay(){
  if(this.state.spinningTheChamber === true){
    return 'spinning the chamber and pulling the trigger!'
  }else if(this.state.chamber === this.props.bulletInChamber){
    return 'BANG!!'
  }else{
    return `you're safe!`
  }
}

handleClick = () => {
  this.setState({spinningTheChamber: true})
  this.timeout  =setTimeout(() => {
    const num = Math.ceil(Math.random() * 8)
    this.setState({chamber: num, spinningTheChamber: false}) 
  }, 2000)

}
componentWillUnmount(){
  clearTimeout(this.timeout)
}

render(){
  return(
    <div>
      <p>
        {this.renderDisplay()}
      </p>
      <button onClick={this.handleClick} disabled={this.state.spinningTheChamber}
        >Pull the trigger</button>
    </div>
  )
  }
}
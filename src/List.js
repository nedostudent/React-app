import React, {Component} from 'react';

export default class List extends Component {
    constructor(){
       super();
       this.state={ count: 0}
   }

  onclick(type){
      this.setState(prevState => {
         return {count: type === 'add' ? prevState.count + 1 : prevState.count - 1}
      });
  }

   render() {
    return (
        <div>
            Count: {this.state.count}
            <br/>
        <div style={{marginTop: '20px'}}/>
            <input type='button' onClick={this.onclick.bind(this, 'add')} value='Inc'/>
            <input type='button' onClick={this.onclick.bind(this, 'sub')} value='Dec'/>
       </div>
     )
   }
}

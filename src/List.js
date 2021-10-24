import React, {Component} from 'react';

export default class List extends Component {
    constructor(){
       super();
       this.state={ count: 0, countAdd: 0, countDel: 0}
   }

  onclick(type){
      if(type === 'add'){
          this.setState(prevState => ({count: prevState.count + 1, countAdd: prevState.countAdd + 1}))
      }
      else if (type ==='sub') {
          this.setState(prevState => ({count: prevState.count - 1, countDel: prevState.countDel + 1}))
      }
  }

   render() {
    return (
        <div>
        <div>
            Count: {this.state.count}
            </div>
            <div>
            Add count: {this.state.countAdd}
            </div>
            <div>
            Del count: {this.state.countDel}
            </div>
            <input type='button' onClick={this.onclick.bind(this, 'add')} value='Inc'/>
            <input type='button' onClick={this.onclick.bind(this, 'sub')} value='Dec'/>
        </div>
     )
   }
}

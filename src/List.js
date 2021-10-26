import React, { Component } from 'react';
import ListItemFun from './ListItemFun.js';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{id:"1",title:"example"}],
      countIds: 2,
      value: '',
      count: 1,
      countAdd: 0,
      countDel: 0
    };
  }

  onChangeValue = e => {
    this.setState({ value: e.target.value });
  };
  onAddItem = () => {
    this.setState(state => {
      const list = [...state.list, {id:state.countIds, title:state.value}];
      const countIds = state.countIds + 1;
      const count = state.count + 1;
      const countAdd = state.countAdd + 1;
      return {list, value: '', count, countAdd, countIds};
    });
  };

  onRemoveItem = i => {
      if(this.state.count > 0){
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);
      const count = state.count - 1;
      const countDel = state.countDel + 1;
      return {list, count, countDel};
  });}
  };

  render() {
    return (
      <div>
        <div>
        Кол-во элементов = {this.state.count}
        </div>
        <div>
        Всего было добавлено = {this.state.countAdd}
        </div>
        <div>
         Всего было удалено = {this.state.countDel}
        </div>
          <div>
            <ul>
              {this.state.list.map(elem =>
                  <li key={elem.id}>
                        <ListItemFun item={elem.title}/>
                 </li>)}
            </ul>
          </div>
            <div>
                <input
                  type='text'
                  placeholder='Введите текст'
                  value={this.state.value}
                  onChange={this.onChangeValue}
                  style={{margin: '20px'}}
                  />
                <button
                  type='button'
                  onClick={this.onAddItem}
                  disabled={!this.state.value}>
                    Добавить
                </button>
                <button
                    type="button"
                    onClick={() => this.onRemoveItem(this.state.count-1)}
                    style={{margin: '10px'}}
                    >
                    Удалить
                  </button>
            </div>
      </div>
    );
  }
}

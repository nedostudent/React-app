import React, { Component } from 'react';
import ListItemFun from './ListItemFun.js'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: '',
      count: 0,
      countAdd: 0,
      countDel: 0
    };
  }

  onChangeValue = e => {
    this.setState({ value: e.target.value });
  };

  onAddItem = () => {
    this.setState(state => {
      const list = [...state.list, state.value];
      const count = state.count + 1;
      const countAdd = state.countAdd + 1;
      return {list, value: '', count, countAdd};
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
              {this.state.list.map((item, index) =>
                  <li key={(index).toString()}>
                        <ListItemFun item={item}/>
                 </li>)}
            </ul>
          </div>
            <div>
                <input
                  type='text'
                  placeholder='Введите текст'
                  value={this.state.value}
                  onChange={this.onChangeValue}
                  style={{margin: '20px'}}/>
                <button
                  type='button'
                  onClick={this.onAddItem}
                  disabled={!this.state.value}>
                    Добавить
                </button>
                <button
                    type="button"
                    onClick={() => this.onRemoveItem(this.state.count-1)}
                    style={{
                        margin: '10px',
                    }}
                  >
                    Удалить
                  </button>
            </div>
      </div>
    );
  }
}

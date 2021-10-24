import React, { Component } from 'react';

class List extends Component {
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
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
  onAddItem = () => {
    this.setState(state => {
      const list = [...state.list, state.value];

      return {
        list,
        value: '',
    };
    });
    this.setState(prevState => ({count: prevState.count + 1, countAdd: prevState.countAdd + 1}))
  };
  onRemoveItem = i => {
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);

      return {
        list,
      };
    });
    this.setState(prevState => ({count: prevState.count - 1, countDel: prevState.countDel + 1}))
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
            <ul >
              {this.state.list.map((item, index) => (
                <li key={item, index} >
                  {item}
                  <button
                    type="button"
                    onClick={() => this.onRemoveItem(index)}
                    style={{
                        margin: '10px',
                    }}
                  >
                    Удалить
                  </button>
                </li>
              ))}
            </ul>
          </div>
            <div>
                <input
                  type="text"
                  placeholder="Введите текст"
                  value={this.state.value}
                  onChange={this.onChangeValue}
                  style={{
                      margin: '20px',
                  }}
                />
                <button
                  type="button"
                  onClick={this.onAddItem}
                  disabled={!this.state.value}
                >
                    Добавить
                </button>
            </div>
      </div>
    );
  }
}

export default List;

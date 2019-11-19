import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import ToDoList from './todolist'
import { createStore } from 'redux'
import AddItemElement from './addItemElement';
import SearchPanel from './searchPanel';
import { Provider } from 'react-redux';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends Component { 

 

    render() {
        return (
            <Provider store={ store }>
                <div style={{ margin:40+'px' }}>
                    <SearchPanel />
                    <ToDoList />
                    <AddItemElement />

                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
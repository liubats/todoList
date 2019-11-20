import React, { Component } from 'react'
import { List, Checkbox, Typography, Button } from 'antd';
import "antd/dist/antd.css";
import { connect } from 'react-redux';


class ToDoList extends Component {

    componentDidUpdate(oldProps)
    {
        if(oldProps.items !== this.props.items)
        {
            console.log(this.props.items);
        }
    }

    render() {

        const { Text } = Typography;

        console.log(this.props);
        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }

        const filtered = this.props.items.filter((item) => {
            return item.label.startsWith(this.props.searchText)
        });

        return (
            <List 
                dataSource={filtered}
                renderItem={item => (
                    <List.Item key={item.id}
                               id={item.id}>
                        
                        <List.Item.Meta title={<Text delete={item.done}
                                        >{item.label}</Text>} />

                            <Checkbox 
                                    style={{marginRight:10+'px'}}
                                    onChange={() => this.props.dispatch({type: 'ITEM_DONE_TOGGLE',
                                                                done: !item.done,
                                                                id:item.id})} />
                            <Button type="dashed"
                                    onClick={() => this.props.dispatch({type: 'DELETE_ITEM',
                                                                        id: item.id})

                                    }>Remove</Button>
                    </List.Item>
                )}
            />
        )
    }
}
const mapStateToProps = function(state) {
   return {
       items: state.items,
       searchText: state.searchText,
   }
  }
  
  export default connect(mapStateToProps)(ToDoList);


  
  
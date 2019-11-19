import React, { Component } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';


class SearchPanel extends Component {
    render () {
        console.log(this.props);
        const obj={};
        obj.type = 'CHANGE_SEARCH_TEXT';
        
        return (
            <Input 
                placeholder = "Find event" 
                onChange={ (e) => {
                    obj.text = e.target.value;
                    this.props.dispatch(obj);
                }}
                
                value={this.props.searchText}
            />
        )
    }
}

const mapStateToProps = function(state) {
    const props = {
        searchText: state.searchText,
    };

   return props;
}
  
export default connect(mapStateToProps)(SearchPanel);
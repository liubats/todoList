import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import { connect } from 'react-redux';

class AddItemElements extends Component {
    render() {
        
        return (<Row gutter={[16, 24]}>
                    <Col span={23}><Input placeholder = "Write new event" 
                                          value={this.props.newItemLabel}
                                          onChange={ (e) => {
                                            this.props.dispatch({type: 'CHANGE_NEW_ITEM_LABEL',
                                                                label: e.target.value,});
                                            }
                                          }/></Col> 
                    <Col span={1}><Button type="primary" 
                                          shape="circle"
                                          onClick={ () => {
                                            this.props.dispatch({type: 'ADD_NEW_ITEM',
                                                                label: this.props.newItemLabel,
                                                                id: Date.now()});
                                          }
                                         }> +
                                  </Button>
                    </Col> 
                </Row>

        )
    }
}

const mapStateToProps = function(state) {
    return {
        newItemLabel: state.newItemLabel,
    }
   }
   
export default connect(mapStateToProps)(AddItemElements);
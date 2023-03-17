import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import If from "../../operator/if";

class Content extends Component {

    render() {

        const selected = this.props.tabReducers.selected === this.props.id
        const visible = this.props.tabReducers.visible[this.props.id]
        
        return (
            <If test={visible}>
                <div id={this.props.id}
                    className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}


const mapStateToProps = state => ({tabReducers : state.tabReducers})
export default connect(mapStateToProps)(Content)
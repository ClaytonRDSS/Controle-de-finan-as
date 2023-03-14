import React, { Component }  from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux"; 

import { selectTab } from './tabAtions/tabActionSelected'
import If from "../operator/if";


class TabHeader extends Component {
    render() {
        const selected = this.props.tabReducers.selected === this.props.target
        const visible = this.props.tabReducers.visible[this.props.target]

        return (

            <If test={visible}>
                <li className={selected ? 'active' : ''}>
                    <a href='javascript:;'
                        onClick={() => this.props.selectTab(this.props.target)}
                        data-toggle='tab'
                        data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>
        )
    }
}

const mapStateToProps = state => ({tabReducers : state.tabReducers})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (TabHeader)
import React, {Component} from "react";

import { Field } from "redux-form";
import Input from "../common/form/input";

import Grid from '../common/layout/grid'

class DebtList extends Component {
     renderRows() {
        const list = this.props.list || [];
        return list.map((item, index) => (
            <tr>
                <td><Field name={`debts[${index}].name`} component={Input}
                    placeholder='Imforme o Nome!' readOnly={this.props.readOnly}/></td>
                <td><Field name={`debts[${index}].value`} component={Input}
                    placeholder='Imforme o Nome!' readOnly={this.props.readOnly}/></td>
                <td></td>
            </tr>
        ))
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Débitos</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}
export default DebtList;
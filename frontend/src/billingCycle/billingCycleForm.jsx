import React, { Component } from "react";
import { reduxForm, Field, formValueSelector} from 'redux-form'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { init } from "./billingActions/billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";
import CreditList from "./creditList";
import DebtsList from "./debtList";


class BillingCycleForm extends Component {
    
    render() {

        const { handleSubmit, readOnly, credits, debts } = this.props
        
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput}  readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder="Informe seu Nome!" />
                    <Field name='month' component={labelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder="Informe o Mês!" />
                    <Field name='year' component={labelAndInput} type='number'  readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder="Inform o Ano!" />
                    
                    <CreditList cols='12 6' list={credits} readOnly={readOnly}/>
                    <DebtsList cols='12 6' list={debts} readOnly={readOnly}/>
                </div>

                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({credits: selector(state, 'credits'), debts: selector(state, 'debts')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (BillingCycleForm)
import axios from "axios";
import { toastr } from 'react-redux-toastr'

import { reset as resetForm , initialize} from "redux-form";
import { showsTabs, selectTab } from "../../common/tab/tabAtions/tabActionSelected"; 
 

const BASE_URL = 'http://127.0.0.1:3003/api'

const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
        return {
            type: 'BILLING_CYCLES_FETCHED',
            payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : '';
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com Sucesso.')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }
}


export function showUpdate(billingCycle) {
    return [
        showsTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showsTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showsTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr';

import TabReducer from '../common/tab/tabReducers/tabReducer';
import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCycleReducers from '../billingCycle/billingReducers/billingCycleReducers';


const rootReducer = combineReducers ({
    dashboard: DashboardReducer,
    tabReducers: TabReducer,
    billingReducers: BillingCycleReducers,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer;
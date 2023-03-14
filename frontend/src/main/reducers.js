import { combineReducers } from 'redux'

import tabReducer from '../common/tab/tabReducers/tabReducer';
import DashboardReducer from '../dashboard/dashboardReducer'


const rootReducer = combineReducers ({
    dashboard: DashboardReducer,
    tabReducers: tabReducer

})

export default rootReducer;
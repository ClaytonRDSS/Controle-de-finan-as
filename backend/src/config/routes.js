const express = require('express');
const auth = require('./auth');

module.exports = function (server) {

    /*
     * Rotas protegidas por token JWT
     */
    //Definir URL base para todas as rotas
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    //Filtro de authentication
    protectedApi.use(auth)

    //Rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')

    /*
     * Rotas Abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}
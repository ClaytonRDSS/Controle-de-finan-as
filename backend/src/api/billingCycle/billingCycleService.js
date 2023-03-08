const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')


BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', errorHandler).after('put', errorHandler);

BillingCycle.route('get', (req, res, next) => {

    BillingCycle.find({}, (err, docs) => {

        if(!err) {

            res.json(docs)

        } else {

            res.status(500).json({errors: [error]})

        }

    })

})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{ 
        // soma dos valores de credito e debitos na variavel credit
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        //Agrupamento por (id)
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}

        //fuction collback retorna um erro
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle
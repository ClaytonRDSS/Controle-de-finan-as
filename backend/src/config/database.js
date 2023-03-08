const mongoose = require('mongoose');

mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/mymoney', {
    useMongoClient: true
})

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatório";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' informado não é válido para p atributo '{PATH}'."
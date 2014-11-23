var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');
exports.mongoose = mongoose;
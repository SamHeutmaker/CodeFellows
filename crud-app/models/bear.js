const mongoose = require('mongoose');

var bearSchema = new mongoose.Schema({
	name: String,
	flavor: String,
	fishPreference: {
		type: String, default: 'Salmons'
	}
});

module.exports = exports = mongoose.model('Bear', bearSchema);
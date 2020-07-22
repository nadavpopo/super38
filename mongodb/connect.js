const mongoose = require('mongoose');
const config = require("config")


mongoose.connect(`mongodb+srv://koko:${config.get("mongoPass")}@cluster0-vuaav.gcp.mongodb.net/super_market?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb://localhost:27017/shop_market', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("connected king")
});

module.exports = db;

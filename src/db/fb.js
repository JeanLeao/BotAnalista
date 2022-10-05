
const admin = require("firebase-admin");
const serviceAccount = require("./analystbot-v2-firebase-adminsdk-vpbac-c8cd947e10.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://analystbot-v2-default-rtdb.firebaseio.com"
});

var db = admin.database();
module.exports = db;
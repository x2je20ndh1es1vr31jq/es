var spin = require('spinnies')

var spinner = { 
"interval": 100,
"frames": [
"",
"W",
"Wh",
"Wha",
"What",
"Whats",
"WhatsA",
"WhatsAp",
"WhatsApp",
"WhatsApp ",
"WhatsApp B",
"WhatsApp Bo",
"WhatsApp Bot",
"WhatsApp Bot B",
"WhatsApp Bot By",
"WhatsApp Bot By ",
"WhatsApp Bot By X",
"WhatsApp Bot By XA",
"WhatsApp Bot By XAC",
"WhatsApp Bot By XACr",
"WhatsApp Bot By XACro",
"WhatsApp Bot By XACrow",
"WhatsApp Bot By XACrown",
"",
"WhatsApp Bot By XACrown",
"WhatsApp Bot By XACrown",
"WhatsApp Bot By XACrown",
"",
"WhatsApp Bot By XACrown",
"WhatsApp Bot By XACrown",
"WhatsApp Bot By XACrown",
"",
"WhatsApp Bot By XACrown",
"WhatsApp Bot By XACrow",
"WhatsApp Bot By XACro",
"WhatsApp Bot By XACr",
"WhatsApp Bot By XAC",
"WhatsApp Bot By XA",
"WhatsApp Bot By X",
"WhatsApp Bot By ",
"WhatsApp Bot By",
"WhatsApp Bot By",
"WhatsApp Bot B",
"WhatsApp Bot ",
"WhatsApp Bot",
"WhatsApp Bo",
"WhatsApp B",
"WhatsApp ",
"WhatsApp",
"WhatsAp",
"WhatsA",
"Whats",
"What",
"Wha",
"Wh",
"W",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}
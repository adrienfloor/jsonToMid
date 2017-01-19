var fs = require('fs');
var midiConverter = require('midi-converter');
var jsonSong = require('./example.json');
var midiSong = midiConverter.jsonToMidi(jsonSong);
fs.writeFileSync('example.mid', midiSong, 'binary');


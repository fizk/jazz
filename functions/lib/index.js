"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://firebase.google.com/docs/functions/typescript
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const song_1 = require("./transformers/song");
admin.initializeApp();
exports.songlist = functions.https.onRequest((request, response) => {
    const query = request.query.key
        ? admin.database().ref('/charts').orderByChild('info/key').equalTo(decodeURIComponent(request.query.key))
        : admin.database().ref('/charts');
    query.once('value').then((snapshot) => {
        const list = [];
        snapshot.forEach(item => {
            list.push(Object.assign({ id: item.key }, item.val().info));
        });
        response.header({
            'Access-Control-Allow-Origin': '*'
        }).json(list);
    }).catch(error => {
        console.log(error);
        response.header({
            'Access-Control-Allow-Origin': '*'
        }).status(500).json(error.message);
    });
});
exports.song = functions.https.onRequest((request, response) => {
    admin.database().ref(`/charts/${request.query.id}`).once('value').then((snapshot) => {
        response.header({
            'Access-Control-Allow-Origin': '*'
        }).json(song_1.default(snapshot.val()));
    }).catch(error => {
        console.log(error);
        response.header({
            'Access-Control-Allow-Origin': '*'
        }).status(500).json(error.message);
    });
});
//# sourceMappingURL=index.js.map
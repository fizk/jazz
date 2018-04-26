// https://firebase.google.com/docs/functions/typescript
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import songTransformer from './transformers/song';

admin.initializeApp();

export const songlist = functions.https.onRequest((request, response) => {

    const query = request.query.key
        ? admin.database().ref('/charts').orderByChild('info/key').equalTo(decodeURIComponent(request.query.key))
        : admin.database().ref('/charts');

    query.once('value').then((snapshot) => {
        const list = [];
        snapshot.forEach(item => {
            list.push({
                id: item.key,
                ...item.val().info
            })
        });

        response.header({
            'Access-Control-Allow-Origin': '*'
        }).json(list);
    }).catch(error => {
        console.log(error);
        response.header({
            'Access-Control-Allow-Origin': '*'
        }).status(500).json(error.message);
    })
});

export const song = functions.https.onRequest((request, response) => {

    admin.database().ref(`/charts/${request.query.id}`).once('value').then((snapshot) => {
        response.header({
            'Access-Control-Allow-Origin': '*'
        }).json(songTransformer(snapshot.val()));
    }).catch(error => {
        console.log(error);
        response.header({
            'Access-Control-Allow-Origin': '*'
        }).status(500).json(error.message);
    })
});

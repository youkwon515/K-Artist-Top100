const express = require('express');
const app = express();

const getArtistList = require('./getArtistList');

app.get('/api/artistList', async (req, res) => {
    try {
        const artistList = await getArtistList();
        res.send(artistList);
    } catch(error) {
        console.error(error);
    }
});

app.listen(3000, () => {
    console.log('Server is listening...')
});
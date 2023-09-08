const express = require('express');
const app = express();

const path = require('path');

const getArtistList = require('./getArtistList');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../artist-chart/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../artist-chart/build/index.html'));
});

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
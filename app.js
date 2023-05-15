const express = require('express');
const app = express();
const ytdl = require('ytdl-core');
const fs = require('fs')
var router = express.Router();
router.get('/:url', function (req, res, next) {
    console.log('rputer calld')

    let url = req.params.url

    ytdl(url).pipe(fs.createWriteStream('video.mp4'));
    res.end();

    // fs.unlinkSync('video.mp4')
})

app.use(router);
app.listen(2222, () => {
    console.log('app listing in on 2222')
})
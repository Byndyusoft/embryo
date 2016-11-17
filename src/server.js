const express = require('express');
const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.development.config');

const compiler = webpack(config);
const app = express();
const port = 3000;

const options = {
    noInfo: true,
    hot: true,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: config.output.publicPath
};

app.use(express.static('build'));
app.use(hotMiddleware(compiler));
app.use(devMiddleware(compiler, options));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/* eslint-disable no-console */
app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Listening at http://localhost:${port}`);
});
/* eslint-enable no-console */

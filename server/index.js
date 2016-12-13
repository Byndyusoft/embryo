const express = require('express');
const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack/webpack.debug.config');

const compiler = webpack(config);
const app = express();
const port = 3000;

const options = {
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: config.output.publicPath
};

app.use(hotMiddleware(compiler));
app.use(devMiddleware(compiler, options));

app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    /* eslint-disable consistent-return */
    compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
            return next(err);
        }

        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
    /* eslint-enable consistent-return */
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

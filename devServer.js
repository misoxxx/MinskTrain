var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var bodyParser = require('body-parser')

var app = express();
var compiler = webpack(config);
import * as urls from './common/urls'


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(bodyParser.json())
app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static(__dirname+'/public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post(urls.sendLevel, function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(req.body);
  console.log(req.body.curLevel)
})

app.listen(8000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8000');
});

// First create an express app:
const express = require('express');
const app = express();

// Then you can define routes like this:
app.get('/urlPath', function(req, res, next){});

// These are the routes:
app.get('/myPath', function (req, res, next) {}) // GET www.domain.com/myPath

app.post('/myPath', function (req, res, next) {}) // POST www.domain.com/myPath

app.put('/myPath', function (req, res, next) {}) // PUT www.domain.com/myPath

app.delete('/myPath', function (req, res, next) {}) // DELETE www.domain.com/myPath

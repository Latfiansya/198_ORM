const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3009;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


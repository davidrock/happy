import express from 'express';
import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  return res.json({ msg: 'Hello World' });
});

app.listen(3333);

import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import React from 'react';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.use('/api', express.static('api', {fallthrough: false}));
app.get('*', (req, res) => {
  console.log('Server side request for: ', req.path);

  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  }).map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve)
          .catch(err => {
            console.log('*** Axios Error =>', err.message);

            return resolve();
          });
      });
    }
  });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  }).catch((err) => {
    console.log(err);
    res.send('Something went wrong!');
  });

});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
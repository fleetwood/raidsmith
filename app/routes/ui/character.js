const { Character, Faction, Attribute } = require('@raid/model');
const {app, Router} = require('./../../express');
const { User } = require('@raid/auth');

Router
    .get('/ui/character/create',
    (req, res, next) => User().then(next()),
    async (req, res, next) => {
      res.render('ui/character/create', {
        layout: null
        , player: app.authUser
      })
    });

    app.use(Router);

const {app, Router} = require('./../../express');
const { Player } = require('@raid/model');

const playerData = (next) => {
  if (app.playerData || !app.authUser) {
    app.playerData = null;
    next();
  }
  else if (app.authUser) {
    Player.findByEmail(app.authUser.emailAddress)
    .then(player => { 
      console.log(`Found player! ${player.emailAddress}`)
      app.playerData = player;
    })
    .catch(e => console.log(e.message || e))
    .finally(next());
  }
}

Router
  .get('/',
    (req, res, next) => playerData(next),
    async (req, res, next) => {
      res.render('home', {
        layout: 'raidsmith'
        , title: 'RaidSmith'
        , authUser: app.authUser
        , player: app.playerData
        , isDev: app.isDev
      })
    });

module.exports = Router;

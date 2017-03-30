import Game from '../models/game';

// get all the games sorted by postDate
const getGames = (req, res) => {
  // query the db, if no errors send all games to the client
  Game.find(null, null, { sort: { postDate : 1 } }, (err, games) => {
    if (err) {
      res.send(err);
    }
    res.json(games); // games sent as json
  });
}

// get single game filtered by id
const getGame = (req, res) => {
  const { id } = req.params;
  //query the db for a single game, if no errors send it to client
  Game.findById(id, (err, game) => {
    if (err) {
      res.send(err);
    }
    res.json(game); // game sent as json
  });
}

// get the body data and create a new game
const postGame = (req, res) => {
  // assign the game info to an empty game and send message back if no errors
  let game = Object.assign(new Game(), req.body);
  // then save it into the db
  game.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'game created' });
  });
};

// delete a game by the given id
const deleteGame = (req, res) => {
  // remove the game by the given id and send a message back if no errors
  Game.remove(
    { _id: req.params.id },
    err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'successfully delete' });
    }
  );
};

// export functions to be used in server routes
export { getGames, getGame, postGame, deleteGame };

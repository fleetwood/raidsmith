const { Player } = require('@raid/model');

function getIdParam(req) {
    const id = req.params.id;
    if (/^\d+$/.test(id)) {
        return Number.parseInt(id, 10);
    }
    throw new TypeError(`Invalid ':id' param: "${id}"`);
}

async function getAll(req, res) {
    const artifacts = 'eager' in req.query ?
        await Player.findAllEager() :
        await Player.findAll();
    res.status(200).json(artifacts);
};

async function getById(req, res) {
    const id = getIdParam(req);
    const artifacts = 'eager' in req.query ?
        await Player.findOneEager({ id }) :
        await Player.findByPk(id);
    if (artifacts) {
        res.status(200).json(artifacts);
    } else {
        res.status(404).send('404 - Not found');
    }
};

async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
    } else {
        await Player.create(req.body);
        res.status(201).end();
    }
};

async function update(req, res) {
    const id = getIdParam(req);

    // We only accept an UPDATE request if the `:id` param matches the body `id`
    if (req.body.id === id) {
        await Player.update(req.body, {
            where: {
                id: id
            }
        });
        res.status(200).end();
    } else {
        res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
    }
};

async function remove(req, res) {
    const id = getIdParam(req);
    await Player.destroy({
        where: {
            id: id
        }
    });
    res.status(200).end();
};

module.exports = {
    getAll
    , getById
    , create
    , update
    , remove
};

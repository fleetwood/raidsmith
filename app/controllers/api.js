const { Artifact, Attribute, Character, Faction, Player, Rarity, Set } = require('@raid/model');

class ApiController {
	constructor(model) {
		this._Model = model;
	};

	get Model() {
		return this._Model;
	}
	set Model(model) {
		this._Model = model;
	}

	getIdParam(req) {
		const id = req.params.id;
		if (/^\d+$/.test(id)) {
			return Number.parseInt(id, 10);
		}
		throw new TypeError(`Invalid ':id' param: "${id}"`);
	}

	async getAll(req, res) {
		const artifacts = 'eager' in req.query ?
			await this.Model.findAllEager() :
			await this.Model.findAll();
		res.status(200).json(artifacts);
	};

	async getById(req, res) {
		const id = getIdParam(req);
		const artifacts = 'eager' in req.query ?
			await this.Model.findOneEager({ id }) :
			await this.Model.findByPk(id);
		if (artifacts) {
			res.status(200).json(artifacts);
		} else {
			res.status(404).send('404 - Not found');
		}
	};

	async create(req, res) {
		if (req.body.id) {
			res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
		} else {
			await this.Model.create(req.body);
			res.status(201).end();
		}
	};

	async update(req, res) {
		const id = getIdParam(req);

		// We only accept an UPDATE request if the `:id` param matches the body `id`
		if (req.body.id === id) {
			await this.Model.update(req.body, {
				where: {
					id: id
				}
			});
			res.status(200).end();
		} else {
			res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
		}
	};

	async remove(req, res) {
		const id = getIdParam(req);
		await this.Model.destroy({
			where: {
				id: id
			}
		});
		res.status(200).end();
	};
}

module.exports = { ApiController };

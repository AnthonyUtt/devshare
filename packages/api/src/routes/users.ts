import { Router } from 'express';
import Sequelize from 'sequelize';
import User from '../models/user';

const router = Router();

const publicAttributes = ['id', 'username', 'fname', 'lname', 'bio', 'image'];

// GET /users
router.get('/', async (_, res) => {
    try {
        const users = await User.findAll({
            attributes: publicAttributes,
        });
        res.send(users);
    } catch {
        res.sendStatus(500);
    }
});

// GET /users/:id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({
            attributes: publicAttributes,
            where: {
                id: req.params.id,
            },
        });
        if (user) res.status(200).send(user);
        else res.sendStatus(404);
    } catch (e) {
        res.status(500).send(e);
    }
});

// POST /users
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newUser = await User.create({
            ...data,
        });
        res.status(201).send(newUser);
    } catch (e) {
        if (e instanceof Sequelize.UniqueConstraintError)
            res.status(409).send(e.errors);
        else if (e instanceof Sequelize.ValidationError)
            res.status(422).send(e.errors);
        else res.status(500).send(e);
    }
});

// PUT /users/:id
router.put('/:id', async (req, res) => {
    try {
        const data = req.body;
        const user = await User.update(
            {
                ...data,
            },
            { where: { id: req.params.id } }
        );
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
});

// DELETE /users/:id
router.delete('/:id', async (req, res) => {
    try {
        const rowsDeleted = await User.destroy({
            where: { id: req.params.id },
        });
        if (rowsDeleted > 0) res.sendStatus(200);
        else res.sendStatus(404);
    } catch (e) {
        res.status(500).send(e);
    }
});

export default router;

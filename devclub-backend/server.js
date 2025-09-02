import express from 'express'
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());


const userRoute = "/usuarios";

app.get(userRoute, async (req, res) => {

    let users = [];

    if (Object.keys(req.query).length > 0) {
        const where = {};
        if (req.query.nome) {
            where.nome = req.query.nome;
        }
        if (req.query.email) {
            where.email = req.query.email;
        }
        if (req.query.idade) {
            const idade = parseInt(req.query.idade);
            if (!isNaN(idade)) {
                where.idade = idade;
            }
        }
        users = await prisma.usuario.findMany({
            where: where
        })
    }
    else {
        users = await prisma.usuario.findMany();
    }

    res.status(200).send(users);
})


app.post(userRoute, async (req, res) => {

    const userData = req.body;
    console.log(req);

    try {
        const newUser = await prisma.usuario.create({
            data: userData,
        });
        res.status(201).send(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});


app.put(userRoute + "/:id", async (req, res) => {

    const result = await prisma.usuario.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })
    res.status(201).send(result);
})


app.delete(userRoute + "/:id", async (req, res) => {

    const result = await prisma.usuario.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(201).send(result);
})


app.listen(3000)

import { insertPassenger } from "../repositories/passengersRepository.js";

export async function postPassengers(req, res) {
    try {
        const { firstName, lastName } = req.body;

        await insertPassenger(firstName, lastName);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send({ message: err.message });
        console.log(err);
    }
};
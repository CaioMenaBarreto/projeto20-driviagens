import httpStatus from "http-status";

export default function errorMiddleware(error, req, res, next){
    console.log(error);

    if (error.type === "Conflict") return res.status(httpStatus.CONFLICT).send(error.message);
    if (error.type === "notFound") return res.status(httpStatus.NOT_FOUND).send(error.message);
    if (error.type === "Conflict") return res.status(httpStatus.CONFLICT).send(error.message);
    if (error.type === "badRequest") return res.status(httpStatus.BAD_REQUEST).send(error.message);

    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
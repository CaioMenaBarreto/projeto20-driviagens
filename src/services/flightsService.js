import { formatarData } from "../../utils/dateFormat.js";
import { getDestinationCities, getOriginCities } from "../repositories/citiesRepository.js";
import { verifyOriginById, verifyDestinationById, insertFlight, getAllflights, getOriginFlights, getDestinationFlights, getWayFlights } from "../repositories/flightsRepository.js";
import dayjs from "dayjs";
import querySchema from "../schemas/querySchema.js";

export async function postFlightService(origin, destination, date) {
    const existingOrigin = await verifyOriginById(origin);
    if (existingOrigin.rows.length === 0) {
        throw { type: "notFound", message: "Está cidade de origem não existe." }
    };

    const existingDestination = await verifyDestinationById(destination);
    if (existingDestination.rows.length === 0) {
        throw { type: "notFound", message: "Está cidade de destino não existe." }
    };

    if (origin === destination) {
        throw { type: "Conflict", message: "Você não pode ter a origem e o destino na mesma cidade." };
    };

    await insertFlight(origin, destination, date);
};

export async function getFligthsService(origin, destination, biggerDate, smallerDate) {
    let flights;

    if (smallerDate || biggerDate && origin && destination) {
        const validation = querySchema.validate({ smallerDate, biggerDate }, { abortEarly: false });
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            throw { type: "badRequest", message: errors };
        }

        const parsedSmallerDate = dayjs(smallerDate.split("-").reverse().join("-"));
        const parsedBiggerDate = dayjs(biggerDate.split("-").reverse().join("-"));

        if (parsedSmallerDate.isAfter(parsedBiggerDate)) {
            throw { type: "badRequest", message: "A smaller-date deve ser anterior à bigger-date" };
        };

        flights = await getAllflights();
        flights.rows.forEach((flight) => {
            flight.date = formatarData(flight.date);
        });

        const selectedFlights = []

        for (let i = 0; i < flights.rows.length; i++) {
            if (parsedSmallerDate <= dayjs(flights.rows[i].date.split("-").reverse().join("-")) && parsedBiggerDate >= dayjs(flights.rows[i].date.split("-").reverse().join("-"))) {
                selectedFlights.push(flights.rows[i]);
            };
        };

        const DESTINATION = await getDestinationCities(destination);
        if (DESTINATION.rowCount === 0) {
            flights = [];
            return flights;
        };

        const ORIGIN = await getOriginCities(origin);
        if (ORIGIN.rowCount === 0) {
            flights = [];
            return flights;
        };

        const selectedFlightsOD = [];

        for (let i = 0; i < selectedFlights.length; i++) {
            if (selectedFlights[i].origin === ORIGIN.rows[0].id && selectedFlights[i].destination === DESTINATION.rows[0].id) {
                selectedFlightsOD.push(selectedFlights[i]);
            };
        };

        return selectedFlightsOD;

    } else if (smallerDate || biggerDate && !origin && destination) {
        const validation = querySchema.validate({ smallerDate, biggerDate }, { abortEarly: false });
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            throw { type: "badRequest", message: errors };
        }

        const parsedSmallerDate = dayjs(smallerDate.split("-").reverse().join("-"));
        const parsedBiggerDate = dayjs(biggerDate.split("-").reverse().join("-"));

        if (parsedSmallerDate.isAfter(parsedBiggerDate)) {
            throw { type: "badRequest", message: "A smaller-date deve ser anterior à bigger-date" };
        };

        flights = await getAllflights();
        flights.rows.forEach((flight) => {
            flight.date = formatarData(flight.date);
        });

        const selectedFlights = []

        for (let i = 0; i < flights.rows.length; i++) {
            if (parsedSmallerDate <= dayjs(flights.rows[i].date.split("-").reverse().join("-")) && parsedBiggerDate >= dayjs(flights.rows[i].date.split("-").reverse().join("-"))) {
                selectedFlights.push(flights.rows[i]);
            };
        };

        const city = await getDestinationCities(destination);
        if (city.rowCount === 0) {
            flights = [];
            return flights;
        };

        const selectedFlightsDestination = [];

        for (let i = 0; i < selectedFlights.length; i++) {
            if (selectedFlights[i].destination === city.rows[0].id) {
                selectedFlightsDestination.push(selectedFlights[i]);
            };
        };

        return selectedFlightsDestination;

    } else if (smallerDate || biggerDate && origin && !destination) {
        const validation = querySchema.validate({ smallerDate, biggerDate }, { abortEarly: false });
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            throw { type: "badRequest", message: errors };
        }

        const parsedSmallerDate = dayjs(smallerDate.split("-").reverse().join("-"));
        const parsedBiggerDate = dayjs(biggerDate.split("-").reverse().join("-"));

        if (parsedSmallerDate.isAfter(parsedBiggerDate)) {
            throw { type: "badRequest", message: "A smaller-date deve ser anterior à bigger-date" };
        };

        flights = await getAllflights();
        flights.rows.forEach((flight) => {
            flight.date = formatarData(flight.date);
        });

        const selectedFlights = []

        for (let i = 0; i < flights.rows.length; i++) {
            if (parsedSmallerDate <= dayjs(flights.rows[i].date.split("-").reverse().join("-")) && parsedBiggerDate >= dayjs(flights.rows[i].date.split("-").reverse().join("-"))) {
                selectedFlights.push(flights.rows[i]);
            };
        };

        const city = await getOriginCities(origin);
        if (city.rowCount === 0) {
            flights = [];
            return flights;
        };

        console.log(city.rows)

        const selectedFlightsOrigin = []

        for (let i = 0; i < selectedFlights.length; i++) {
            if (selectedFlights[i].origin === city.rows[0].id) {
                selectedFlightsOrigin.push(selectedFlights[i]);
            };
        };

        return selectedFlightsOrigin;

    } else if (smallerDate || biggerDate) {
        const validation = querySchema.validate({ smallerDate, biggerDate }, { abortEarly: false });
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            throw { type: "badRequest", message: errors };
        }

        const parsedSmallerDate = dayjs(smallerDate.split("-").reverse().join("-"));
        const parsedBiggerDate = dayjs(biggerDate.split("-").reverse().join("-"));

        if (parsedSmallerDate.isAfter(parsedBiggerDate)) {
            throw { type: "badRequest", message: "A smaller-date deve ser anterior à bigger-date" };
        };

        console.log(parsedSmallerDate, parsedBiggerDate);

        flights = await getAllflights();
        flights.rows.forEach((flight) => {
            flight.date = formatarData(flight.date);
        });

        const selectedFlights = []

        for (let i = 0; i < flights.rows.length; i++) {
            if (parsedSmallerDate <= dayjs(flights.rows[i].date.split("-").reverse().join("-")) && parsedBiggerDate >= dayjs(flights.rows[i].date.split("-").reverse().join("-"))) {
                selectedFlights.push(flights.rows[i]);
            };
        };
        return selectedFlights;

    } else if (origin && destination) {
        const ORIGIN = await getOriginCities(origin);
        const DESTINATION = await getDestinationCities(destination);
        if (ORIGIN.rowCount === 0 || DESTINATION.rowCount === 0) {
            flights = [];
            return flights;
        }

        flights = await getWayFlights(ORIGIN.rows[0].id, DESTINATION.rows[0].id);
        flights.rows.forEach((destinationFlight) => {
            destinationFlight.date = formatarData(destinationFlight.date)
        });

    } else if (!origin && destination) {
        const city = await getDestinationCities(destination);
        if (city.rowCount === 0) {
            flights = [];
            return flights;
        }
        flights = await getDestinationFlights(city.rows[0].id);
        flights.rows.forEach((destinationFlight) => {
            destinationFlight.date = formatarData(destinationFlight.date)
        });

    } else if (!destination && origin) {
        const city = await getOriginCities(origin);
        if (city.rowCount === 0) {
            flights = [];
            return flights;
        }

        flights = await getOriginFlights(city.rows[0].id);
        flights.rows.forEach((originFlight) => {
            originFlight.date = formatarData(originFlight.date);
        });
    } else {
        flights = await getAllflights();
        flights.rows.forEach((flight) => {
            flight.date = formatarData(flight.date);
        });
    }
    const formatedFlights = flights.rows;
    return formatedFlights;
}


export const flightsService = { postFlightService, getFligthsService };
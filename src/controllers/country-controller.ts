import { Response, Request } from "express";
import httpStatus from "http-status";
import countriesRepository from "../repositories/countries-repository";

export async function getCountries(req: Request, res: Response) {
  try {
    const countries = await countriesRepository.findCountries();
    return res.status(httpStatus.OK).send(countries);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

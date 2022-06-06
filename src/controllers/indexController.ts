import { Request, Response } from "express";

function indexGet(request: Request, response: Response) {
  response.status(200).send("Hello World!");
}

export { indexGet };

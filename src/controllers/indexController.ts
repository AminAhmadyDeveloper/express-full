import { Request, Response } from "express";

function indexGet(request: Request, response: Response) {
  response.status(200).render("index", {
    title: "Index",
    message: "Test Express App With PUG Engine",
  });
}

export { indexGet };

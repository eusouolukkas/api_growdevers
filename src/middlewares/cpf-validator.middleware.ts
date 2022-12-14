import { Request, Response, NextFunction } from "express";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

export const cpfValidatorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cpf } = req.body;
  if (!cpf) {
    return res.status(400).send({
      ok: false,
      message: "CPF not provided ( middleware",
    });
  }

  //verificar se o CPF é válido
  let cpfFormatted = cpf.toString().padStart(11, "0");

  console.log(cpfValidator.format(cpfFormatted));

  if (cpfValidator.isValid(cpfFormatted)) {
    return next();
  }
  return res.status(400).send({
    ok: false,
    message: "CPF is invalid",
  });
};

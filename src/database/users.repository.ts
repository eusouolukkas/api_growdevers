import fs from "fs";
import path from "path";
import { Growdever } from "../models/growdever";
import { GrowdeverDatabase } from "../models/user.database";

export class GrowdeverRepository {
  private caminho: string =
    path.dirname(__filename) + "/../data/growdevers.json";

  public create(user: Growdever) {
    //add usuario no user.json
    const lista = this.list();
    lista.push({
      _nome: user.nome,
      _cpf: user.cpf,
      _idade: user.idade,
      _skills: user.skills,
    });

    const data = JSON.stringify(lista);
    fs.writeFileSync(this.caminho, data);
  }

  public list(): GrowdeverDatabase[] {
    //lista os usuarios de users.json
    const data = fs.readFileSync(this.caminho);
    return JSON.parse(data.toString());
  }
}

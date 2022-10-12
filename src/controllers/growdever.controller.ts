import { growdeversList } from "../data/growdeversList";
import { GrowdeverRepository } from "../database/users.repository";
import { Growdever } from "../models/growdever";

export class GrowdeverController {
  public list(nome?: string, idade?: number) {
    let lista = growdeversList;

    if (nome) {
      lista = growdeversList.filter((item) => item.nome === nome);
    }

    if (idade) {
      lista = lista.filter((item) => item.idade == idade);
    }

    let listaRetorno = lista.map((growdever) => {
      return growdever.getGrowdever();
    });

    return listaRetorno;
  }

  public update(id: string, nome: string, idade: number) {
    const growdever = growdeversList.find((item) => item.id === id);

    if (!growdever) {
      return undefined;
    }

    growdever.nome = nome;
    growdever.idade = idade;

    return growdeversList;
  }

  public createSkill(skills: string, id: string) {
    const growdever = growdeversList.find((growdever) => growdever.id === id);

    // to-do
  }

  public removeSkill() {
    // to-do
  }

  public create(nome: string, cpf: number, idade: number, skills?: string[]) {
    const growdever = new Growdever(nome, cpf, idade, skills);
    growdeversList.push(growdever);
  }

  public getByCpf(cpf: number) {
    const repository = new GrowdeverRepository();

    return repository.list().find((item) => item._cpf === cpf);
  }
}

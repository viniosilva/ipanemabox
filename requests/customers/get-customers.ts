// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Customer from "../../models/customer";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customer[]>
) {
  res.status(200).json(getCustomers());
}

export function getCustomers(): Customer[] {
  return [
    {
      id: 3,
      name: "Fulano Ciclano Beltrano",
      phone: "11983700010",
      address:
        "R. Sd. Teodoro Francisco Ribeiro, 6090\nTorre 7 Apto. 111. Pq. Novo Mundo\nSão Paulo - SP",
    },
    {
      id: 2,
      name: "Fulano Ciclano Beltrano",
      phone: "11983700011",
      address:
        "R. Sd. Teodoro Francisco Ribeiro, 6090\nTorre 7 Apto. 222. Pq. Novo Mundo\nSão Paulo - SP",
    },
    {
      id: 1,
      name: "Fulano Ciclano Beltrano",
      phone: "11983700012",
      address:
        "R. Sd. Teodoro Francisco Ribeiro, 6090\nTorre 7 Apto. 333. Pq. Novo Mundo\nSão Paulo - SP",
    },
  ];
}

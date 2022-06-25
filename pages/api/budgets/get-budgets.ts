// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Budget from "../../../models/budget";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Budget[]>
) {
  res.status(200).json(getBudgets());
}

export function getBudgets(): Budget[] {
  return [
    {
      id: 2,
      schedule: "15:00",
      date: "02/05/2022",
      customer: {
        id: 3,
        name: "Fulano Ciclano Beltrano",
        phone: "11983700010",
        address:
          "R. Sd. Teodoro Francisco Ribeiro, 6090\nTorre 7 Apto. 111. Pq. Novo Mundo\nSão Paulo - SP",
      },
    },
    {
      id: 1,
      schedule: "09:30",
      date: "01/05/2022",
      customer: {
        id: 1,
        name: "Fulano Ciclano Beltrano",
        phone: "11983700012",
        address:
          "R. Sd. Teodoro Francisco Ribeiro, 6090\nTorre 7 Apto. 333. Pq. Novo Mundo\nSão Paulo - SP",
      },
    },
  ];
}

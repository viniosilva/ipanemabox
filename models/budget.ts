import Customer from "./customer";

export default interface Budget {
  id: number;
  schedule: string;
  date: string;
  customer: Customer;
}

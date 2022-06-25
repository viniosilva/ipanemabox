import styles from "./clientes.module.scss";
import { BaseSyntheticEvent, useState } from "react";
import { getCustomers } from "./api/customers/get-customers";
import Layout from "../components/layout";
import Header from "../components/header";
import Table from "../components/table";

function trOnClick(e: BaseSyntheticEvent) {
  const target: HTMLElement = e.currentTarget;
  if (target.classList.contains(styles.selected)) return;

  const selected = target.parentElement?.querySelector(
    `div.${styles.container} tbody tr.${styles.selected}`
  );
  selected?.classList.remove(styles.selected);
  target.classList.add(styles.selected);
}

export default () => {
  const [customers] = useState(getCustomers());

  return (
    <Layout page="customers">
      <Header title="Clientes"></Header>
      <div className={styles.container}>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(({ name, phone, address }, i) => (
              <tr
                className={i === 0 ? styles.selected : ""}
                onClick={trOnClick}
              >
                <td>{name}</td>
                <td>{phone}</td>
                <td className={styles.nowrap}>
                  {address?.split("\n").map((l) => (
                    <p>{l}</p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

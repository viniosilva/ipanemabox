import Layout from "../components/layout";
import Header from "../components/header";
import styles from "./orcamentos.module.scss";
import Card from "../components/card";
import { BaseSyntheticEvent, useState } from "react";
import { getBudgets } from "./api/budgets/get-budgets";
import Budget from "../models/budget";
import { mdiMagnify, mdiPencil, mdiPlusCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";

function cardOnClick(e: BaseSyntheticEvent) {
  const target: HTMLElement = e.currentTarget;
  if (target.classList.contains(styles.selected)) return;

  const selected = target.parentElement?.querySelector(
    `div.${styles.container} .${styles.card}.${styles.selected}`
  );
  selected?.classList.remove(styles.selected);
  target.classList.add(styles.selected);
}

export default () => {
  const [budgets] = useState(getBudgets());
  const [budget, setBudget] = useState(budgets[0]);
  const [formData, setFormData] = useState({} as Budget);

  return (
    <Layout page="budgets">
      <Header title="Orçamentos">
        <button className={styles.btn} onClick={() => alert(1)}>
          <Icon path={mdiMagnify} title="Buscar orçamento" />
        </button>
        <button
          className={styles.btn}
          // onClick={(e) => showForm(e, setFormData, budget)}
        >
          <Icon path={mdiPencil} title="Editar orçamento" />
        </button>
        <button
          className={styles.btn}
          // onClick={(e) => showForm(e, setFormData)}
        >
          <Icon path={mdiPlusCircleOutline} title="Adicionar orçamento" />
        </button>
        <button
          className={`${styles.btn} ${styles.closeForm} ${styles.hidden}`}
          // onClick={(e) => showForm(e, setFormData)}
        >
          <Icon path={mdiPlusCircleOutline} title="Fechar formulário" />
        </button>
      </Header>
      <div className={styles.container}>
        {budgets.map((b, i) => {
          const cls = i > 0 ? styles.card : `${styles.card} ${styles.selected}`;
          return (
            <Card
              key={`card_${b.id}`}
              id={`card_${b.id}`}
              className={cls}
              onClick={cardOnClick}
            >
              <span className={styles.schedule}>{b.schedule}</span>
              <span className={styles.date}>{b.date}</span>
              <span className={styles.name}>{b.customer.name}</span>
              <span className={styles.phone}>{b.customer.phone}</span>
              <div className={styles.address}>
                {b.customer?.address?.split("\n").map((line: string) => (
                  <p>{line}</p>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
};

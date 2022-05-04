import styles from "./clientes.module.scss";
import Icon from "@mdi/react";
import { mdiMagnify, mdiPencil, mdiPlusCircleOutline } from "@mdi/js";
import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from "react";
import { getCustomers } from "./api/customers/get-customers";
import Layout from "../components/layout";
import Header from "../components/header";
import Card from "../components/card";
import Form from "../components/form";
import Customer from "../models/customer";

export default () => {
  const [customers] = useState(getCustomers());
  const [customer, setCustomer] = useState(customers[0]);
  const [formData, setFormData] = useState({} as Customer);

  return (
    <Layout page="customers">
      <Header title="Clientes">
        <button className={styles.btn} onClick={() => alert(1)}>
          <Icon path={mdiMagnify} title="Buscar cliente" />
        </button>
        <button
          className={styles.btn}
          onClick={(e) => showForm(e, setFormData, customer)}
        >
          <Icon path={mdiPencil} title="Editar cliente" />
        </button>
        <button
          className={styles.btn}
          onClick={(e) => showForm(e, setFormData)}
        >
          <Icon path={mdiPlusCircleOutline} title="Adicionar cliente" />
        </button>
        <button
          className={`${styles.btn} ${styles.closeForm} ${styles.hidden}`}
          onClick={(e) => showForm(e, setFormData)}
        >
          <Icon path={mdiPlusCircleOutline} title="Fechar formulário" />
        </button>
      </Header>
      <div className={styles.container}>
        {customers.map((c, i) => {
          const cls = i > 0 ? styles.card : `${styles.card} ${styles.selected}`;
          return (
            <Card
              key={`card_${c.id}`}
              id={`card_${c.id}`}
              className={cls}
              onClick={(e) => selectCard(e, customers, setCustomer)}
            >
              <span>{c.name}</span>
              <span>{c.phone}</span>
              <div>
                {c.address?.split("\n").map((line: string) => (
                  <p>{line}</p>
                ))}
              </div>
            </Card>
          );
        })}

        <Form
          id={`form_${formData.id || ""}`}
          className={styles.hidden}
          onSubmit={(e) =>
            saveCustomer(e, formData, customers, setCustomer, setFormData)
          }
        >
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={(e) =>
                setFormData({ ...formData, name: e.currentTarget.value })
              }
            />
          </label>
          <label htmlFor="phone">
            Telefone
            <input
              type="text"
              name="phone"
              value={formData.phone || ""}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.currentTarget.value })
              }
            />
          </label>
          <label htmlFor="address">
            Endereço
            <textarea
              name="address"
              rows={3}
              value={formData.address || ""}
              onChange={(e) =>
                setFormData({ ...formData, address: e.currentTarget.value })
              }
            ></textarea>
          </label>
          <label htmlFor="note">
            Observação<textarea name="note" rows={3}></textarea>
          </label>
          <button type="submit" className={styles.submit}>
            Registrar
          </button>
          <button
            type="button"
            className={
              formData.id ? styles.submit : `${styles.submit} ${styles.hidden}`
            }
            onClick={(e) => removeCustomer(e, customer, customers, setFormData)}
          >
            Remover
          </button>
        </Form>
      </div>
    </Layout>
  );
};

function showForm(
  e: BaseSyntheticEvent,
  setFormData: Dispatch<SetStateAction<Customer>>,
  customer?: Customer
) {
  e.preventDefault();

  if (customer) {
    setFormData({ ...customer });
  } else {
    setFormData({} as Customer);
  }

  document
    .querySelectorAll(
      `div.${styles.container} .${styles.card},
      header button.${styles.btn},
      div.${styles.container} form`
    )
    .forEach((e) => {
      if (!e.classList.contains(styles.hidden)) {
        e.classList.add(styles.hidden);
      } else {
        e.classList.remove(styles.hidden);
      }
    });

  (e.currentTarget as Element).classList.add(styles.hidden);
}

function selectCard(
  e: BaseSyntheticEvent,
  customers: Customer[],
  setCustomer: Dispatch<SetStateAction<Customer>>
) {
  e.preventDefault();

  const target: Element = e.currentTarget;
  target.parentElement
    ?.querySelector(`.${styles.selected}`)
    ?.classList.remove(styles.selected);

  target.classList.add(styles.selected);

  const id = target.id.replace("card_", "");
  setCustomer(customers.find((c) => c.id === Number(id)) as Customer);
}

function saveCustomer(
  e: BaseSyntheticEvent,
  formData: Customer,
  customers: Customer[],
  setCustomer: Dispatch<SetStateAction<Customer>>,
  setFormData: Dispatch<SetStateAction<Customer>>
) {
  e.preventDefault();

  if (!formData.id) {
    const customer = { ...formData, id: customers.length + 1 };

    if (customers.length > 3) customers.pop();
    customers.unshift(customer);
    setCustomer(customer);
  } else {
    const customer = customers.find(({ id }) => id === formData.id);
    if (!customer) return;

    customer.name = formData.name;
    customer.phone = formData.phone;
    customer.address = formData.address;
    setCustomer(customer);
  }

  showForm(e, setFormData);
}

function removeCustomer(
  e: BaseSyntheticEvent,
  customer: Customer,
  customers: Customer[],
  setFormData: Dispatch<SetStateAction<Customer>>
) {
  e.preventDefault();

  const index = customers.findIndex(({ id }) => id === customer.id);
  customers.splice(index, 1);
  showForm(e, setFormData);
}

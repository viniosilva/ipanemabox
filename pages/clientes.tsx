import styles from "./clientes.module.scss";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { getCustomers } from "../requests/customers/get-customers";
import Layout from "../components/layout";
import Header from "../components/header";
import Table from "../components/table";
import Icon from "@mdi/react";
import { mdiPencil, mdiPlusCircleOutline } from "@mdi/js";
import Modal from "../components/modal";
import { EventManager } from "../utils/event-manager";
import Customer from "../models/customer";
import Form from "../components/form";

export default () => {
  const PHONE_MASK = "(##) #####-####";

  const modalEvent = new EventManager();
  const [customers, setCustomers] = useState(getCustomers());
  const [modalOpen, setModalOpen] = useState(false);
  const [customer, setCustomer] = useState({} as Customer);

  const onAddCustomer = () => setModalOpen(!modalOpen);

  function formOnSubmit(e: BaseSyntheticEvent): void {
    e.preventDefault();

    customer.phone = customer.phone.replace(/((?![0-9]).)/g, "");
    if (!customer.id) {
      if (customers.length >= 5) {
        customers.pop();
      }
      customer.id = customers.sort((a, b) => b.id - a.id)[0].id + 1;
      customers.unshift(customer);
    } else {
      const c = customers.find(({ id }) => id === Number(customer.id));
      if (!c) return;
      c.name = customer.name;
      c.phone = customer.phone;
      c.address = customer.address;
    }

    setCustomers(customers);
    setCustomer({} as Customer);

    modalEvent.notify();
  }

  function addMask(value: string, mask: string): string {
    const regexp = /((?![0-9]).)/g;
    let res = "";
    const digits = value.replace(regexp, "");
    for (const d of digits) {
      for (const m of mask) {
        mask = mask.replace(m, "");
        if (m == "#") {
          res += d;
          break;
        }
        res += m;
      }
    }

    return res;
  }

  function trOnClick(e: BaseSyntheticEvent) {
    const target: HTMLElement = e.currentTarget;
    if (target.classList.contains(styles.selected)) return;

    const selected = target.parentElement?.querySelector(
      `div.${styles.container} tbody tr.${styles.selected}`
    );
    selected?.classList.remove(styles.selected);
    target.classList.add(styles.selected);
  }

  useEffect(() => {
    modalEvent.subscribe(onAddCustomer);

    return () => {
      modalEvent.unsubscribe(onAddCustomer);
    };
  });

  function addOnClick(e: BaseSyntheticEvent) {
    e.preventDefault();

    setCustomer({ id: 0, address: "", name: "", phone: "" } as Customer);
    modalEvent.notify();
  }

  function editOnClick(e: BaseSyntheticEvent) {
    e.preventDefault();

    const customerId = document
      .querySelector(`div.${styles.container} tbody tr.${styles.selected}`)
      ?.getAttribute("customer-id");

    const customer = customers.find(({ id }) => id === Number(customerId));
    if (!customer) return;

    customer.phone = addMask(customer.phone, PHONE_MASK);
    setCustomer(customer);
    modalEvent.notify();
  }

  return (
    <>
      <Modal open={modalOpen} modalEvent={modalEvent}>
        <Form onSubmit={formOnSubmit}>
          <label>
            Nome:
            <input
              required={true}
              type="text"
              name="name"
              value={customer.name}
              onChange={({ target }) =>
                setCustomer({ ...customer, name: target.value })
              }
            />
          </label>
          <label>
            Telefone:
            <input
              required={true}
              type="text"
              name="phone"
              value={customer.phone}
              onChange={({ target }) => {
                const phone = addMask(target.value, PHONE_MASK);
                setCustomer({ ...customer, phone: phone });
              }}
            />
          </label>
          <label>
            Endereço:
            <textarea
              required={true}
              value={customer.address}
              name="address"
              onChange={({ target }) =>
                setCustomer({ ...customer, address: target.value })
              }
            />
          </label>
          <input type="submit" value="Gravar" />
        </Form>
      </Modal>
      <Layout page="customers" customerModalEvent={modalEvent}>
        <Header title="Clientes">
          <button onClick={editOnClick}>
            <Icon path={mdiPencil} title="Editar cliente" />
          </button>
          <button onClick={addOnClick}>
            <Icon path={mdiPlusCircleOutline} title="Adicionar cliente" />
          </button>
        </Header>

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
              {customers.map(({ id, name, phone, address }, i) => (
                <tr
                  className={i === 0 ? styles.selected : ""}
                  onClick={trOnClick}
                  customer-id={id}
                >
                  <td>{name}</td>
                  <td>{addMask(phone, PHONE_MASK)}</td>
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
    </>
  );
};

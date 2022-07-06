import styles from "./clientes.module.scss";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { getCustomers } from "./api/customers/get-customers";
import Layout from "../components/layout";
import Header from "../components/header";
import Table from "../components/table";
import Icon from "@mdi/react";
import { mdiPencil, mdiPlusCircleOutline } from "@mdi/js";
import Modal from "../components/modal";
import { EventManager } from "../utils/event-manager";

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
  const modalEvent = new EventManager();
  const [customers] = useState(getCustomers());
  const [modalOpen, setModalOpen] = useState(false);

  const onAddCustomer = () => setModalOpen(!modalOpen);

  useEffect(() => {
    modalEvent.subscribe(onAddCustomer);

    return () => {
      modalEvent.unsubscribe(onAddCustomer);
    };
  });

  return (
    <>
      <Modal open={modalOpen} modalEvent={modalEvent}>
        <p>I am a modal</p>
      </Modal>
      <Layout page="customers" customerModalEvent={modalEvent}>
        <Header title="Clientes">
          <button>
            <Icon path={mdiPencil} title="Editar cliente" />
          </button>
          <button onClick={() => modalEvent.notify()}>
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
    </>
  );
};

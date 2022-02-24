import Layout from "../components/layout";
import Header from "../components/header";
import Card from "../components/card";
import styles from "./clientes.module.scss";
import Icon from "@mdi/react";
import { mdiMagnify, mdiPencil, mdiPlusCircleOutline } from "@mdi/js";

export default () => {
  return (
    <Layout page="customers">
      <Header title="Clientes">
        <button className={styles.btn} onClick={() => alert(1)}>
          <Icon path={mdiMagnify} title="Buscar cliente" />
        </button>
        <button className={styles.btn} onClick={() => alert(1)}>
          <Icon path={mdiPencil} title="Editar cliente" />
        </button>
        <button className={styles.btn} onClick={() => alert(1)}>
          <Icon path={mdiPlusCircleOutline} title="Adicionar cliente" />
        </button>
      </Header>
      <div className={styles.container}>
        <Card className={styles.card}>
          <span className={styles.name}>Fulano Ciclano Beltrano</span>
          <span className={styles.phone}>(11) 98370-0012</span>
          <div className={styles.address}>
            <p>R. Sd. Teodoro Francisco Ribeiro, 6090</p>
            <p>Torre 7 Apto. 143. Pq. Novo Mundo</p>
            <p>São Paulo - SP</p>
          </div>
        </Card>
        <Card className={styles.card}>
          <span className={styles.name}>Fulano Ciclano Beltrano</span>
          <span className={styles.phone}>(11) 98370-0012</span>
          <div className={styles.address}>
            <p>R. Sd. Teodoro Francisco Ribeiro, 6090</p>
            <p>Torre 7 Apto. 143. Pq. Novo Mundo</p>
            <p>São Paulo - SP</p>
          </div>
        </Card>
        <Card className={styles.card}>
          <span className={styles.name}>Fulano Ciclano Beltrano</span>
          <span className={styles.phone}>(11) 98370-0012</span>
          <div className={styles.address}>
            <p>R. Sd. Teodoro Francisco Ribeiro, 6090</p>
            <p>Torre 7 Apto. 143. Pq. Novo Mundo</p>
            <p>São Paulo - SP</p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

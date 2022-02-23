import Layout from "../components/layout";
import Header from "../components/header";
import styles from "./orcamentos.module.scss";
import Card from "../components/card";

export default () => {
  return (
    <Layout page="budgets">
      <Header title="Orçamentos"></Header>
      <div className={styles.container}>
        <Card className={styles.card}>
          <span className={styles.schedule}>10:35</span>
          <span className={styles.date}>30/01/2022</span>
          <span className={styles.name}>Fulano Ciclano Beltrano</span>
          <span className={styles.phone}>(11) 98370-0012</span>
          <div className={styles.address}>
            <p>R. Sd. Teodoro Francisco Ribeiro, 6090</p>
            <p>Torre 7 Apto. 143. Pq. Novo Mundo</p>
            <p>São Paulo - SP</p>
          </div>
        </Card>
        <Card className={styles.card}>
          <span className={styles.schedule}>16:30</span>
          <span className={styles.date}>31/01/2022</span>
          <span className={styles.name}>Fulano Ciclano Beltrano</span>
          <span className={styles.phone}>(11) 98370-0012</span>
          <div className={styles.address}>
            <p>R. Sd. Teodoro Francisco Ribeiro, 6090</p>
            <p>Torre 7 Apto. 143. Pq. Novo Mundo</p>
            <p>São Paulo - SP</p>
          </div>
        </Card>
        <Card className={styles.card}>
          <span className={styles.schedule}>09:00</span>
          <span className={styles.date}>01/02/2022</span>
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

import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import styles from "./header.module.scss";
import { MenuPublisher } from ".";

interface Props {
  menuPublisher: MenuPublisher;
}

export default ({ menuPublisher }: Props) => {
  return (
    <header className={styles.header}>
      <button className={styles.menu} onClick={() => menuPublisher.notify()}>
        <Icon path={mdiMenu} title="Menu" />
      </button>
      <h1>Ipanema Box</h1>
    </header>
  );
};

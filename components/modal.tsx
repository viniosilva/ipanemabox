import { mdiPlusCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { EventManager } from "../utils/event-manager";
import styles from "./modal.module.scss";

interface Props {
  open: boolean;
  modalEvent: EventManager;
  children: React.ReactNode;
}

export default ({ open, modalEvent, children }: Props) => {
  let cls = styles.container;
  if (!open) {
    cls += " " + styles.hidden;
  }

  return (
    <div className={styles.background}>
      <div className={cls}>
        <button onClick={() => modalEvent.notify()}>
          <Icon path={mdiPlusCircleOutline} title="Fechar modal" />
        </button>
        <div className={styles.contants}>{children}</div>
      </div>
    </div>
  );
};

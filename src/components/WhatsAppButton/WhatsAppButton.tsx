import { WhatsAppIcon } from "@/components/icons";
import { WHATSAPP_LINK } from "@/lib/constants";
import styles from "./WhatsAppButton.module.scss";

export function WhatsAppButton(): React.JSX.Element {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Falar com a Forge Software no WhatsApp"
    >
      <WhatsAppIcon className={styles.icon} />
    </a>
  );
}

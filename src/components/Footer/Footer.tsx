import { InstagramIcon, LinkedInIcon } from "@/components/icons";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import Image from "next/image";
import FlameIcon from "../../../public/logoApenasIconeSemFundo.png";
import styles from "./Footer.module.scss";

export function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image
            src={FlameIcon}
            className={styles.flameIcon}
            alt="Forge Logo"
          />
          <span className={styles.brandName}>FORGE SOFTWARE</span>
        </div>

        <div className={styles.contactInfo}>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.contactLink}>
            📩 {CONTACT_EMAIL}
          </a>
          <a href={`tel:+${WHATSAPP_NUMBER}`} className={styles.contactLink}>
            📱 {CONTACT_PHONE_DISPLAY}
          </a>
        </div>

        <div className={styles.social}>
          <a
            href={INSTAGRAM_URL}
            aria-label="Instagram da Forge Software"
            target="_blank"
            className={styles.socialLink}
          >
            <InstagramIcon />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            aria-label="LinkedIn da Forge Software"
            className={styles.socialLink}
          >
            <LinkedInIcon />
          </a>
        </div>

        <p className={styles.rights}>
          © {year} Forge Software. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

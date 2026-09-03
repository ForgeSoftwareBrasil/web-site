import { FlameIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/constants";
import styles from "./Footer.module.scss";

export function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <FlameIcon className={styles.flameIcon} />
          <span className={styles.brandName}>FORGE SOFTWARE</span>
        </div>

        <div className={styles.contactInfo}>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.contactLink}>
            📩 {CONTACT_EMAIL}
          </a>
          <span className={styles.contactLink}>📱 {CONTACT_PHONE_DISPLAY}</span>
        </div>

        <div className={styles.social}>
          <a
            href={INSTAGRAM_URL}
            aria-label="Instagram da Forge Software"
            className={styles.socialLink}
          >
            <InstagramIcon />
          </a>
          <a
            href={LINKEDIN_URL}
            aria-label="LinkedIn da Forge Software"
            className={styles.socialLink}
          >
            <LinkedInIcon />
          </a>
        </div>

        <p className={styles.rights}>© {year} Forge Software. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";
import FlameIcon from "../../../public/logoApenasIconeSemFundo.png";
import styles from "./Hero.module.scss";

export function Hero(): React.JSX.Element {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={`${styles.flameBadge} ${styles.animateIn}`}>
          <Image src={FlameIcon} className={styles.flameIcon} alt="Forge Logo"/>
        </div>
        <h1 className={`${styles.title} ${styles.animateIn}`}>
          Forjando o futuro do seu negócio com tecnologia
        </h1>
        <p className={`${styles.subtitle} ${styles.animateIn}`}>
          Desenvolvimento de software sob medida, consultoria em TI e transformação digital para
          empresas que buscam impacto real.
        </p>
        <a
          className={`${styles.cta} ${styles.animateIn}`}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com a gente
        </a>
      </div>
    </section>
  );
}

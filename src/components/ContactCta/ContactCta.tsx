import { Reveal } from "@/components/Reveal/Reveal";
import { WHATSAPP_LINK } from "@/lib/constants";
import styles from "./ContactCta.module.scss";

export function ContactCta(): React.JSX.Element {
  return (
    <section className={styles.contact} id="contato">
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.title}>Pronto para forjar o futuro do seu negócio?</h2>
        </Reveal>
        <Reveal delayMs={100}>
          <p className={styles.subtitle}>
            Entre em contato e descubra como podemos transformar sua visão em realidade.
          </p>
        </Reveal>
        <Reveal delayMs={200}>
          <a className={styles.cta} href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Fale com a gente
          </a>
        </Reveal>
      </div>
    </section>
  );
}

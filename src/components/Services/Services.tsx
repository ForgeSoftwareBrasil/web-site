import { Reveal } from "@/components/Reveal/Reveal";
import { services } from "@/data/services";
import styles from "./Services.module.scss";

export function Services(): React.JSX.Element {
  return (
    <section className={styles.services} id="servicos">
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.title}>Nossos Serviços</h2>
        </Reveal>
        <ul className={styles.grid}>
          {services.map((service, index) => (
            <Reveal as="li" key={service.id} className={styles.card} delayMs={index * 120}>
              <div className={styles.iconWrap}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

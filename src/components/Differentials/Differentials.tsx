import { Reveal } from "@/components/Reveal/Reveal";
import { differentials } from "@/data/differentials";
import styles from "./Differentials.module.scss";

export function Differentials(): React.JSX.Element {
  return (
    <section className={styles.differentials} id="diferenciais">
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.title}>Nossos Diferenciais</h2>
        </Reveal>
        <ul className={styles.grid}>
          {differentials.map((item, index) => (
            <Reveal as="li" key={item.id} className={styles.item} delayMs={index * 100}>
              <span className={styles.emoji} aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

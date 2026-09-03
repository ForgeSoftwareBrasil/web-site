import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import { testimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.scss";

export function Testimonials(): React.JSX.Element {
  return (
    <section className={styles.testimonials} id="depoimentos">
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.title}>O que nossos clientes dizem</h2>
        </Reveal>
        <ul className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.id} className={styles.card} delayMs={index * 120}>
              <p className={styles.content}>&ldquo;{testimonial.content}&rdquo;</p>
              <div className={styles.person}>
                {/* SUBSTITUIR POR IMAGEM REAL */}
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className={styles.avatar}
                  unoptimized
                />
                <div>
                  <p className={styles.name}>{testimonial.name}</p>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

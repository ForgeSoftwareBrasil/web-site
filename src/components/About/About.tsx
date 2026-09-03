import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./About.module.scss";

export function About(): React.JSX.Element {
  return (
    <section className={styles.about} id="sobre">
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.title}>Quem somos</h2>
        </Reveal>
        <Reveal delayMs={120}>
          <p className={styles.text}>
            A Forge Software é uma software house e consultoria em tecnologia especializada no
            desenvolvimento de soluções digitais sob medida para empresas de todos os portes.
            Atuamos como parceiros estratégicos de negócio, transformando desafios em
            oportunidades por meio de engenharia de software de alta qualidade, arquitetura de
            sistemas escaláveis e inovação contínua. Combinamos metodologias ágeis, design
            centrado no usuário e as melhores práticas de mercado para entregar produtos digitais
            que geram impacto real. Seja para construir uma nova plataforma do zero, modernizar
            sistemas legados ou acelerar a transformação digital do seu negócio, a Forge Software
            está pronta para forjar o futuro da sua empresa com tecnologia, criatividade e
            excelência.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

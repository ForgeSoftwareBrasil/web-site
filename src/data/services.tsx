import { CloudUpIcon, CodeIcon, GearBrainIcon } from "@/components/icons";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "desenvolvimento-de-software",
    title: "Desenvolvimento de Software",
    description:
      "Criamos sistemas sob medida que resolvem problemas reais do seu negócio. Da concepção à entrega, desenvolvemos plataformas escaláveis, seguras e de alto desempenho.",
    icon: <CodeIcon />,
  },
  {
    id: "consultoria-em-ti",
    title: "Consultoria em TI",
    description:
      "Ajudamos sua empresa a tomar as melhores decisões tecnológicas. Análise de arquitetura, escolha de ferramentas, estratégia de inovação e governança de TI.",
    icon: <GearBrainIcon />,
  },
  {
    id: "transformacao-digital",
    title: "Transformação Digital",
    description:
      "Modernizamos sistemas legados, automatizamos processos e criamos estratégias para que sua empresa se posicione na vanguarda da tecnologia.",
    icon: <CloudUpIcon />,
  },
];

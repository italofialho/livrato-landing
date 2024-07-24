import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";
import * as S from "./styles";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import ArrowRight from "./icons/arrow.svg";

const cards = [
  {
    title: "Gestão de orçamento",
    icon: "gestao.svg",
    description:
      "Ajudamos você a organizar suas finanças diárias, controlando gastos, otimizando seu orçamento e garantindo que suas despesas estejam alinhadas com seus objetivos financeiros.",
  },
  {
    title: "Planejamento financeiro",
    icon: "financeiro.svg",
    description:
      "Ajudamos você a definir, planejar e alcançar seus objetivos de vida de forma eficiente e segura, seja a sua reserva de emergência, uma viagem ou os estudos dos seus filhos.",
  },
  {
    title: "Alocação patrimonial",
    icon: "alocacao.svg",
    description:
      "Desenvolvemos uma estratégia personalizada para alocar seu patrimônio de forma eficiente, diversificando seus investimentos para maximizar retornos e minimizar riscos. ",
  },
  {
    title: "Mapa de oportunidades",
    icon: "mapa.svg",
    description:
      "Com nosso mapa de oportunidades, você poderá explorar novos mercados e ativos, equilibrando seu portfólio e aumentando suas chances de sucesso financeiro.",
  },
  {
    title: "Alavancagem financeira",
    icon: "alavancagem.svg",
    description:
      "Orientamos sobre como utilizar recursos de terceiros de maneira inteligente e segura para aumentar seu potencial de ganhos, sempre considerando os riscos envolvidos.",
  },
  {
    title: "Planejamento sucessório",
    icon: "sucessorio.svg",
    description:
      "Oferecemos um planejamento sucessório completo, que inclui a estruturação de heranças, doações e criação de holding, com foco na proteção do seu legado.",
  },
];

export default function HomePageSolutionsSection() {
  return (
    <Container>
      <Spacer mb={80} />
      <Row justifyContent="center">
        <Col size={{ lg: 4, sm: 12 }}>
          <Text
            color="deepJungleGreen"
            size={48}
            weight={700}
            lineHeight="100%"
            align="center"
          >
            Nossas soluções
          </Text>
        </Col>
      </Row>
      <Row justifyContent="center">
        <Col size={{ lg: 5, sm: 12 }}>
          <Spacer mb={16} />
          <Text
            color="graniteGray"
            size={16}
            weight={400}
            lineHeight="130%"
            align="center"
          >
            Gestão de investimentos ponta a ponta: do orçamento familiar até o
            plano de perpetuação do patrimônio financeira.
          </Text>
        </Col>
      </Row>
      <Spacer mb={48} />

      <S.Cards>
        <Row gapRow={0} gapColumn={0}>
          {cards.map((card, index) => (
            <Col key={card.icon} size={{ lg: 4, sm: 12 }}>
              <S.Card id={`solution-card-${index + 1}`}>
                <Image
                  alt={card.title}
                  src={require(`./icons/${card.icon}`)}
                  width={56}
                  height={56}
                />
                <Spacer mb={32} />

                <Text
                  color="deepJungleGreen"
                  size={32}
                  weight={600}
                  lineHeight="100%"
                >
                  {card.title}
                </Text>
                <Spacer mb={8} />
                <Text
                  color="graniteGray"
                  size={16}
                  weight={400}
                  lineHeight="130%"
                >
                  {card.description}
                </Text>

                <Spacer mb={32} />

                <Button color="transparent">
                  <Text
                    color="chamoisee"
                    size={16}
                    weight={400}
                    lineHeight="130%"
                  >
                    Quero contratar
                  </Text>
                  <Spacer mr={16} />
                  <Image
                    alt="Flecha apontando para a direita"
                    src={ArrowRight}
                    width={27}
                    height={15}
                  />
                </Button>
              </S.Card>
            </Col>
          ))}
        </Row>
      </S.Cards>

      <Spacer mb={80} />
    </Container>
  );
}

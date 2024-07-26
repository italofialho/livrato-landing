import { Button } from "@/components/ui/button";
import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";

import * as S from "./styles";

const journeys: Array<{ number: string; title: string; content: string }> = [
  {
    number: "01",
    title: "Conversa inicial e diagnóstico do cenário",
    content:
      "Tudo começa com uma conversa inicial, onde entendemos suas necessidades, objetivos e situação financeira atual. Realizamos um diagnóstico completo para identificar suas prioridades e desafios.",
  },
  {
    number: "02",
    title: "Construção do Plano de Investimento",
    content:
      "Com base no diagnóstico, elaboramos um plano de investimento sob medida para você. Definimos estratégias de alocação de ativos, diversificação e alavancagem, sempre alinhadas aos seus objetivos e perfil de risco.",
  },
  {
    number: "03",
    title: "Acompanhamento Mensal da Carteira",
    content:
      "Monitoramos o desempenho dos seus investimentos, ajustamos estratégias conforme necessário e mantemos você informado sobre o progresso em direção aos seus objetivos.",
  },
  {
    number: "04",
    title: "Relatórios e Encontros com Especialistas",
    content:
      "Fornecemos relatórios detalhados sobre a performance da sua carteira e realizamos encontros com nossos especialistas. Nessas reuniões, revisamos seus objetivos, discutimos o mercado e ajustamos o plano conforme necessário.",
  },
];

export default function HomePageJourneySection() {
  return (
    <S.Background>
      <Container>
        <Spacer $mb={80} />
        <Row $alignItems="center">
          <Col $size={{ lg: 4, sm: 12 }}>
            <Text
              $size={48}
              $color="deepJungleGreen"
              $weight={700}
              $lineHeight="100%"
            >
              Passo a passo <br />
              da nossa jornada
            </Text>
          </Col>
          <Col $size={{ lg: 4, sm: 12 }} $offset={{ lg: 1, sm: 0 }}>
            <Text
              $size={16}
              $weight={400}
              $lineHeight="130%"
              $color="graniteGray"
            >
              Nossa jornada é desenhada para oferecer a você um acompanhamento
              completo e personalizado, desde o primeiro contato até a
              realização dos seus objetivos financeiros.
            </Text>
          </Col>

          <Col $size={{ lg: 3, sm: 12 }}>
            <Button type="submit" $color="khaki" $borderRadius={8}>
              <Spacer $mr={32} $ml={32} $mt={16} $mb={16}>
                <Text
                  $transform="uppercase"
                  $color="white"
                  $weight={600}
                  $letterSpacing={0.54}
                  $lineHeight="14px"
                  $size={18}
                >
                  Desejo contratar
                </Text>
              </Spacer>
            </Button>
          </Col>
        </Row>
        <Spacer $mb={48} />

        <S.Cards>
          {journeys.map((journey) => (
            <S.Card key={journey.number}>
              <S.CardNumber>
                <Text
                  $color="lightTaupe"
                  $size={18}
                  $weight={600}
                  $lineHeight="100%"
                >
                  {journey.number}
                </Text>
              </S.CardNumber>

              <Spacer $mb={24} />

              <Text
                $size={24}
                $weight={600}
                $lineHeight="110%"
                $color="deepJungleGreen"
              >
                {journey.title}
              </Text>
              <S.CardContent>
                <Spacer $mb={8} />
                <Text
                  $size={16}
                  $weight={400}
                  $lineHeight="130%"
                  $color="graniteGray"
                >
                  {journey.content}
                </Text>
              </S.CardContent>
            </S.Card>
          ))}
        </S.Cards>

        <Spacer $mb={80} />
      </Container>
    </S.Background>
  );
}

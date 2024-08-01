import { Button } from "@/components/ui/button";
import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";
import { journeys } from "@/const/journeys";

import * as S from "./styles";

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
            <Button
              type="submit"
              $color="khaki"
              $borderRadius={8}
              $padding="16px 32px 14px 32px"
            >
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

import { Container, Row } from "@/components/ui/grid";
import { Col } from "@/components/ui/grid/styles";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";

import SimulatorForm from "./form";
import { ImagesPuzzle } from "./puzzle";
import * as S from "./styles";

export default function HomePageSimulatorSection() {
  return (
    <S.Background id="calculadora">
      <S.SimulatorImages>
        <ImagesPuzzle />
      </S.SimulatorImages>
      <S.SimulatorContainer>
        <Container>
          <Spacer $mb={112} />
          <Row>
            <Col $size={{ lg: 12, sm: 12 }}>
              <Row $justifyContent="center">
                <Col $size={{ lg: 6, sm: 12 }}>
                  <Text
                    $color="deepJungleGreen"
                    $size={48}
                    $weight={700}
                    $lineHeight="100%"
                    $align="center"
                  >
                    Calcule seus Objetivos
                  </Text>
                  <Spacer $mb={24} />
                  <Text
                    $size={16}
                    $color="graniteGray"
                    $weight={400}
                    $lineHeight="130%"
                    $align="center"
                  >
                    Quer saber quanto dinheiro você precisa para alcançar seus
                    objetivos? Descubra quanto você precisa poupar e investir
                    para realizar seus objetivos, seja comprar uma casa,
                    garantir a educação dos filhos ou planejar uma aposentadoria
                    tranquila. Comece agora e tome o controle do seu futuro
                    financeiro!
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>

          <Spacer $mb={48} />

          <Row $justifyContent="center">
            <Col $size={{ lg: 6, sm: 12 }}>
              <S.Simulator>
                <SimulatorForm />
              </S.Simulator>
            </Col>
          </Row>

          <Spacer $mb={112} />
        </Container>
      </S.SimulatorContainer>
    </S.Background>
  );
}

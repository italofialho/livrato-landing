import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";
import { solutions } from "@/const/solutions";

import * as S from "./styles";

export default function HomePageSolutionsSection() {
  return (
    <Container id="solucoes">
      <Spacer $mb={80} />
      <Row $justifyContent="center">
        <Col $size={{ lg: 4, sm: 12 }}>
          <Text
            $color="deepJungleGreen"
            $size={48}
            $weight={700}
            $lineHeight="100%"
            $align="center"
          >
            Nossas soluções
          </Text>
        </Col>
      </Row>
      <Row $justifyContent="center">
        <Col $size={{ lg: 5, sm: 12 }}>
          <Spacer $mb={16} />
          <Text
            $color="graniteGray"
            $size={16}
            $weight={400}
            $lineHeight="130%"
            $align="center"
          >
            Gestão de investimentos ponta a ponta: do orçamento familiar até o
            plano de perpetuação do patrimônio financeira.
          </Text>
        </Col>
      </Row>
      <Spacer $mb={48} />

      <S.Cards>
        <Row $gapRow={0} $gapColumn={0} $justifyContent="center">
          {solutions.map((solution, index) => (
            <Col key={solution.icon} $size={{ lg: 4, sm: 12 }}>
              <S.Card id={`solution-card-${index + 1}`}>
                <Image
                  alt={solution.title}
                  src={solution.icon}
                  width={56}
                  height={56}
                />
                <Spacer $mb={32} />

                <Text
                  $color="deepJungleGreen"
                  $size={32}
                  $weight={600}
                  $lineHeight="100%"
                >
                  {solution.title}
                </Text>
                <Spacer $mb={8} />
                <Text
                  $color="graniteGray"
                  $size={16}
                  $weight={400}
                  $lineHeight="130%"
                >
                  {solution.description}
                </Text>

                <Spacer $mb={32} />

                <Button $color="transparent">
                  <Text
                    $color="chamoisee"
                    $size={16}
                    $weight={400}
                    $lineHeight="130%"
                  >
                    Quero contratar
                  </Text>
                  <Spacer $mr={16} />
                  <Image
                    alt="Flecha apontando para a direita"
                    src="/assets/icons/arrow_right.svg"
                    width={27}
                    height={15}
                  />
                </Button>
              </S.Card>
            </Col>
          ))}
        </Row>
      </S.Cards>

      <Spacer $mb={80} />
    </Container>
  );
}

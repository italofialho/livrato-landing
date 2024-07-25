import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";

import { BenefitsCollapsible } from "./collapsible";
import * as S from "./styles";

export default function HomePageBenefitsSection() {
  return (
    <S.Background>
      <Container>
        <Spacer $mt={112} />
        <Row>
          <Col $size={{ lg: 4, sm: 12 }} $alignItems="flex-start">
            <Text $color="white" $size={48} $weight={700} $lineHeight="100%">
              Benefícios
            </Text>
            <Spacer $mb={24} />
            <Text
              $color="gainsboro"
              $size={16}
              $weight={400}
              $lineHeight="130%"
            >
              Com uma abordagem personalizada e fundamentada, estamos
              comprometidos em ajudá-lo a alcançar seus objetivos financeiros.
            </Text>
            <Spacer $mb={16} />
            <Text
              $color="gainsboro"
              $size={16}
              $weight={400}
              $lineHeight="130%"
            >
              Confira os benefícios do nosso acompanhamento.
            </Text>
            <Spacer $mb={32} />

            <Image
              src="/assets/banner_benefits.png"
              width={404}
              height={187}
              alt=""
              quality={100}
              style={{ borderRadius: 24, objectFit: "cover" }}
            />
            <Spacer $mb={32} />

            <Button $color="transparent">
              <Text $color="white" $size={16} $weight={400} $lineHeight="130%">
                Desejo contratar
              </Text>
              <Spacer $mr={16} />
              <Image
                alt="Flecha apontando para a direita"
                src="/assets/icons/arrow_right.svg"
                width={27}
                height={15}
              />
            </Button>
          </Col>
          <Col $size={{ lg: 7, sm: 12 }} $offset={1}>
            <BenefitsCollapsible />
          </Col>
        </Row>
        <Spacer $mb={112} />
      </Container>
    </S.Background>
  );
}

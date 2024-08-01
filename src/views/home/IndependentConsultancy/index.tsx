import Image from "next/image";

import { AnimatedNumber } from "@/components/animatedNumber";
import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";

import * as S from "./styles";

export default function HomePageIndependentConsultancySection() {
  return (
    <S.Background>
      <Container>
        <Row>
          <Col $size={{ lg: 4, sm: 12 }}>
            <Text $size={48} $color="white" $weight={700} $lineHeight="100%">
              Somos uma consultoria independente
            </Text>
            <Spacer $mb={24} />
            <Text
              $size={16}
              $color="gainsboro"
              $weight={400}
              $lineHeight="130%"
            >
              Trabalhamos com a instituição da sua confiança para gerar os
              melhores resultados para você e sua família.
            </Text>
            <Spacer $mb={16} />
            <Text
              $size={16}
              $color="gainsboro"
              $weight={400}
              $lineHeight="130%"
            >
              Nossa missão é orientar nossos clientes em uma jornada de
              inteligência financeira, com foco na liberdade e na perpetuação de
              patrimônio global.
            </Text>
          </Col>

          <Col $size={{ lg: 3.5, sm: 12 }} $offset={0.5}>
            <S.Stats>
              <S.StatsItem>
                <Text
                  $size={32}
                  $color="white"
                  $weight={600}
                  $lineHeight="100%"
                >
                  <AnimatedNumber $prefix="+" $value={250} $suffix="MM" />
                </Text>
                <Text
                  $color="khaki"
                  $size={16}
                  $weight={400}
                  $lineHeight="130%"
                >
                  de patrimônio líquido sob aconselhamento
                </Text>
              </S.StatsItem>

              <S.StatsItem>
                <Text
                  $size={32}
                  $color="white"
                  $weight={600}
                  $lineHeight="100%"
                >
                  <AnimatedNumber $prefix="+" $value={95} $suffix=" de NPS" />
                </Text>
                <Text
                  $color="khaki"
                  $size={16}
                  $weight={400}
                  $lineHeight="130%"
                >
                  Nota no NPS
                </Text>
              </S.StatsItem>

              <S.StatsItem>
                <Text
                  $size={32}
                  $color="white"
                  $weight={600}
                  $lineHeight="100%"
                >
                  <AnimatedNumber $prefix="+" $value={8} $suffix=" anos" />
                </Text>
                <Text
                  $color="khaki"
                  $size={16}
                  $weight={400}
                  $lineHeight="130%"
                >
                  de mercado
                </Text>
              </S.StatsItem>
            </S.Stats>
          </Col>
          <Col $size={{ lg: 4, sm: 12 }}>
            <Image
              src="/assets/banner_consultancy.png"
              width={382}
              height={301}
              alt=""
              quality={100}
              style={{ borderRadius: 24, objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </S.Background>
  );
}

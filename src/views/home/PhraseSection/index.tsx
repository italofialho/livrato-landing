import { Logo } from "@/components/logo";
import { Col, Container, Row } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";

import * as S from "./styles";
import { Spacer } from "@/components/ui/spacer";

import DetailImg from "./detail.svg";
import ArrowImg from "./arrow.svg";
import BackgroundImg from "./background.svg";

import Image from "next/image";

export default function HomePagePhraseSection() {
  return (
    <Container>
      <Spacer mb={80} />
      <S.Background>
        <S.BackgroundImage>
          <Image alt="" src={BackgroundImg} width={1250} height={681} />
        </S.BackgroundImage>

        <Spacer mb={80} />
        <Row justifyContent="center">
          <Col size={{ lg: 7, sm: 12 }}>
            <Text size={32} weight={600} lineHeight="100%" align="center">
              “A liberdade financeira é o primeiro passo para uma vida
              verdadeiramente enriquecedora”
            </Text>
          </Col>
        </Row>

        <Spacer mb={24} />

        <Row justifyContent="center">
          <Col size={2}>
            <Logo type="white" width={170} height={20} />
          </Col>
        </Row>
        <Spacer mb={80} />

        <Row justifyContent="center">
          <S.ImagesContainer>
            <S.DetailContainer>
              <Image alt="" src={DetailImg} width={276} height={56} />
            </S.DetailContainer>
            <S.ArrowImage>
              <Image alt="" src={ArrowImg} width={16} height={40} />
            </S.ArrowImage>
          </S.ImagesContainer>
        </Row>
      </S.Background>
      <Spacer mb={80} />
    </Container>
  );
}

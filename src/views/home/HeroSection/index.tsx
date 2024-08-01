"use client";

import Image from "next/image";

import { AnimatedText } from "@/components/animatedText";
import { Button } from "@/components/ui/button";
import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";
import { livratoWords } from "@/const/words";

import * as S from "./styles";

export default function HomePageHeroSection() {
  return (
    <S.Container>
      <S.Content>
        <Container>
          <Row $alignItems="center" $justifyContent="space-between">
            <Col $size={{ lg: 6.5, sm: 12 }}>
              <S.TextSection>
                <Text
                  $size={44}
                  $weight={700}
                  $lineHeight="100%"
                  $color="deepJungleGreen"
                >
                  Inteligência financeira que proporciona mais{" "}
                  <Text $color="khaki">
                    <AnimatedText words={livratoWords} />
                  </Text>
                  {/* . */}
                </Text>

                <Spacer $mb={16} />

                <Row>
                  <Col $size={{ lg: 11, sm: 12 }}>
                    <Text
                      $color="graniteGray"
                      $size={16}
                      $weight={400}
                      $lineHeight="130%"
                    >
                      Ajudamos você a organizar suas finanças, diversificar e
                      alavancar seu patrimônio, e planejar seu legado com
                      estratégias personalizadas e eficientes.
                    </Text>
                  </Col>
                </Row>

                <Spacer $mb={32} />

                <Row>
                  <Col $size={{ lg: 6, sm: 12 }}>
                    <Button
                      $color="richBlack"
                      $padding="16px 32px 14px 32px"
                      $borderRadius={8}
                    >
                      <Text
                        $transform="uppercase"
                        $weight={600}
                        $size={18}
                        $lineHeight="14px"
                        $letterSpacing="0.54px"
                      >
                        Desejo contratar
                      </Text>
                    </Button>
                  </Col>
                </Row>
              </S.TextSection>
            </Col>

            <Col $size={{ lg: 5.5, sm: 12 }} $alignItems="center">
              <Image
                alt="Uma familia com 4 pessoas felizes"
                src="/assets/banner_hero.png"
                width={505}
                height={425}
                priority
                quality={100}
                style={{ borderRadius: 24, objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </S.Content>
    </S.Container>
  );
}

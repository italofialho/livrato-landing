import Image from "next/image";

import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";
import { testimonials } from "@/const/testimonials";

import * as S from "./styles";

export default function HomePageTestimonialsSection() {
  return (
    <S.Background>
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
                  Depoimentos
                </Text>
                <Spacer $mb={24} />
                <Text
                  $size={16}
                  $color="graniteGray"
                  $weight={400}
                  $lineHeight="130%"
                  $align="center"
                >
                  Leia abaixo as experiências de quem já alcançou seus objetivos
                  financeiros com a nossa ajuda e veja como podemos fazer a
                  diferença na sua jornada financeira.
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Spacer $mb={32} />

        <Row $justifyContent="center">
          <Col $size={{ lg: 10, sm: 12 }}>
            <S.Cards>
              {testimonials.map((testimonial) => (
                <S.Card key={testimonial.name}>
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <Image
                      key={`star_${testimonial.name}_${index + 1}`}
                      src="/assets/icons/star_solid.svg"
                      width={16}
                      height={16}
                      alt=""
                      quality={100}
                    />
                  ))}
                  <Spacer $mb={16} />
                  <Text
                    $color="davysGrey"
                    $size={20}
                    $weight={600}
                    $lineHeight="120%"
                  >
                    {testimonial.testimonial}
                  </Text>
                  <Spacer $mb={16} />
                  <S.CardClientPhoto>
                    <Image
                      src={testimonial.photo}
                      width={48}
                      height={48}
                      alt=""
                      quality={100}
                    />
                    <Spacer $mr={16} />
                    <div>
                      <Text
                        $color="davysGrey"
                        $size={20}
                        $weight={600}
                        $lineHeight="120%"
                      >
                        {testimonial.name}
                      </Text>
                      <Text
                        $color="davysGrey"
                        $size={14}
                        $weight={400}
                        $lineHeight="100%"
                        $letterSpacing={0.42}
                      >
                        {testimonial.job}
                      </Text>
                    </div>
                  </S.CardClientPhoto>
                </S.Card>
              ))}
            </S.Cards>
          </Col>
        </Row>
        <Spacer $mb={112} />
      </Container>
    </S.Background>
  );
}

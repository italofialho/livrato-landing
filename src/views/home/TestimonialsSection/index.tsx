import Image from "next/image";

import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";

import * as S from "./styles";

const cards: Array<{
  name: string;
  photo: string;
  job: string;
  testimonial: string;
  stars: 5;
}> = [
  {
    name: "Camila",
    job: "Médica",
    stars: 5,
    photo: "/assets/clients/camila.png",
    testimonial:
      "“Sou extremamente bem atendida e confio que os conselhos a mim dados são os melhores para meus objetivos.”",
  },
  {
    name: "João",
    job: "Advogado",
    stars: 5,
    photo: "/assets/clients/joao.png",
    testimonial:
      "“A Livrato nos ajuda a organizar e ter clareza na hora de definir os investimentos baseados nos nossos objetivos.”",
  },
  {
    name: "Lucas",
    job: "Engenheiro Civil",
    stars: 5,
    photo: "/assets/clients/lucas.png",
    testimonial:
      "“Essa assessoria foi super importante para mim, me vez entender mais sobre os tipos de investimentos e poder ter a segurança para começar!”",
  },
];

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
              {cards.map((card) => (
                <S.Card key={card.name}>
                  {Array.from({ length: card.stars }).map((_, index) => (
                    <Image
                      key={`star_${card.name}_${index + 1}`}
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
                    {card.testimonial}
                  </Text>
                  <Spacer $mb={16} />
                  <S.CardClientPhoto>
                    <Image
                      src={card.photo}
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
                        {card.name}
                      </Text>
                      <Text
                        $color="davysGrey"
                        $size={14}
                        $weight={400}
                        $lineHeight="100%"
                        $letterSpacing={0.42}
                      >
                        {card.job}
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

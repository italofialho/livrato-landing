import Image from "next/image";

import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";
import { socialMedias } from "@/const/socialMedias";

import { ContactForm } from "./form";
import * as S from "./styles";

export default function HomePageContactSection() {
  return (
    <div>
      <Container>
        <Spacer $mb={112} />
        <Row $alignItems="center">
          <Col $size={{ lg: 5.5, sm: 12 }}>
            <Text
              $color="deepJungleGreen"
              $size={48}
              $weight={700}
              $lineHeight="100%"
            >
              Fale conosco
            </Text>
            <Spacer $mb={16} />

            <Row>
              <Col $size={{ lg: 9, sm: 12 }}>
                <Text
                  $color="graniteGray"
                  $size={16}
                  $weight={400}
                  $lineHeight="130%"
                >
                  Entre em contato com a nossa equipe para agendar uma consulta
                  ou reunião. Estamos prontos para ajudá-lo a começar sua
                  jornada para a liberdade financeira.
                </Text>
              </Col>
            </Row>

            <Spacer $mb={32} />

            <S.SocialMedias>
              {socialMedias.map((socialMedia) => (
                <S.SocialMedia
                  key={socialMedia.link}
                  href={socialMedia.link}
                  target="_blank"
                >
                  <S.Icon>
                    <Image
                      src={socialMedia.icon}
                      quality={100}
                      width={23}
                      height={23}
                      alt=""
                    />
                  </S.Icon>
                  <Text
                    $color="graniteGray"
                    $size={24}
                    $weight={600}
                    $lineHeight="100%"
                  >
                    {socialMedia.title}
                  </Text>
                </S.SocialMedia>
              ))}
            </S.SocialMedias>
          </Col>

          <Col $size={{ lg: 6.5, sm: 12 }}>
            <ContactForm />
          </Col>
        </Row>
        <Spacer $mb={112} />
      </Container>
    </div>
  );
}

import Image from "next/image";

import { Logo } from "@/components/logo";
import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";
import { links } from "@/const/links";
import { socialMedias } from "@/const/socialMedias";

import * as S from "./styles";

export function Footer() {
  return (
    <>
      <S.FooterBanner></S.FooterBanner>

      <Container>
        <Spacer $mb={40} />
        <Row $alignItems="center">
          <Col $size={{ lg: 3, sm: 12 }}>
            <Logo type="default" width={256} height={30} />
          </Col>
          <Col
            $size={{ lg: 4, sm: 12 }}
            $offset={{ lg: 5, sm: 0 }}
            $direction="row"
          >
            <Image
              src="/assets/logos/cvm.png"
              quality={100}
              alt=""
              width={110}
              height={50}
              unoptimized
            />
            <Spacer $mr={32} />
            <Image
              src="/assets/logos/anbima_1.png"
              quality={100}
              alt=""
              width={66}
              height={50}
              unoptimized
            />
            <Spacer $mr={32} />
            <Image
              src="/assets/logos/anbima_2.png"
              quality={100}
              alt=""
              width={66}
              height={50}
              unoptimized
            />
          </Col>
        </Row>
        <Spacer $mb={40} />
      </Container>
      <S.Divider />
      <Spacer $mb={40} />
      <Container>
        <Row>
          <Col $size={{ lg: 4, sm: 12 }}>
            <Text
              $color="graniteGray"
              $size={16}
              $weight={400}
              $lineHeight={"130%"}
            >
              Somos uma consultoria de investimentos regulada pelo maior órgão
              fiscalizador do Brasil, a Comissão de Valores Mobiliários.
            </Text>
            <Spacer $mb={24} />
            <Text
              $color="graniteGray"
              $size={16}
              $weight={400}
              $lineHeight={"130%"}
            >
              © Livrato Capital. Todos os direitos reservados -
              {new Date().getFullYear()}
            </Text>
            <Text
              $color="graniteGray"
              $size={16}
              $weight={400}
              $lineHeight={"130%"}
            >
              Site desenhado por{" "}
              <Text $color="deepJungleGreen" $decoration="underline">
                <a href="https://instagram.com/candidocarol" target="_blank">
                  @candidocarol
                </a>
              </Text>
            </Text>
          </Col>

          <Col
            $size={{ lg: 4, sm: 12 }}
            $offset={{ lg: 4, sm: 0 }}
            $alignItems="flex-end"
            $justifyContent="center"
          >
            <S.SocialMedias>
              <Text
                $color="graniteGray"
                $size={16}
                $weight={400}
                $lineHeight="130%"
              >
                Entre em contato:
              </Text>
              {socialMedias.map((media) => (
                <S.SocialMediaIcon
                  key={media.title}
                  href={media.link}
                  target="_blank"
                >
                  <Image
                    src={media.icon}
                    width={16}
                    height={16}
                    quality={100}
                    alt=""
                  />
                </S.SocialMediaIcon>
              ))}
            </S.SocialMedias>
            <Spacer $mb={16} />
            <S.Links>
              {links.map((link, index) => (
                <>
                  <a href={link.url} key={link.title}>
                    <Text
                      $color="graniteGray"
                      $size={16}
                      $weight={400}
                      $lineHeight={"130%"}
                      $decoration="underline"
                    >
                      {link.title}
                    </Text>
                  </a>
                  {index < links.length - 1 && (
                    <>
                      <Spacer $mr={16} />
                      <Text
                        $color="graniteGray"
                        $size={16}
                        $weight={400}
                        $lineHeight={"130%"}
                        $decoration="underline"
                      >
                        |
                      </Text>
                      <Spacer $mr={16} />
                    </>
                  )}
                </>
              ))}
            </S.Links>
          </Col>
        </Row>
      </Container>
      <Spacer $mb={40} />
    </>
  );
}

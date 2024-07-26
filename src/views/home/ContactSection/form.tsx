"use client";

import { useState } from "react";

import ReactCardFlip from "react-card-flip";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Col, Row } from "@/components/ui/grid";
import { Input } from "@/components/ui/input";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";
import { TextArea } from "@/components/ui/textarea";

import * as S from "./styles";

export function ContactForm() {
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <S.ContactForm>
      <ReactCardFlip isFlipped={success} flipDirection="vertical">
        <div>
          <Text
            $color="deepJungleGreen"
            $size={24}
            $weight={600}
            $lineHeight="100%"
          >
            Preencha o formulário e fale com um especialista.
          </Text>

          <Spacer $mb={8} />

          <Text
            $color="graniteGray"
            $size={16}
            $weight={400}
            $lineHeight={"130%"}
          >
            Após o envio do formulário entraremos em contato com você.
          </Text>

          <Spacer $mb={24} />

          <Row>
            <Col $size={{ lg: 7, sm: 12 }}>
              <Input placeholder="Informe seu nome*" />
            </Col>
            <Col $size={{ lg: 5, sm: 12 }}>
              <Input placeholder="Informe seu CPF" />
            </Col>
          </Row>

          <Spacer $mb={16} />

          <Row>
            <Col $size={{ lg: 6, sm: 12 }}>
              <Input placeholder="Informe seu e-mail*" />
            </Col>
            <Col $size={{ lg: 6, sm: 12 }}>
              <Input placeholder="Informe seu telefone" />
            </Col>
          </Row>

          <Spacer $mb={16} />

          <Row>
            <Col $size={{ lg: 6, sm: 12 }}>
              <Input placeholder="Já é investidor?" />
            </Col>
            <Col $size={{ lg: 6, sm: 12 }}>
              <Input placeholder="Valor estimado do patrimônio" />
            </Col>
          </Row>

          <Spacer $mb={16} />

          <Row>
            <Col $size={12}>
              <TextArea placeholder="Envie uma mensagem" rows={5} />
            </Col>
          </Row>

          <Spacer $mb={16} />

          <Row>
            <Col $size={12}>
              {/* <Input type="checkbox" /> */}
              <Text
                $color="taupeGray"
                $size={16}
                $weight={400}
                $lineHeight={"130%"}
              >
                Ao enviar o formulário eu concordo com a política de
                privacidade.
              </Text>

              <Spacer $mb={16} />

              <Button
                $color="richBlack"
                $padding="16px 32px 14px 32px"
                $borderRadius={8}
                type="button"
                onClick={() => setSuccess(true)}
              >
                <Text
                  $transform="uppercase"
                  $weight={600}
                  $size={18}
                  $lineHeight="14px"
                  $letterSpacing="0.54px"
                >
                  ENVIAR MENSAGEM
                </Text>
              </Button>
            </Col>
          </Row>
        </div>

        <S.SuccessForm>
          <Text
            $color="deepJungleGreen"
            $size={48}
            $weight={800}
            $lineHeight="100%"
            $align="center"
          >
            Sua mensagem foi enviada com sucesso!
          </Text>

          <Spacer $mb={16} />

          <Logo type="default" width={250} height={50} />
        </S.SuccessForm>
      </ReactCardFlip>
    </S.ContactForm>
  );
}

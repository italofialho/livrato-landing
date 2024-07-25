"use client";

import { useState } from "react";

import ReactCardFlip from "react-card-flip";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { AnimatedNumber } from "@/components/animatedNumber";
import { Button } from "@/components/ui/button";
import { Col, Row } from "@/components/ui/grid";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";
import { calculateFinalAmount, InvestmentOptions } from "@/lib/simulator";

import * as S from "./styles";

type Inputs = {
  goalName: string;
  initialValue: number;
  monthlyValue: number;
  interestRate: number;
  isAnnualRate: "true" | "false";
  timePeriod: number;
  isYears: "true" | "false";
};

export default function SimulatorForm() {
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange" });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const options: InvestmentOptions = {
      initialValue: data.initialValue,
      monthlyValue: data.monthlyValue,
      interestRate: data.interestRate,
      isAnnualRate: data.isAnnualRate === "true",
      timePeriod: data.timePeriod,
      isYears: data.isYears === "true",
    };

    const finalValue = calculateFinalAmount(options);
    setShowResult(true);
    setResult(finalValue);
  };

  const toBRL = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <ReactCardFlip isFlipped={!!showResult} flipDirection="horizontal">
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <Controller
            name="goalName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} placeholder="Descreva o seu objetivo" />
            )}
          />

          {errors.goalName && (
            <Text $color="white" $size={14} $lineHeight="130%">
              Este campo é obrigatório
            </Text>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <Controller
            name="initialValue"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Informe o valor disponível para aplicar"
              />
            )}
          />

          {errors.initialValue && (
            <Text $color="white" $size={14} $lineHeight="130%">
              Este campo é obrigatório
            </Text>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <Controller
            name="monthlyValue"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Informe o valor de investimento mensal"
              />
            )}
          />

          {errors.monthlyValue && (
            <Text $color="white" $size={14} $lineHeight="130%">
              Este campo é obrigatório
            </Text>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <Controller
            name="interestRate"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} placeholder="Informe a taxa de rendimento" />
            )}
          />
          {errors.interestRate && (
            <Text $color="white" $size={14} $lineHeight="130%">
              Este campo é obrigatório
            </Text>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <Controller
            name="isAnnualRate"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field}>
                <option value="A taxa é anual ou mensal?"></option>
                <option value="true">Anual</option>
                <option value="false">Mensal</option>
              </Select>
            )}
          />
          {errors.isYears && (
            <Text $color="white" $size={14} $lineHeight="130%">
              Este campo é obrigatório
            </Text>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <Controller
            name="timePeriod"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} placeholder="Tempo de contribuição" />
            )}
          />
          {errors.timePeriod && (
            <Text $color="white" $size={14} $lineHeight="130%">
              Este campo é obrigatório
            </Text>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <Controller
            name="isYears"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field}>
                <option value="false">Meses</option>
                <option value="true">Anos</option>
              </Select>
            )}
          />
          {errors.isYears && (
            <Text $color="white" $size={14} $lineHeight="130%">
              Este campo é obrigatório
            </Text>
          )}
        </S.InputContainer>

        <Button
          type="submit"
          $color="viridianGreen"
          $borderRadius={8}
          disabled={!isValid}
        >
          <Spacer $mr={32} $ml={32} $mt={16} $mb={16}>
            <Text
              $transform="uppercase"
              $color="white"
              $weight={600}
              $letterSpacing={0.54}
              $lineHeight="14px"
              $size={18}
            >
              Simular investimento
            </Text>
          </Spacer>
        </Button>
      </S.Form>

      <Row $justifyContent="center">
        <Col $size={12}>
          <Text
            $color="white"
            $size={16}
            $weight={400}
            $lineHeight="130%"
            $align="center"
          >
            Em{" "}
            <Text $color="khaki" $weight={800}>
              30 meses
            </Text>{" "}
            você terá:
          </Text>

          <Spacer $mb={16} />

          <Text
            $color="white"
            $size={48}
            $weight={800}
            $lineHeight="130%"
            $align="center"
          >
            <AnimatedNumber
              $startValue={getValues().initialValue}
              $value={result as number}
              $format={toBRL}
              $delay={1}
            />
          </Text>

          <Spacer $mb={16} />

          <Button type="submit" $color="viridianGreen" $borderRadius={8}>
            <Spacer $mr={32} $ml={32} $mt={16} $mb={16}>
              <Text
                $transform="uppercase"
                $color="white"
                $weight={600}
                $letterSpacing={0.54}
                $lineHeight="14px"
                $size={18}
              >
                Contratar a livrato
              </Text>
            </Spacer>
          </Button>

          <Spacer $mb={16} />

          <Button
            type="submit"
            $color="transparent"
            $borderRadius={8}
            onClick={() => {
              setShowResult(false);
              setResult(null);
            }}
          >
            <Spacer $mr={16} $ml={16} $mt={8} $mb={8}>
              <Text
                $transform="uppercase"
                $color="white"
                $weight={400}
                $letterSpacing={0.54}
                $lineHeight="100%"
                $size={12}
              >
                Refazer simulação
              </Text>
            </Spacer>
          </Button>
          <Spacer $mb={16} />
          <Text
            $color="gainsboro"
            $size={14}
            $weight={400}
            $lineHeight="100%"
            $letterSpacing={0.42}
            $align="center"
          >
            Observações Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla turpis lectus, fermentum sit amet consectetur ut, egestas sit
            amet velit. Pellentesque.
          </Text>
        </Col>
      </Row>
    </ReactCardFlip>
  );
}

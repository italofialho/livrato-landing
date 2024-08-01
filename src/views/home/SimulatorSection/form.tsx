"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import ReactCardFlip from "react-card-flip";
import {
  Controller,
  FieldError,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import { AnimatedNumber } from "@/components/animatedNumber";
import { Button } from "@/components/ui/button";
import { Col, Row } from "@/components/ui/grid";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";
import { calculateFinalAmount, InvestmentOptions } from "@/lib/simulator";
import { storeSimulation } from "@/lib/storage";

import { SimulatorFormData, SimulatorSchema } from "./schema";
import * as S from "./styles";

export default function SimulatorForm() {
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    getValues,
    watch,
    formState: { isValid, ...formState },
  } = useForm<SimulatorFormData>({
    resolver: zodResolver(SimulatorSchema),
    // mode: "onBlur",
    defaultValues: {
      isAnnualRate: true,
      isYears: true,
    },
  });

  const isAnnualRate = watch("isAnnualRate");
  const isYears = watch("isYears");

  const onSubmit: SubmitHandler<SimulatorFormData> = (data) => {
    const options: InvestmentOptions = {
      initialValue: data.initialValue,
      monthlyValue: data.monthlyValue,
      interestRate: data.interestRate,
      isAnnualRate: data.isAnnualRate,
      timePeriod: data.timePeriod,
      isYears: data.isYears,
    };

    const finalValue = calculateFinalAmount(options);
    setShowResult(true);
    setResult(finalValue);
    storeSimulation({ name: data.goalName, ...options });
  };

  const toBRL = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const renderErrorMessage = (error?: FieldError) => {
    if (!error?.message) return null;

    return (
      <Text $color="white" $size={14} $lineHeight="130%">
        {error.message}
      </Text>
    );
  };

  return (
    <ReactCardFlip isFlipped={!!showResult} flipDirection="horizontal">
      <S.Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <S.InputContainer>
          <Controller
            name="goalName"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input {...field} placeholder="Descreva o seu objetivo" />
                {error?.message && renderErrorMessage(error)}
              </>
            )}
          />
        </S.InputContainer>

        <S.InputContainer>
          <Controller
            name="initialValue"
            control={control}
            rules={{ required: true, min: 0 }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  {...field}
                  placeholder="Informe o valor disponível para aplicar"
                  type="tel"
                  mask="currency"
                />
                {error?.message && renderErrorMessage(error)}
              </>
            )}
          />
        </S.InputContainer>

        <S.InputContainer>
          <Controller
            name="monthlyValue"
            control={control}
            rules={{ required: true, min: 0 }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  {...field}
                  placeholder="Informe o valor de investimento mensal"
                  type="tel"
                  mask="currency"
                />
                {error?.message && renderErrorMessage(error)}
              </>
            )}
          />
        </S.InputContainer>

        <Row>
          <Col $size={{ lg: 7, sm: 12 }}>
            <S.InputContainer>
              <Controller
                name="interestRate"
                control={control}
                rules={{ required: true, min: 1 }}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Informe a taxa de rendimento"
                      type="tel"
                      mask="percent"
                      maskSuffix={isAnnualRate ? " a.a." : " a.m."}
                    />
                    {error?.message && renderErrorMessage(error)}
                  </>
                )}
              />
            </S.InputContainer>
          </Col>
          <Col $size={{ lg: 5, sm: 12 }}>
            <S.InputContainer>
              <Controller
                name="isAnnualRate"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value, ...field },
                  fieldState: { error },
                }) => (
                  <>
                    <Select
                      {...field}
                      onChange={onChange}
                      value={value ? String(value) : ""}
                    >
                      <option value="true">Anual</option>
                      <option value="false">Mensal</option>
                    </Select>
                    {error?.message && renderErrorMessage(error)}
                  </>
                )}
              />
            </S.InputContainer>
          </Col>
        </Row>

        <Row>
          <Col $size={{ lg: 7, sm: 12 }}>
            <S.InputContainer>
              <Controller
                name="timePeriod"
                control={control}
                rules={{ required: true, min: 1 }}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Tempo de contribuição"
                      type="tel"
                      mask="decimal"
                      maskSuffix={isYears ? " anos" : " meses"}
                    />
                    {error?.message && renderErrorMessage(error)}
                  </>
                )}
              />
            </S.InputContainer>
          </Col>
          <Col $size={{ lg: 5, sm: 12 }}>
            <S.InputContainer>
              <Controller
                name="isYears"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value, ...field },
                  fieldState: { error },
                }) => (
                  <>
                    <Select
                      {...field}
                      onChange={onChange}
                      value={value ? String(value) : ""}
                    >
                      <option value="false">Meses</option>
                      <option value="true">Anos</option>
                    </Select>
                    {error?.message && renderErrorMessage(error)}
                  </>
                )}
              />
            </S.InputContainer>
          </Col>
        </Row>

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

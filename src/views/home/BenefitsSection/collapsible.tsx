"use client";

import Image from "next/image";

import { Collapsible } from "@/components/ui/collapsible";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";

import * as S from "./styles";

const benefitsItems: Array<{ title: string; icon: string; content: string }> = [
  {
    title: "Independência e Imparcialidade",
    icon: "/assets/icons/shield.svg",
    content:
      "Somos uma consultoria independente, o que significa que nossas recomendações são sempre imparciais e focadas exclusivamente nos melhores interesses dos nossos clientes. Não temos vínculos com instituições financeiras, garantindo que nossas orientações sejam livres de qualquer influência externa.",
  },
  {
    title: "Transparência na Cobrança",
    icon: "/assets/icons/redo.svg",
    content:
      "Cobramos um valor fixo pelos nossos serviços, proporcionando total transparência e previsibilidade para nossos clientes. Esse modelo de cobrança elimina qualquer conflito de interesse, assegurando que nossas recomendações sejam sempre objetivas e alinhadas com seus objetivos financeiros.",
  },
  {
    title: "Sem Comissões ou Bonificações",
    icon: "/assets/icons/cash.svg",
    content:
      "Não ganhamos comissões das instituições financeiras e não temos interesse em movimentar o patrimônio dos nossos clientes para obter bonificações. Nosso foco é exclusivamente em oferecer as melhores estratégias e soluções para o seu sucesso financeiro.",
  },
  {
    title: "Liberação de Tempo",
    icon: "/assets/icons/time.svg",
    content:
      "Ao confiar na Livrato Capital, você libera seu tempo para focar no que realmente importa: ganhar mais dinheiro e alcançar seus objetivos pessoais e profissionais. Nós cuidamos da gestão financeira para que você possa se concentrar no crescimento do seu negócio e na sua carreira.",
  },
  {
    title: "Confiança na Tomada de Decisões",
    icon: "/assets/icons/confidence.svg",
    content:
      "Ajudamos nossos clientes a terem mais confiança na tomada de decisões de investimentos. Com nossa orientação especializada, você terá a segurança necessária para fazer escolhas financeiras informadas e estratégicas.",
  },
  {
    title: "Controle Total dos Investimentos",
    icon: "/assets/icons/sheet.svg",
    content:
      "Garantimos que nossos clientes tenham controle total de seus investimentos. Fornecemos as ferramentas e o conhecimento necessários para que você possa monitorar e gerenciar seu portfólio de forma eficiente e eficaz.",
  },
];

function BenefitsItemHeader(props: Readonly<{ title: string; icon: string }>) {
  return (
    <S.BenefitsHeader>
      <div>
        <Image src={props.icon} width={32} height={32} alt="" />
        <Spacer $mr={16} />
        <Text $color="white" $size={24} $weight={600} $lineHeight="100%">
          {props.title}
        </Text>
      </div>
      <Image
        id="icon"
        src="/assets/icons/chevron.svg"
        width={24}
        height={24}
        alt=""
      />
    </S.BenefitsHeader>
  );
}

export function BenefitsCollapsible() {
  return (
    <S.Benefits>
      {benefitsItems.map((benefit, index) => (
        <S.BenefitsItem key={benefit.icon}>
          <Collapsible
            id="benefit-item"
            header={
              <BenefitsItemHeader title={benefit.title} icon={benefit.icon} />
            }
          >
            <div>
              <Spacer $pb={16} />
              <Text
                $color="gainsboro"
                $size={16}
                $weight={400}
                $lineHeight="130%"
              >
                {benefit.content}
              </Text>
            </div>
          </Collapsible>
        </S.BenefitsItem>
      ))}
    </S.Benefits>
  );
}

const defaultWords = [
  "Foco no cliente",
  "Disponibilidade",
  "Confiança",
  "Objetividade",
];

const words = Array.from({ length: 1 })
  .map(() => defaultWords)
  .flat();

import { Fragment } from "react";

import Image from "next/image";
import ReactMarquee from "react-fast-marquee";

import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";

import * as S from "./styles";

export default function HomePageMarqueeSection() {
  const renderMarquee = (isPrimary: boolean) => {
    const Marquee = isPrimary ? S.MarqueePrimary : S.MarqueeSecondary;
    const image = isPrimary ? "dot_primary" : "dot_secondary";
    return (
      <Marquee>
        <ReactMarquee autoFill speed={100} play={isPrimary}>
          <S.MarqueeContent>
            {words.map((word) => (
              <Fragment key={word}>
                <Text>{word}</Text>
                <Spacer $mr={40} />
                <Image
                  src={`/assets/icons/${image}.svg`}
                  width={8}
                  height={8}
                  alt=""
                />
                <Spacer $mr={40} />
              </Fragment>
            ))}
          </S.MarqueeContent>
        </ReactMarquee>
      </Marquee>
    );
  };

  return (
    <S.Marquees>
      <Spacer $pb={112} />
      {renderMarquee(false)}
      {renderMarquee(true)}
      <Spacer $pb={112} />
    </S.Marquees>
  );
}

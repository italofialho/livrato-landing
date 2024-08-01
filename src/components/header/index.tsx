import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";

import { HeaderLinks } from "./link";
import * as S from "./styles";

export function Header() {
  return (
    <S.Background id="header">
      <Container>
        <S.Container>
          <Logo type="default" width={260} height={32} />

          <HeaderLinks />

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
              Entrar em contato
            </Text>
          </Button>
        </S.Container>
      </Container>
    </S.Background>
  );
}

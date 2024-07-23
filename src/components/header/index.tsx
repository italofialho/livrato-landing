import { Logo } from "../logo";
import { Button } from "@/components/ui/button";
import * as S from "./styles";
import { Text } from "../ui/text";
import { Container } from "../ui/grid";

const navItems: Array<{ title: string; url: string }> = [
  { title: "Soluções", url: "#solucoes" },
  { title: "Quem somos", url: "#quem-somos" },
  { title: "Benefícios", url: "#beneficios" },
  { title: "Calculadora", url: "#calculadora" },
];

export function Header() {
  return (
    <S.Background>
      <Container>
        <S.Container>
          <Logo type="default" width={260} height={32} />

          <S.Links>
            {navItems.map((item) => (
              <S.Link key={item.url} href={item.url}>
                {item.title}
              </S.Link>
            ))}
          </S.Links>

          <Button
            color="richBlack"
            padding="16px 32px 14px 32px"
            borderRadius={8}
          >
            <Text
              transform="uppercase"
              weight={600}
              size={18}
              lineHeight="14px"
              letterSpacing="0.54px"
            >
              Entrar em contato
            </Text>
          </Button>
        </S.Container>
      </Container>
    </S.Background>
  );
}

import { Col, Container, Row } from "@/components/ui/grid";
import { Spacer } from "@/components/ui/spacer";
import { Text } from "@/components/ui/text";

import * as S from "./styles";

export default function HomePageBenefitsSection() {
  return (
    <S.Background>
      <Container>
        <Spacer $mt={112} />
        <Row>
          <Col $size={{ lg: 4, sm: 12 }}>
            <Text $color="white" $size={48} $weight={700} $lineHeight="100%">
              Benefícios
            </Text>
          </Col>
        </Row>
        <Spacer $mb={112} />
      </Container>
    </S.Background>
  );
}

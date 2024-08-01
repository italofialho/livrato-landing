"use client";

import { headerLinks } from "@/const/header";
import { scrollIntoView } from "@/utils/scroll";

import * as S from "./styles";

export function HeaderLinks() {
  return (
    <S.Links>
      {headerLinks.map((link) => (
        <S.Link
          key={link.url}
          href={link.url}
          scroll={false}
          onClick={() => scrollIntoView(link.url)}
        >
          {link.title}
        </S.Link>
      ))}
    </S.Links>
  );
}

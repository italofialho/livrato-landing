import { useEffect, useRef, useState } from "react";

import { CollapsibleProps } from "./interface";
import * as S from "./styles";

export function Collapsible({
  open,
  children,
  header,
  id,
}: Readonly<CollapsibleProps>) {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );
  const ref = useRef<HTMLDivElement>(null);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <div id={id}>
      <S.Header onClick={() => handleFilterOpening()} $isOpen={!!isOpen}>
        {header}
      </S.Header>

      <S.Content style={{ height }}>
        <div ref={ref}>{children}</div>
      </S.Content>
    </div>
  );
}

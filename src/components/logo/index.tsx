import Image from "next/image";

interface LogoProps {
  type: "default" | "white";
  width: number;
  height: number;
}

export function Logo(props: Readonly<LogoProps>) {
  const logoByType: Record<LogoProps["type"], string> = {
    default: "/logo.svg",
    white: "/logo_white.svg",
  };

  const currentLogo = logoByType[props.type];

  return (
    <Image
      alt="Logo da Livrato Capital"
      src={currentLogo}
      width={props.width}
      height={props.height}
    />
  );
}

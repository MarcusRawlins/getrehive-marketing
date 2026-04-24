import Image from "next/image";

type RehiveLogoProps = {
  priority?: boolean;
};

export function RehiveLogo({ priority = false }: RehiveLogoProps) {
  return (
    <Image
      src="/brand/png/rehive-studio-lockup-transparent.png"
      alt="ReHive Studio"
      width={480}
      height={144}
      priority={priority}
      className="brand-mark__image"
    />
  );
}

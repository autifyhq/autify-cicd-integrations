type Props = Readonly<{
  logo: string;
  src: URL;
  href: URL;
}>;

const style = "flat-square";

const Badge = ({ logo, src, href }: Props) => {
  src.searchParams.set("style", style);
  src.searchParams.set("logo", logo);
  return (
    <a href={href.toString()}>
      <img src={src.toString()} />
    </a>
  );
};

export default Badge;

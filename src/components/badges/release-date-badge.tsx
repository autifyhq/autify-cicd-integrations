import Badge from "./badge";

type Props = Readonly<{
  org: string;
  repo: string;
}>;

const ReleaseDateBadge = ({ org, repo }: Props) => {
  const href = new URL(`https://github.com/${org}/${repo}/releases/latest`);
  const src = new URL("https://img.shields.io");
  src.pathname = `/github/release-date/${org}/${repo}`;
  return <Badge logo="github" src={src} href={href} />;
};

export default ReleaseDateBadge;
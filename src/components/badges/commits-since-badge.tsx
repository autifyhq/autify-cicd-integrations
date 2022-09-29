import Badge from "./badge";

type Props = Readonly<{
  org: string;
  repo: string;
}>;

const CommitsSinceBadge = ({ org, repo }: Props) => {
  const href = new URL(`https://github.com/${org}/${repo}/commits`);
  const src = new URL("https://img.shields.io");
  src.pathname = `/github/commits-since/${org}/${repo}/latest`;
  return <Badge logo="github" src={src} href={href} />;
};

export default CommitsSinceBadge;

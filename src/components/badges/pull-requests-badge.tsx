import Badge from "./badge";

type Props = Readonly<{
  org: string;
  repo: string;
}>;

const PullRequestsBadge = ({ org, repo }: Props) => {
  const href = new URL(`https://github.com/${org}/${repo}/pulls`);
  const src = new URL("https://img.shields.io");
  src.pathname = `/github/issues-pr/${org}/${repo}`;
  return <Badge logo="github" src={src} href={href} />;
};

export default PullRequestsBadge;

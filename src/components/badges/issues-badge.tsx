import Badge from "./badge";

type Props = Readonly<{
  org: string;
  repo: string;
}>;

const IssuesBadge = ({ org, repo }: Props) => {
  const href = new URL(`https://github.com/${org}/${repo}/issues`);
  const src = new URL("https://img.shields.io");
  src.pathname = `/github/issues/${org}/${repo}`;
  return <Badge logo="github" src={src} href={href} />;
};

export default IssuesBadge;

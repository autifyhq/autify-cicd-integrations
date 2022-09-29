import Badge from "./badge";

type Props = Readonly<{
  org: string;
  repo: string;
  workflow: string;
}>;

const GitHubWorkflowBadge = ({ org, repo, workflow }: Props) => {
  const href = new URL(
    `https://github.com/${org}/${repo}/actions/workflows/${workflow}.yml`
  );
  const src = new URL("https://img.shields.io");
  src.pathname = `/github/workflow/status/${org}/${repo}/${workflow}`;
  src.searchParams.set("label", workflow);
  return <Badge logo="github" src={src} href={href} />;
};

export default GitHubWorkflowBadge;

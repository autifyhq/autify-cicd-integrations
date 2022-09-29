import Badge from "./badge";

type Props = Readonly<{
  org: string;
  repo: string;
}>;

const CircleCIBadge = ({ org, repo }: Props) => {
  const branch = "main";
  const href = new URL(
    `https://app.circleci.com/pipelines/github/${org}/${repo}?branch=${branch}`
  );
  const src = new URL("https://img.shields.io");
  src.pathname = `/circleci/build/gh/${org}/${repo}/${branch}`;
  src.searchParams.set("label", branch);
  return <Badge logo="circleci" src={src} href={href} />;
};

export default CircleCIBadge;

import { useEffect, useState } from "react";
import Badge from "./badge";

type Data = Readonly<{
  label: string;
  message: string;
  color: string;
}>;

const fetchReleaseJson = async (org: string, repo: string): Promise<Data> => {
  const src = new URL("https://img.shields.io");
  src.pathname = `/github/v/release/${org}/${repo}.json`;
  const response = await fetch(src);
  return response.json();
};

const useLatest = (org: string, repo: string) => {
  const [latest, setLatest] = useState<string>();
  useEffect(() => {
    const setAsync = async (org: string, repo: string) => {
      const release = await fetchReleaseJson(org, repo);
      setLatest(release.message);
    };
    setAsync(org, repo);
  }, []);
  return latest;
};

type Props = Readonly<{
  org: string;
  repo: string;
}>;

const CommitsSinceBadge = ({ org, repo }: Props) => {
  const latest = useLatest(org, repo);
  if (!latest) return <></>;
  const href = new URL(
    `https://github.com/${org}/${repo}/compare/${latest}...HEAD`
  );
  const src = new URL("https://img.shields.io");
  src.pathname = `/github/commits-since/${org}/${repo}/latest`;
  src.searchParams.set("label", "commits since release");
  return <Badge logo="github" src={src} href={href} />;
};

export default CommitsSinceBadge;

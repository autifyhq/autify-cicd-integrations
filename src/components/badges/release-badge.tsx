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

const fetchReleaseDateJson = async (
  org: string,
  repo: string
): Promise<Data> => {
  const src = new URL("https://img.shields.io");
  src.pathname = `/github/release-date/${org}/${repo}.json`;
  const response = await fetch(src);
  return response.json();
};

const useData = (org: string, repo: string) => {
  const [data, setData] = useState<Data>();
  useEffect(() => {
    const setAsync = async (org: string, repo: string) => {
      const [release, releaseDate] = await Promise.all([
        fetchReleaseJson(org, repo),
        fetchReleaseDateJson(org, repo),
      ]);
      setData({
        label: "release",
        message: `${release.message.substring(0, 9)} (${releaseDate.message})`,
        color: releaseDate.color,
      });
    };
    setAsync(org, repo);
  }, []);
  return data;
};

type Props = Readonly<{
  org: string;
  repo: string;
}>;

const ReleaseBadge = ({ org, repo }: Props) => {
  const href = new URL(`https://github.com/${org}/${repo}/releases/latest`);
  const data = useData(org, repo);
  const src = new URL("https://img.shields.io");
  if (!data) return <></>;
  const { label, message, color } = data;
  src.pathname = `/static/v1`;
  src.searchParams.set("label", label);
  src.searchParams.set("message", message);
  src.searchParams.set("color", color);
  return <Badge logo="github" src={src} href={href} />;
};

export default ReleaseBadge;

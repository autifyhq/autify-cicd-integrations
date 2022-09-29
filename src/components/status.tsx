import CircleCIBadge from "./badges/circleci-badge";
import CommitsSinceBadge from "./badges/commits-since-badge";
import GitHubWorkflowBadge from "./badges/github-workflow-badge";
import IssuesBadge from "./badges/issues-badge";
import PullRequestsBadge from "./badges/pull-requests-badge";
import ReleaseBadge from "./badges/release-badge";
import RepoBadge from "./badges/repo-badge";

type Props = Readonly<{
  org: string;
  repo: string;
}>;

const skipNightly = ["autify-cli", "autify-sdk-js"];

const Status = (props: Props) => {
  const { repo } = props;
  return (
    <tr className="even:bg-gray-200">
      <td>
        <RepoBadge {...props} />
      </td>
      <td>
        <ReleaseBadge {...props} />
      </td>
      <td>
        <CommitsSinceBadge {...props} />
      </td>
      <td>
        <IssuesBadge {...props} />
      </td>
      <td>
        <PullRequestsBadge {...props} />
      </td>
      <td>
        {skipNightly.includes(repo) ? (
          <></>
        ) : repo.includes("circleci") ? (
          <CircleCIBadge {...props} />
        ) : (
          <GitHubWorkflowBadge workflow="nightly-test" {...props} />
        )}
      </td>
      <td>
        {skipNightly.includes(repo) ? (
          <></>
        ) : repo.includes("circleci") ? (
          <></>
        ) : (
          <GitHubWorkflowBadge workflow="nightly-beta-test" {...props} />
        )}
      </td>
    </tr>
  );
};

export default Status;

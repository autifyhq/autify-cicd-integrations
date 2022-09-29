import Status from "./components/status";

const App = () => {
  return (
    <>
      <table className="table-auto">
        <tbody>
          <Status org="autifyhq" repo="autify-cli" />
          <Status org="autifyhq" repo="autify-sdk-js" />
          <Status org="autifyhq" repo="actions-web-test-run" />
          <Status org="autifyhq" repo="actions-mobile-build-upload" />
          <Status org="autifyhq" repo="actions-mobile-test-run" />
          <Status org="autifyhq" repo="actions-setup-cli" />
          <Status org="autifyhq" repo="autify-circleci-orb-web" />
          <Status org="autifyhq" repo="autify-circleci-orb-mobile" />
          <Status org="autifyhq" repo="autify-circleci-orb-cli" />
          <Status org="jenkinsci" repo="autify-plugin" />
          <Status org="autifyhq" repo="bitrise-step-autify-upload" />
          <Status org="autifyhq" repo="bitrise-step-autify-test-run" />
        </tbody>
      </table>
    </>
  );
};

export default App;

const AlertsDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="fun-alert fun-alert-info">
        <span className="text-xl font-heading">
          {/* <fun-icon-info-circle className="mr-sm fun-alert-icon" /> */}
          An information message
        </span>
        <p>
          To make this work you should read this lengthy block of text that:
        </p>
        <ul className="list-inside list-disc mt-sm mb-sm">
          <li>Has bullet points to</li>
          <li>Try and break it up a bit.</li>
        </ul>
        <a className="fun-link" href="#">
          Click here to learn more{" "}
        </a>
      </div>
      <div className="fun-alert fun-alert-success">Something is working</div>
      <div className="fun-alert fun-alert-danger">
        Uh oh! You destroyed everything.
      </div>
      <div className="fun-alert fun-alert-warning">
        You probably need to take a look at what you did.
      </div>
    </div>
  );
};

const AlertsPage = () => {
  return (
    <div className="max-w-[600px] mx-auto pt-8 flex flex-col space-y-4">
      <div>
        <AlertsDemo />
      </div>
      <div data-theme="dark" className="bg-neutral-800 p-5">
        <AlertsDemo />
      </div>
    </div>
  );
};

export default AlertsPage;

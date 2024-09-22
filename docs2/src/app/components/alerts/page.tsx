import { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-[1000px] p-xl flex items-center justify-center space-x-2 bg-page">
      {children}
    </div>
  );
};

const AlertsDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-md">
        <div className="fun-alert fun-alert-info">
          <span className="text-xl font-heading font-bold">
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
        <div className="alert alert-info">
          <span className="text-xl font-heading font-bold">
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
      </div>
      <div className="flex space-x-md">
        <div className="fun-alert fun-alert-success">Something is working</div>
        <div className="alert alert-success">Something is working</div>
      </div>
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
    <div className="max-w-[600px] flex flex-col">
      <div>
        <Container>
          <AlertsDemo />
        </Container>
      </div>
      <div data-theme="dark">
        <Container>
          <AlertsDemo />
        </Container>
      </div>
      <div data-theme="christmas">
        <Container>
          <AlertsDemo />
        </Container>
      </div>
    </div>
  );
};

export default AlertsPage;

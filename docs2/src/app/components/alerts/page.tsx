import { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-[1000px] p-xl flex items-center justify-center space-x-2 bg-page">
      {children}
    </div>
  );
};

const InfoIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} size-6`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  );
};

const AlertsDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-md">
        <div className="fun-alert fun-alert-info">
          <span className="text-xl font-heading font-bold">
            <span className="flex items-center gap-sm">
              <InfoIcon />
              <span>An information message</span>
            </span>
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
            <span className="flex items-center gap-sm">
              <InfoIcon className="alert-icon-info" />
              <span>An information message</span>
            </span>
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

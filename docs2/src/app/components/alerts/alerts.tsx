import { ReactNode } from "react";

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

const DefaultContent = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-xl font-heading font-bold">
        <span className="flex items-center gap-sm">
          <InfoIcon className="alert-icon-info" />
          <span>An information message</span>
        </span>
      </span>
      <p>To make this work you should read this lengthy block of text that:</p>
      <ul className="list-inside list-disc mt-sm mb-sm">
        <li>Has bullet points to</li>
        <li>Try and break it up a bit.</li>
      </ul>
      <a className="fun-link" href="#">
        Click here to learn more{" "}
      </a>
    </div>
  );
};

export const Alert = ({
  variant,
  children = <DefaultContent />,
}: {
  variant: "info" | "warning" | "success" | "danger";
  children?: ReactNode;
}) => {
  const extraClass = `alert-${variant}`;
  return <div className={`alert ${extraClass}`}>{children}</div>;
};

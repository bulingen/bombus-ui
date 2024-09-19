import { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-[500px] p-xl flex items-center justify-center space-x-2 bg-page">
      {children}
    </div>
  );
};

const getSizeClass = (
  size: "lg" | "md" | "sm" = "md"
): "" | "btn-sm" | "btn-lg" => {
  return size === "md" ? "" : size === "lg" ? "btn-lg" : "btn-sm";
};

type ButtonProps = { size: "lg" | "md" | "sm" };

const PrimaryButton = (props: ButtonProps) => {
  const sizeClass = getSizeClass(props.size);
  return <button className={`btn btn-primary ${sizeClass}`}>Primary</button>;
};
const OutlineButton = (props: ButtonProps) => {
  const sizeClass = getSizeClass(props.size);
  return <button className={`btn btn-outline ${sizeClass}`}>Outline</button>;
};
const DefaultButton = (props: ButtonProps) => {
  const sizeClass = getSizeClass(props.size);
  return <button className={`btn btn-ghost ${sizeClass}`}>Ghost</button>;
};
const GhostButton = (props: ButtonProps) => {
  const sizeClass = getSizeClass(props.size);
  return <button className={`btn ${sizeClass}`}>Default</button>;
};

const IconButton = (props: ButtonProps) => {
  const sizeClass = getSizeClass(props.size);
  const iconSide =
    props.size === "lg" ? "size-6" : props.size === "md" ? "size-5" : "size-4";
  return (
    <button className={`btn btn-square ${sizeClass}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={iconSide}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    </button>
  );
};
const IconAndTextButton = (props: ButtonProps) => {
  const sizeClass = getSizeClass(props.size);
  const iconSide =
    props.size === "lg" ? "size-6" : props.size === "md" ? "size-5" : "size-4";
  return (
    <button className={`btn btn-primary ${sizeClass}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={iconSide}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
      <span>Icon and text</span>
    </button>
  );
};

const DangerButton = (props: ButtonProps) => {
  const sizeClass = getSizeClass(props.size);
  const iconSide =
    props.size === "lg" ? "size-6" : props.size === "md" ? "size-5" : "size-4";
  return (
    <button className={`btn btn-danger ${sizeClass}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={iconSide}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
      Danger
    </button>
  );
};

const AllButtons = () => {
  return (
    <div className="flex flex-col space-y-lg">
      <div className="flex items-center space-x-sm">
        <PrimaryButton size="md" />
        <OutlineButton size="md" />
        <DefaultButton size="md" />
        <GhostButton size="md" />
        <IconButton size="md" />
      </div>
      <div className="flex items-center space-x-sm">
        <PrimaryButton size="lg" />
        <OutlineButton size="lg" />
        <DefaultButton size="lg" />
        <GhostButton size="lg" />
        <IconButton size="lg" />
      </div>
      <div className="flex items-center space-x-sm">
        <PrimaryButton size="sm" />
        <OutlineButton size="sm" />
        <DefaultButton size="sm" />
        <GhostButton size="sm" />
        <IconButton size="sm" />
      </div>
      <div className="flex items-center space-x-sm">
        <IconAndTextButton size="md" />
        <DangerButton size="md" />
      </div>
    </div>
  );
};

const ButtonDemo = () => {
  return (
    <div className="flex flex-col">
      <div data-theme="light">
        <Container>
          <AllButtons />
        </Container>
      </div>
      <div data-theme="dark">
        <Container>
          <AllButtons />
        </Container>
      </div>
      <div data-theme="christmas">
        <Container>
          <AllButtons />
        </Container>
      </div>
    </div>
  );
};

const ButtonsPage = () => {
  return <ButtonDemo />;
};

export default ButtonsPage;

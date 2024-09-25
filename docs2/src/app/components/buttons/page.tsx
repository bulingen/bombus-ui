import { ReactNode } from "react";
import {
  DangerButton,
  DefaultButton,
  GhostButton,
  IconAndTextButton,
  IconButton,
  OutlineButton,
  PrimaryButton,
} from "./buttons";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-[500px] p-xl flex items-center justify-center space-x-2 bg-page">
      {children}
    </div>
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

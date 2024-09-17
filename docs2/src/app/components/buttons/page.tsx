import { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="h-[200px] w-[500px] flex items-center justify-center space-x-2">
      {children}
    </div>
  );
};

const PrimaryButton = () => {
  return <button className="btn btn-primary">Click me</button>;
};
const SecondaryButton = () => {
  return <button className="butn">Click me</button>;
};
const FlatButton = () => {
  return <button className="btn btn-flat">Click me</button>;
};
const QuietButton = () => {
  return <button className="btn btn-quiet">Click me</button>;
};

const ButtonDemo = () => {
  return (
    <div className="flex flex-col">
      <div data-theme="light">
        <Container>
          <PrimaryButton />
          <SecondaryButton />
          <FlatButton />
          <QuietButton />
        </Container>
      </div>
      <div data-theme="dark">
        <Container>
          <PrimaryButton />
          <SecondaryButton />
          <FlatButton />
          <QuietButton />
        </Container>
      </div>
      <div data-theme="christmas">
        <Container>
          <PrimaryButton />
          <SecondaryButton />
          <FlatButton />
          <QuietButton />
        </Container>
      </div>
      <div data-theme="toony">
        <Container>
          <PrimaryButton />
          <SecondaryButton />
          <FlatButton />
          <QuietButton />
        </Container>
      </div>
    </div>
  );
};

const ButtonsPage = () => {
  return <ButtonDemo />;
};

export default ButtonsPage;

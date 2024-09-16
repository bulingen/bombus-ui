import { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="h-[200px] w-[500px] flex items-center justify-center space-x-2 bg-base-100">
      {children}
    </div>
  );
};

const Button = () => {
  return (
    <>
      <button className="btn btn-primary">Click me</button>
      <button className="btn btn-secondary">Click me</button>
    </>
  );
};

const ButtonDemo = () => {
  return (
    <div className="flex flex-col">
      <div data-theme="light">
        <Container>
          <Button />
        </Container>
      </div>
      <div data-theme="dark">
        <Container>
          <Button />
        </Container>
      </div>
      <div data-theme="christmas">
        <Container>
          <Button />
        </Container>
      </div>
      <div data-theme="toony">
        <Container>
          <Button />
        </Container>
      </div>
    </div>
  );
};

const ButtonsPage = () => {
  return <ButtonDemo />;
};

export default ButtonsPage;

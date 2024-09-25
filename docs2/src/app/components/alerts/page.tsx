import { ReactNode } from "react";
import { Alert } from "./alerts";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-[1000px] p-xl flex items-center justify-center space-x-2 bg-page">
      {children}
    </div>
  );
};

const AlertsDemo = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <Alert variant="info" />
      <Alert variant="success" />
      <Alert variant="warning" />
      <Alert variant="danger" />
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

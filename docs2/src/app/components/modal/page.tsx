"use client";

import { ReactNode, useRef, useState } from "react";

const ModalDemo3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <style>
        {`

          
          .modall-backdrop {
            transition: all 0.2s ease-in-out;
            z-index: 1;
            background: black;
            opacity: 0;
            visibility: hidden;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .modall-backdrop.is-open {
            visibility: visible;
            opacity: 0.2;
          }
              
          .modall {
            transition: all 0.1s ease-in-out;
            z-index: 999;
            position: fixed;
            opacity: 0;
            visibility: hidden;
            transform: scale(0.95);
            margin-left: 0 !important;
            margin-right: 0 !important;
            border-radius: 12px;

          }
          .modall.is-open {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
          }
          `}
      </style>
      <button className="btn" onClick={handleClick}>
        open modal
      </button>
      {/* <div className="modall-container"> */}
      <div
        onClick={handleClick}
        className={`modall-backdrop ${isOpen ? "is-open" : ""}`}
      ></div>
      <div
        className={`modall ${
          isOpen ? "is-open" : ""
        } bg-white p-md drop-shadow-lg`}
      >
        <div className="w-48 pb-sm text-xl font-bold">hahahahah</div>
        <div>heheh</div>
        <div>heheh</div>
        <div>heheh</div>
        <div>heheh gnsjaga ngjsajgna njgsangjkas</div>
      </div>
      {/* </div> */}
    </>
  );
};

const ModalDemo2 = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const handleButtonClick = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  const handleDialogClick = () => {
    console.log("Clicked");
    if (modalRef.current) {
      // modalRef.current.close();
    }
  };
  return (
    <>
      <button className="btn" onClick={handleButtonClick}>
        open modal
      </button>
      {/* <dialog ref={modalRef} className="modal" onClick={handleDialogClick}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog> */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box bg-white">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </>
  );
};

{
  /* <button class="btn" onclick="my_modal_2.showModal()">
  open modal
</button>; */
}

const ModalDemo = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleButtonClick = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <button
        className="btn btn-ghost"
        // onClick={() => document.getElementById("my_modal_1").showModal()}
        onClick={handleButtonClick}
      >
        Open modal
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-frame">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-[500px] p-xl flex items-center justify-center space-x-2 bg-page">
      {/* <div className="bg-page"> */}
      {children}
    </div>
  );
};

const Page = () => {
  return (
    <>
      <div className="flex flex-col">
        <div data-theme="light">
          <Container>
            <ModalDemo3 />
          </Container>
        </div>
        <div data-theme="light">
          <Container>
            <ModalDemo2 />
          </Container>
        </div>
        <div data-theme="dark">
          <Container>
            <ModalDemo />
          </Container>
        </div>
        <div data-theme="christmas">
          <Container>
            <ModalDemo />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Page;

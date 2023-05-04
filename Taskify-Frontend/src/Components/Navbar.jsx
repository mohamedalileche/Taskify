import React from "react";
import { useState } from 'react';
import Modal from 'react-modal';
import NewProject from "../Components/NProject";

Modal.setAppElement("#root");

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }


  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              Taskify
            </a>
            <button onClick={openModal} className=" rounded text-white">Ajouter</button>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
              <NewProject/>
              <button onClick={closeModal}>Fermer</button>
            </Modal>
            
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

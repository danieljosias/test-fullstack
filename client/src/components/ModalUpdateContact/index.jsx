import React from 'react'
import ModalUpdateContactContent from '../ModalUpdateContactContent'
import Modal from 'react-modal'
import { customStyles } from '../../styles/customStyles'

export default function ModalUpdateContact({modalUpdateContact,handleCloseModal,contact}) {
  return (
    <div>
      <Modal
        isOpen={modalUpdateContact}
        onRequestClose={handleCloseModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalUpdateContactContent handleCloseModal={handleCloseModal} contact={contact}/>
      </Modal>
    </div>
  )
}

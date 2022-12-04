import React from 'react'
import ModalUpdateClientContent from '../ModalUpdateClientContent'
import Modal from 'react-modal'
import { customStyles } from '../../styles/customStyles'

export default function ModalUpdateClient({handleCloseUpdateModal,modalUpdateCliente,client}) {
  return (
    <div>
      <Modal
        isOpen={modalUpdateCliente}
        onRequestClose={handleCloseUpdateModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalUpdateClientContent handleCloseUpdateModal={handleCloseUpdateModal} client={client}/>
      </Modal>
    </div>
  )
}

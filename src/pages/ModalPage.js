import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
    <Button onClick={handleClose} primary>
      Accept
    </Button>
  )

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is something!</p>
    </Modal>
  )

  return (
    <div className='relative'>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  )
}

export default ModalPage

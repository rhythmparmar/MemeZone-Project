import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalTitle} from 'react';

const Model = (props)=>{
  const [modal,setmodal] = useState(props.open)
  if(!(props.open)){
    return null;
  }
    return(
      // // <div>
      // <div>
      //   // <Modal 
        //   size='lg'
        //   isOpen={modal}
        //   toggle={()=>setmodal(!modal)}
        // >
        // <ModalHeader>
        //   <ModalTitle>Modal heading</ModalTitle>
        // </ModalHeader>
        // <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
      //   {/* <Modal.Footer>
      //     <Button variant="secondary" onClick={handleClose}>
      //       Close
      //     </Button>
      //     <Button variant="primary" onClick={handleClose}>
      //       Save Changes
      //     </Button>
      //   </Modal.Footer> */}
      // // </Modal>
      <div>
       <div className='overlay' style={{backgroundColor:'grey', textAlign:'center'}}>
        <div className='modelheader' style={{marginBottom:'50px'}}>
            <h1>{props.post.title}</h1>
        </div>
        <div className='modelContainer' style={{justifyContent:"center"}}>
            {/* <div>Model</div> */}
            <h1><img style={{width:"50%", maxheight:"500px"}}src={props.post.url}></img></h1>
        </div>
       </div>
     </div>
     
       
    )
}

export default Model
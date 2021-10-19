import react from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateHouse } from './redux/action/HOUSEAction';
import { Modal ,Button} from 'react-bootstrap';
import '../App.css'

export const Edit=({el, _id}) =>{
     const dispatch = useDispatch()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [update,setUpdate]=useState({
        titre:el.titre,
        discription:el.discription,
        type:el.type,
        adress:el.adress,
        image:el.image,
        prix:el.prix
        
      })
      const handleChange=(e)=>{
        const {name,value}=e.target;
        setUpdate({...update,[name]:value})
      
      }
      const EditHouse= () =>{
        dispatch(
          updateHouse(
            _id,
            update.titre,
            update.discription,
          update.type,
          update.adress,
          update.prix,
          update. image
          )
        )
      setShow(false)
      }
    return (
      <>
      
        <Button variant="primary" onClick={handleShow} id='button-header' style={{width:"100px"}} >
          edit
        </Button>
  
      <Modal show={show} onHide={handleClose} animation={false} id='button-header'>
          <Modal.Header closeButton>
            <Modal.Title>logemment à editer :</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
                  <input type="text"
                  name="titre"
                  defaultValue={el.titre}
                  onChange={handleChange}
                  />
                     <input type="text"
                  name="discription"
                  defaultValue={el.discription}
                  onChange={handleChange}
                  />
                     <input type="text"
                  name="type"
                  defaultValue={el.type}
                  onChange={handleChange}
                  placeholder="titre"
                  />
                     <input type="text"
                  name="prix"
                  defaultValue={el.prix}
                  onChange={handleChange}
                  />

              </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}id='button-header'>
              Close
            </Button>
            <Button variant="primary" onClick={EditHouse}id='button-header'>
              
              Save it
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
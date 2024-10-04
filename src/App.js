import logo from "./logo.svg";
import "./App.css";
import {Modal} from "react-bootstrap"
import { useState } from "react";

function App() {
  const [modal,setModal]=useState(false)

  const handleModal=()=>{
    setModal(true)
    setTimeout(()=>{
      setModal(false)
    },500)
  }


  return (

    <div>
    <div className="container cont1 mt-3 pt-5 pb-3">
  <h2 className="d-flex justify-content-center">Weight and Balance</h2>
  <hr style={{ marginTop: "20px", border: "1px solid #ffffff" }} />

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>1. Basic empty weight</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" />
      <span className="mx-1"> * </span>
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={""} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>2. Usable fuel</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" />
      <span className="mx-1"> * </span>
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={""} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>3. Pilot and front passenger</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" />
      <span className="mx-1"> * </span>
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={""} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>4. Second row passengers</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" />
      <span className="mx-1"> * </span>
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={""} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>5. Baggage (Area-A)</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" />
      <span className="mx-1"> * </span>
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={""} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>6. Baggage (Area-B)</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" />
      <span className="mx-1"> * </span>
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={""} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>7. Ramp weight and movement</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" />
      <span className="mx-1"> * </span>
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={""} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>8. Fuel allowance engine start, taxi and runup</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" />
      <span className="mx-1"> * </span>
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={""} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>9. Take off weight and movement</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" />
      <span className="mx-1"> * </span>
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={""} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <hr />
  <div className="d-flex justify-content-end">
    <button onClick={handleModal} className="btn btn-primary">Start Calculation</button>
  </div>
</div>

      <div className="container cont1 mt-1 pt-2 pb-3">
      <h4 className="d-flex justify-content-center">Results</h4>
      </div>
       <Modal show={modal} centered style={{}}>
          <Modal.Body style={{height:"20rem",backgroundColor:'black'}}>
            Calculating.....
          </Modal.Body>
        </Modal>
    </div>
  );
}

export default App;

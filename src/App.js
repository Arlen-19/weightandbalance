import "./App.css";
import {Modal} from "react-bootstrap"
import { useState } from "react";

function App() {
  const [modal,setModal]=useState(false)
  const [movementBEW,setMovementBEW]=useState()
  const [movementUF,setMovementUF]=useState()
  const [movementPFP,setMovementPFP]=useState()
  const [movementSRP,setMovementSRP]=useState()
  const [movementBA,setMovementBA]=useState()
  const [movementBB,setMovementBB]=useState()
  const [movementFA,setMovementFA]=useState()

  const arm={
    bew:85,
    uf:157.5,
    pfp:35.4,
    srp:57,
    bA:78.7,
    bB:98.4,
    fa:157.5
  }

  const handleModal=()=>{
    setModal(true)
    setTimeout(()=>{
      setModal(false)
    },1000)
  }

  const getMovement=(e)=>{
    if (e.target.name=="bew") {
      setMovementBEW(e.target.value*arm[e.target.name]) 
    }else if(e.target.name=="uf"){
      setMovementUF(e.target.value*arm[e.target.name])
    }else if(e.target.name=="pfp"){
      setMovementPFP(e.target.value*arm[e.target.name])
    }else if(e.target.name=="srp"){
      setMovementSRP(e.target.value*arm[e.target.name])
    }else if(e.target.name=="bA"){
      setMovementBA(e.target.value*arm[e.target.name])
    }else if(e.target.name=="bB"){
      setMovementBB(e.target.value*arm[e.target.name])
    }else if(e.target.name=="fa"){
      setMovementFA(e.target.value*arm[e.target.name])
    } 
  }

  

  return (

    <div>
    <div className="container cont1 mt-3 pt-5 pb-3">
  <h2 className="d-flex justify-content-center">Weight and Balance</h2>
  <hr style={{ marginTop: "20px", border: "1px solid #ffffff" }} />

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>1. Basic empty weight</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" name="bew" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
      <span className="mx-1"> * </span>
      <input type="text" value={arm.bew} className="form-control me-1 mb-2 mb-md-0"  placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={movementBEW<=0?"":movementBEW } className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>2. Usable fuel</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" name="uf" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
      <span className="mx-1"> * </span>
      <input type="text" value={arm.uf} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={movementUF} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>3. Pilot and front passenger</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" name="pfp"  className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
      <span className="mx-1"> * </span>
      <input type="text" value={arm.pfp} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={movementPFP} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>4. Second row passengers</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" name="srp" className="form-control me-1 mb-2 mb-md-0" placeholder="weight"  onChange={getMovement}/>
      <span className="mx-1"> * </span>
      <input type="text" value={arm.srp} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={movementSRP} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>5. Baggage (Area-A)</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" name="bA" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
      <span className="mx-1"> * </span>
      <input type="text" value={arm.bA} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={movementBA} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>6. Baggage (Area-B)</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" name="bB"  className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
      <span className="mx-1"> * </span>
      <input type="text" value={arm.bB} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={movementBB} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>7. Ramp weight and movement</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight"/>
      <span className="mx-1"> * </span>
      <input type="text" value={0} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={""} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>8. Fuel allowance engine start, taxi and runup</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" name="fa" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
      <span className="mx-1"> * </span>
      <input type="text" value={arm.fa} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
      <span className="mx-1"> = </span>
      <input type="text" value={movementFA} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
    </div>
  </div>

  <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
    <div>9. Take off weight and movement</div>
    <div className="d-flex flex-column flex-md-row align-items-center">
      <input type="number" className="form-control me-1 mb-2 mb-md-0" placeholder="weight"/>
      <span className="mx-1"> * </span>
      <input type="text" value={0} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
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
//./node_modules/.bin/react-scripts start

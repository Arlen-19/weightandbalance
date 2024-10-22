import "./App.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [movementoew, setMovementoew] = useState(0);
  const [movementfp, setMovementfp] = useState(0);
  const [movementmp, setMovementmp] = useState(0);
  const [movementap, setMovementap] = useState(0);
  const [movementBA, setMovementBA] = useState(0);
  const [movementBB, setMovementBB] = useState(0);
  const [movementwft, setMovementwft] = useState(0);
  const [movementcft,setMovementcft]=useState(0)

  const [rampM, setRampM] = useState(0);
  const [rampW, setRampW] = useState(0); // Updated to hold the sum of weights
  const [weightAwft,setWeightAwft]=useState(0)
  const [result,setResult]=useState(false)

  const arm = {
    oew:35.4,
    fp:-31,
    mp:63,
    ap:96,
    bA:37,
    bB:71,
    wft:35,
    cft:47
  };

  const handleModal = () => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
      setResult(true)
      
    }, 1000);
  };

  const getMovement = (e) => {
    const weight = parseFloat(e.target.value) || 0;
    let newMovement;

    switch (e.target.name) {
      case "oew":
        newMovement = weight * arm[e.target.name];
        setMovementoew(newMovement);
        break;
      case "fp":
        newMovement = weight * arm[e.target.name];
        setMovementfp(newMovement);
        break;
      case "mp":
        newMovement = weight * arm[e.target.name];
        setMovementmp(newMovement);
        break;
      case "ap":
        newMovement = weight * arm[e.target.name];
        setMovementap(newMovement);
        break;
      case "bA":
        newMovement = weight * arm[e.target.name];
        setMovementBA(newMovement);
        break;
      case "bB":
        newMovement = weight * arm[e.target.name];
        setMovementBB(newMovement);
        break;
      case "wft":
        newMovement = weight * arm[e.target.name];
        setMovementwft(newMovement);
        setWeightAwft(weight)
        break;
      case "cft":
        newMovement = weight * arm[e.target.name];
        setMovementcft(newMovement);
        console.log(newMovement)
        // setWeightAwft(weight)
        break;
      default:
        break;
    }

    // Calculate the total weight and movement sums using current state values
    const totalWeight = (
      parseFloat(document.querySelector('[name="oew"]').value || 0) +
      parseFloat(document.querySelector('[name="fp"]').value || 0) +
      parseFloat(document.querySelector('[name="mp"]').value || 0) +
      parseFloat(document.querySelector('[name="ap"]').value || 0) +
      parseFloat(document.querySelector('[name="bA"]').value || 0) +
      parseFloat(document.querySelector('[name="bB"]').value || 0) +
      parseFloat(document.querySelector('[name="wft"]').value || 0) +
      parseFloat(document.querySelector('[name="cft"]').value || 0)
    );
    // console.log(totalWeight)

    // let movementSum = movementoew + movementfp + movementmp + movementap + movementBA + movementBB + movementwft + movementcft;

    const movementSum = (
      (e.target.name === "oew" ? newMovement : movementoew) +
      (e.target.name === "fp" ? newMovement : movementfp) +
      (e.target.name === "mp" ? newMovement : movementmp) +
      (e.target.name === "ap" ? newMovement : movementap) +
      (e.target.name === "bA" ? newMovement : movementBA) +
      (e.target.name === "bB" ? newMovement : movementBB) +
      (e.target.name === "wft" ? newMovement : movementwft) +
      (e.target.name === "cft" ? newMovement : movementcft)
  );
    console.log(movementoew + movementfp + movementmp + movementap + movementBA + movementBB + movementwft)
    console.log(movementcft)

    setRampW(totalWeight); // Update the ramp weight (total weight)
    setRampM(movementSum); // Update the ramp movement (total movement)
  };

  const CGCalculator=(cg)=>{
    
    if (cg>36.0 && cg<40.0) {
        return "The aircraft is Safe to fly" 
    } else {
      if (cg<387) {
        return "The aircraft is not Safe to fly!! remove the weight from Forword of aircraft"
      }else{
        return "The aircraft is not Safe to fly!! remove the weight from Aft of aircraft"
      }
    }
  }

  return (
    <div>
      <div className="container cont1 mt-3 pt-5 pb-3">
        <h2 className="d-flex justify-content-center">Weight and Balance</h2>
        <h5>Cessna 310R</h5>
        <hr style={{ marginTop: "20px", border: "1px solid #ffffff" }} />

        <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
          <div>1. Basic empty weight</div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <input type="number" name="oew" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
            <span className="mx-1"> * </span>
            <input type="text" value={arm.oew} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
            <span className="mx-1"> = </span>
            <input type="text" value={movementoew <= 0 ? "" : movementoew} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
          </div>
        </div>

        <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
          <div>2. Nose Baggage</div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <input type="number" name="fp" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
            <span className="mx-1"> * </span>
            <input type="text" value={arm.fp} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
            <span className="mx-1"> = </span>
            <input type="text" value={!movementfp?"":movementfp} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
          </div>
        </div>

        <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
          <div>3. Wing Locker</div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <input type="number" name="mp" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
            <span className="mx-1"> * </span>
            <input type="text" value={arm.mp} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
            <span className="mx-1"> = </span>
            <input type="text" value={!movementmp?"":movementmp} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
          </div>
        </div>

        <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
          <div>4. Cabin Compartment</div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <input type="number" name="ap" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
            <span className="mx-1"> * </span>
            <input type="text" value={arm.ap} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
            <span className="mx-1"> = </span>
            <input type="text" value={!movementap?"":movementap} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
          </div>
        </div>

        <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
          <div>5. First row</div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <input type="number" name="bA" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
            <span className="mx-1"> * </span>
            <input type="text" value={arm.bA} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
            <span className="mx-1"> = </span>
            <input type="text" value={!movementBA?"":movementBA} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
          </div>
        </div>

        <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
          <div>6. Second row(Bench)</div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <input type="number" name="bB" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
            <span className="mx-1"> * </span>
            <input type="text" value={arm.bB} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
            <span className="mx-1"> = </span>
            <input type="text" value={!movementBB?"":movementBB} className="form-control mb-2 mb-md-0" placeholder="Movementum" />
          </div>
        </div>

        <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
          <div>7. Main Wing Tanks</div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <input type="number" id="rampvalues" name="wft" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
            <span className="mx-1"> * </span>
            <input type="text" value={arm.wft} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
            <span className="mx-1"> = </span>
            <input type="text" value={!movementwft?"":movementwft} className="form-control mb-2 mb-md-0" placeholder="Movementum" readOnly />
          </div>
        </div>

        <div className="mt-3 d-flex flex-column flex-md-row justify-content-between inp1">
          <div>8. Auxiliary Wing Tanks</div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <input type="number" name="cft" className="form-control me-1 mb-2 mb-md-0" placeholder="weight" onChange={getMovement} />
            <span className="mx-1"> * </span>
            <input type="text" value={arm.cft} className="form-control me-1 mb-2 mb-md-0" placeholder="Arm" />
            <span className="mx-1"> = </span>
            <input type="text" value={!movementcft?"":movementcft}  className="form-control mb-2 mb-md-0" placeholder="Movementum" />
          </div>
        </div>

        <hr />
        <div className="d-flex justify-content-end">
          <button type="submit" onClick={()=>window.location.reload()} className="btn btn-primary mx-3">Reset</button>
          <button type="submit" onClick={handleModal} className="btn btn-primary">Start Calculation</button>
        </div>
      </div>
      <div className="container cont1 mt-1 pt-2 pb-3">
        <h4 className="d-flex justify-content-center mb-4">Results</h4>
        {result && 
        <div>
            <div className="d-flex justify-content-between">
                <div>Take off weight = {rampW}</div> 

                <div>Take off Movementum = {rampM}</div>
  
                <div>CG = {((rampM)/(rampW)).toFixed(2)}</div>
            </div>
                <br/>
                {CGCalculator(((rampM)/(rampW)).toFixed(2))}
         </div>
        }
      </div>

      <Modal show={modal} centered>
        <Modal.Body style={{ height: "20rem", backgroundColor: 'black' }}>
          Calculating.....
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;

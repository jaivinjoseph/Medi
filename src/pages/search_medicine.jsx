import React, { useState } from 'react';
import './search_medicine.css';

const Searchmedicine = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPincode, setSelectedPincode] = useState('');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePincodeSelect = (e) => {
    setSelectedPincode(e.target.value);
    setShowDropdown(false);
  };

  return (
    <div>
      <div className='medd'>
        <h1 className="med">Search Medicine</h1>
      </div>
      <div className='boxx'>
        <div className='box'>
          <h2 className="meddi">Search Medicine</h2>
          <div className='w_bx'>
            <div className='w_bxx'>
              <div className="dropdown1">
                <div className="selected-pincode" onClick={toggleDropdown}>
                  {selectedPincode ? selectedPincode : "Select Pincode ︾"}
                </div>
                {showDropdown && (
                  <div className="dropdown-content1">
                    <button value="680121" onClick={handlePincodeSelect} className='value_drop'>680121</button>
                    <button value="680123" onClick={handlePincodeSelect} className='value_drop'>680123</button>
                    <button value="680125" onClick={handlePincodeSelect} className='value_drop'>680125</button>
                  </div>
                )}
              </div>
              <input type="text" id="medicineInput" placeholder="Search Medicine" className='search'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchmedicine;

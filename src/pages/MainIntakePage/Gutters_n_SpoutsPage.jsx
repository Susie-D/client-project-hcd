import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './_intakeForm.scss';

// CUSTOM COMPONENTS
import IntakeFormBase from '../../components/IntakeForm/IntakeFormBase';

function Gutters_n_SpoutsPage (){
    const history = useHistory();
  return (
    <PageLayout>
      <div className="login-container">
        <div className="row jc-center">
          <Logo />
        </div>
        <IntakeFormBase />
        {/* <> $ additional_device_info will go here! </> */}
        <div className="row jc-center">
            <button
                type="button"
                onClick={() => {
                history.push('/tracking-intake');
                }}
            >Next
            </button>
        <p></p>
            <button 
                className="btn"
                onClick={() => {
                    history.push('/user');
                    }}
                >Back
            </button>
        </div>
      </div>
    </PageLayout>
  );
}''

export default Gutters_n_SpoutsPage;
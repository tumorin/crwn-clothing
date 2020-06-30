
import React from 'react';
import {SpinnerOverlay,SpinnerContainer} from './with-styles';

const WithSpinner = WrappedComponent => {

 const Spinner = ({isLoading,...otherProps}) => {
    console.log(otherProps)
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps}/>
    )
}
return Spinner;
}

export default WithSpinner;
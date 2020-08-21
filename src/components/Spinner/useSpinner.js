import React, { useState } from 'react'
import Spinner from './Spinner.js'

const useSpinner = props => {
    const [visible, setVisibile] = useState(false)

    const showSpinner = () => setVisibile(true)
    const hideSpinner = () => setVisibile(false)
    const spinner = visible ? <Spinner /> : null

    return [spinner, showSpinner, hideSpinner]
}

export default useSpinner;
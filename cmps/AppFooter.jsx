const { useState, useEffect } = React
const { useSelector, useDispatch } = ReactRedux

import { UserMsg } from './UserMsg.jsx'

export function AppFooter() {

    return (
        <footer>
            <h5>
              this is a footer
            </h5>
          
            <UserMsg />
        </footer>
    )
}

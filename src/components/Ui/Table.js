import { useMemo } from "react"
import { useCallback } from "react"
import { useState } from "react"
import TableRow from "./TableRow"

const Table = () =>{
    const [count, setCount] = useState(0)
    const [obj, setObj] = useState({a: 1, b: 2})

    const table = useMemo(() => ({
        tr: '1',
        td: '2'
    }), [])

    const fn1 = useCallback(fn, [])

    function fn() {
        console.log('Render')
    }

    return(
        <div>
            <TableRow row={table} customFn={fn1}  />
            <button type="button" onClick={()=> setCount(count => ++count)} style={{padding: '10px'}}>{count}</button>
        </div>
    )
}

export default Table
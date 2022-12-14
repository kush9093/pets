import { useEffect } from "react";
import { useRef } from "react";
import "./search.css"

function Search({ onSearch, data,onExit }) {

    const bgnde = useRef();
    const endde = useRef();
    const select = useRef();
    const kind = useRef();
    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        endde.current.value = today;
    })


    let a = data.map((elm) => {
        return <option value={elm.orgCd} key={elm.orgCd}>{elm.orgdownNm}</option>
    })


    const searchHandle = (event) => {
        event.preventDefault();

        onSearch(bgnde.current.value.replaceAll("-", ""), endde.current.value.replaceAll("-", ""),select.current.value,kind.current.value)


    };

    return (<div className="top">
        <form onSubmit={searchHandle}>
        <button className="buttonClass mb" onClick={onExit}>πΎ</button>
            <select ref={kind} className="inputClass">
                <option selected value="">λͺ¨λ</option>
                <option value="417000">κ°</option>
                <option value="422400">κ³ μμ΄</option>
                <option value="429900">κΈ°ν</option>
            </select>
            <input className="inputClass" type="date" ref={bgnde} />
            ~
            <input className="inputClass" type="date" ref={endde} />
            <span> </span>
            <select className="inputClass" ref={select}>
                {a}
            </select>
            <button className="buttonClass sb" type="submit">π</button>
        </form>

    </div>);
}

export default Search;
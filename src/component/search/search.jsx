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
        <button className="buttonClass mb" onClick={onExit}>🐾</button>
            <select ref={kind} className="inputClass">
                <option selected value="">모두</option>
                <option value="417000">개</option>
                <option value="422400">고양이</option>
                <option value="429900">기타</option>
            </select>
            <input className="inputClass" type="date" ref={bgnde} />
            ~
            <input className="inputClass" type="date" ref={endde} />
            <span> </span>
            <select className="inputClass" ref={select}>
                {a}
            </select>
            <button className="buttonClass sb" type="submit">🔍</button>
        </form>

    </div>);
}

export default Search;
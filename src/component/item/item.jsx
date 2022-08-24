import "./item.css"


function Item({ data, onSelected }) {

    const noticeSdt = (data) => {
        let a = data.happenDt.slice(0,4)
        let b = data.happenDt.slice(4,6)
        let c = data.happenDt.slice(6,8)
        return [a,b,c].join(".");
    }

    return (<div className="item" onClick={()=> onSelected(data)}>
        <img src={data.filename} alt={"thumbnail"} className="thumbnail" />
        <div className="inform">
            <p>
                <b>{data.kindCd} ({data.colorCd})</b>
            </p>
            <p>
                <small>{data.orgNm} {data.happenPlace}</small>
            </p>
            <p style={{color:"gray"}}>
                <small>{noticeSdt(data)}</small>
            </p>
        </div>
    </div>);
}

export default Item;
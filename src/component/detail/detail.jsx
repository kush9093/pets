import "./detail.css"

function Detail({ target }) {
    const imgStyle = {
        backgroundImage: `url(${target.popfile})`,
        backgroundSize: "cover",
        height: "800px",
        width: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
    }
    return (<div className="detail">
        <div style={{ textAlign: "center" }}>
            <div style={imgStyle} className="detailimg"></div>
        </div>
        <div style={{textAlign:"center"}}>
            <table>
                <tbody style={{ textAlign: "center" }}>
                <tr>
                        <td rowSpan="3" colSpan="1">{target.careNm}</td>
                    </tr>
                    <tr>
                        <td>보호소전화번호</td>
                        <td>{target.careTel}</td>
                    </tr>
                    <tr>
                        <td>보호장소</td>
                        <td>{target.careAddr}</td>
                    </tr>
                </tbody>
            </table>
            <div style={{padding:"10px 10px"}}>
                <p>
                    <b>관할 기관</b> : {target.orgNm}
                    </p>
                    <p>
                       <b>담당자</b> : {target.changeNm}
                    </p>
                    <p>
                        <b>담당자연락처</b> : {target.officetel}
                    </p>
                    <p>
                        <b>접수일</b> : {target.happenDt}
                    </p>
                    <p>
                        <b>발견장소</b> : {target.happenPlace}
                    </p>
                    <p>
                        <b>품종</b> : {target.kindCd}
                    </p>
                    <p>
                        <b>색상</b> : {target.colorCd}
                    </p>
                    <p>
                        <b>나이</b> : {target.age}
                    </p>
                    <p>
                        <b>체중</b> : {target.weight}
                    </p>
                    <p>
                        <b>공고번호</b> : {target.noticeNo}
                    </p>
                    <p>
                        <b>공고시작일</b> : {target.noticeSdt}
                    </p>
                    <p>
                        <b>공고종료일</b> : {target.noticeEdt}
                    </p>
                    <p>
                        <b>상태</b> : {target.processState}
                    </p>
                    <p>
                        <b>성별</b> : {target.sexCd}
                    </p>
                    <p>
                        <b>중성화여부</b> : {target.neuterYn}
                    </p>
                    <p>
                        <b>특징</b> : {target.specialMark}
                    </p>
                    <p>
                        <b>특이사항</b> : {target.noticeComment}
                    </p>
            </div>
        </div>
    </div>

    );
}

export default Detail;
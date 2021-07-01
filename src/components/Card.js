const Card = ({img, title, value, other}) => {
    return (
        <>
                <div className="card mb-3 mx-2 text-center shadow" style={{minWidth: '18rem'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex align-items-center">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-evenly">
                                <h5 className="card-title fs-3">{title}</h5>
                                <p className="card-text fs-4 fw-bold">{value}</p>
                                <p className="card-text"><small className="text-muted">{other}</small></p>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Card
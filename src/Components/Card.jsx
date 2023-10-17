export default function Card(){
    return(
        <div className="d-md-flex mt-4 justify-content-around" >
            <div className="card col-md-5" >          
                <img className="card-img-top w-100" src="http://lorempixel.com.br/330/170/?3" alt="" />
                <div className="card-body" >
                    <p className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat iusto maxime aliquid architecto</p>
                </div>
            </div>
            <div className="card col-md-5" >          
                <img className="card-img-top w-100" src="http://lorempixel.com.br/330/170/?4" alt="" />
                <div className="card-body" >
                    <p className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat iusto maxime aliquid architecto</p>
                </div>
            </div>
        </div>
    )
}
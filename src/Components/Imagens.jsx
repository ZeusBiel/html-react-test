export default function Imagens(){
    return(
        <>
            <img src="https://picsum.photos/800/300/?1" alt="foto" className="img-fluid" />
            <hr />
            <img src="https://picsum.photos/300/200/?2" alt="foto" className="img-thumbnail" />
            <hr />
            <figure>
                <img src="https://picsum.photos/300/200/?3" alt="foto" className="rounded float-start img-fluid" />
                <img src="https://picsum.photos/300/200/?3" alt="foto" className="rounded float-end img-fluid " />
            </figure>
        </>
    )
}
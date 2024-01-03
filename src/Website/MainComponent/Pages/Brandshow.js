import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser'

const Brandshow = () => {
    const { http, user, token } = Authuser();

    const [Brands, setBrands] = useState([])
    const getSlider = () => {

        http.get(`/brands`).then((res) => {
            // console.log(res.data);
            setBrands(res.data.brands);

        });
    }
    useEffect(() => {
        getSlider()
    }, [])
    // pagenation
    const [pages, Setpages] = useState(1);

    const [Fromidx, SetFromidx] = useState(0);

    const [Index, SetIndex] = useState(6);

    function nextpage() {
        SetFromidx(Fromidx + 6);
        SetIndex(Index + 6);
        Setpages(pages + 1);
        const element = document.getElementById("section-1");
        if (element) {
            //  Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    function Previoupage() {
        SetFromidx(Fromidx - 6);
        SetIndex(Index - 6);
        Setpages(pages - 1);
        const element = document.getElementById("section-1");
        if (element) {
            //  Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <>
            <div className='container' id='section-1'>
                <div className='row ms-5'>
                    {Brands.slice(Fromidx, Index).map(item => (
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className="spinner  container1" >
                                <div className='inner'>
                                    <img className='image' src={item.brand_banner} alt={`Image ${item.id}`} />
                                    <div className='inner1'></div>
                                    <div className="middle">
                                        <div className="text text-center">
                                            <i className="fa-solid fa-link"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='name'><h5 style={{ paddingTop: '160px' }}>{item.brand_name}</h5></div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            {/* pagenation */}
            <nav aria-label="Page navigation example" style={{ marginTop: '60px' }}>
                <ul className="Page1 pagination justify-content-center custom-button">
                    <li className="page-item">
                        <button className="page-link custom-button" onClick={Previoupage}>
                            Previous
                        </button>
                    </li>
                    <li className="page-item disabled">
                        <a className="page-link custom-button" href="">
                            {" "}
                            Current Page -{pages}
                        </a>
                    </li>
                    <li className="page-item">
                        <button className="page-link custom-button" onClick={nextpage}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Brandshow

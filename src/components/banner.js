import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/book/two_perspective_book.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    <h1>
                                        <span className="first-block">
                                            <span>
                                                HEALTH
                                            </span>
                                        </span>

                                        <span className="second-block">
                                            <span id="color-o">
                                             is HERE
                                            </span>
                                        </span>
                                    </h1>
                                    <p>
                                    Health is Here is a natural approach to healing. My goal in this book is to empower those interested in supporting and nurturing their own health, reminding us to be more aware of and involve ourselves in more healthful practices. Our body inherently wants to heal, think of an open wound that closes.
                                    </p>

                                    <button>
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                    <img src={ImgBanner}/>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;
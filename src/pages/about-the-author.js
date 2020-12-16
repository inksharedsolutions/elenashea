import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'
import { Helmet } from "react-helmet"
const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
             <Helmet title="About the Author | Elena Shea M.D."/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                    
                                </h4>
                                
                                <span className="ata-span-fx">
                                    {/* author quote */}
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" 
                            id="author">

                            <p>
                            Elena S. Shea graduated with a Bachelor
                            of Science in Biomedical Science from
                            Texas A&M University in May of 1987.
                            She then received her M.D. from Texas
                            Tech University Health Science Center
                            in May of 1992. After an internship in
                            Transitional Anesthesiology she practiced
                            in General Medicine and Urgent Care
                            until 2000. She also completed a Masters
                            in Herbology from The School of Natural
                            Healing in Utah. She went on to finish a
                            residency in Family Medicine at Southwest
                            Oklahoma Family Medicine in 2009. She
                            currently practices medicine in Arizona.
                            She has seen great benefit of simple herbal
                            medicines and foods throughout her
                            career.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Elena Shea M.D.
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;
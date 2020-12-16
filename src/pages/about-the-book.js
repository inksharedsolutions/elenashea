import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/two_perspective_book.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'elena-shea-m-d',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="Abou the Book | Elena Shea M.D."/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Health is Here`,
                                    spanTitle: '',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `Health is Here is a natural approach to healing. My goal in this book is to empower those interested in supporting and nurturing their own health, reminding us to be more aware of and involve ourselves in more healthful practices. Our body inherently wants to heal, think of an open wound that closes. There are many foods and herbals that support healing of tissues. Using these with care and knowledge can assist in restoring health. These approaches are not a substitute for western medicine or medical care, but an effort to provide a basis for why and how foods and herbals can support healing and vitality.
                                    `,
                                    
                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/health-is-here/',
                                        barnes: 'https://www.barnesandnoble.com/w/health-is-here-elena-md-shea/1115424109?ean=9781648950827',
                                        amazon :'https://www.amazon.com/Health-Here-M-D-Elena-Shea-ebook/dp/B08CJNFCNN/ref=sr_1_1?dchild=1&keywords=9781648950827&qid=1608084793&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Health-Here-Elena-Shea-M/dp/1643450972/ref=sr_1_1?dchild=1&keywords=9781643450971&qid=1594651080&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/health-is-here-elena-md-shea/1115424109?ean=9781643450971',
                                        booksamillion:'https://www.booksamillion.com/p/Health-Here/Elena-Shea/9781643450971?id=8049069540563&_ga=2.82357398.1683990098.1607576522-2145380449.1604906972',
                                    }
                                }}
                            />
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;
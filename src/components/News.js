import React, { useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



const News=(props)=> {
const [articles,setArticles] = useState([]);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
const [totalResults, setTotalResults] = useState(0);
 // document.title=`${this.capitalizeFirstLetter(props.category)}-NewsL`;
const capitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const updatePage =async ()=>{
  props.setProgress(10);
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=ff85584625fc4e77b7153d734da9fd84&page=${page}&pageSize=${props.pageSize}`;

  props.setProgress(50);
    let data= await fetch(url);
   let parsedData=await data.json();
   props.setProgress(70);
   setArticles(parsedData.articles);
   setTotalResults(parsedData.totalResults);
   setLoading(false);
   props.setProgress(100);
}

useEffect(() => {
  updatePage(); 
  //eslint-disable-nextline-line
}, [])

const fetchMoreData = async() => {
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=ff85584625fc4e77b7153d734da9fd84&page=${page + 1}&pageSize=${props.pageSize}`;
  setPage(page+1);
   let data= await fetch(url);
   let parsedData=await data.json();
   setArticles(articles.concat(parsedData.articles));
   setTotalResults(parsedData.totalResults);
   setLoading(false); 
}


    return (
      <div className='bg-light'>
        
          <h2 className='text-center' style={{marginTop:'90px'}}>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
          {loading && <Spinner/>}
         
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}

        ><div className='container'>
          <div className='row'>
           {articles.map((element,index)=>{
            return  <div className='col-md-4' key={index}>
            <Newsitems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
           })}
          
          </div>
          </div>
          </InfiniteScroll>
       
        
       
        
      </div>
    )
}


News.defaultProps={
  country:"in",
  pageSize:3,
  category:"general"

}
News.propTypes={
  country : PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string

}
export default News
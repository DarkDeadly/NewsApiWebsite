import React, { useEffect, useState } from 'react'
import Headers from '../components/Headers'
import axios from "axios"
import News from '../components/News';
const Trending = () => {
  const [FetchDatas, setFetchDatas] = useState([]);

  const fetchData = async() => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-10-14&sortBy=publishedAt&apiKey=3cba808f014e48d9bc15fca8682be859")
    setFetchDatas(response.data)
  } catch (error) {
    console.log(error)
  }
  }
  useEffect(() => {
    fetchData()
  
  }, [])
  const startingData = FetchDatas.articles ? FetchDatas.articles[0] : null
    return (
    <div className="min-h-screen min-w-full">
      <Headers/>
      {startingData && (
        <div className="pb-2">
          <News NewsDatas={startingData} flexDirection='flex-row-reverse' height='h-full' maxlg='max-md:hidden'/>
        </div>
      )}
      <div className="w-full">
        {FetchDatas.articles && FetchDatas.articles.slice(2).reduce((acc, el, index) => {
          if (index % 4 === 0) {
            acc.push(
              <div className="grid gap-3 w-full grid-cols-3 mb-5 max-lg:grid-cols-2 max-sm:grid-cols-1" key={`grid-${index}`}>
                {FetchDatas.articles.slice(index + 2, index + 5).map((item, i) => (
                  <News
                    key={`news-${index + i}`}
                    NewsDatas={item}
                    flexDirection="flex-col"
                    width="w-full"
                    titleText="text-2xl"
                    height="h-full"
                    showbottomTitle={true}
                  />
                ))}
              </div>
            );
          }

          // Display each fourth item separately
          if ((index + 1) % 4 === 0) {
            acc.push(
              <div className="pb-2" key={`single-${index}`}>
                <News NewsDatas={el} height='h-full' maxlg='max-md:hidden' />
              </div>
            );
          }

          return acc;
        }, [])}
      </div>
    </div>
  )
}

export default Trending

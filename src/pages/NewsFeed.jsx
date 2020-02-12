import React, { useEffect, useState } from "react";
import { getAuthorizationHeader } from "../utils/helpers"
import { NewsCardsContainer } from "../components/Styles";
import NewsSearchInput from "../components/NewsSearchInput"
import NewsCard from "../components/NewsCard"
import axios from "axios";

const NewsFeed = (props) => {
    
    const [search, setSearch] = useState("");
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function getData() {
            if(search !== "" && search.length > 3) {
                const headers = getAuthorizationHeader();
                const response = await axios.get("http://127.0.0.1:4000/news/" + encodeURI(search), headers);
                setNews(response.data.hits);
            }
        }
        getData();
    }, [search]);

    const handleSearch = (value) => {
        setSearch(value);
    }

    return (
        <div>
            <NewsSearchInput handleChange={handleSearch} />
            <NewsCardsContainer>
                {news.map(function(article, i){
                    if(article.title){
                        return <NewsCard article={article} key={i} />;
                    }
                })}
            </NewsCardsContainer>
        </div>
    );
}

export default NewsFeed;
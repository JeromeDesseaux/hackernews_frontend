import React from "react";
import { Card } from "antd";
import { CardWrapper } from "../components/Styles";

const NewsCard = (props) => {
    const news = props.article; 
    console.log(news);
    // console.log("Rendering ...");
    return (
        <CardWrapper>
            <Card title={news.title} bordered={false} hoverable>
                <a href={news.url}>{news.url}</a>
            </Card>
        </CardWrapper>
    )
}

export default NewsCard;
import React from "react";
import '../App.css';

import ArticleContent from "./ArticleContent";
import ArticlesList from "../components/ArticlesList";



const ArticlesListPage = () => (
    <>
    <h1> Articles. </h1>
    <ArticlesList articles ={ArticleContent} />
    
    
    </>
)

export default  ArticlesListPage;
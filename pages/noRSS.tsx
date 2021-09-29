import React from "react";
import {Article} from "../src/Model";
import {buildFetch} from "../src/Network";
import {ArticlesGrid} from "../components/component/ArticlesGrid";
import {useTranslations} from "../src/Translations";

export async function getStaticProps({locale}) {
    const articles = await buildFetch("article", {lang: locale})
        .then(res => res.json())
    return {
        props: {articles},
        revalidate: 5 * 60
    }
}

export default function ArticlesPage({articles}: { articles: Article[] }) {
    const t = useTranslations()
    return (
        <>
            <ArticlesGrid articles={articles}/>
        </>
    );
}
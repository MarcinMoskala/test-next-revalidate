import React from "react";
import {Article} from "../src/Model";
import {buildFetch} from "../src/Network";
import {ArticlesGrid} from "../components/component/ArticlesGrid";
import {Feed} from "feed";
import fs from 'fs';
import {Lang, useTranslations} from "../src/Translations";

export async function getStaticProps({locale}) {
    const articles = await buildFetch("article", {lang: locale})
        .then(res => res.json())
    generateRssFeedFiles(articles, locale)
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

async function generateRssFeedFiles(articles: Article[], locale: string): Promise<void> {
    const feedSuffix = locale == Lang.EN ? "" : "-pl"
    const feed = generateRssFeed(articles, locale, feedSuffix)
    fs.writeFileSync(`public/rss${feedSuffix}.xml`, feed.rss2())
    fs.writeFileSync(`public/atom${feedSuffix}.xml`, feed.atom1())
}

export function generateRssFeed(articles: Article[], locale: string, feedSuffix: string): Feed {
    const feed = new Feed({
        title: "Kt. Academy" + (locale === Lang.PL ? " [PL]" : ""),
        description: "Best articles about programming and best practices.",
        id: "https://kt.academy/",
        link: "https://kt.academy/article",
        language: locale,
        image: "https://kt.academy/images/logo_full.png",
        favicon: "https://kt.academy/favicon.ico",
        copyright: "All rights reserved 2020, Marcin Moskała",
        // generator: "awesome", // optional, default = 'Feed for Node.js'
        feedLinks: {
            rss: `https://kt.academy/rss${feedSuffix}.xml`,
            atom: `https://kt.academy/atom${feedSuffix}.xml`,
        },
        author: {
            name: "Marcin Moskała",
            email: "marcinmoskala@gmail.com",
            link: "https://kt.academy/user/marcinmoskala"
        }
    });

    articles.forEach(article => {
        // const contentMd = enrichText(article)
        feed.addItem({
            title: article.title,
            id: article.key,
            link: "https://kt.academy/article/" + article.key,
            description: article.shortDescription,
            // content: article.contentMd,
            author: [
                {
                    name: "Author",
                    link: "https://kt.academy/user/publicKey"
                }
            ],
            contributor: [],
            date: new Date(article.publicationDate),
            image: article.thumbnailUrl,
        });
    });

    return feed
}
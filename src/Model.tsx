export type Article = {
    key: string
    title: string
    contentMd: string
    shortDescription: string
    thumbnailUrl: string
    visibility: ArticleVisibility
    series: ArticleSeries
    publicationDate: string | null
    prev: { key: string } | null
    next: { key: string } | null
}

export type ArticleSeries =
    "JS_OD_PODSTAW" |
    "PYTHON_OD_PODSTAW" |
    "EFFECTIVE_KOTLIN" |
    "KOTLIN_PROGRAMMER_DICTIONARY" |
    "KOTLIN_COROUTINES"

export type ArticleVisibility =
    "PUBLIC" |
    "PROTECTED" |
    "PRIVATE"
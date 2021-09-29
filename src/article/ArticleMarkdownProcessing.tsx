import {Article, ArticleSeries} from "../Model";

export function enrichText(article: Article) {
    const series = article.series;
    const seriesInfo = getSeriesInfo(series)
    const content = addBanners(removeTitle(article.contentMd), series)

    return `![](${article.thumbnailUrl})

# ${article.title}

${seriesInfo}
    
${content}`
}

function getSeriesInfo(series: ArticleSeries): string {
    switch (series) {
        case "JS_OD_PODSTAW":
            return "> Cześć! To jest fragment książki [JavaScript od podstaw](/book/js), która ma pomóc w nauce programowania od zera."
        case "EFFECTIVE_KOTLIN":
            return "> This is a chapter from the book [Effective Kotlin](/book/effectivekotlin). You can find it on [LeanPub](https://leanpub.com/effectivekotlin) or [Amazon](https://www.amazon.com/Effective-Kotlin-practices-Marcin-Moskala/dp/8395452837/ref=sr_1_1?dchild=1&keywords=effective+kotlin&qid=1615033955&sr=8-1)."
        case "KOTLIN_COROUTINES":
            return "> This is a chapter from the book [Kotlin Coroutines](/book/coroutines). You can find Early Access on [LeanPub](https://leanpub.com/coroutines/)."
        default:
            return ""
    }
}

function removeTitle(contentMd: string): string {
    return contentMd
        .replace(/(#+.*\n)/, '');
}

function addBanners(contentMd: string, series: string): string {
    switch (series) {
        case "JS_OD_PODSTAW":
            return contentMd
        case "EFFECTIVE_KOTLIN":
            return addBannersEvery(contentMd, 4, [
                "[![](/images/banners/ek_blue.jpg)](https://leanpub.com/effectivekotlin/)",
                "[![](/images/banners/follow_marcinmoskala.png)](https://twitter.com/marcinmoskala)",
                "[![](effective_25_10_2021.jpg)](/workshop/effectiveKotlin#register)",
                "[![](/images/banners/we_teach_programming.png)](/workshop)",
                // "[![](/images/banners/clean_code_workshop.png)](/workshop/refactoringToCleanCode)",
                "[![](/images/banners/coroutines_workshop.png)](/workshop/coroutines)",
                "[![](/images/banners/ek_orange.jpg)](https://leanpub.com/effectivekotlin/)",
                "[![](/images/banners/coroutines_7_10_2021.jpg)](/workshop/coroutines#register)",
                "[![](/images/banners/follow_kta.png)](https://twitter.com/ktdotacademy)",
                "[![](/images/banners/ek_workshop.png)](/workshop/effectiveKotlin)",
                // "[![](/images/banners/patterns_workshop.png)](/workshop/refactoringToPatterns)",
                "[![](/images/banners/we_teach_programming.png)](/workshop)",
                "[![](/images/banners/newsletter.png)](https://kotlin-academy.us17.list-manage.com/subscribe?u=5d3a48e1893758cb5be5c2919&id=d2ba84960a)",
            ])
        case "KOTLIN_COROUTINES":
            return addBannersEvery(contentMd, 3, [
                "[![](/images/banners/coroutines_workshop.png)](/workshop/coroutines)",
                "[![](/images/banners/follow_marcinmoskala.png)](https://twitter.com/marcinmoskala)",
                "[![](/images/banners/we_teach_programming.png)](/workshop)",
                "[![](/images/banners/coroutines_7_10_2021.jpg)](/workshop/coroutines#register)",
                "[![](/images/banners/follow_kta.png)](https://twitter.com/ktdotacademy)",
            ])
        default:
            return contentMd
    }
}

function addBannersEvery(contentMd: string, splits: number, banners: string[]): string {
    if (splits === 0 || banners.length === 0) {
        return contentMd
    }
    const titleRegex = /#{2,3}/gm
    const countTitles = (contentMd.match(titleRegex) || []).length
    const splitsTable = findSplits(countTitles, splits)
    const startIndex = Math.floor(banners.length * Math.random())
    let titleNum = 1 // The title is skipped anyway
    let bannerNum = 0
    return contentMd.replace(titleRegex, (match) => {
        if (splitsTable.includes(titleNum++)) {
            const banner = banners[(startIndex + bannerNum) % banners.length]
            bannerNum++
            return banner + "\n\n" + match
        }
        return match
    })
}


function findSplits(titles, splits) {
    const bannerEvery = Math.ceil(titles / (splits + 1))
    const ret = []
    for (let i = bannerEvery; i <= titles; i += bannerEvery) {
        ret.push(i)
        if (ret.length === splits) {
            return ret
        }
    }
    return ret
}

// findSplits(1, 1) // [1]
// findSplits(2, 2) // [1, 2]
// findSplits(3, 1) // [2]
// findSplits(5, 1) // [3]
// findSplits(5, 2) // [2, 4]
// findSplits(6, 2) // [2, 4]
// findSplits(7, 3) // [2, 4, 6]

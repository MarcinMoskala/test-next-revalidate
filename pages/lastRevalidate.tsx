import React from "react";
import {buildFetch} from "../src/Network";
import {useTranslations} from "../src/Translations";

export async function getStaticProps({locale}) {
    const time: any = await


        ("http://worldtimeapi.org/api/timezone/Europe/Warsaw")
        .then(res => res.json())
    return {
        props: {time: time.datetime},
        revalidate: 5 * 60
    }
}

export default function ArticlesPage({time}: { time: string }) {
    const t = useTranslations()
    return (
        <>
            {time}
        </>
    );
}
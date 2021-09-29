import React from "react";
import {useTranslations} from "../src/Translations";

export async function getStaticProps({}) {
    const time: any = await fetch("http://worldtimeapi.org/api/timezone/Europe/Warsaw", {
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).then(res => res.json())

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
import React from 'react';
import NextLink from "next/link";
import {useLang} from "./Translations";

export default function Link({to, ...rest}) {
    const children = rest.children
    if (to[0] === "#") {
        return <a href={to} {...rest}>{children}</a>
    } else {
        return <NextLink href={to}><a {...rest}>{children}</a></NextLink>
    }
}
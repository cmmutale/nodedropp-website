import { defineLive } from "next-sanity";
import {sanityClient} from "../lib/client";

export const { sanityFetch, SanityLive } = defineLive({
    client: sanityClient.withConfig({
        apiVersion: 'vX'
    })
})

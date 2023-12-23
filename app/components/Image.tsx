"use client";

import { useImage } from 'react-image'

export default function Image({ src, alt }: { src: string, alt: string }) {
    const image = useImage({
        srcList: src,
    })

    return (
        <>
            <img className='img-fluid ' src={image.src} alt={alt} />
        </>);
}
"use client";

import { useImage } from 'react-image'

export default function Image2({ src, alt }: { src: string, alt: string }) {
    return (
        <img className='img-fluid ' src={src} alt={alt} />
    );
}
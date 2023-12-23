import Image from 'next/image'

export default function Label({ text, img }: { text: string, img: string }) {
    return (
        <div className="label">
            <Image width={30} height={30} src={img} alt={text} style={{marginRight: '5px'}}/>
            <small className="centeredText text-muted"> {text}</small>
        </div>
    )
}
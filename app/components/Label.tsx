import Image from 'next/image'

const labelStyle = {
    marginTop: '15px',
    marginRight: '40px'
};

export default function Label({ text, img }: { text: string, img: string }) {
    return (
        <div style={labelStyle}>
            <Image width={24} height={24} src={img} alt={text} style={{marginRight: '5px'}}/>
            <small className="centeredText text-muted"> {text}</small>
        </div>
    )
}
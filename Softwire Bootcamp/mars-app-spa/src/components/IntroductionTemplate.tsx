
type Props = {
    header_title:string,
    image_src:string,
    image_alt:string,
    first_paragraph_content:string,
    second_paragraph_content:string
}

const IntroductionTemplate = ({header_title, image_src, image_alt, first_paragraph_content, second_paragraph_content}:Props) => {
    return (
        <div>
            <h1>{header_title}</h1>
            <img width="200px" src={image_src} alt={image_alt}/>
            <p>{first_paragraph_content}</p>
            <p>{second_paragraph_content}</p>
        </div>
    )

}


export default IntroductionTemplate;
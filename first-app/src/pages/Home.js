import { Paragraph } from "../components/Paragraph";
import { Image } from "../components/Image";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>Esta é a home</p>
            <Paragraph>Este paragrafo está sendo estilizado por styled-components</Paragraph>
            <Paragraph>Styled components melhor do que tailwind? polemics!</Paragraph>
            <Image size="small" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb1%2Fd1%2F04%2Fb1d10483aa64754a7b9c5769187c88f8.jpg&f=1&nofb=1&ipt=4301b65f5b263360194c1dfaa98aea6a4407c53cc39e0e8186e8c53fe4fcc7e0&ipo=images" />
        </>
    );
}
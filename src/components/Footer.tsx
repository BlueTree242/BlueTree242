import tw from "twin.macro";

export default function Footer() {
    return <div css={tw`bg-neutral-950 text-center text-lg`}>
        You can contact me via email <a href="mailto:contact@bluetree242.dev" target="_blank">contact@bluetree242.dev</a>
    </div>
}
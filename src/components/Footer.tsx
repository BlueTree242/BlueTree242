import tw from "twin.macro";

export default function Footer() {
    return <div css={tw`bg-neutral-900 text-center text-lg text-white`}>
        You can contact me via email <a href="mailto:contact@bluetree242.dev" target="_blank">contact@bluetree242.dev</a>
    </div>
}
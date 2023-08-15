import tw from "twin.macro";

export default function TopContainer() {
    return <>
        <div css={tw`lg:h-screen flex max-lg:mb-[5rem]`}>
            <div css={tw`lg:m-auto lg:flex block`}>
                <div css={tw`max-lg:w-full max-lg:flex`}>
                    <img src="/profile_picture.png" css={tw`lg:w-[50vh] lg:h-[50vh] lg:my-auto w-1/3 mx-auto mb-5 select-none pointer-events-none`} />
                </div>
                <div css={tw`lg:w-[60vh] w-full lg:ml-3`}>
                    <h1 css={tw`text-center text-blue-700 text-5xl`}>BlueTree242</h1>
                    <p css={tw`mt-5 text-lg text-center lg:text-left`}>
                        Hello there! I am BlueTree242, I code programs as a hobby.
                        I mostly make Minecraft/Discord related stuff.<br/><br/>
                        Some of my projects are open source and available on github! I know Java, JS, TS, React.JS, Node.js.
                        I don't know python because i don't really care about it.<br/><br/>
                        In this website you will find out about my projects and my activity!
                    </p>
                </div>
            </div>
        </div>
    </>;
}

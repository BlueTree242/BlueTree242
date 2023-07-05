import { block } from "million/react";
import tw from "twin.macro";

const TopContainer = block(function (){
    return <>
        <div css={tw`md:h-screen flex max-md:mb-[5rem]`}>
            <div css={tw`md:m-auto md:flex block`}>
                <div css={tw`max-md:w-full max-md:flex`}>
                    <img src="/profile_picture.png" css={tw`md:w-[50vh] md:h-[50vh] md:my-auto w-1/3 mx-auto mb-5 select-none pointer-events-none`} />
                </div>
                <div css={tw`md:w-[60vh] w-full md:ml-3`}>
                    <h1 css={tw`text-center text-blue-700 text-5xl`}>BlueTree242</h1>
                    <p css={tw`mt-5 text-lg text-center md:text-left`}>
                        Hello there! I am BlueTree242, I code programs as a hobby.
                        I mostly make Spigot/Bungee/Velocity Plugins, you will not find much because most of them are private :)<br/><br/>
                        Some of my projects are open source and available on github! I know Java, JS, TS, React.JS, Node.js.
                        I don't know python because i don't really care about it.<br/><br/>
                        In this website you will find out about my projects and my activity!
                    </p>
                </div>
            </div>
        </div>
    </>;
}) 

export default TopContainer

import GitHubCalendar from "react-github-calendar"
import ContentContainer from "./ContentContainer"
import tw from "twin.macro"

export default () => {
    return <>
        <h2 css={tw`text-center`}>My Activity:</h2>
        <ContentContainer css={tw`lg:w-1/2 w-10/12 my-3 mx-auto h-full`}>
            <GitHubCalendar username="BlueTree242" />
        </ContentContainer>
    </>
}
import styled from "styled-components";
import tw from "twin.macro";

export default styled.div`
  ${tw`shadow-lg rounded p-3 mb-3 lg:w-[30%] h-auto dark:bg-neutral-950`}

  & h2 {
    ${tw`text-center`}
  }
  & p {
    ${tw`text-lg mt-3`}
  }
`;
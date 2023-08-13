import styled from "styled-components";
import tw from "twin.macro";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode, createRef, useEffect } from "react";
import { faBook, faChartSimple, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faJenkins } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ProjectsContainer() {
    const projectsRef = createRef<HTMLHeadingElement>();

    useEffect(() => {
        if (window.location.hash == "#projects")
            projectsRef.current?.scrollIntoView({
                behavior: "smooth",
            });
    }, []);
    return (
        <>
            <h2 css={tw`text-center`} ref={projectsRef}>My Projects:</h2>
            <div css={tw`lg:flex p-3 justify-between flex-wrap`}>
                {projects.map((project) => (
                    <ProjectContainer id={project.name}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        {project.links && <div className="links">
                            {project.links.map(link => (
                                <FontAwesomeIcon icon={link.icon} onClick={() => window.open(link.url)} css={tw`hover:opacity-25`}></FontAwesomeIcon>
                            ))}
                        </div>}
                    </ProjectContainer>
                ))}
            </div>
        </>
    );
}

const ProjectContainer = styled.div`
  ${tw`shadow-2xl rounded border-solid p-3 mb-3 lg:w-[30%] m-auto h-full`}

  & h2 {
    ${tw`text-center`}
  }
  & p {
    ${tw`text-lg mt-3`}
  }

  & a {
    ${tw`text-inherit`}
  }
  & .links {
    ${tw`mt-5 flex justify-center cursor-pointer gap-2 text-2xl`}
  }
`;

type Project = {
    name: string;
    description: ReactNode;
    links?: { url: string, icon: IconProp }[];
};

const projects: Project[] = [
    {
        name: "DiscordSRVUtils",
        description: <>
            DiscordSRVUtils is a <a href="https://www.spigotmc.org/resources/discordsrv.18494/" target="_blank">DiscordSRV</a> Addon to Improve the abilities of DiscordSRV Bot in your discord server.
            <br /><br />The plugin has various features such as punishment sync & messages,tickets system, suggestions system, server status system.
        </>,
        links: [
            {
                url: "https://discordsrvutils.xyz",
                icon: faWindowRestore
            },
            {
                url: "https://github.com/BlueDevelopersInc/DiscordSRVUtils/",
                icon: faGithub
            },
            {
                url: "https://wiki.discordsrvutils.xyz/",
                icon: faBook
            },
            {
                url: "https://bstats.org/plugin/bukkit/DiscordSRVUtils/9456",
                icon: faChartSimple
            }
        ]
    },
    {
        name: "AdvancedPlHide",
        description: <>
            AdvancedPlHide is a Spigot, Bungee, Velocity Plugin that lets you control Tab-Completions on your server.
            <br /><br />The plugin allows you to customize your tab completions, however you wish. The plugin also blocks client-side mods that may leak your plugin list, hence the name.
        </>,
        links: [
            {
                url: "https://github.com/BlueTree242/AdvancedPlHide/",
                icon: faGithub
            },
            {
                url: "https://github.com/BlueTree242/AdvancedPlHide/wiki",
                icon: faBook
            },
            {
                url: "https://bstats.org/plugin/bukkit/AdvancedPlHide/13707",
                icon: faChartSimple
            }
        ]
    },
    {
        name: "PreBot",
        description: <>
            PreBot is a discord bot made in java (in early development), It allows you to have the most custom bot ever!
            The bot provides a very powerful API for plugins to use, you can add infinite features to the bot, by adding plugins!
            The bot makes it one bot, instead of multiple bots hosted on the same token!
        </>,
        links: [
            {
                url: "https://github.com/BlueTree242/PreBot/",
                icon: faGithub
            },
            {
                url: "https://ci.bluetree242.ml/job/PreBot",
                icon: faJenkins
            },
            {
                url: "https://github.com/BlueTree242/PreBot/blob/master/MAKING_PLUGIN.md",
                icon: faBook
            }
        ]
    },
];

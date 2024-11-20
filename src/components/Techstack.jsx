import React from "react";
import {
  DiPython,
  DiGit,
  DiAndroid,
  DiAws,
  DiWindows
} from "react-icons/di";
import {
  SiPytorch,
  SiLinux,
  SiDocker,
  SiMicrosoftazure,
  SiKubernetes,
  SiLightning,
  SiScikitlearn
} from "react-icons/si";

const Techstack = () => {
  return (
    <div className="grid gap-2">
        <div className=" p-3 rounded item "><DiPython style={{width: "100%", height: "100%"}} /></div>
        <div className=" p-3 rounded item"><SiLightning style={{width: "100%", height: "100%"}}/></div>
        <div className=" p-3 rounded item"><SiScikitlearn style={{width: "100%", height: "100%"}}/></div>
        <div className=" p-3 rounded item"><SiLinux style={{width: "100%", height: "100%"}}/></div>
        <div className=" p-3 rounded item"><DiWindows style={{width: "100%", height: "100%"}}/></div>
        <div className=" p-3 rounded item"><SiKubernetes style={{width: "100%", height: "100%"}}/></div>
        <div className=" p-3 rounded item"><DiGit style={{width: "100%", height: "100%"}}/></div>
        <div className=" p-3 rounded item"><DiAndroid style={{width: "100%", height: "100%"}}/></div>
    </div>

    
  );
}

export default Techstack;
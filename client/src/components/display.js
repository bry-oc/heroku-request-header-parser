import React from "react";
function Display(){
    const [ip, setIp] = React.useState(null);
    const [language, setLanguage] = React.useState(null);
    const [software, setSoftware] = React.useState(null);

    function fetchRequest(){
        fetch('/api/whoami')
            .then((res) => res.json())
            .then((data) => {
                setIp(data.ipaddress);
                setLanguage(data.language);
                setSoftware(data.software);
            });
    }
    const baseURL = window.location.href;

    return(
        <div className="wrapper">
            <a href={baseURL + "api/whoami"} target="_blank" rel="noopener noreferrer">[baseurl]/api/whoami</a>
            <br></br>
            <br></br>
            <button onClick={fetchRequest}>Click Here</button>
            <p>{ip != null? "IP Address: " + ip : ""}</p>
            <p>{language != null? "Language Pack: " + language : ""}</p>
            <p>{software != null? "Softeare: " + software : ""}</p>
        </div>
    )
}

export default Display;
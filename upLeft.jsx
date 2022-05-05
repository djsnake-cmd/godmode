import { useEffect } from "react";

const UpLeft = async () => {

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(
                `https://api.sl.se/api2/realtimedeparturesV4.xml?key=24e8694550204651b656e322387bf0bc&siteid=1365&timewindow=5`
            );
            const resJson = await response.json();
            return resJson
        };
        fetchApi();
    }, []);

    return (
        <>
            <p></p>
            Click me
        </>
    );

}

export default UpLeft
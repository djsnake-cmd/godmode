/* Place your JavaScript in this file 


24e8694550204651b656e322387bf0bc*/






async function getData() {
    let trafiklab = '24e8694550204651b656e322387bf0bc'
	const resGet = await axios.get("https://api.sl.se/api2/realtimedeparturesV4.xml?key=24e8694550204651b656e322387bf0bc&siteid=1365&timewindow=5");
	console.log('data :>> ', resGet);
	return resGet
};
getData()
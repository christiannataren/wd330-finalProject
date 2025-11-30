export async function loadTemplate(location) {
    let template = '';
    try {
        let html = await fetch(location);
        template = await html.text();
    } catch (e) {
    }
    return template;

}
function setUrl(url, params) {
    url = url + "?";
    Object.keys(params).forEach(function (key) {
        url += `${key}=${params[key]}&`
    });
    return url;

}

export async function getJson(url, params = {}) {
    let json = "";
    url = setUrl(url, params);
    try {
        let request = await fetch(url);
        json = await request.json();
    } catch {

    }
    return json;

}


export async function loadTemplate(location) {
    let html = await fetch(location);
    let template = await html.text();
    return template;

}
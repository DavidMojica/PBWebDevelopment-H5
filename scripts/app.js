import { Sections } from './sections.js';
import { Content } from './content.js';
import { Stylizer } from "./style.js";

const S = new Sections();
const C = new Content();
const St = new Stylizer();
let body = document.body;


let headerElement = S.get_header();
const mainElement = S.get_main();
const footerElement = S.get_footer();

headerElement = C.fill_header(headerElement);

// Agregando los elementos al DOM

body.appendChild(headerElement);
body.appendChild(mainElement);
body.appendChild(footerElement);

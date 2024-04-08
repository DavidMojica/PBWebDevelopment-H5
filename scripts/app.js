import { Sections } from './sections.js';
import { Content } from './content.js';
import { Stylizer } from "./style.js";

const S = new Sections();
const C = new Content();
const St = new Stylizer();
let body = document.body;


let headerElement = S.get_header();
let mainElement = S.get_main();
let footerElement = S.get_footer();

headerElement = C.fill_header(headerElement);
mainElement = C.fill_main(mainElement);
footerElement = C.fill_footer(footerElement);

body.style.fontFamily = 'Reddit Mono';
body.appendChild(headerElement);
body.appendChild(mainElement);
body.appendChild(footerElement);

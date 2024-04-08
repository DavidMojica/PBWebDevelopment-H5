import { Sections } from './sections.js';

var styleElement = document.createElement('style');
styleElement.textContent = `@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500&display=swap"); .notytoast{margin:0;padding:0;box-sizing:border-box}:root{--dark:#34495e;--light:#ffffff;--success:#0d8a28;--error:#bb2525;--warning:#e9bd0c;--info:#3498db;--tiempo:0s}.notytoast{font-family:"Maven Pro",sans-serif;position:fixed;top:10px;right:20px}.notytoast :where(.toastflo,.column){display:flex;align-items:center}.notytoast li{border-radius:4px}.notytoast .toastflo{width:400px;position:relative;overflow:hidden;list-style:none;border-radius:4px;padding:16px 17px;margin-bottom:10px;background:#fefefd;justify-content:space-between;animation:.7s forwards show_toast}@keyframes show_toast{0%{transform:translateX(100%)}40%{transform:translateX(-5%)}80%{transform:translateX(0)}100%{transform:translateX(-10px)}}.notytoast .toastflo.hide{animation:.5s forwards hide_toast}@keyframes hide_toast{0%{transform:translateX(-10px)}40%{transform:translateX(0)}80%{transform:translateX(-5%)}100%{transform:translateX(calc(100% + 20px))}}.toastflo::before{position:absolute;content:"";height:3px;width:100%;bottom:0;left:0;animation:progress var(--tiempo) linear forwards}.btn#success,.toastflo.success::before{background:var(--success)}.btn#error,.toastflo.error::before{background:var(--error)}.btn#warning,.toastflo.warning::before{background:var(--warning)}.btn#info,.toastflo.info::before{background:var(--info)}@keyframes progress{100%{width:0%}}.success,.toastflo li::before{border:1px solid var(--success)}.error,.toastflo li::before{border:1px solid var(--error)}.toastflo li::before,.warning{border:1px solid var(--warning)}.info,.toastflo li::before{border:1px solid var(--info)}.notytoast .column div{margin-left:12px}.notytoast .column div>b{font-size:1.2rem;color:#7a7a81}.toastflo .column div>span{font-size:.85rem;color:#76767a}.toastflo .column i{font-size:1.75rem}.toastflo.success .column i{color:var(--success)}.toastflo.error .column i{color:var(--error)}.toastflo.warning .column i{color:var(--warning)}.toastflo.info .column i{color:var(--info)}.toastflo i:last-child{color:#a6a6aa;cursor:pointer}.toastflo i:last-child:hover{color:var(--dark)}@media screen and (max-width:530px){.notytoast{width:95%}.notytoast .toastflo{width:100%;font-size:1rem;margin-left:20px}}`;
document.head.appendChild(styleElement);

const S = new Sections();
let body = document.body;

let headerElement = S.get_header();
let mainElement = S.get_main();
let footerElement = S.get_footer();

body.style.fontFamily = 'Reddit Mono';
body.appendChild(headerElement);
body.appendChild(mainElement);
body.appendChild(footerElement);


//--------------------BLOQUE DE INFORMACIÓN----------------------//
//app.js - Aqui extraemos las secciones para mostrarlas gráficamente en el index.

//***************************************************************//
//                  .                        *                *  //
//                *          MADE BY            .                //
//        *           _____,    _..-=-=-=-=-====--,  *   .       //
//       _         _.'a   /  .-',___,..=--=--==-'`               //
//      ((        ( _     \ /  //___/-=---=----'                 //
//       `         ` `\    /  //---/--==----=-'                  //
//             ,-.    | / \_//-_.'==-==---='       *             //
//      *     (.-.`\  | |'../-'=-=-=-=--'                   .    //
//      .      (' `\`\| //_|-\.`;-~````~,        _               //
//                   \ | \_,_,_\.'        \     .'_`\            //
//     *             `\            ,    , \    || `\\            //
//                 .   \    /   _.--\    \ '._.'/  / |         * //
//                     /  /`---'   \ \   |`'---'   \/            //
//          *         / /'          \ ;-. \                      //
//                 __/ /      *    __) \ ) `|            *       //
//    .          ((='--;)      .  (,___/(,_/                     //
//                *                                 *      .   . //
//       *                -David Mojica S.E                      //
//          GitHub: https://github.com/DavidMojica        .      //
//-------------------------------------------------------------- //
//                         08/04/24 (Lunes)                      //
//************************************************************** //
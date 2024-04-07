import { Buttons } from "./components/buttons.js";

class Stylizer {
    constructor(){
        this.ButtonStyler = new Buttons;
    }

    stylize_header = header =>{
        //--estructurar header--//
        header.style.display = 'grid';
        header.style.gridTemplateColumns = '.2fr .6fr .2fr';
        header.style.placeItems = 'center';
        
        //--logo--//
        const logo = header.children[0];
        logo.style.maxHeight = '175px';

        //---NavItems---//
        const NavItems = header.children[1];
        NavItems.style.width = "100%";
        NavItems.style.display = 'flex';
        NavItems.style.justifyContent = 'space-evenly';
        NavItems.style.listStyle = 'none';
        for (let i = 0; i < NavItems.children.length; i++) {
            let child = NavItems.children[i].children[0];
            child.style.textDecoration = 'none';

            child = this.ButtonStyler.btn_boot(child, '#006241', '#fff');
        }

        //---Botón login---//
        let loginBtn = header.children[2];
        loginBtn = this.ButtonStyler.btn_neon(loginBtn, '#006241', ''); //Si dejas el segudo o el tercer valor en blanco, tomaran sus valores por defecto

        return header;
    }
}

export { Stylizer } 
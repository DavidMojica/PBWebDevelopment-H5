import { Stylizer } from "./style.js";

class Content{
    constructor(){
        this.Stylize = new Stylizer;
    }

    fill_header = (header) =>{
        //--Logo--//
        const logo = document.createElement('img');
        logo.src = '../resources/logo.webp';

        //---Direccionamiento---//
        const navItems = document.createElement('ul');
        //--//
        const navItem1 = document.createElement('li');
        const navLink1 = document.createElement('a');

        navLink1.href = "#";
        navLink1.text = "Productos"; 
        //--//
        const navItem2 = document.createElement('li');
        const navLink2 = document.createElement('a');

        navLink2.href = "#";
        navLink2.text = "Contáctenos";
        //--//
        const navItem3 = document.createElement('li');
        const navLink3 = document.createElement('a');

        navLink3.href = "#";
        navLink3.text = "Sobre nosotros";
        //--//
        navItem1.appendChild(navLink1);
        navItem2.appendChild(navLink2);
        navItem3.appendChild(navLink3);
        navItems.append(...[navItem1, navItem2, navItem3]);

        //---Iniciar sesion---//
        const loginBtn = document.createElement('button');
        loginBtn.textContent = "Iniciar sesión";
        header.append(...[logo, navItems, loginBtn]);
        header = this.Stylize.stylize_header(header);

        return header;
    }

}

export { Content }
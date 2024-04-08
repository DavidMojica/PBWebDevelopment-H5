import { Stylizer } from "./style.js";

class Content{
    constructor(){
        this.Stylize = new Stylizer;
        this.logo_route = '../resources/logo.webp'
    }

    fill_header = header =>{
        //--Logo--//
        const logo = document.createElement('img');
        logo.src = this.logo_route;

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

    fill_main = main => {
        const main_title = document.createElement('h1');
        main_title.textContent = "STARBUCKS";

        //------Cards section------//
        const cards_section = document.createElement('section');
        const card_1 = document.createElement('article');
        const card_2 = document.createElement('article');
        const card_3= document.createElement('article');
        const card_4 = document.createElement('article');

        cards_section.append(...[card_1, card_2, card_3, card_4]);


        
        main.append(...[main_title, cards_section]);
        main = this.Stylize.stylize_main(main);
        return main;
    }

    fill_footer = footer =>{
        //---Nosotros section---//
        const nosotros_section = document.createElement('section');
        const title_nosotros = document.createElement('h5');
        title_nosotros.textContent = "Nosotros";

        const descripcion_nosotros = document.createElement('p');
        descripcion_nosotros.textContent = "Somos una empresa dedicada al café, amamos lo que hacemos. 45 años de experiencia brindándote el mejor café, te esperamos."

        nosotros_section.append(...[title_nosotros, descripcion_nosotros]);
        //---Info section---//
        const info_section = document.createElement('section');
        const title_informacion = document.createElement('h5');
        title_informacion.textContent = "Información";

        const descripcion_info_horarios = document.createElement('p');
        descripcion_info_horarios.textContent = "Lunes - Sábado 6am - 10pm";

        const descripcion_info_telefonos = document.createElement('p');
        descripcion_info_telefonos.textContent = "Teléfono: 305 435 6930";

        const descripcion_info_correo = document.createElement('p');
        descripcion_info_correo.textContent = "starbucks@starbucks.com";

        info_section.append(...[title_informacion, descripcion_info_horarios, descripcion_info_correo, descripcion_info_telefonos]);
        //---Logo section---//
        const logo_section = document.createElement('section');
        const logo = document.createElement('img');
        logo.src = this.logo_route;

        const copyright_mark = document.createElement('strong');
        copyright_mark.textContent = "Starbucks Copyrigth";

        logo_section.append(...[logo, copyright_mark]);

        footer.append(...[nosotros_section, info_section, logo_section]);
        footer = this.Stylize.stylize_footer(footer);

        return footer;
    }
}

export { Content }
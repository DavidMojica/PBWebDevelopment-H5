class Sections {
    constructor() {}

    get_header = () => {
        const header = document.createElement('header');
        return header;
    }

    get_main = () => {
        const main = document.createElement('main');
        return main;
    }

    get_footer = () => {
        const footer = document.createElement('footer');
        return footer;
    }
}

export { Sections };

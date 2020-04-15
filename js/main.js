class AppController {
    constructor() {
        this.initElementPrototype();
        this.initElements();
    }

    initElementPrototype() {
        Element.prototype.on = function(events, fn) {
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn);
            });
        };

        Element.prototype.css = function(obj) {
            for (let name in obj) {
                this.style[name] = obj[name];
            }
        };
    }

    initElements() {
        this.el = {};
        document.querySelectorAll("[id]").forEach(element => {
            this.el[element.id] = element;
        });

        this.initEvents();

        console.log(this.el);

    }

    initEvents() {
        this.el.sidebarBtn.on('click', e => {
            this.el.sidebar.css({
                'left': '0'
            });
        });

        this.el.sidebarCloseBtn.on('click', e => {
            this.el.sidebar.css({
                'left': '-100%'
            });
        });
    }
}

new AppController();
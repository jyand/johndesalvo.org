document.body.addEventListener("keydown", function(e): void {
        switch(e.code) {
                case 'j' :
                        window.scroll(0, 120) ;
                break ;
                case 'k' :
                        window.scroll(0, -120) ;
                break ;
                case 'h' :
                        window.history.go(-1) ;
                break ;
                case 'l' :
                        window.history.go(1) ;
                break ;
        }
})

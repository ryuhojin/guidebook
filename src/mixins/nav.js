const nav = {
    data() {
        return {
            menus:[
                {title: 'ABOUT', link: '/about'},
                {title: 'FE-GUIDE',
                    submenus:[
                        {title: 'JSP', link:'/jsp/about'},
                        {title: 'VUE', link:'/vue'},
                        {title: 'ANGULAR', link:'/angular'}
                    ]
                },
                {title: 'PORTFOLIO', link: '/portfolio'}
            ]
        }
    }
}

export default nav;
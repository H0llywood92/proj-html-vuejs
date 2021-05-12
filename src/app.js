var app = new Vue (
    {
        el:'#root',

        data: {
            navbarLink: [
                'Home',
                'About',
                'Services',
                'Blog',
                'Contact',
                'Portfolio'
            ],

            quickLinksFooter: [
                'Services',
                'Contact',
                'Blog'
            ],

            resourcesLinkFooter: [
                'Art Design',
                'Computer',
                'IT News',
                'Networking',
                'Web Security'
            ],

            contactUs: {
                Address: 'Patricia C.Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051',
                Phone: '+99 (0) 101 0000 888',
                Email: 'info@yourdomain.com'
            }
        },

        methods: {
           
        }
        
    }
)
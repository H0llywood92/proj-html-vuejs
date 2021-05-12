var app = new Vue (
    {
        el:'#root',

        data: {
            //Navbar Link
            navbarLink: [
                'Home',
                'About',
                'Services',
                'Blog',
                'Contact',
                'Portfolio'
            ],
            // End Navbar Link

            //Footer link
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
            //End Footer link
        },

        methods: {
           
        }
        
    }
)
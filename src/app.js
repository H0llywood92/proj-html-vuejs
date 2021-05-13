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
            },
            //End Footer link

            opened: false,
            messageSent: '',

            chatArray: [
                {
                    message: 'Hello, How can i help you?',
                    status: 'pc'
                },
                
            ]
        },

        methods: {
           
            open() {
                if(this.opened == false) {
                    this.opened = true;
                }else {
                    this.opened = false;
                }
            },

            sendMessage() {
                if(this.messageSent > '') {
                    this.chatArray.push(
                        {
                            message: this.messageSent,
                            status: 'me'
                        }
                    );

                    setTimeout( ()=> {
                        
                        this.chatArray.push(
                            {
                                message: 'ok',
                                status: 'pc'
                            }
                        );

                    }, 3000);
                    
                }

                this.messageSent = '';
            }
        }
        
    }
)
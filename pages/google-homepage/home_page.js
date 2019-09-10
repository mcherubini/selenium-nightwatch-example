module.exports = {
    url : function() {
        return this.api.launchUrl;
    },
    sections : {
        menu : {
            selector : ".gb_Oa.gb_Ag.gb_g.gb_zg.gb_Dg.gb_Rf",
            elements : {
                mail : {
                    selector : "(//a[contains(@href,'https://mail.google.com/mail/')])[1]",
                    locateStrategy: 'xpath'
                }
            }
        },
        body : {
            selector : "body",
            elements : {
                input_search : {
                    selector : "input[name='q']"
                },
                tools_button : {
                    selector : "#hdtb-tls"
                }
            }
        }
    }
}
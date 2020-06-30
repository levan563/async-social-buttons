       // Twitter
       window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.async=true;
            js.defer=true;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function(f) {
                t._e.push(f);
            };
            return t;
        }
        (document, "script", "twitter-wjs"));
        //Facebook
           (function(d,s,id){
                (function(d,s,id){
                        var js,fjs = d.getElementsByTagName(s)[0];
                        if(d.getElementById(id)){return;}
                        js=d.createElement(s);
                        js.id=id;
                        js.async=true;
                        js.defer=true;
                        js.src="//connect.facebook.net/en_US/all.js#xfbml=1";
                        fjs.parentNode.insertBefore(js,fjs);
                    }
                    (document, "script", "facebook-jssdk")
                );
            }
            (document, "script", "facebook-jssdk")
        );

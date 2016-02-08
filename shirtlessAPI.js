var shirtlessAPI = {
    get: function(term){
        if(term === 'monkey'){
            return [{title: term, src: "http://lorempixel.com/320/320/animals/2/"}];
        }
        if(term != ""){
            return [
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/1/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/2/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/3/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/4/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/5/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/6/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/7/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/8/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/9/",
                },{
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/10/",
                }
            ];
        } else {
            return [];
        }
    }
};
const ScrapbookStorage = {

    key:"birthdayScrapbookProgress",

    get(){

        const data=localStorage.getItem(this.key);

        return data ? JSON.parse(data) : {

            visited:[]

        };

    },


    save(data){

        localStorage.setItem(

            this.key,

            JSON.stringify(data)

        );

    },


    markVisited(page){

        const data=this.get();

        if(!data.visited.includes(page)){

            data.visited.push(page);

            this.save(data);

        }

    },


    isVisited(page){

        return this.get().visited.includes(page);

    },


    reset(){

        localStorage.removeItem(this.key);

    }

};


function checkScrapbookCompletion(){

    const required=[

        "album",
        "timeline",
        "places",
        "reasons",
        "future"

    ];


    return required.every(page=>

        ScrapbookStorage.isVisited(page)

    );

}
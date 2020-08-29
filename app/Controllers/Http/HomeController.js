'use strict'
const Twitter  = use("twitter")
const Env = use("Env")

class HomeController {
    async index({request,view}){
        const titlePage = 'Home'
        
        return view.render('template',{
            titlePage
        })
    }
    async sentimentProcess({request,view,response}){
        const req = request.get()
        const tweet = new TweetController();
        const vv = tweet.index();
        Response.json(vv)
        // return view.render('template',{
        //     titlePage
        // })
    }
}

module.exports = HomeController

'use strict'
const Twitter  = use("twitter")
const Env = use("Env")

class TweetController {
    async index({request,view}){
        const titlePage = 'Home'
        
        return view.render('template',{
            titlePage
        })
    }
    async crawling({request,response}){
        var client = new Twitter({
            consumer_key: Env.get("CUSTOMER_KEY"),
            consumer_secret:  Env.get("CUSTOMER_SECRET"),
            access_token_key:  Env.get("ACCESS_TOKEN_KEY"),
            access_token_secret:  Env.get("ACCESS_TOKEN_SECRET")
          });

        const resp = await client.get('search/tweets', request.get());
        response.status(200).json(resp)
    }

    async test({request,response}){
        const req =  request.get()
        response.json(
            req
        )
    }
}

module.exports = TweetController

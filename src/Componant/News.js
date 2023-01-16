import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News  extends Component {
articles =  [
{
"source": {
"id": "wired",
"name": "Wired"
},
"author": "David Nield",
"title": "How to Use the iPhone 14’s Emergency Satellite SOS",
"description": "Get help, even if you’re off the grid.",
"url": "https://www.wired.com/story/how-to-use-iphone-14-emergency-satellite-sos/",
"urlToImage": "https://media.wired.com/photos/63c1af81c70009d9f70492c1/191:100/w_1280,c_limit/How-to-Use-Emergency-SOS-iPhone-Gear-GettyImages-1294457502.jpg",
"publishedAt": "2023-01-15T14:00:00Z",
"content": "One of the new features that arrived alongside the iPhone 14 handsets in September 2022 was a feature that Apple calls Emergency SOS via satelliteand the name tells you pretty much all you need to kn… [+2076 chars]"
},
{
"source": {
"id": "wired",
"name": "Wired"
},
"author": "Susie Alegre",
"title": "Freedom of Thought Is a Human Right",
"description": "In 2023, people will remember how to think for themselves—and Big Tech will help.",
"url": "https://www.wired.com/story/reglation-privacy-surveillance/",
"urlToImage": "https://media.wired.com/photos/63bc648e04fdce858b279fb9/191:100/w_1280,c_limit/04_Freedom-of-thought-is-a-human-right.jpg",
"publishedAt": "2023-01-15T12:00:00Z",
"content": "In his 2019 Stanford address, Tim Cook warned about the threat to our freedom to be human from technology that looks to get inside our heads and rearrange the furniture. His freedom to be human is, e… [+3218 chars]"
},
{
"source": {
"id": "wired",
"name": "Wired"
},
"author": "Simon Hill",
"title": "How to Save Your Smartphone's Battery Life (2023): Tips for iPhone and Android",
"description": "Shrug off your anxiety with these power-saving tips to extend the juice of your iPhone or Android phone.",
"url": "https://www.wired.com/story/how-to-save-smartphone-battery-life/",
"urlToImage": "https://media.wired.com/photos/63c1d3c71628debb3e3ed5d2/191:100/w_1280,c_limit/How-to-Save-Smartphone-Battery-Gear-GettyImages-1263282440.jpg",
"publishedAt": "2023-01-15T12:00:00Z",
"content": "One benefit oflarger smartphones is that theres space for bigger batteries. Battery life isnt quite the nuisance it used to be, but anxiety about running out of power is still common. Much of the adv… [+9738 chars]"
},
{
"source": {
"id": null,
"name": "The Guardian"
},
"author": "David Williams",
"title": "No-lo alcohol drinks that are proud of what they are",
"description": "So often no and low alcohol beverages are simply masquerading as something they aren’t, but these drinks are very happy to be just what they say on the labelBlurred Vines Spark Alt Wine (£16, thewinesociety.com) Since writing last week’s column on the steady …",
"url": "https://www.theguardian.com/food/2023/jan/15/no-lo-alcohol-drinks-that-are-proud-of-what-they-are",
"urlToImage": "https://i.guim.co.uk/img/media/ecca15d80a6226bb985be17e3d6a454bb6256396/0_382_5760_3456/master/5760.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=d2f11bde23f48dfde8662223cf7f4f79",
"publishedAt": "2023-01-15T06:00:06Z",
"content": "Blurred Vines Spark Alt Wine (£16, thewinesociety.com) Since writing last weeks column on the steady improvement in the quality of non-alcoholic wine, Ive been, as I always am at this time of the yea… [+3077 chars]"
}
]


    constructor(){
        super();
        this.state ={
            articles : this.articles,
            loading:false

        }
    }


  render() {
    return (
      <div>
        <div className="container my-3 ">
                    <h1>Daily News Top--headlines!!</h1>
                   <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key = {element.url}>
                            <NewsItem  title={element.title.slice(0,40)}  description = {element.description.slice(0,80)}  imageUrl= {element.urlToImage}
                            newsUrl = {element.url}/>
                        </div>  
                    })}

                           
                   </div>
        </div>
      </div>
    )
  }
}

export default News 
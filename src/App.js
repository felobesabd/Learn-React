// let Content = () => {
//     return(
//         <div>
//         <h1>Content</h1>
//         <p>This Is Content</p>
//         </div>
//     )
// }
import Navgation from './component/Navgation.js';
import CardDetails from './component/CardDetails';
import NotFound from './component/NotFound.js';
import FormInput from './component/FormInput.js';
import card1 from './images/card1.jpg'
import card2 from './images/card2.jpeg'
import card3 from './images/card3.jpg'
import card4 from './images/card4.jpg'

let App = () => {
    // let cardTitle1 = 'Title One';
    let cardText = [
        // {title:'Title One', description:'Description One', img: card1},
        // {title:'Title Two', description:'Description Two', img: card2},
        // {title:'Title Three', description:'Description Three', img: card3},
        // {title:'Title Four', description:'Description Four', img: card4}
    ]
    let printClicked = (mes) => {
        console.log(mes);
    }
    return(
        <div>
        <Navgation />
        <FormInput />
        {
            cardText.length ? (cardText.map((card, index) => {
                return (
                    <CardDetails key={index} title={card.title} 
                    description={card.description} img={card.img} 
                    clickMe={printClicked} />
                )
            })) : (<NotFound message='No Data Found' color='danger'/>)
        }
        </div>
    )
}
// <CardDetails title={cardText[0].title} description={cardText[0].description}/>
//         <CardDetails title={cardText[1].title} description={cardText[1].description}/>
//         <CardDetails title={cardText[2].title} description={cardText[2].description}/>
//         <CardDetails title={cardText[3].title} description={cardText[3].description}/>
export default App;
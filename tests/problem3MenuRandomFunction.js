import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const meal1 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div.text > button")
const meal2 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div.text > button")
const meal3 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div.text > button")
const meal4 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div.text > button")
const meal5 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div.text > button")
const meal6 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(7) > div.text > button")
const meal7 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > div.text > button")
const meal8 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(9) > div.text > button")

const desert1 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div.text > button")
const desert2 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div.text > button")
const desert3 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div.text > button")
const desert4 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div.text > button")
const desert5 = Selector("body > section.ftco-section > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div.text > button")

const meal = [meal1,meal2,meal3,meal4,meal5,meal6,meal7,meal8]
const desert = [desert1,desert2,desert3,desert4,desert5]


const ukupno = Selector("span#ukupno")

var cena = 0

//const value = await Selector(selector).attr('attributeName');
//const intValue = parseInt(value, 10);



fixture('Itekako Automatski test 3 with Random function')
    .page('http://10.15.1.204:3000/menu')



test('Problem 3 meny Random Function', async t => {
      await t
         .maximizeWindow()
         .eval(() => {
          window.scrollTo(0,1000);// document.body.scrollHeight
        });

        function randomSelection(meal, desert) {
          const selection = [];
          let duplicatedElement = meal[Math.floor(Math.random() * meal.length)];
        
          for (let i = 0; i < 5; i++) {
            let randomIndex = Math.floor(Math.random() * 2);
            let randomArray = randomIndex === 0 ? meal : desert;
            let randomElement = randomArray[Math.floor(Math.random() * randomArray.length)];
        
            if (!selection.includes(randomElement)) {
              selection.push(randomElement);
            } else {
              i--;
            }
          }
        
          selection.push(duplicatedElement);
          return selection;
        }
        let result = randomSelection(meal, desert);
  
  
      for (let i =0;i <result.length;i++){
        var  price = await Selector(".price").textContent
        var intPrice = parseInt(price.slice(1), 10)
        console.log("The price is: ${intPrice}");
        cena = intPrice + cena

          await t
          .click(result[i])
          .wait(3000)
          }
      await t
      .setTestSpeed(0.5)
      .expect((ukupno).innerText).eql(cena) //Nisam uspeo da izvucem cenu proizvoda zajedno sa random funkcijom.
    
    
})    
import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';



const scrollDown = ClientFunction(() => {
    window.scrollBy(0,window.innerHeight);//window.innerHeight
});


const localStorageGet = ClientFunction(key => localStorage.getItem(key));

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
const cena = 0

fixture('Itekako Automatski test 3')
    .page('http://10.15.1.204:3000/menu')


    
    


test('Problem 3 meny', async t => {
    await t
       .maximizeWindow()
       .eval(() => {
        window.scrollTo(0,1000);// document.body.scrollHeight
      });


    for (let i =0;i <meal.length;i++){
        await t
        .click(meal[i])
        .wait(3000)
        }
    await t
    .expect((ukupno).innerText).eql('143')
      
})

test('Problem 3 meny', async t => {
    await t
    .maximizeWindow()
    .eval(() => {
        window.scrollTo(0,600);// document.body.scrollHeight
      });
        
    for (let i =0;i <desert.length;i++){
        await t
       .click(desert[i])
       .wait(3000)
        }
        
    await t
    .expect((ukupno).innerText).eql('26')
      
})
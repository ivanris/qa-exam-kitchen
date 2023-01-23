import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const leto = Selector("button#btn1")
const zima = Selector("button#btn2")
const caj = Selector("button#btn3")
const kafa = Selector("button#btn4")
const belo = Selector("button#btn5")
const crno = Selector("button#btn6")
const slatko = Selector("button#btn7")
const slano = Selector("button#btn8")
const kiselo = Selector("button#btn9")
const ljuto =Selector("button#btn10")
const kasika = Selector("button#btn11")
const viljuska = Selector("button#btn12")
const duboki = Selector("button#btn13")
const plitki = Selector("button#btn14")
const voce = Selector("button#btn15")
const povrce = Selector("button#btn16")
const koktel = Selector("button#btn17")
const pivo = Selector("button#btn18")
const readMYMind = Selector("button#readmymind")

const leviOdgovori = [leto,caj,belo,slatko,kiselo,kasika,duboki,voce,koktel]
const desniOdgovori = [zima,kafa,crno,slano,ljuto,viljuska,plitki,povrce,pivo]

fixture('Itekako Automatski test2')
    .page('http://10.15.1.204:3000/questionaire')
    


test('Problem 2 MindClock', async t => {
    await t
        .click(leto)
        .click(caj)
        .click(belo)
        .click(slatko)
        .click(kiselo)
        .click(kasika)
        .click(duboki)
        .click(voce)
        .click(koktel)
        .click(readMYMind)


})
test('Problem 2 MindClock', async t => {
    await t
        .click(zima)
        .click(kafa)
        .click(crno)
        .click(slano)
        .click(ljuto)
        .click(viljuska)
        .click(plitki)
        .click(povrce)
        .click(pivo)
        .click(readMYMind)


})
test('Problem 12 MindClock array', async t => {
 
    for (let i =0;i <leviOdgovori.length;i++){
    await t
   .click(leviOdgovori[i])
}
   await t
      .click(readMYMind)
})

test('Problem 12 MindClock array', async t => {
 
    for (let i =0;i <desniOdgovori.length;i++){
    await t
   .click(desniOdgovori[i])
}
   await t
      .click(readMYMind)
})

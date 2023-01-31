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

const readMMMeal = Selector("h4#recHeader")

const leviOdgovori = [leto,caj,belo,slatko,kiselo,kasika,duboki,voce,koktel]
const desniOdgovori = [zima,kafa,crno,slano,ljuto,viljuska,plitki,povrce,pivo]

fixture('Itekako Automatski test2')
    .page('http://10.15.1.204:3000/questionaire')
    



     //za bodove 0 i 1 izabrani obrok je "Avocado Benedict" (test 1 i 2)
     //svaki od ovih testova je takodje provera da jednom kliknuto polje ne moze da se promeni
test('Problem 12 MindClock array test 1', async t => {
 
    for (let i =0;i <desniOdgovori.length;i++){
    await t
   .click(desniOdgovori[i])
}
   await t
      .click(readMYMind)
      .expect((readMMMeal).innerText).contains("Avocado Benedict")
})

test('Problem 12 MindClock array test 2', async t => {
    
    await t
    .click(leto)
  
    for (let i =0;i <desniOdgovori.length;i++){
    await t
   .click(desniOdgovori[i])
}
   await t
      .click(readMYMind)

     .expect((readMMMeal).innerText).contains("Avocado Benedict")
})

 //za bodove 2 i 3 izabrani obrok je "Strawberry Sundae" (test 3 i 4)
test('Problem 12 MindClock array test 3', async t => {
    
    await t
    .click(leto)
    .click(caj)
    for (let i =0;i <desniOdgovori.length;i++){
    await t
   .click(desniOdgovori[i])
}
   await t
      .click(readMYMind)

     .expect((readMMMeal).innerText).contains("Strawberry Sundae")
})
test('Problem 12 MindClock array test 4', async t => {
    
    await t
    .click(leto)
    .click(caj)
    .click(belo)

    for (let i =0;i <desniOdgovori.length;i++){
    await t
   .click(desniOdgovori[i])
}
   await t
      .click(readMYMind)

     .expect((readMMMeal).innerText).contains("Strawberry Sundae")
})

 //za bodove 4 i 5 izabrani obrok je "Soy Salmon" (test 5 i 6)
test('Problem 12 MindClock array test 5', async t => {
    
    await t
    .click(leto)
    .click(caj)
    .click(belo)
    .click(slatko)
    
    for (let i =0;i <desniOdgovori.length;i++){
    await t
   .click(desniOdgovori[i])
}
   await t
      .click(readMYMind)

     .expect((readMMMeal).innerText).contains("Soy Salmon")
})
test('Problem 12 MindClock array test 6', async t => {
    
    await t
    .click(leto)
    .click(caj)
    .click(belo)
    .click(slatko)
    .click(kiselo)
    
    for (let i =0;i <desniOdgovori.length;i++){
    await t
   .click(desniOdgovori[i])
}
   await t
      .click(readMYMind)

     .expect((readMMMeal).innerText).contains("Soy Salmon")
})
//za bodove 6 i 7 izabrani obrok je "Culiflower Dipper" (test 7 i 8)
test('Problem 12 MindClock array test 7', async t => {
    
    await t
    .click(leto)
    .click(caj)
    .click(belo)
    .click(slatko)
    .click(kiselo)
    .click(kasika)
    
    for (let i =0;i <desniOdgovori.length;i++){
    await t
   .click(desniOdgovori[i])
}
   await t
      .click(readMYMind)

     .expect((readMMMeal).innerText).contains("Culiflower Dipper")
})
test('Problem 12 MindClock array test 8', async t => {
    
    await t
    .click(leto)
    .click(caj)
    .click(belo)
    .click(slatko)
    .click(kiselo)
    .click(kasika)
    .click(duboki)
    
    for (let i =0;i <desniOdgovori.length;i++){
    await t
   .click(desniOdgovori[i])
}
   await t
      .click(readMYMind)

     .expect((readMMMeal).innerText).contains("Culiflower Dipper")
})

//za bodove 8 i 9 izabrani obrok je "Blonde" (test 9 i 10)
test('Problem 12 MindClock array test 9', async t => {
    
    await t
    .click(leto)
    .click(caj)
    .click(belo)
    .click(slatko)
    .click(kiselo)
    .click(kasika)
    .click(duboki)
    .click(voce)
    
    for (let i =0;i <desniOdgovori.length;i++){
    await t
   .click(desniOdgovori[i])
}
   await t
      .click(readMYMind)

     .expect((readMMMeal).innerText).contains("Blonde")
})

test('Problem 12 MindClock array test 10', async t => {
 
    for (let i =0;i <leviOdgovori.length;i++){
    await t
   .click(leviOdgovori[i])
}
   await t
      .click(readMYMind)
      .expect((readMMMeal).innerText).contains("Blonde")
})

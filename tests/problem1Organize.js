import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const localStorageGet = ClientFunction(key => localStorage.getItem(key));

const qaExamKitchen = Selector("a.navbar-brand")
const picture = Selector("div.col-md-5 ftco-animate img img-2 fadeInUp ftco-animated")
const organiser = Selector("input#name").withAttribute("placeholder","Who is organizing birthday")
const birthdayPerson = Selector("input#name").withAttribute("placeholder","Who is having birthday")
const ageOfBirthdayPerson = Selector("input#age.form-control")
const when = Selector("input#date.form-control")
const atWhatTime = Selector("input#time.form-control")
const howManyPeopleField = Selector("select#persons.form-control")
const noOfPersons =howManyPeopleField.find("option")
const doYouHaveAlergiesYes = Selector("input#alg_y.rd")
const doYouHaveAlergiesNo = Selector("input#alg_n.rd")
const doYouHaveAlergiesMaybe = Selector("input#alg_m.rd")

const walnuts = Selector("input#alg1.cb")
const chestnuts = Selector("input#alg2.cb")
const fish = Selector("input#alg3.cb")
const meat = Selector("input#alg4.cb")
const shrimp = Selector("input#alg5.cb")
const gluten = Selector("input#alg6.cb")
const organiseButton = Selector ("a.btn.btn-primary.px-5.py-3")
const orderConfirmation = Selector("div#ex1.modal")

const organiserCo = Selector("span#orr")
const birthdayPersonCo = Selector("span#cbr")
const ageOfBirthdayPersonCo = Selector("span#agr")
const whenCo = Selector("span#dtr")
const atWhatTimeCo = Selector("span#tmr")
const noOfPersonsCo = Selector("span#gur")
const allergyCo = Selector("span#alr")




fixture('Itekako Automatski test')
    .page('http://10.15.1.204:3000/reserve')
    


test('Problem 1 Organize', async t => {
    await t
      // .setTestSpeed(0.5)
       .typeText(organiser, 'Ivan Ristic')
       .typeText(birthdayPerson,"Biljana Ilic")
       .typeText(ageOfBirthdayPerson,"43")
       .typeText(when,'2023-02-02')
       .typeText(atWhatTime,"18:00")
       .click(howManyPeopleField)
       .click(noOfPersons.withText("6"))
       .click(doYouHaveAlergiesYes)
       .click(shrimp)
       .click(organiseButton)

       //confirmation od celebration (potvrdni modal)
       
       
       .expect (organiserCo.innerText).eql("Ivan Ristic")
       .expect(birthdayPersonCo.innerText).eql("Biljana Ilic")
       .expect(ageOfBirthdayPersonCo.innerText).eql("43")
       .expect(whenCo.innerText).eql("2023-02-02")  
       .expect(atWhatTimeCo.innerText).eql("18:00")   
       .expect(noOfPersonsCo.innerText).eql("6-10")
       .expect(allergyCo.innerText).eql("Yes")

           //local storage check
       .expect(localStorageGet("Organizer")).eql("Ivan Ristic")
       .expect(localStorageGet("Birthday_Person")).eql("Biljana Ilic")
       .expect(localStorageGet("Age")).eql("43")
       .expect(localStorageGet("Date")).eql("2023-02-02")
       .expect(localStorageGet("Time")).eql("18:00")
       .expect(localStorageGet("alergy")).eql("Yes")
       .expect(localStorageGet("alergies")).eql("Shrimp")
       
});

test("Checking all fields", async t =>{
await t
//.setTestSpeed(0.1)
.expect(qaExamKitchen.innerText).contains("QA Exam Kitchen")

.typeText(organiser, 'Ivan Ristic')
.typeText(birthdayPerson,"Biljana Ilic")
.typeText(ageOfBirthdayPerson,"43")
.typeText(when,'2023-02-02')
.typeText(atWhatTime,"18:00")
.click(howManyPeopleField)
.click(noOfPersons.withText("2"))
.click(howManyPeopleField)
.click(noOfPersons.withText("6"))
.click(howManyPeopleField)
.click(noOfPersons.withText("11"))
.click(howManyPeopleField)
.click(noOfPersons.withText("21"))
.click(doYouHaveAlergiesYes)
.click(doYouHaveAlergiesNo)
.click(doYouHaveAlergiesMaybe)
.click(walnuts)
.click(chestnuts)
.click(fish)
.click(meat)
.click(shrimp)
.click(gluten)
.click(organiseButton)



})
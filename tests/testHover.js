import { Selector } from 'testcafe';

fixture('Hover Test')
    .page('http://the-internet.herokuapp.com/hovers'); 
  

test('Provera hover opcije', async t => {

    // Odabiranje selektora za objekate koji će biti testirani:
    const hoversObj = Selector('h3').withText(/Hovers/);
    const hoverInfo = Selector('p').withText("Hover over the image for additional information");
    const objectSelector1 = Selector('#content > div > div:nth-child(3) > img');
    const objectSelector2 = Selector('#content > div > div:nth-child(4) > img')
    const objectSelector3 = Selector('#content > div > div:nth-child(5) > img');
    const eSLink = Selector('a').withAttribute('target', '_blank').withAttribute('href', 'http://elementalselenium.com/');
    const elementalSelenium = Selector('h1.home-header')//.withText('Elemental Selenium');
    const notFoundPage = Selector("h1").withText('Not Found');
    
    // Selektor za natpis ispod objekta koji se očekuje da se pojavi
    const labelSelector1 = Selector('h5').withText('name: user1');
    const labelSelector2 = Selector('h5').withText('name: user2')
    const labelSelector3 = Selector('h5').withText('name: user3')
    // View profile link za svaki user
    const viewProfile1 = Selector('a').withAttribute('href', '/users/1');
    const viewProfile2 = Selector('a').withAttribute('href', '/users/2');
    const viewProfile3 = Selector('a').withAttribute('href', '/users/3');

    // Provera da li su svi elementi vidljivi i da li se nalaze na strani
    await t.maximizeWindow();
    await t .expect(hoversObj.visible).ok();
    await t .expect(hoverInfo.visible).ok();
    await t .expect(objectSelector1.visible).ok();
    await t .expect(objectSelector2.visible).ok();
    await t .expect(objectSelector3.visible).ok();
    await t .expect(eSLink.visible).ok();

    // Provera da li se natpis ispod objekta ne prikazuje pre hoverovanja
    await t.expect(labelSelector1.visible).notOk();
    await t.expect(labelSelector2.visible).notOk();
    await t.expect(labelSelector3.visible).notOk();
    await t.expect(viewProfile1.visible).notOk();
    await t.expect(viewProfile2.visible).notOk();
    await t.expect(viewProfile3.visible).notOk();

    // Usporavanje testa
    //await t.setTestSpeed(0.5);

    // Provera da li su elementi user i view profile vidljivi posle hoverovanja preko elementa
    // Element 1
    await t.hover(objectSelector1);
    await t.expect(labelSelector1.visible).ok();
    await t.expect(viewProfile1.visible).ok();

    // Element 2
    await t.hover(objectSelector2);
    await t.expect(labelSelector2.visible).ok();
    await t.expect(viewProfile2.visible).ok();

    // Element 3
    await t.hover(objectSelector3);
    await t.expect(labelSelector3.visible).ok();
    await t.expect(viewProfile3.visible).ok();

    // Provera linka - View profile user1 i vracanje nazad
    await t.hover(objectSelector1);
    await t.click(viewProfile1);
    await t.expect(notFoundPage.innerText).contains('Not Found');
    await t.eval(() => window.history.back());

    // Provera linka - View profile user2 i vracanje nazad
    await t.hover(objectSelector2);
    await t.click(viewProfile2);
    await t.expect(notFoundPage.innerText).contains('Not Found');
    await t.eval(() => window.history.back());

    // Provera linka - View profile user3 i vracanje nazad
    await t.hover(objectSelector3);
    await t.click(viewProfile3);
    await t.expect(notFoundPage.innerText).contains('Not Found');
    await t.eval(() => window.history.back());

    // Provera "Elemental Selenijum" linka i potvrda o novootvorenoj stranici
    await t.click(eSLink);
    await t.expect(elementalSelenium.innerText).contains('Make sure your code lands');

});
import { Selector } from 'testcafe';

fixture('Simulacija prvog ulaza na stranicu')
    .page('http://the-internet.herokuapp.com/entry_ad'); 

    test("Pojavljivanje modala bez ponovnog ulaza na stranu", async t =>{

     /*
     U Ovom testu cemo  simulirati prvi ulaz na stranu, i da proucimo na koji nacin moze da se emulira ponovo prvi ulaz na stranu,
     bez pokretanja novog testa ili izlaska sa strane i vracanja na nju u Testcafeu
    */

    const modalWindow = Selector("#modal > div.modal > div.modal-title > h3")
    const closeModalButton = Selector("#modal > div.modal > div.modal-footer > p");
    //Click here je dugme na stranici koje menja sadrzaj cookia i dozvoljava ponovnu pojavu modala nakon refresh-a stranice.
    //const resetButon = Selector("#restart-ad")
    //Nasao sam resenje da brisanje cookies dozvoljava ponovnu pojavu modala nakon refresh stranice.

   
    //await t.setTestSpeed(0.01);
    // Provera da li se modal nalazi na stranici i da li je vidljiv prilikom prvog ucitavanja
    await t.expect(modalWindow.exists).ok();
    await t.expect(modalWindow.visible).ok();
     //Gasenje modala na close dugme
    await t.click(closeModalButton);
    //Provera da li se modal nalazi na stranici i da li je vidljiv posle gasenja modala
    await t.expect(modalWindow.exists).ok(); //prisutan na stranici
    await t.expect(modalWindow.visible).notOk(); //nije vidljiv
    // Refresh stranice
    await t.eval(() => location.reload(true)); 
    //provera da li je modal vidljiv na stranici posle refresha / ocekivano je da se ne pojavi jer nije obrisan cookies
     await t.expect(modalWindow.visible).notOk();
    // brisanje cookies 
    await t.deleteCookies();
    //refresh stranice
    await t.eval(() => location.reload(true)); 
    //await t.click(resetButon);

    //provera da li se modal nalazi na stranici i da li je vidljiv posle brisanja cookies i refresh stranice/ ocekivano je da se pojavi.
    await t.expect(modalWindow.visible).ok();
    await t.expect(modalWindow.exists).ok();
    
  

});
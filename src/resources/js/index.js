/*--------------------------------------GLOBAL CONTROLLER--------------------------------------*/
import words from './models/words';
import * as wordsView from './views/wordsView';
import {elements} from './views/base';

//new URL variable
const URL = window.location.href;

/*--Page URL Assigns--*/
// words & videos
Array.from(elements.buttons).forEach(page=> {
    page.addEventListener('click', function(){
        //grab page name
        const name = this.innerHTML
        
        //using URL varibale from above
        window.location.assign(`${URL}${name}.html`, true)
    })
})

//Go Home
const goHome = () => {
    elements.home.addEventListener('click', () => {
        var newURL = URL.replace(/(words.html)|(videos.html)/, '');
        window.location.assign(newURL, true);
    })
}

/*--Functions for Homepage--*/
const homeDefine = () => {
    elements.juicing.addEventListener('click', () => {
        //insert cross
        elements.definitionCross.innerHTML = `${elements.cross}`;
    
        //show definition
        elements.definition.style.display = 'block';
    })
    
    elements.definitionCross.addEventListener('click', () => {
        //remove definition
        elements.definition.style.display = 'none'
    })
}

/*--Page Loads--*/

//home --> loading
const homeLoad = () => {
    //loading icon gets added
    elements.addLoader(elements.loader, 40);

    //loading items gets revealed
    setTimeout(() => {
        //remove loader
        elements.removeLoader(elements.loader);

        elements.landing.style.display = 'block';

    }, elements.timing())
}

//words --> loading
const wordsLoad = () => {
    //loading icon gets added
    elements.addLoader(elements.loader, 25)

    //loading icon gets grabbed
    const toBeRemoved = window.document.querySelector(`#${elements.stripped_wordsBox} svg`)
    setTimeout(() => {
        
        if(words!==null){

            //loading icon gets removed
            elements.removeLoader(toBeRemoved)
            
            //add thumbnails to page
            Array.from(words).forEach(content => {
                wordsView.toView(content);
            })

            //create constant for all thumbnails
            const selectedViewBox = window.document.querySelectorAll('#individualWordBox_js');

            Array.from(selectedViewBox).forEach(selected => {
                selected.addEventListener('click', function(){

                    //Change to big View 
                    wordsView.toBigView(selected.getAttribute('name'))
                })
            })
        } else{
            elements.removeLoader(toBeRemoved)
            elements.wordsError(elements.loader)
        }
    }, elements.timing())
}

//On page load
window.addEventListener('load', () => {
    if(/words/.test(URL)){
        wordsLoad();
        goHome();
    }else if(/videos/.test(URL)){
        console.log('loading video');
    }else {
        homeLoad();
        homeDefine();
    }
})







/*--------------------------------------GLOBAL CONTROLLER--------------------------------------*/
import words from './models/words';
import * as wordsView from './views/wordsView';
import * as videosView from './views/videosView';
import {elements} from './views/base';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

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

//Go to words when on videos and go to videos on words
const goVorW = () => {
    //Go to words when on videos and go to videos on words
    elements.ghost_buttons.addEventListener('click', function(){
        var newURL = changeURL();
        const name = this.innerHTML;
        window.location.assign(`${newURL}${name}.html`, true);
    })
}

//change url if its words or videos
const changeURL = () =>{
    var newURL = URL.replace(/(words.html)|(videos.html)/, '');
    return newURL
}


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
        $('.definition').addClass('animated bounceInDown');
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
    elements.addLoader(elements.home_loader, 40);

    //loading items gets revealed
    setTimeout(() => {
        //remove loader
        elements.removeLoader(elements.home_loader);

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

            //Load Navigation button
            goVorW();

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

//Videos --> loading
const videosLoad = () => {
    //loading icon gets added
    elements.addLoader(elements.loader, 25);

    setTimeout(() => {
        //Load Navigation button
        goVorW();

        //remove loader
        elements.removeLoader(elements.loader);
        
        //add iframe
        videosView.loadMainVid()

        //add sub Vids
        videosView.loadSubVid();

        //initiatie prev and next buttons
        elements.go_next.addEventListener('click', () => {
            videosView.changeVid('next')
        });
        elements.go_prev.addEventListener('click', () => {
            videosView.changeVid('prev')
        });

    }, elements.timing())
}

//On page load
window.addEventListener('load', () => {
    if(/words/.test(URL)){
        wordsLoad();
        goHome();
    }else if(/videos/.test(URL)){
        videosLoad();
        goHome();
    }else {
        homeLoad();
        homeDefine();
    }
})







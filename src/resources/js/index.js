// Global Controller
import words from './models/words';
import * as wordsView from './views/wordsView';
import {elements} from './views/base';
//import styles from '../css/style.css'

/*--On Page Load--*/
//On page load
window.addEventListener('load', () => {

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
        }}
        , elements.timing())
})

// Pages ---> words & videos
Array.from(elements.buttons).forEach(page=> {
    page.addEventListener('click', function(){
        //grab page name
        const name = this.innerHTML
        
        //assign new URL value
        const URL = window.location.href
        window.location.assign(`${URL}${name}.html`, true)
    })
})




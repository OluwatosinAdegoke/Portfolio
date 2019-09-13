/*--------------------------------------VIEW 4 WORDS-PAGE--------------------------------------*/
import {elements} from './base';
import words from '../models/words';
import 'waypoints/lib/noframework.waypoints.min.js';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;


// thumbnail view
export const toView = content => {
    const markUp = `<div class='col span-1-of-4 box' id='individualWordBox_js' name='${content.title}'>
                        <ul>
                            <li class='title'>${content.title}</li>
                            <li class='thumbnail'>
                                <img src='${content.img.a}'>
                            </li>
                            <li class='short-description'>${content.short_des}</li>
                        </ul>
                    </div>`
    elements.wordsBox.insertAdjacentHTML('beforeend', markUp)
}

//main view
export const toBigView = contentName => {
    // change background colour
    elements.page.classList.remove('words-background');
    elements.page.classList.add('view-background');

    //hide original content
    elements.wordBoxSection.style.display = 'none';

    //loop through entire array of articles to find matching title then select resepctive array
    //this way you convert the DOM object to just an array
    for (let i = 0; i <= words.length; i++){

        if(words[i].title === contentName){
            var content = words[i];
            break;
        }else continue;
    }

    const type = ['para', 'img']
    
    //create markUp 
    const markUp = `<div id='viewBoxSection_js'>
                        <div class='wordViewBox'>
                            <nav class='mainHead' name='mainHead'>
                                <span>
                                    ${elements.cross}
                                </span>

                                <h3>
                                    ${content.title}
                                </h3>
                            </nav>

                            <div class='row viewBox group'>
                                <div class='col span-1-of-2'>
                                    <ul class='list_words'>
                                        ${displayContent(content, type[0])}
                                    </ul>
                                </div>

                                <div class='col span-1-of-2'>
                                    <ul class='list_img'>
                                        ${displayContent(content, type[1])}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
    
    //insert new content
    window.document.querySelector('script').insertAdjacentHTML('beforebegin', markUp);

    //after a moment add new event listener to exit-x
    setTimeout(() => {
        window.document.querySelector('[name="mainHead"] svg').addEventListener('click', returnSmallView);
        stickyNavigationReady(content);
    }, 1500)
};

const displayContent = (content, type) => {
    if(type ==='para'){
        let y = [];
        for(let i = 0; i <= Object.keys(content.para).length; i++){
            //goes through object of paragraphs and converts to array
            //plots the value from each object in array inside a list item tag
            if(i < Object.keys(content.para).length){

                const x = `<li class='view_description'>${Object.values(content.para)[i]}</li>`;
                y.push(x);
            }else if(i === Object.keys(content.para).length)
                return y.join(" ");
        }
    }else if(type === 'img'){
        let y = [];
        for(let i = 0; i <= Object.keys(content.img).length; i++){
            Object.values(content.img)[i]
            // goes through object of images and converts to array
            //plots the value from each object in array inside a list item tag
            if(i < Object.keys(content.img).length){
                const x = `<li><img src= '${Object.values(content.img)[i]}'></li>`;
                y.push(x);
            }else if(i === Object.keys(content.img).length)
                return y.join(" ");
        }
    }
};

//returns the Big view to the small view
const returnSmallView = () => {
    //change background color back to original
    elements.page.classList.remove('view-background');
    elements.page.classList.add('words-background');

    //hide new content and show original content
    let toBeRemoved = window.document.querySelector('#viewBoxSection_js');
    toBeRemoved.parentNode.removeChild(toBeRemoved);
    elements.wordBoxSection.style.display = 'initial';
}

//sticky navigation
const stickyNavigationReady = (content) => {
  $('document').ready(function(){
      const waypoint =  new Waypoint({
            element: window.document.querySelector('.viewBox'),
            handler: (direction) => {

                const bigTitle = window.document.querySelector('[name="mainHead"]');
                const bigTitleClassList = bigTitle.classList

                if(direction === 'down'){

                    bigTitleClassList.remove('mainHead');
                    bigTitleClassList.add('row');
                    bigTitleClassList.add('drop_title');
                    console.log(direction)

                }else if(direction === 'up'){
                    bigTitleClassList.remove('drop_title');
                    bigTitleClassList.remove('row');
                    bigTitleClassList.add('mainHead');
                    console.log(direction)
                }
            },
            offset: '50px'
        })
    })
}

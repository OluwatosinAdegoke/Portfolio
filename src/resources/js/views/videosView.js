/*--------------------------------------VIEW 4 VIDEOS-PAGE--------------------------------------*/
import {elements} from './base';
import videos from '../models/videos';

const l = videos.length

//load most recent videos
export const loadMainVid = () => {
    //video load
    elements.main_vid.innerHTML = `<iframe src="${videos[l-1].iframe}" allow="autoplay; fullscreen" allowfullscreen data-p='${l-1}' id='main_vid_js'></iframe>`;

    //title load
    elements.main_title.innerHTML = videos[l-1].title;

    //decsription load
    elements.main_des.innerHTML = videos[l-1].description

    //commentary load
    elements.main_comm.innerHTML = videos[l-1].commentary
}


//load sub-videos --> x = array of sub videos, y = position of main video in sub video array
export const loadSubVid = (x = [l - 1]) => {
    for(var subVid in videos){
        if(videos[subVid] === videos[x]) continue;

        const markUp = `<div data-state='select' class='disable-select' title='${videos[subVid].title}'><h5>${videos[subVid].title}</h5></div>`

        elements.slide_prev.insertAdjacentHTML('afterend', markUp);
    }

    console.log(videos[subVid]);
    console.log(videos[x])
}

//update prev and next button
export const changeVid = (d) => {
    if(d === 'next'){
        const position = document.querySelector('#main_vid_js').dataset.p;

        if(videos[position + 1] === null || videos[position + 1] === undefined){
            //Change main video and all relevant attributes
            elements.main_vid.innerHTML = `<iframe src="${videos[0].iframe}" allow="autoplay; fullscreen" allowfullscreen data-p='${0}' id='main_vid_js'></iframe>`;
            elements.main_title.innerHTML = videos[0].title;
            elements.main_des.innerHTML = videos[0].description
            elements.main_comm.innerHTML = videos[0].commentary
            
            remove_div();
            loadSubVid(0);


        }else
            console.log(there)
    }else if(d === 'prev'){
        
    }
}

//remove divs
export const remove_div = () => {
    const to_delete = document.querySelectorAll('div[data-state="select"]')
    Array.from(to_delete).forEach(selected => {
        selected.remove()
    })
}

//add minimise description button
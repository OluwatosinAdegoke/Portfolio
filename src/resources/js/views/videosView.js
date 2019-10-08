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
        if(videos[subVid] === videos[x]) {continue}

        const markUp = `<div data-state='select' class='disable-select' title='${videos[subVid].title}'><h5>${videos[subVid].title}</h5></div>`

        elements.slide_prev.insertAdjacentHTML('afterend', markUp);
    }
}

/*Previous and Next Button Functions BEGINS*/
//update prev and next button
export const changeVid = (d) => {
    let position = document.querySelector('#main_vid_js').dataset.p;
    if(d === 'next'){
        position++;
        if(position === (videos.length)){
            //start from first element since we've reached the end
            //Change main video and all relevant attributes
            updateSubVid(0)
            remove_div();
            loadSubVid(0);
        }else if(isNaN(position) === false){
            //move on to the next element
            updateSubVid(position);
            remove_div();
            loadSubVid(position);

        }
    }else if(d === 'prev'){
        position--
        if(position === -1){
            //we have reached the very first element so must go to the end
            updateSubVid(l-1)
            remove_div();
            loadSubVid();
        }else if(isNaN(position) === false){
            //move on to the last
            updateSubVid(position)
            remove_div();
            loadSubVid(position);
        }
    }
}

//remove divs
export const remove_div = () => {
    const to_delete = document.querySelectorAll('div[data-state="select"]')
    Array.from(to_delete).forEach(selected => {
        selected.remove()
    })
}

//update main vid and sub vids
const updateSubVid = (x) => {
    elements.main_vid.innerHTML = `<iframe src="${videos[x].iframe}" allow="autoplay; fullscreen" allowfullscreen data-p='${x}' id='main_vid_js'></iframe>`;
    elements.main_title.innerHTML = videos[x].title;
    elements.main_des.innerHTML = videos[x].description;
    elements.main_comm.innerHTML = videos[x].commentary;
}
/*Previous and Next Button Functions END*/
//add minimise description button

//Arrow buttons
export const videoSlide = () => {
    
}
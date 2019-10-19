/*--------------------------------------VIEW 4 VIDEOS-PAGE--------------------------------------*/
import {elements} from './base';
import videos from '../models/videos';

const l = videos.length;
let sub_videos = '';
let main_vid_content = ''

//load iframe
const iframe = (data_p) => {
    const markUp = `<iframe class='animated fadeIn' src="${videos[data_p].iframe}" allow="autoplay; fullscreen" allowfullscreen data-p='${data_p}' id='main_vid_js'></iframe>`
    
    //main video load
    elements.main_vid.innerHTML = markUp;

    //title load
    elements.main_title.innerHTML = videos[data_p].title;

    //decsription load
    elements.main_des.innerHTML = videos[data_p].description;

    //commentary load
    elements.main_comm.innerHTML = videos[data_p].commentary;
}

//load most recent videos
export const loadMainVid = () => {
    //video load
    iframe(l-1);

    //assign main-video variable
    main_vid_content = window.document.querySelector('#main_vid_js');
}

//load sub-videos --> x = array of sub videos, y = position of main video in sub video array
export const loadSubVid = (x = [l - 1]) => {
    for(var subVid in videos){
        if(videos[subVid] === videos[x]) {continue}
        print_sub_videos(subVid)

    }

    //Initialise functions for sub-videos
    sub_videos = window.document.querySelectorAll('#sub_videos_container_js div[data-state="select"]');
    Array.from(sub_videos).forEach(selected => {
        selected.addEventListener('click', function(){

            //Change to big View 
            subvideo_click(selected.getAttribute('title'))
        })
    })
}

//print sub-videos
const print_sub_videos = (x) => {
    const markUp = `<div data-state='select' class='disable-select col span-1-of-5' title='${videos[x].title}'><h5>${videos[x].title}</h5></div>`
    elements.start.insertAdjacentHTML('afterend', markUp);
}

/*Previous and Next Button Functions BEGINS*/
//update prev and next button
export const changeVid = (d) => {
    let position = window.document.querySelector('#main_vid_js').dataset.p;
    if(d === 'next'){
        position++;
        if(position === (videos.length)){
            //start from first element since we've reached the end
            //Change main video and all relevant attributes
            iframe(0);
            remove_div();
            loadSubVid(0);
        }else if(isNaN(position) === false){
            //move on to the next element
            iframe(position);
            remove_div();
            loadSubVid(position);
            console.log('there')
        }
    }else if(d === 'prev'){
        position--
        if(position === -1){
            //we have reached the very first element so must go to the end
            iframe(l-1);
            remove_div();
            loadSubVid();
        }else if(isNaN(position) === false){
            //move on to the last
            iframe(position);
            remove_div();
            loadSubVid(position);
        }
    }
}

//remove divs
export const remove_div = () => {
    Array.from(sub_videos).forEach(selected => {
        selected.remove()
    })
}

//add minimise description button

/*Click Sub Videos*/
const subvideo_click = (title) => {
    let i = ''; 
    let content = ''
    for (i = 0; i <= videos.length; i++){
        if(videos[i].title === title){
            content = videos[i];
            break;
        }else continue;
    }

    //store title of current main video
    const div_title = `div[title = '${title}']`

    //replace the selected video details with the main video details
    //as well as the heading and decscription
    window.document.querySelector(`${div_title} h5`).innerHTML = elements.main_title.innerHTML;
    window.document.querySelector(`${div_title}`).title = elements.main_title.innerHTML;

    //change the main video for the selected video
    iframe(i);
}

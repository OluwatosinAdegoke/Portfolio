/*--------------------------------------KEY ELEMENTS--------------------------------------*/
export const elements = {
    main_vid: window.document.querySelector('figure div'),
    main_title: window.document.querySelector('figure h3'),
    main_des: window.document.querySelector('figure p:nth-of-type(1)'),
    main_comm: window.document.querySelector('figure p:nth-of-type(2)'),
    start: window.document.querySelector('.start'),
    go_prev: window.document.querySelector('#direction_js p:nth-of-type(1)'),
    go_next: window.document.querySelector('#direction_js p:nth-of-type(2)'),
    words: 'words',
    video: 'videos',
    home: window.document.querySelector('#home_js'),
    definition: window.document.querySelector('.definition'),
    definitionCross: window.document.querySelector('.definition a'),
    juicing: window.document.querySelector('.straightjuicing'),
    landing: window.document.querySelector('.landing'),
    wordsBox: window.document.getElementById(`wordBox_js`),
    stripped_wordsBox: 'loader_js',
    buttons: window.document.querySelectorAll('.inactive'),
    ghost_buttons: window.document.querySelector('.ghost'),
    page: window.document.querySelector('html'),
    home_loader: window.document.querySelector('.home-loader'),
    loader: window.document.querySelector('.loader'),
    wordBoxSection: window.document.querySelector('#wordBoxSection_js'),
    cross: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/>
            </svg>`,
    timing: () => {
        const options = [0, 1000, 1500, 2000, 2500]

        const choose = Math.floor(Math.random() * 4) + 1

        return(options[choose]);
    },
    addLoader: (placement, percent) => {
        const markUp =  `<svg width="${percent}%" height="${percent}%" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#222">
                            <g fill="none" fill-rule="evenodd" stroke-width="2" stroke='#ffb142'>
                                <circle cx="22" cy="22" r="1">
                                    <animate attributeName="r"
                                        begin="0s" dur="1.8s"
                                        values="1; 20"
                                        calcMode="spline"
                                        keyTimes="0; 1"
                                        keySplines="0.165, 0.84, 0.44, 1"
                                        repeatCount="indefinite" outline-color = '#ffb142'/>
                                    <animate attributeName="stroke-opacity"
                                        begin="0s" dur="1.8s"
                                        values="1; 0"
                                        calcMode="spline"
                                        keyTimes="0; 1"
                                        keySplines="0.3, 0.61, 0.355, 1"
                                        repeatCount="indefinite" />
                                </circle>
                                <circle cx="22" cy="22" r="1">
                                    <animate attributeName="r"
                                        begin="-0.9s" dur="1.8s"
                                        values="1; 20"
                                        calcMode="spline"
                                        keyTimes="0; 1"
                                        keySplines="0.165, 0.84, 0.44, 1"
                                        repeatCount="indefinite" />
                                    <animate attributeName="stroke-opacity"
                                        begin="-0.9s" dur="1.8s"
                                        values="1; 0"
                                        calcMode="spline"
                                        keyTimes="0; 1"
                                        keySplines="0.3, 0.61, 0.355, 1"
                                        repeatCount="indefinite" />
                                </circle>
                            </g>
                        </svg>`
    
        placement.insertAdjacentHTML('beforeEnd', markUp)
    },
    removeLoader: placement => {
        placement.remove()
    },
    wordsError: placement => {
        const markUp = `<h3>404 something went wrong</h3>`
        placement.insertAdjacentHTML('beforeEnd', markUp)
    },
    wordViewExit: document.querySelector('.wordViewBox span svg')
}


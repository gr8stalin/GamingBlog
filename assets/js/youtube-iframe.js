let myVideos = [
    'Fqoxen6wWdY',
    '2ZXmwl7z4BE',
    'KFPuqmHjDnI',
    'iATHc62hnwU',
    'YgxkNdI6T6I',
    'qv0EpfSGo4I',
    '4SdB_C3KmE4',
    'br1RDCXENKU',
    'RGcR9mZLdJs',
    'xfzRcLblEbw',
    'FPpMo76lxoM',
    'okWW1P0K7oA',
    'QBEw-VUgPb4',
    'Hgtckv8JeNU',
    'IlVxKJnXEZc',
    'BXWcc46tSyM',
    'aWI28nke-tM',
    'gz1bwM8fu7w',
    'UB9St1iHZQ8',
    'X92lY69vz18',
    'HrDEW3SEFsc',
    '62R_YsqEihM',
    '_pCfhF0rDlA',
    'iNZcY-73Fvo',
    'IRdmK1-FXvg',
    'hnOPNSAvM40',
    'jf8TeByQl44',
    'YTisNbEzr80',
    'GErb4J3UI7M',
    'kV-DqIhfTYc',
    'zSTleXQy7rg',
    'PW9NctOXICc',
    'O5LoPuHiapE',
    'HmOEMlyDqwA',
    '8nIoK06vPdM',
    'hBltairxIcE',
    'X790Usvvvyo',
    'pJmJO7euJk8',
    'EYKmtaNh7-U',
    'DhyWtkZjteI',
    'syn0HYnDsCM',
    'cuTnwf-6jXU',
    '-Dzki0jiarU',
    '4dfBx58z56I',
    'HgPcv7-uSgY',
    'nr2BlE2qQHY',
    '3S8KHQ-OqR4',
    'M-dwBTrQs-4',
    'DSexKwSM9gc',
    'u3OMc0zIxJ8',
    'QeB7-DboaiA',
    'Cndag5O32zw',
    'Kj2TRljCp2s',
    'qoj459CsXSE',
    'JcQzuGTxWmg',
    'BKH2HiAxjlA',
    'lolwSre8WAM',
    '8vJnysR5SFw',
    'xsFelR6dgdE',
    'ihhUw6rlPw8',
    'V6Ywf5xO9lI',
    'sYjwwOYJEnU',
    'fEXAhIAPi9s',
    'vKgbN6vpup8',
    'kArclFIUJ7I',
    'OwtfCa1KcUc',
    'nSvg3TQOFnA',
    'iZkooL6ivIs',
    'CzsQqnHxETg',
    'ozhw7IzPuwU',
    'IlVxKJnXEZc',
    '3MQaNlLF0Zc',
    'OOJUPSRfopc',
    'cve4X64jC8k',
    'lV0EEiXKfvU',
    'LnKTvJYNJTo',
    'SOZtsMQ5_ek',
    '3MQaNlLF0Zc'
];

let recentVideos = [];
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const getRandomVideo = () => {
    return myVideos[Math.floor(Math.random() * myVideos.length)];
}

let currentVideoId = getRandomVideo();
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '480',
        width: '848',
        videoId: currentVideoId,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'disablekb': 1,
            'enablejsapi': 1,
            'modestbranding': 1,
            'rel': 0,
            'cc_load_policy': 0 
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
        }
    });

    function onPlayerReady(event) {
        event.target.setVolume(25);
        event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        // https://developers.google.com/youtube/iframe_api_reference#Playback_status
        // 0 is the signal that the video has ended: once the current video has ended,
        // load up another one and play it immediately
        if (event.data === 0) {
            let videoId = getRandomVideo();

            while (recentVideos.includes(videoId)) {
                videoId = getRandomVideo();    
            }

            recentVideos.push(videoId);
            player.setVolume(25);
            player.loadVideoById(videoId);
        }
    }

    function onPlayerError(event) {
        alert(event);
    }
}
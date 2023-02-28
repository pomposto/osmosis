export default function appData() {
    return {
        'currentIndex': 0,
        'parts':
            [
                {
                    'id': 0,
                    'name': "intro",
                    'resourceUrl': '',
                    'completed': false,
                    'textColor': '#3b53cd',
                    'bgColor': '#bb29a3',
                    'video':
                        {
                            'title': 'Intro Video Ttile',
                            /*'url': "../assets/videos/vid.mp4",*/
                            'url': "vid.mp4",
                            'width': '400px',
                            'height': '400px',
                            'text': 'intro video',
                        },
                },


                {
                    'id': 1,
                    'name': "Part1",
                    'completed': false,

                    'sections':
                        [
                            {
                                'index': 0,
                                'selected': true,
                                'completed': false,
                                'name': 'Telomere',
                                'bg': "../assets/img/k1.png",
                                'color': '#d5eace',
                                'textColor': '#6E8C66',
                                'playButton': '../assets/img/mitosis_telomore_play.png',
                                'video':
                                    {
                                        'title': 'Telomore Video Title1',
                                        /*'url': "../assets/videos/vid.mp4",*/
                                        'url': "vid.mp4",
                                        'width': '600px',
                                        'height': '400px',
                                        'text': 'Lsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf sdfsdfsdf',
                                    },

                                'arrowBG': '../assets/img/mitosis_telomore_arrow.svg',

                                'objective': ''
                            },

                            {
                                'index': 1,
                                'selected': false,
                                'completed': false,
                                'name': 'Euchromatin',
                                'bg': "../assets/img/mitosis_cycle.png",
                                'color': '#DAC2F7',
                                'textColor': '#604679',
                                'resourceUrl': '',
                                'text': 'Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum',
                                'arrowBG': '../assets/img/mitosis_euchromatin_arrow.svg',
                                'playButton': '../assets/img/mitosis_euchromatin_play.png',
                                'video':
                                    {
                                        'title': 'Telomore Video Title2',
                                        /*'url': "../assets/videos/vid.mp4",*/
                                        'url': "vid.mp4",
                                        'width': '400px',
                                        'height': '400px',
                                        'text': 'Lsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf sdfsdfsdf',
                                    },
                                'objective': ''

                            },

                            {
                                'index': 2,
                                'selected': false,
                                'completed': false,
                                'name': 'Centromere',
                                'bg': '../assets/img/mitosis_target.png',
                                'color': '#CDF7F4',
                                'textColor': '#48827c',
                                'resourceUrl': '',
                                'text': 'Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum',
                                'arrowBG': '../assets/img/mitosis_centromere_arrow.svg',
                                'playButton': '../assets/img/mitosis_centromere_play.png',
                                'video':
                                    {
                                        'title': 'Telomore Video Title3',
                                        /*'url': "../assets/videos/vid.mp4",*/
                                        'url': "vid.mp4",
                                        'width': '400px',
                                        'height': '400px',
                                        'text': 'Lsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf sdfsdfsdf',
                                    },
                                'objective': ''
                            },

                            {
                                'index': 3,
                                'selected': false,
                                'completed': false,
                                'name': 'Heterochromatin',
                                'bg': '../assets/img/k4.png',
                                'color': '#FFDCDA',
                                'textColor': '#6d4d4a',
                                'resourceUrl': '',
                                'text': 'Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum',
                                'arrowBG': '../assets/img/mitosis_heterochromatin_arrow.svg',
                                'playButton': '../assets/img/mitosis_euchromatin_play.png',
                                'video':
                                    {
                                        'title': 'Telomore Video Title',
                                        /*'url': "../assets/videos/vid.mp4",*/
                                        'url': "vid.mp4",
                                        'width': '400px',
                                        'height': '400px',
                                        'text': 'Lsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf sdfsdfsdf',
                                    },
                                'objective': ''
                            }
                        ]
                },

                {
                    'id': 2,
                    'name': "Part2a",
                    'completed': false,

                    'questions':
                    [
                        {
                            'drafted':false,
                            'questionText':"0questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Telomere',
                            'type':'Telomere',
                            'result':""
                        },
                        {
                            'drafted':false,
                            'questionText':"1questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Telomere',
                            'type':'Telomere',
                            'result':""
                        },
                        {
                            'drafted':false,
                            'questionText':"2questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Telomere',
                            'type':'Telomere',
                            'result':""
                        },
                        {
                            'drafted':false,
                            'questionText':"3questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Telomere',
                            'type':'Telomere',
                            'result':""
                        },
                        {
                            'drafted':false,
                            'questionText':"4questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Telomere',
                            'type':'Telomere',
                            'result':""
                        },
                        {
                            'drafted':false,
                            'questionText':"5questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Telomere',
                            'type':'Telomere',
                            'result':""
                        },
                        {
                            'drafted':false,
                            'questionText':"6questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Euchromatin',
                            'type':'Euchromatin',
                            'result':""
                        },
                        {
                            'drafted':false,
                            'questionText':"7questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Euchromatin',
                            'type':'Euchromatin',
                            'result':""
                        },
                        {
                            'drafted':false,
                            'questionText':"8questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Euchromatin',
                            'type':'Euchromatin',
                            'result':""
                        },
                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Euchromatin',
                            'type':'Euchromatin',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Euchromatin',
                            'type':'Euchromatin',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Euchromatin',
                            'type':'Euchromatin',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Euchromatin',
                            'type':'Euchromatin',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Centromere',
                            'type':'Centromere',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Heterochromatin',
                            'type':'Heterochromatin',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Heterochromatin',
                            'type':'Heterochromatin',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Heterochromatin',
                            'type':'Heterochromatin',
                            'result':""
                        },
                        {
                            'drafted':false,
                            'questionText':"9questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",
                            'correctChoice':'Heterochromatin',
                            'type':'Heterochromatin',
                            'result':""
                        },

                        {
                            'drafted':false,
                            'questionText':"10questionText here",
                            'correctChoice':'Heterochromatin',
                            'type':'Heterochromatin',
                            'result':""
                        }
                    ],

                    'sections':
                        [
                            {
                                'index': 0,
                                'selected': true,
                                'completed': false,
                                'name': 'Telomere',
                                'bg': "../assets/img/kromozom1.png",
                                'color': '#d5eace',
                                'textColor': '#6E8C66',
                                'video':
                                    {
                                        'title': 'Telomore Video Title',
                                        /*'url': "../assets/videos/vid.mp4",*/
                                        'url': "vid.mp4",
                                        'width': '400px',
                                        'height': '400px',
                                        'text': 'Lsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf sdfsdfsdf',
                                    },

                                'arrowBG': '../assets/img/mitosis_telomore_arrow.svg',

                                'objective': ''
                            },

                            {
                                'index': 1,
                                'selected': false,
                                'completed': false,
                                'name': 'Euchromatin',
                                'bg': "../assets/img/kromozom2.png",
                                'color': '#DAC2F7',
                                'textColor': '#604679',
                                'resourceUrl': '',
                                'text': 'Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum',
                                'arrowBG': '../assets/img/mitosis_euchromatin_arrow.svg',
                                'objective': ''

                            },

                            {
                                'index': 2,
                                'selected': false,
                                'completed': false,
                                'name': 'Centromere',
                                'bg': '../assets/img/kromozom3.png',
                                'color': '#CDF7F4',
                                'textColor': '#48827c',
                                'resourceUrl': '',
                                'text': 'Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum',
                                'arrowBG': '../assets/img/mitosis_centromere_arrow.svg',
                                'objective': ''
                            },

                            {
                                'index': 3,
                                'selected': false,
                                'completed': false,
                                'name': 'Heterochromatin',
                                'bg': '../assets/img/kromozom4.png',
                                'color': '#FFDCDA',
                                'textColor': '#6d4d4a',
                                'resourceUrl': '',
                                'text': 'Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum',
                                'arrowBG': '../assets/img/mitosis_heterochromatin_arrow.svg',
                                'objective': ''
                            }
                        ]
                },


                {
                    'id': 3,
                    'name': "Part2b",
                    'completed': false,

                    'questions': [
                        {
                            'index':0,
                            'questionText': "111  multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Telomere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa1",
                            'choiceB': "bbbb1",
                            'choiceC': "cccc1",
                            'choiceD': "dddd1",
                            'choiceE': "eeee1",
                        },

                        {
                            'index':1,
                            'questionText': "222  multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Telomere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':2,
                            'questionText': "333  multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Telomere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa3",
                            'choiceB': "bbbb3",
                            'choiceC': "cccc3",
                            'choiceD': "dddd3",
                            'choiceE': "eeee3",
                        },

                        {
                            'index':3,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Telomere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':4,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Telomere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':5,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Telomere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':6,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Telomere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':7,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Telomere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Euchromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Euchromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Euchromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Euchromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Euchromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Euchromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Centromere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Centromere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Centromere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Centromere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Centromere',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Heterochromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },
                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Heterochromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },
                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Heterochromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },
                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Heterochromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },
                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Heterochromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },

                        {
                            'index':0,
                            'questionText': "multiple choice question 1  multiple choice question 1multiple choice question 1multiple choice question 1",
                            'type': 'Heterochromatin',
                            'drafted': true,
                            'completed': false,
                            'correctChoice': "A",
                            'userChoice': "",
                            'result': "",
                            'choiceA': "aaaa2",
                            'choiceB': "bbbb2",
                            'choiceC': "cccc2",
                            'choiceD': "dddd2",
                            'choiceE': "eeee2",
                        },
                    ]
                },


                {
                    'id': 4,
                    'name': "Part2c",
                    'completed': false,
                    'reports':
                    [
                        {'type':'Telomere',         'questionCount':0, 'correctCount':0 },
                        {'type':'Euchromatin',      'questionCount':0, 'correctCount':0 },
                        {'type':'Centromere',       'questionCount':0, 'correctCount':0 },
                        {'type':'Heterochromatin',  'questionCount':0, 'correctCount':0 },
                    ]
                },


                {
                    'id': 5,
                    'name': "Part3",
                    'resourceUrl': '',
                    'completed': false,

                    'videos': [
                       {
                            'title': 'Intro Video Ttile',
                            'url': "../assets/videos/vid.mp4",

                            'width': '400px',
                            'height': '400px',
                            'text': 'intro video',
                        },

                        {
                            'title': 'Intro Video Ttile',
                            'url': "../assets/videos/vid.mp4",

                            'width': '400px',
                            'height': '400px',
                            'text': 'intro video',
                        },


                      ]
                },


                {
                    'id': 6,
                    'name': "intro",
                    'resourceUrl': '',
                    'completed': false
                },


            ]
    }
}
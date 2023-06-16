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
                            'url': "intro.mp4",
                            'width': '1220px',
                            'height': '700px',
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
                                'bg': "k1.png",
                                'color': '#d5eace',
                                'textColor': '#6E8C66',
                                'playButton': '../assets/img/mitosis_telomore_play.png',
                                'video':
                                    {
                                        'title': 'Telomore Video Title1',
                                        /*'url': "../assets/videos/vid.mp4",*/
                                        'url': "04_telomeres.mp4",
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
                                'bg': "k2.png",
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
                                'bg': "k3.png",
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
                                'bg': 'k4.png',
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
                                'bg': "k1.png",
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
                                'bg': "k2.png",
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
                                'bg': "k3.png",
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
                                'bg': "k4.png",
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
                            'title': 'Intro Video title left',
                            'url': "vid.mp4",

                            'width': '400px',
                            'height': '400px',
                            'text': 'intro video',
                        },

                        {
                            'title': 'Intro Video title right',
                            'url': "vid.mp4",

                            'width': '400px',
                            'height': '400px',
                            'text': 'intro video',
                        },

                        {
                            'title': 'Intro Video title zoomed',
                            'url': "vid.mp4",

                            'width': '400px',
                            'height': '400px',
                            'text': 'intro video',
                        },


                      ]
                },


                {
                    'id': 6,
                    'name': "Part4",
                    'resourceUrl': '',
                    'completed': false,

                    'videos': [
                        {
                            'id': 0,
                            'title': 'Intro Video Ttile',
                            'url': "vid.mp4",
                            'completed': false,
                            'width': '400px',
                            'height': '400px',
                            'text': 'intro video',
                            'name': 'Aneploidy',
                        },

                        {
                            'id': 1,
                            'title': 'Intro Video Ttile',
                            'url': "vid.mp4",
                            'completed': false,
                            'width': '400px',
                            'height': '400px',
                            'text': 'intro video',
                            'name': 'Polyploidy',
                        },

                        {
                            'id': 2,
                            'title': 'Intro Video Ttile',
                            'url': "vid.mp4",
                            'completed': false,
                            'width': '400px',
                            'height': '400px',
                            'text': 'intro video',
                            'name': 'Structural Changes',
                        },

                        {
                            'id': 3,
                            'title': 'Intro Video Ttile',
                            'url': "vid.mp4",
                            'completed': false,
                            'width': '400px',
                            'height': '400px',
                            'text': 'intro video',
                            'name': 'Cancer',
                        }
                        ]

                },


                {
                    'id': 7,
                    'name': "Part5",
                    'resourceUrl': '',
                    'completed': false,
                    'answers': ["Prophase", "Metaphase", "Anaphase", "Telophase"],

                    'questions':
                      [
                          {
                              'title':"Question Title Sample",
                              'drafted':false,
                              'correctAnswer':0,
                              'answers': ["Prophase", "Metaphase", "Anaphase", "Telophase"],
                              'questionText':"Part5 question  10questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",

                          },

                          {
                              'title':"Question Title Sample",
                              'drafted':false,
                              'correctAnswer':1,
                              'answers': ["Prophase", "Metaphase", "Anaphase", "Telophase"],
                              'questionText':"Part5 question 2 questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",

                          },

                          {
                              'title':"Question Title Sample",
                              'drafted':false,
                              'correctAnswer':2,
                              'answers': ["Prophase", "Metaphase", "Anaphase", "Telophase"],
                              'questionText':"Part5 question 3 questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",

                          },

                          {
                              'title':"Question Title Sample",
                              'drafted':false,
                              'correctAnswer':3,
                              'answers': ["Prophase", "Metaphase", "Anaphase", "Telophase"],
                              'questionText':"Part5 question 4 questionText here questionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText herequestionText here",

                          },
                        ]

                },

                {
                    'id': 8,
                    'name': "Part5b",
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
                    'id': 9,
                    'name': "Part6",
                    'completed': false,
                    'reportTitle':"Final Report",
                    'reportText':"",

                    'questions': [
                        {
                            'index':0,
                            'title':"Question 1",
                            'questionText': "Part 6 question text  : Part 6 question text  Part 6 question text  Part 6 question text",
                            'lights':[

                                {
                                    'visible': true,
                                    'id': 0,
                                    'variable': 'Cell Size',
                                    'images'    : ['cell_size_1.png', 'cell_size_2.png', 'cell_size_3.png', 'cell_size_4.png'],
                                    'count'     : 3,
                                    'val': 0
                                },

                                {
                                    'visible': true,
                                    'id': 1,
                                    'variable': 'Nutrients in cell',
                                    'images'    :["", "nutrients_in_cell.png"],
                                    'count'     : 1,
                                    'val': 0
                                },

                                {
                                    'visible': true,
                                    'id': 2,
                                    'variable': 'Growth Factors in Environment',
                                    'images'    :["", "growth_factors_in_environment.png"],
                                    'count'     : 1,
                                    'val': 0
                                },

                                {
                                    'visible': true,
                                    'id': 3,
                                    'variable': 'DNA Damage in Cell',
                                    'images'    :["", "dna_damage.png"],
                                    'count'     : 1,
                                    'val': 0
                                },

                                {
                                    'visible': false,
                                    'id': 4,
                                    'variable': 'DNA damage detected.',
                                    'images'    :["", "dna_damage.png"],
                                    'count'     : 1,
                                    'val': 1
                                },




                            ],

                            'choices':[
                                {
                                    'id': 0,
                                    'text': 'Synthesize DNA',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'feedback': 'You cannot synthesize DNA in this phase of the cell cycle'},
                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 1,
                                    'text': 'Absorb Nutrients',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':1, 'statement':'==', 'value': 1, 'effect':'', 'feedback': 'The cell has already taken all needed nutrients'},

                                                  {'lightId':1, 'statement':'==', 'value': 0, 'effect':'+', 'feedback': 'The cell has taken in some more nutrients'}, //ışık 2 yeşile dönebilir

                                              ]
                                        }
                                    ],

                                },



                                {
                                    'id': 2,
                                    'text': 'Check DNA for Damage',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':3, 'statement':'==', 'value': 1, 'effect':'', 'feedback': 'DNA damage has already been repaired.'},
                                                  {'lightId':3, 'statement':'==', 'value': 0, 'effect':'+', 'feedback': 'You have detected some DNA damage!'},
                                                  {'lightId':3, 'statement':'==', 'value': 1, 'effect':'', 'feedback': 'You have already detected DNA damage'},
                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 3,
                                    'text': 'Move to Next Phase in Cell Cycle',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':'all', 'statement':'all-green', 'value': "green", 'effect':'complete', 'feedback': 'Congratulations, the cell has now moved into S phase.'},
                                                  {'lightId':'all', 'statement':'all-not-green', 'value': "green", 'effect':'complete', 'feedback': 'The cell is not ready to move into the S phase.'},


                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 4,
                                    'text': 'Repair DNA damage',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':3, 'statement':'==', 'value': 0, 'effect':'', 'feedback': ' DNA damage has already been repaired.'},
                                                  {'lightId':3, 'statement':'==', 'value': 0, 'effect':'', 'feedback': 'Check if DNA damage exists or not first.'},
                                                  {'lightId':3, 'statement':'==', 'value': 1, 'effect':"+", 'feedback': 'DNA damage is now repaired.'},
                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 5,
                                    'text': 'Check for Growth Factors',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':2, 'statement':'==', 'value': 0, 'effect':'+', 'feedback': 'There are growth factors in the environment.'},
                                                  {'lightId':2, 'statement':'==', 'value': 1, 'effect':'', 'feedback': 'You already detected growth factors\n'},

                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 6,
                                    'text': 'Grow Larger',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':0, 'statement':'==', 'value': 3, 'effect':'', 'feedback': ' The cell has reached its maximum size, it cannot grow any bigger.'},
                                                  {'lightId':0, 'statement':'<', 'value': 3, 'effect':'+', 'feedback': 'The cell has grown a bit larger.'},
                                              ]
                                        }
                                    ],

                                },
                            ],

                        },


                        {
                            'index':1,
                            'title':"Question 2",
                            'questionText': "Scenario 2Text Here  Scenario 2 Text Here Scenario 2 Text Here Scenario 2 Text Here Scenario 2 Text Here ",

                            'lights':[

                                {
                                    'visible': true,
                                    'id': 0,
                                    'variable': 'DNA Replication',
                                    'images'    : ['', '', ''],
                                    'count'     : 2,
                                    'val': 0
                                },

                                {
                                    'visible': true,
                                    'id': 1,
                                    'variable': 'DNA Damage in Cell',
                                    'images'    :["", "nutrients_in_cell.png"],
                                    'count'     : 1,
                                    'val': 0
                                },

                                {
                                    'visible': false,
                                    'id': 2,
                                    'variable': 'DNA damage detected.',
                                    'images'    :["", "dna_damage.png"],
                                    'count'     : 1,
                                    'val': 0
                                },
                            ],

                            'choices':[
                                {
                                    'id': 0,
                                    'text': 'Synthesize DNA',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':0, 'statement':'==', 'value': 2, 'effect':'', 'feedback': 'The cell has already completed DNA replication.'},
                                                  {'lightId':0, 'statement':'==', 'value': 1, 'effect':'', 'feedback': 'You already synthesized DNA. Check it for errors next.'},
                                                  {'lightId':0, 'statement':'==', 'value': 0, 'effect':'+', 'feedback': 'DNA is being synthesized… the chromosomes have now been duplicated'},
                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 1,
                                    'text': 'Absorb Nutrients',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  { 'feedback': 'The cell has enough nutrients.'},



                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 2,
                                    'text': 'Move to Next Phase in Cell Cycle',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':'all', 'statement':'all-green', 'value': "green", 'effect':'complete', 'feedback': 'Congratulations, the cell has now moved into Mitosis.'},
                                                  {'lightId':'all', 'statement':'all-not-green', 'value': "green", 'effect':'complete', 'feedback': 'The cell is not ready to move into mitosis yet.'},


                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 3,
                                    'text': 'Check for Growth Factors',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  { 'feedback': 'Growth factors present in the environment.'},

                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 4,
                                    'text': 'Grow Larger',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  { 'feedback': 'The cell is large enough to enter mitosis.'},
                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 5,
                                    'text': 'Repair DNA damage',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':1, 'statement':'==', 'value': 1, 'effect':'', 'feedback': ' DNA damage has already been repaired.'},//ok//ok



                                                  {'multi':true, 'lightId':[1,2], 'statement':['==', '=='], 'value': [0,0], 'effect':["", ""], 'feedback': 'Check if DNA damage exists or not first.'},

                                                 /* {'lightId':2, 'statement':'==', 'value': 0, 'effect':"+", 'feedback': 'DNA damage is now repaired.'},*/

                                                  {'multi':true, 'lightId':[1,2], 'statement':['==', '=='], 'value': [0,1], 'effect':["+", ""], 'feedback': 'Check if DNA damage exists or not first.'},
                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 6,
                                    'text': 'Check DNA for Damage Again',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'cdid':0,  'lightId':0, 'statement':'==', 'value': 1, 'effect':'',   'feedback': ' DNA damage has already been repaired.'},//ok

                                                  {'cdid':1,  'multi':true, 'lightId':[1,2], 'statement':['==', '=='], 'value': [0,1], 'effect':["", ""], 'feedback': 'You have already detected DNA damage.'}, // ok

                                                  {'cdid':2,  'multi':true, 'lightId':[1,2], 'statement':['==', '=='], 'value': [0,0], 'effect':["", "+"], 'feedback': 'You have detected some further DNA damage!'}, // ok



                                              ]
                                        }
                                    ],

                                },

                                {
                                    'id': 7,
                                    'text': 'Check for DNA Replication Completeness',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':0, 'statement':'==', 'value': 2, 'effect':'', 'feedback': ' The cell has already completed DNA replication.'},
                                                  {'lightId':0, 'statement':'==', 'value': 1, 'effect':'+', 'feedback': ' The DNA check is done. DNA replication is complete.'},
                                                  {'lightId':0, 'statement':'==', 'value': 0, 'effect':'', 'feedback': ' Synthesize the new DNA before checking it for completeness'},
                                              ]
                                        }
                                    ],

                                },
                            ],

                        },




                        {
                            'index':2,
                            'title':"Question 3",
                            'questionText': "Scenario 3 Text Here  Scenario 3 Text Here Scenario 3 Text Here Scenario 3 Text Here Scenario 3 Text Here  ",
                            'lights':[

                                {
                                    'visible': true,
                                    'id': 0,
                                    'variable': 'Check Chromosome Attachment to Spindles',
                                    'images'    : ['', ''],
                                    'count'     : 1,
                                    'val': 0
                                },

                                {
                                    'visible': true,
                                    'id': 1,
                                    'variable': 'Mitosis Stage',
                                    'images'    :["", "nutrients_in_cell.png", "", ""],
                                    'count'     : 3,
                                    'val': 0
                                },



                                {
                                    'visible': true,
                                    'id': 2,
                                    'variable': 'Chromosomes Condensed.',
                                    'images'    :["", "dna_damage.png"],
                                    'count'     : 1,
                                    'val': 0
                                },

                                {
                                    'visible': true,
                                    'id': 3,
                                    'variable': 'Spindle Fibers Constructed.',
                                    'images'    :["", "dna_damage.png"],
                                    'count'     : 1,
                                    'val': 0
                                },

                                {
                                    'visible': true,
                                    'id': 4,
                                    'variable': 'Nucleus Dismantled.',
                                    'images'    :["",""],
                                    'count'     : 1,
                                    'val': 0
                                },

                            ],

                            'choices':[
                                {
                                    'id': 0,
                                    'text': 'Synthesize DNA',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  { 'feedback': 'DNA synthesis is completed before the cell enters mitosis.'},
                                              ]
                                        }
                                    ],

                                },
                                {
                                    'id': 1,
                                    'text': 'Absorb Nutrients',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  { 'feedback': 'The cell has enough nutrients.'},
                                              ]
                                        }
                                    ],

                                },
                                {
                                    'id': 2,
                                    'text': 'Check DNA for Damage',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  { 'feedback': 'No DNA damage detected.'},
                                              ]
                                        }
                                    ],

                                },
                                {
                                    'id': 3,
                                    'text': 'Move to Next Mitosis Stage',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':1, 'statement':'==', 'value': 2, 'effect':'+', 'feedback': 'The cell division is complete.'},//ok


                                                  //case 3
                                                  {'multi':true, 'lightId':[1,0], 'statement':['==', '=='], 'value': [1,1], 'effect':["+", ""], 'feedback': ' You made it through the M checkpoint! Go ahead and complete the cell division.'},
                                                  {'multi':true, 'lightId':[1,0], 'statement':['==', '=='], 'value': [1,0], 'effect':["", ""], 'feedback': ' Ensure all chromosomes are attached to the spindle fibers and are ready for cell division.'},


                                                  //case 2
                                                  {'multi':true, 'lightId':[1,2], 'statement':['==', '=='], 'value': [0,0], 'effect':["", ""], 'feedback': 'The cell is not ready to move into the next stage of mitosis yet.'},
                                                  {'multi':true, 'lightId':[1,3], 'statement':['==', '=='], 'value': [0,0], 'effect':["", ""], 'feedback': 'The cell is not ready to move into the next stage of mitosis yet.'},

                                                   //case 1
                                                  {'multi':true, 'lightId':[1,2,3], 'statement':['==', '==', '=='], 'value': [0,1,1], 'effect':["+", "",""], 'feedback': 'The cell has now moved into metaphase.'},
                                              ]
                                        }
                                    ],

                                }, // sonra
                                {
                                    'id': 4,
                                    'text': 'Check for Growth Factors',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  { 'feedback': 'Growth factors present in the environment.'},

                                              ]
                                        }
                                    ],

                                },
                                {
                                    'id': 5,
                                    'text': 'Condense Chromatin',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':2, 'statement':'==', 'value': 1, 'effect':'', 'feedback': ' The DNA is already condensed.'},//ok//ok
                                                  {'lightId':2, 'statement':'==', 'value': 0, 'effect':'+', 'feedback': ' The DNA is now condensed into chromosomes(???).'},//ok


                                              ]
                                        }
                                    ],

                                },
                                {
                                    'id': 6,
                                    'text': 'Dismantle Nuclear Membrane',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':4, 'statement':'==', 'value': 1, 'effect':'', 'feedback': ' The nuclear membrane has already been dismantled.'},//ok
                                                  {'lightId':4, 'statement':'==', 'value': 0, 'effect':'+', 'feedback': 'The nuclear membrane has been dismantled.'},//ok
                                              ]
                                        }
                                    ],

                                },
                                {
                                    'id': 7,
                                    'text': 'Attach Chromosomes to Spindle Fibers',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':1, 'statement':'!=', 'value': 1, 'effect':'', 'feedback': 'It is not appropriate to check chromosomes for spindle fiber attachment at this time'},//ok

                                                  {'multi':true, 'lightId':[0,1], 'statement':['==', '=='], 'value': [1,1], 'effect':["", ""], 'feedback': 'You have already checked for correct attachment of the chromosomes to the spindle fibers.'},//ok

                                                  {'multi':true, 'lightId':[0,1], 'statement':['==', '=='], 'value': [0,1], 'effect':["+", ""], 'feedback': 'Chromosomes are being attached to spindle fibers.'},//ok


                                              ]
                                        }
                                    ],

                                },
                                {
                                    'id': 8,
                                    'text': 'Construct Spindle Fibers',
                                    'check':[
                                        {
                                            'conditions':
                                              [
                                                  {'lightId':3, 'statement':'==', 'value': 1, 'effect':'', 'feedback': ' The spindle fibers are already constructed.'},//ok
                                                  {'lightId':3, 'statement':'==', 'value': 0, 'effect':'+', 'feedback': 'The spindle fibers are constructed!'},//ok
                                              ]
                                        }
                                    ],

                                },
                            ],

                        },


                    ]



                },


            ]
    }
}
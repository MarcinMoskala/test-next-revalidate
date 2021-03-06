import React from "react";
import {NextRouter, useRouter} from 'next/router'

export const Lang = {
    PL: "pl",
    EN: "en"
}

export const Langs = [Lang.PL, Lang.EN]

export function useTranslations() {
    return useRouter().locale === Lang.PL ? PL_desc : EN_desc
}

export function useLang(): { key: string, pathPrefix: string, flag: string, rssLink: string } {
    const locale = useRouter().locale;
    return {
        key: locale,
        pathPrefix: locale === Lang.PL ? "/pl" : "",
        flag: locale === Lang.PL ? "/images/pl-flag.png" : "/images/uk-flag.png",
        rssLink: locale === Lang.PL ? "/rss-pl.xml" : "/rss.xml",
    }
}

type PangElement = {
    key: string,
    path: string,
    flagIcon: string,
}

export function useLanguagesList(): PangElement[] {
    const path = useRouter().pathname.replace("/pl", "");
    return [
        {key: Lang.PL, path: "/pl" + path, flagIcon: "pl-flag.png"},
        {key: Lang.EN, path: path, flagIcon: "uk-flag.png"}
    ]
}

export function changeLocaleTo(router: NextRouter, newLocale: string) {
    const path = router.asPath;
    router.push(path, path, {locale: newLocale})
}

const EN_desc = {
    "motto": "Teaching programming, with focus on the best practices.",
    "description": "Kt. Academy - Teaching is our passion. If you want to migrate from Java to Kotlin or improve your's team Kotlin skills, our workshops are definitely for you. Check our workshop: Kotlin for Android Developers, Effective Kotlin, Kotlin Coroutines, Kotlin for Backend Developers. We focus on good practices and we make our workshops as practical as possible.",
    "tagsSEO": "Kotlin, workshop, training, Android, programming, coding, development, java, move to kotlin, java to kotlin",
    "title": "Kt. Academy - workshops with focus on best practices",
    "trustedBy": "Trusted by",
    "menu": {
        "home": "Home",
        "offer": "Offer",
        "whyUs": "Why Us",
        "trainer": "Trainer",
        "materials": "Materials",
        "workshops": "Workshops",
        "courses": "Courses",
        "upcomingWorkshops": "Workshops",
        "privateWorkshops": "Workshops",
        "books": "Books",
        "articles": "Articles",
        "tools": "Extra tools",
        "music": "Coding Music",
        "generate": "Generate DTO",
        "json": "JSON formatter",
        "workshopMaterial": "Topics",
        "register": "Register",
        "contact": "Contact",
        "profile": {
            "me": "Profile",
            "sendFeedback": "Send private feedback",
            "removeAccount": "Remove account",
            "newsletterOn": "Turn on newsletter",
            "newsletterOff": "Turn off newsletter",
            "signOut": "Sign out",
        }
    },
    "flag": {
        "imgLink": "/images/uk-flag.png",
        "lang": "EN"
    },
    "slogan": {
        "title": "WE TEACH PROGRAMMING",
        "subtitle": "WITH FOCUS ON THE BEST PRACTICES"
    },
    "workshopOffer": {
        "title": "What training do you need?",
        "subtitle": "",
        "kotlinTitle": "Kotlin",
        "kotlinDesc": "Workshops dedicated to Kotlin ecosystem, including Coroutines and Android.",
        "button": "Check the most popular workshops",
        "bestPracticesTitle": "Best practices",
        "bestPracticesDesc": "Workshops for all kinds of developers, teaching best practices, design patterns and refactoring.",
        "beginnersTitle": "Beginner",
        "beginnersDesc": "Practical workshops for new or aspiring developers.",
        "testingTitle": "Testing",
        "testingDesc": "Workshops dedicated to testing, both business hypothesis and software correctness.",
        "frontendTitle": "Frontend",
        "frontendDesc": "JavaScript, TypeScript, making websites and everything around it.",
        "androidTitle": "Android",
        "androidDesc": "Workshops teaching Android as well as tools and libraries used there.",
        "dotNetTitle": ".NET",
        "dotNetDesc": "Teaching .NET framework, and connected tools",
        "publicTitle": "Open workshops",
        "publicSubtitle": "Planned workshops that anyone can join",
    },
    "whyUs": {
        "title": "Why training with us?",
        "subtitle": "Our workshops are conducted by world-class experts, focused on the best practices and made as practical as possible.",
        "practicalTitle": "Learn by doing",
        "practicalDesc1": "We support learning with practical exercises, programming puzzlers and challenges.",
        "practicalDesc2": "Check examples to know what to expect from the workshop.",
        "puzzlers": "Puzzlers",
        "puzzlersButton": "Check example puzzler!",
        "challenges": "Coding challenges",
        "challengesButton": "Check example challenge!",
        "app": "Build practical applications ",
        "bestTitle": "Learn from the best"
    },
    "trainer": {
        "name": {
            "abTestingExperts": "A/B testing experts from Allegro",
            "teachingExperts": "A group of professional developers and teachers",
        },
        "bio": {
            "marcinmoskala": 'Marcin Moska??a is an experienced Android developer, teacher and <a href=\"https://www.jetbrains.com/company/partners/#countries=Poland&profession=TrainingPartner&speciality=Kotlin&technologies=Kotlin\"> an official Jetbrains\' Kotlin training partner</a>. He is the founder of <a href=\"https://kt.academy\"> Kt. Academy</a>, author of the books <a href=\"https://leanpub.com/effectivekotlin/\"> \"Effective Kotlin\"</a> and <a href=\"https://www.packtpub.com/application-development/android-development-kotlin\"> \"Android Development with Kotlin\"</a>, and an active programming community member. He is also the main author on <a href=\"https://blog.kotlin-academy.com\"> the biggest medium publication about Kotlin </a> and a speaker invited to many programming conferences.',
            "wlodek": "Experienced developer, trainer and a speaker on international conferences. Specialised in handling and refactoring legacy code.",
            "abTestingExperts": "Eksperci od test??w A/B od podstaw tworz??cy w Allegro platform?? Chi, najbardziej zaawansowane polskie rozwi??zanie do prowadzenia test??w A/B. Doskonale rozumiej??cy nie tylko filozofi?? testowania, ale i stoj??c?? za ni?? statystyk??.",
            "teachingExperts": "A group of developers passionate and experienced in teaching, lead by Martin Moska??a, the founder of Kt. Academy.",
        },
    },
    "certificateTitle": "One of the first certified Kotlin training worldwide",
    "certificateDesc": "You will be trained by an expert who is an official JetBrains' Kotlin training partner. The quality of his workshops was checked and certified by the creators of the Kotlin language itself.",
    "materialsSection": {
        "title": "Professional training materials",
        "book": "All attendees of the workshop will receive a printed book plus a code to download the Effective Kotlin ebook for free.",
        "onlineTasks": "All attendees will get access to our exclusive learning platform, containing recordings from a full 3-day Kotlin course, additional materials and exercises.",
        "printedMaterials": "All participants of the in-company workshop will receive printed course materials, including a book with slides, exercises, tasks and a cheat sheet.",
    },
    "testimonials": {
        "subtitle": "We've helped over 300 developers from more than 40 companies around the world in a smooth transition to Kotlin",
        "saramak": "\"On this workshop, I not only systematized knowledge about Kotlin syntax but also, thanks to Marcin, I changed my way of thinking about problem-solving to functional way - I got a new tool that I can use at work on a daily basis. It seems to me that whole training is focused on immediate use of new knowledge in daily work. Big +\"",
        "nazaruk": "\"I have participated in great Kotlin for Android Developers training, with extremely competent Marcin Moskala from Kt. Academy as a trainer. It was an intensive 3-days Kotlin workshop, ended with a quite difficult and thorough exam. With experience and knowledge under my belt acquired in this course, I feel confident about my future as an Android Developer.\"",
        "grajewski": "\"Very good workshop. Perfect for developers that want to move easily from Java to Kotlin. During the workshop, we did plenty of exercises that enabled checking new knowledge in practice.\"",
        "button": "Book a practical workshop tailored to your needs"
    },
    "contact": {
        "title": "Let's talk!",
        "stayInTouch": "Stay in touch!",
        "twitter": {
            "title": "Follow us on Twitter",
            "description": "We have a community of more than 3000 followers and we only post programming-related content."
        },
        "mail": {
            "title": "Write an email",
            "description": "We are happy to talk about our workshops and adjust them to your needs. Contact us if you have any questions.",
            "button": "Contact Us"
        },
        "newsletter": {
            "title": "Sign up to our newsletter",
            "description": "Stay updated with our articles and workshops. We only send programming-related content.",
            "button": "Sign up"
        }
    },
    "footerContact": "Contact Us:",
    "privacyPolicy": "Privacy policy",
    "workshopsList": {
        "offerDesc": "You can choose from the proposals below, or we can prepare something tailored to your needs. We conduct both in-company and online trainings. ",
        "button": "More information",
        "otherOption": "We list only the most popular workshops on our website. If you don't see the course you need or require a customized version of it, please email us: ",
    },
    "workshopPage": {
        "knowledgeSources": {
            "title": "On the workshop you will",
            "lecture": "Learn from lecture supported by slides",
            "exercises": "Complete practical exercises",
            "puzzlers": "Solve puzzlers",
            "challenges": "Solve coding challenges",
            "android": "Write an Android application in Kotlin",
            "discussion": "Group discussions",
        },
        "titleToc": "During the workshop we cover:",
        "titleRequirements": "Requirements",
        "titleAbout": "About the course",
        "titleHowLong": "How long does it take?",
        "registration": {
            "title": "Register",
            "register": "Register",
            "private": {
                "buttonText": "Private workshop",
                "chooseOption": "Choose this option if you need a workshop for your team or company. ",
                "explanation": 'The basic price is {workshop_price} for the group for {days_num} days.',
            },
            "public": {
                "buttonText": "Open online workshop",
                "chooseOption": "Choose this option if you need a workshop for yourself or for a small group of people. ",
                "explanation": 'The basic price is {workshop_person_price} per person for the whole workshop.',
            },
            "consultations": {
                "text": "Our experts offer consultations for both companies and individuals. The price is set individually. ",
                "chooseOption": "Contact us",
            },
            "publicPlanned": {
                "explanation": 'Join online workshop in {start_date} to {end_date} at {time}. The price is {workshop_person_price} per person.',
            }
        },
        trainerBio: {
            "rafalgrzesik": "Experienced software engineer, programming trainer and mentor in the fields of JavaScript, TypeScript, Angular, C#, design patterns and DDD. Increased hundreds programmers skill and knowledge by providing robust on site and online trainings. Conducted many workshops all rated above 4/5 points in after surveys. "
        }
    },
    "puzzler": {
        "descriptionSEO": "Check exemplary puzzlers that you will be solving during the Kt. Academy workshops. We believe that training should be as practical as possible.",
        "tagsSEO": "Kotlin, workshop, Android, programming, coding, development, puzzler, exercise, practical workshop",
        "title": "Learn by doing",
        "subtitle": "Train new Kotlin skills by solving practical puzzlers",
        "whatArePuzzlers": "What are the puzzlers?",
        "description": "Puzzlers are tricky programming challenges with often surprising answers. They show how bad practices can lead to problems.",
        "examplesTitle": "Exemplary puzzlers",
        "whatPrint": "What will it print?",
        "whatDisplay": "What does it display?",
        "showAnswers": "Show the answer and an explanation",
        "correctAnswer": "Correct answer",
        "explanation": "Explanation",
        "puzzle1Title": "Order of nullable operators",
        "puzzle1Answers": {
            "a": "a) 3",
            "b": "b) 5",
            "c": "c) 2",
            "d": "d) 0"
        },
        "puzzle1Explanation": "Elvis operator has lower precedence than + so plus is evaluated first and y lend on the right side of Elvis operator. Use brackets to correct this.",
        "puzzle2Title": "Extensions are resolved statically",
        "puzzle2Answers": {
            "a": "a) Doesn't compile",
            "b": "b) Runtime error",
            "c": "c) \"c\"",
            "d": "d) \"d\""
        },
        "puzzle2Explanation": "This example will print \\\"c\\\" because the extension function being called depends only on the declared type of the parameter c, which is the C class.</p>\"+\n            \"<p>Extensions do not actually modify classes they extend. By defining an extension you do not insert new members into a class, but merely make new functions callable with the dot-notation on variables of this type."
    },
    "challenge": {
        "descriptionSEO": "Check exemplary challenge that you will be solving during the Kt. Academy workshops. We believe that training should be as practical as possible.",
        "tagsSEO": "Kotlin, workshop, Android, programming, coding, development, puzzler, exercise, practical workshop",
        "title": "Learn by doing",
        "subtitle": "Train new Kotlin skills by solving practical challenges",
        "whatAreChallenges": "What are the challenges?",
        "description": "Small programming tasks that require you to implement a function or a class in Kotlin. Thanks to them, you can check in practice if you understand the material correctly and train it to be able to use it immediately after the workshop. All challenges are verified by unit tests.",
        "examplesTitle": "Exemplary challenges"
    },
    "form": {
        "private": {
            "title": "Private workshop request",
            "intro": "Fill this form to request private workshop [{workshop_name}]({workshop_link}) for your company.",
            "inCompanyWarning": "In the case of a workshop outside of Warsaw, we will have to add travel and accommodation costs to the price."
        },

        "public": {
            "title": "Open workshop request",
            "intro": "Fill this form to request open workshop [{workshop_name}]({workshop_link}). You will be added to the waiting list of developers interested in this workshop. We will contact you once we have gathered enough attendees in your time zone."
        },

        "plannedPublic": {
            "title": "Open workshop request",
            "intro": "Fill this form to register for the workshop [{workshop_name}]({workshop_link}) starting on {start_date} at {time}."
        },

        "consultations": {
            "title": "Consultations",
            "intro": "This form is to request a consultation on a topic related to the [{workshop_name}]({workshop_link}) workshop. Once you fill it, we will contact the expert and get back to you as soon as possible.",

            "consultationType": {
                question: "Who are these consultations for?",
                private: "A private person",
                company: "A company",
            },
        },

        "namePrompt": "Your name",
        "emailPrompt": "Your email",
        "companyNamePrompt": "Company name",
        "groupSizePrompt": "For how many people do you need this workshop?",
        "orMore": "or more",
        "justMe": "Just me",
        "countryPrompt": "Country or region",
        "datePrompt": "What dates suit you best?",
        "extraPrompt": "Is there anything else you would like to share?",
        "privateGroupSizePrompt": "How many developers would you like to register?",
        "dialogSent": "Request sent",
        "dialogSetYourProfileContinuation": ", please fill your profile data as well",
        "dialogError": "A problem occurred, please send later",

        "isOnline": {
            "question": "Are you interested in online or in-company training?",
            "inCompany": "In-company",
            "online": "Online",
        },

        "registerKind": {
            "question": "Who would you like to register?",
            "myself": "Myself",
            "developerCompany": "A developer from my company",
            "myselfAndGroupCompany": "Myself and other developers from my company",
            "groupCompany": "Developers from my company",
        },

        "invoiceTo": {
            "question": "To whom issue the invoice?",
            "company": "The company I work for",
            "privateCompany": "My own company",
            "person": "Myself",
        },

        "developerExperience": {
            "questionMyself": "What is your professional experience as a developer?",
            "questionOther": "What is the registered person's experience as a developer?",
            "no": "No experience",
            "junior": "Junior developer",
            "mid": "Developer",
            "senior": "Senior developer",
        },

        "priceAcceptance": {
            "question": "The base price for this workshop is {price} per person for the whole workshop. Does it work for you?",
            "ok": "Yes",
            "discountNeeded": "This is too much for me, I need a discount",
            "wayTooMuch": "Sorry, but my budget is less than half of that",
        },

        "required": "Required",
        "invalidEmail": "Invalid email",
        "invalidNumber": "Invalid number",
        "shouldBeUrl": "To powinien by?? link",
        "shouldNotBeUrl": "To nie powinien by?? link",
        "submit": "Submit",
        "save": "Save",

        "requestOpenInsteadInfo": "This form should be used to request private workshops for companies. If it is just you or a small group of people, we suggest to use [this form]({openFormLink}) to request an open online workshop.",
        "notForBeginnerInfo": "We are sorry, but this workshop is for developers with professional experience. Check out our [workshops for beginners](https://kt.academy/workshop#tag-beginners). If you want to learn Kotlin, our recommendations are [here](https://blog.kotlin-academy.com/best-kotlin-free-online-courses-5838cb7063c6).",
        "noVatIdInfo": "We may not be able to offer you any discount as for a private person we will have to pay an additional tax of 23%.",

        "howDoYouKnow": {
            "title": "How did you hear about the workshop?",
            "ad": "From Facebook/Twitter ad",
            "post": "From Facebook/Twitter post",
            "newsletter": "From a newsletter",
            "recommendation": "From recommendation",
            "konrad": "Contact from Konrad Kowalczyk",
            "article": "From an article",
            "search": "From Google",
            "other": "Other",
            "explain": "Please specify",
        }
    },
    "generate": {
        "title": "Generate DTO",
        "pastePrompt": "Paste your code here: ",
        "dtoName": "DTO name: ",
        "dtoSuffix": "(or) suffix: ",
        "generateButton": "Generate",
    },
    "errorMessage": "An error occurred. We are sorry. You can contact us using contact@kt.academy",
    "feedback": {
        "button": 'Feedback',
        "prompt": 'What do you think? What can we improve?',
        "placeholder": 'Type your feedback here...',
        "thankYou": "Thank you for your feedback",
    },
    "music": {
        "recommendationAdded": "Recommendation added,\nthank you",
        "volume": "Volume",
        "pickerWorkTime": "Work time",
        "pickerBreakTime": "Break time",
        "displayWorkTime": "Work time",
        "displayBreakTime": "Break",
        "sessionTime": "Session length: ",
        "timeUntilWork": "Time until work: ",
        "timeUntilBreak": "Time until break: ",
        "totalConcentrationTime": "Total concentration time: ",
        "startWork": "Start work",
        "startBreak": "Start break",
        "ratePrompt": "Rate this video:",
        "recommendButton": "Recommend",
        "youtubeKey": "YouTube video key: ",
        "recommendationsList": "Recommendations: ",
        "blocked": "Blocked",
        "block": "Block",
        "favourite": "Favourite",
        "makeFavourite": "Add to favourites",
    },
    "article": {
        "more": "More articles on ",
        "notTranslated": "The article hasn't been translated yet.",
        autor: {
            title: "The author:"
        },
        reviewer: {
            title: "Reviewers:",
            open: {
                name: "You?"
            }
        },
        prev: "Previous",
        next: "Next",
    },
    "editProfile": {
        "pageVisibleOn": "Your profile is visible on ",
        "publicKeyLabel": "User public key",
        becomeTrainer: "Become a trainer",
        becomeAuthor: "Become an author",
        "customImageUrlLabel": "Image url",
        "displayNameLabel": "Display name",
        "bioLabel": "Your bio",
        "bioPlLabel": "Your bio in polish",
        "publicKeyPlaceholder": "This key will be used to see your profile. Set to make your profile visible. Leave empty to not expose your profile.",
        "customImageUrlPlaceholder": "The url to your profile image. Keep empty to use image from Google.",
        "displayNamePlaceholder": "The name others will see. Keep empty to use name and surname.",
        "bioPlaceholder": "Write something about yourself here (accepts Markdown).",
        "websiteLabel": "Your website link",
        "githubLabel": "Username on GitHub",
        "twitterLabel": "Twitter identifier",
        "linkedinLabel": "LinkedIn identifier",
    },
    book: {
        sharedChapters: "Chapters available as articles",
        updates: "Updates",
        author: "The Author",
        booksTitle: "Our books",
        authorSmall: "The author:",
    },
    user: {
        achievements: {
            title: "Achievements",
            kotlinCertified: "Certified Kotlin Developer",
            kotlinDeveloper: "Kotlin Developer",
            ekReviewer: "Effective Kotlin Reviewer",
            author: "Kt. Academy author",
        },
        trainer: {
            propositionForm: {
                title: "Become a trainer",
                intro: "Kt. Academy connects world-class trainers with companies of all the sizes. Do you want to become one of them? Fill this form. We will review it and contact you as soon as possible.",
                topicsPrompt: "The topics that you would like to teach. Split with comma (for example Java, JavaScript, Microservices, Agile)",
                descriptionPrompt: "Describe yourself as a trainer. Why the company should choose you? This is a public description.",
                experiencePrompt: "What is your experience as a trainer? What is your profesional experience? This is an additional info for the Kt. Academy team.",
                shortDescription: "Short description, to show it on website when presented among other trainers.",
                privateConsultationTitle: "Your rate per hour for private consultations (optional)",
                companyConsultingTitle: "Your rate per day for in-company consultations (optional)",
                rateAmount: "Rate (example 123.00)",
                rateCurrency: "Currency",
            },
            consultationForm: {
                companyTitle: "Business consultation form",
                personalTitle: "Personal consultation form",
                email: "Email",
                topic: "The topic of the consultation",
                companyName: "Company name",
                studentExperience: "Your experience in the topic",
                when: "Preferred dates",
            },
        },
        author: {
            form: {
                title: "Author form",
                intro: "Would you like to become an author? Fill this form and soon we will contact you.",
                email: "Your email",
                type: "What would you like to write?",
                article: "An article",
                book: "A book",
                titleIdea: "Do you have an idea for a title?",
                idea: "Describe the main idea here",
            }
        }
    },
    login: {
        pageLoginRequired: "You need to login to access this page",
        button: "Login",
    },
    trainers: {
        sectionTitle: "Among our trainers are:",
    },
    comment: {
        login: "Login to comment",
        prompt: "Your comment:",
        title: "Comments",
        delete: "Delete",
    },
}

const PL_desc = {
    "motto": "Uczymy programowania, skupiaj??c si?? na najlepszych praktykach.",
    "description": "Kt. Academy - Uczenie to nasza pasja. Je??li chcesz przej???? z j??zyka Java na Kotlin lub doskonali?? umiej??tno??ci programowania w Kotline Twojego zespo??u, nasze szkolenia s?? zdecydowanie dla Ciebie. Sprawd?? warsztaty: Kotlin dla programist??w Android, Effective Kotlin, Kotlin Coroutines, Kotlin dla programist??w backend. Skupiamy si?? na najlepszych praktykach i na praktyce.",
    "tagsSEO": "Kotlin, warsztat, szkolenie, Android, programowanie, kodowanie, development, java, przej???? na kotlin, java na kotlin",
    "title": "Kt. Academy - Szkolenia skupiaj??ce si?? na najlepszych praktykach",
    "trustedBy": "Zaufali nam",
    "menu": {
        "home": "Strona G????wna",
        "offer": "Oferta",
        "whyUs": "Dlaczego my?",
        "workshopMaterial": "Zagadnienia",
        "trainer": "Trener",
        "materials": "Materia??y",
        "workshops": "Warsztaty",
        "courses": "Kursy online",
        "upcomingWorkshops": "Warsztaty",
        "privateWorkshops": "Warsztaty",
        "books": "Ksi????ki",
        "articles": "Artyku??y",
        "music": "Muzyka",
        "tools": "Narz??dzia",
        "generate": "Generuj DTO",
        "json": "JSON formatter",
        "register": "Rejestracja",
        "contact": "Kontakt",
        "profile": {
            "me": "Profil",
            "sendFeedback": "Wy??lij prywatny feedback",
            "removeAccount": "Usu?? konto",
            "newsletterOn": "W????cz newsletter",
            "newsletterOff": "Wy????cz newsletter",
            "signOut": "Wyloguj",
        }
    },
    "flag": {
        "imgLink": "/images/pl-flag.png",
        "lang": "PL"
    },
    "slogan": {
        "title": "UCZYMY PROGRAMOWANIA",
        "subtitle": "SKUPIAJ??C SI?? NA NAJLEPSZYCH PRAKTYKACH"
    },
    "workshopOffer": {
        "title": "Jakiego warsztatu szukasz?",
        "subtitle": "",
        "kotlinTitle": "Kotlin",
        "kotlinDesc": "Warsztaty dedykowane ekosystemowi Kotlina, w tym Coroutines i Android.",
        "button": "Sprawd?? najpopularniejsze warsztaty",
        "bestPracticesTitle": "Najlepsze praktyki",
        "bestPracticesDesc": "Warsztaty dla programist??w r????nych j??zyk??w i technologii, dedykowane jako??ci kodu, wzorcom projektowym, refaktoryzacji oraz najlepszym praktykom.",
        "beginnersTitle": "Dla pocz??tkuj??cych",
        "beginnersDesc": "Praktyczne szkolenia dla nowych i aspiruj??cych programist??w.",
        "testingTitle": "Testowanie",
        "testingDesc": "Warsztaty po??wi??cone testowaniu, zar??wno hipotez biznesowych, jak i testom automatycznym oprogramowania.",
        "frontendTitle": "Frontend",
        "frontendDesc": "JavaScript, TypeScript, tworzenie stron i wszystko wok????.",
        "androidTitle": "Android",
        "androidDesc": "Warsztaty z Androida oraz narz??dzi i bibliotek w nim u??ywanych.",
        "dotNetTitle": ".NET",
        "dotNetDesc": "Warsztaty z .NET framework oraz najistotniejszych jego bibliotek.",
        "publicTitle": "Warsztaty otwarte",
        "publicSubtitle": "Zaplanowane warsztaty do kt??rych ka??dy mo??e do????czy??",
    },
    "whyUs": {
        "title": "Dlaczego warto szkoli?? si?? z nami?",
        "subtitle": "Nasze warsztaty prowadzone s?? przez ekspert??w ??wiatowej klasy, nastawione s?? na dobre praktyki i skupiaj?? si?? na ??wiczeniach praktycznych.",
        "practicalTitle": "Ucz si?? poprzez praktyczne zadania",
        "bestTitle": "Ucz si?? od najlepszych",
        "practicalDesc1": "Wspieramy nauk?? poprzez praktyczne ??wiczenia, puzzlery i wyzwania programistyczne.",
        "practicalDesc2": "Sprawd?? przyk??ady, ??eby wiedzie?? czego spodziewa?? si?? na warsztacie.",
        "puzzlers": "Puzzlery",
        "puzzlersButton": "Sprawd?? przyk??adowy puzzler!",
        "challenges": "Wyzwania programistyczne",
        "challengesButton": "Sprawd?? przyk??adowe wyzwanie!",
        "app": "Tworzenie praktycznych aplikacji"
    },
    "trainer": {
        "name": {
            "abTestingExperts": "Eksperci od test??w A/B z Allegro",
            "teachingExperts": "Grupa zawodowych nauczycieli-programist??w",
        },
        "bio": {
            "marcinmoskala": 'Marcin Moska??a jest do??wiadczonym programist?? Android, nauczycielem Kotlina z zami??owania i <a href=\"https://www.jetbrains.com/company/partners/#countries=Poland&profession=TrainingPartner&speciality=Kotlin&technologies=Kotlin\"> oficjalnym partnerem szkoleniowym Jetbrains\' w zakresie szkole?? z j??zyka Kotlin</a>. Jest za??o??ycielem <a href=\"https://kt.academy\"> Kt. Academy</a>, autorem ksi????ek <a href=\"https://leanpub.com/effectivekotlin/\"> \"Effective Kotlin\"</a> i <a href=\"https://www.packtpub.com/application-development/android-development-kotlin\"> \"Android Development with Kotlin\"</a>, a tak??e aktywnym cz??onkiem spo??eczno??ci programistycznej. Jest te?? g????wnym autorem artyku????w na <a href=\"https://blog.kotlin-academy.com\"> najwi??kszej publikacji medium o Kotlinie </a> oraz prelegentem zapraszanym na wiele programistycznych konferencji.',
            "wlodek": "Jestem trenerem technicznym oraz prelegentem na konferencjach, specjalizuj??cym si?? w zagadnieniach pracy z kodem zastanym i d??ugiem technicznym poprzez techniki refaktoryzacji kodu. Mieszkam w Krakowie, ale cz??sto podr????uj?? po Polsce, Europie i ??wiecie, aby wspiera?? moich klient??w w ich dzia??aniach.",
            "abTestingExperts": "Eksperci od test??w A/B od podstaw tworz??cy w Allegro platform?? Chi, najbardziej zaawansowane polskie rozwi??zanie do prowadzenia test??w A/B. Doskonale rozumiej?? nie tylko filozofi?? testowania, ale i stoj??c?? za ni?? statystyk??.",
            "teachingExperts": "Grupa kilku do??wiadczonych programist??w z pasj?? do uczenia programowania. W tym Marcin Moska??a, za??o??yciel Kt. Academy.",
        },
    },
    "certificateTitle": "Jeden z pierwszych certyfikowanych trening??w z Kotlina",
    "certificateDesc": "Jako???? tego warsztatu zosta??a sprawdzona i certyfikowana przez tw??rc??w j??zyka Kotlin. Szkoli?? Was b??dzie trener, kt??ry jest oficjalnym partnerem JetBrains w zakresie szkole?? z j??zyka Kotlin.",
    "materialsSection": {
        "title": "Profesjonalne materia??y szkoleniowe",
        "book": "Wszyscy uczestnicy warsztatu dostan?? papierow?? wersj?? oraz kod na ebook ksi????ki Effective Kotlin w j??zyku angielskim.",
        "onlineTasks": "Wszyscy uczestnicy b??d?? mieli dost??p do naszej platformy edukacyjnej, na kt??rej znajd?? pe??ne nagranie 3-dniowego kursu z Kotlina, dodatkowe materia??y, a tak??e ??wiczenia i wyzwania programistyczne.",
        "printedMaterials": "W przypadku szkole?? na miejscu, wszyscy uczestnicy otrzymaj?? pe??ny zestaw materia????w w formie drukowanej, zawieraj??cy ksi????k?? ze slajdami, ??wiczenia, zadania oraz cheat sheet."
    },
    "testimonials": {
        "subtitle": "Pomogli??my ponad 300 programistom z ponad 40 firm na ca??ym ??wiecie w przej??ciu na j??zyk Kotlin",
        "saramak": "\"Na warsztacie nie tylko usystematyzowa??em sobie wiedz?? ze sk??adni j??zyka kotlin, ale dzi??ki Marcinowi przestawi??em swoje my??lenie o mo??liwo??ci rozwi??zania problemu w funkcjonalny spos??b - dosta??em do r??ki nowe narz??dzie, kt??re moge wykorzysta?? w codziennej pracy. Wydaje mi si??, ??e ca??e szkolenie jest nastawione na natychmiastowy zwrot zdobytej wiedzu w codziennej pracy. Du??y +\"",
        "nazaruk": "\"Kotlin dla programist??w Android to ??wietne warsztaty, prowadzone przez niezwykle kompetentnego trenera z Kt. Academy, Marcina Moska????. To by?? intensywny, 3-dniowy kurs Kotlina, zako??czony nie??atwym egzaminem. Jestem pewna, ??e z wiedz?? zdobyt?? na kursie, oraz certyfikatem wydanym po zdanym egzaminie mog?? z optymizmem spojrze?? na swoj?? przysz??o???? jako Android Developer.\"",
        "grajewski": "\"Bardzo dobre szkolenie. W sam raz dla programist??w, kt??rzy w ??atwy spos??b chc?? przenie???? si?? z Javy na Kotlina. Szkolenie zawiera tak??e ??wiczenia, kt??re umo??liwiaj?? sprawdzenie nowej wiedzy w praktyce.\"",
        "button": "Zarezerwuj szkolenie dopasowane do Twoich potrzeb"
    },
    "contact": {
        "title": "Porozmawiajmy!",
        "stayInTouch": "B??d??my w kontakcie!",
        "twitter": {
            "title": "Obserwuj nas na Twitter",
            "description": "Zrzeszamy spo??eczno???? ponad 3000 obserwuj??cych i publikujemy tylko tre??ci zwi??zane z programowaniem."
        },
        "mail": {
            "title": "Skontaktuj si?? z nami",
            "description": "Z ch??ci?? opowiemy o naszych warsztatach i dostosujemy je do Twoich potrzeb. Napisz, je??eli masz jakie?? pytania.",
            "button": "Napisz do nas"
        },
        "newsletter": {
            "title": "Zapisz si?? do newslettera",
            "description": "B??d?? na bie????co z naszymi artyku??ami i szkoleniami. Wysy??amy tylko informacje zwi??zane z programowaniem.",
            "button": "Zapisz si??"
        }
    },
    "footerContact": "Napisz do nas:", "privacyPolicy": "Polityka prywatno??ci",
    "workshopsList": {
        "button": "Wi??cej informacji",
        "otherOption": "Na stronie umieszczamy najpopularniejsze warsztaty. Je??li nie widzisz szkolenia, kt??re Ci?? interesuje lub chcia??by?? dopasowa?? materia?? do potrzeb i poziomu zespo??u, skontaktuj si?? z nami: ",
    },
    "workshopPage": {
        "knowledgeSources": {
            "title": "Podczas warsztatu nauczysz si?? poprzez:",
            "lecture": "Wyk??ad wspierany slajdami",
            "exercises": "Wykonanie praktycznych ??wicze??",
            "puzzlers": "Rozwi??zanie Kotlinowych puzzler'??w",
            "challenges": "Rozwi??zanie programistycznych wyzwa??",
            "android": "Napisanie aplikacji Android w Kotlinie",
            "discussion": "Dyskusje grupowe",
        },
        "titleToc": "Materia?? omawiany podczas warsztatu:",
        "titleRequirements": "Wymagania",
        "titleAbout": "O kursie",
        "titleHowLong": "Ile trwa ten warsztat?",
        "registration": {
            "title": "Wy??lij zg??oszenie",
            "register": "Wy??lij zg??oszenie",
            "private": {
                "buttonText": "Szkolenie prywatne",
                "chooseOption": "Wybierz t?? opcj??, je??li potrzebujesz szkolenia dla swojego zespo??u lub firmy. ",
                "explanation": 'Podstawowa cena w Polsce i w j??zyku polskim to {workshop_price_pl} za grup?? (w innym przypadku {workshop_price}) za {days_num} dni szkolenia.',
            },
            "public": {
                "buttonText": "Szkolenie otwarte online",
                "chooseOption": "Wybierz t?? opcj??, je??li potrzebujesz szkolenia dla siebie lub ma??ej grupy. ",
                "explanation": 'Podstawowa cena to {workshop_person_price_pl} za osob?? za ca??e szkolenie w j??zyku polskim.',
            },
            "consultations": {
                "text": "Nasi eksperci oferuj?? konsultacje zar??wno dla firm, jak i os??b prywatnych. Cena ustalana jest indywidualnie.",
                "chooseOption": "Nawi???? kontakt",
            },
            "publicPlanned": {
                "explanation": 'Do????cz do szkolenia online w dniach {start_date} do {end_date}, w godzinach {time}. Cena to {workshop_person_price_pl} za osob??.',
            }
        },
        trainerBio: {
            "rafalgrzesik": "Do??wiadczony programista, trener i mentor w obszarach JavaScript, TypeScript, Angular, C#, wzorce projektowe i DDD. Pom??g?? ju?? setkom programist??w poprzez szkolenia, kt??rych oceny w ankietach uzyskuj?? ??redni?? powy??ej 4/5."
        }
    },
    "puzzler": {
        "descriptionSEO": "Sprawd?? przyk??adowe puzzlery, kt??re programi??ci rozwi??zuj?? na warsztatach Kt. Academy. Wierzymy, ??e szkolenie powinno by?? tak praktyczne, jak to tylko mo??liwe.",
        "tagsSEO": "Kotlin, warsztat, Android, programowanie, ??wiczenia Kotlin, puzzler, wyzwania programistyczne",
        "title": "Ucz si?? przez praktyk??",
        "subtitle": "Rozwi???? Kotlinowe puzzlery",
        "whatArePuzzlers": "Co to s?? puzzlery?",
        "description": "Puzzlery to podchwytliwe programistyczne wyzwania, z cz??sto zaskakuj??cymi odpowiedziami. Pokazuj??, jak z??e praktyki mog?? prowadzi?? do problem??w.",
        "examplesTitle": "Przyk??adowe puzzlery",
        "whatPrint": "Co zostanie wydrukowane?",
        "whatDisplay": "Co zostanie wy??wietlone?",
        "showAnswers": "Poka?? odpowied?? i wyja??nienie",
        "correctAnswer": "Poprawna odpowied??",
        "explanation": "Wyja??nienie",
        "puzzle1Title": "Kolejno????",
        "puzzle1Answers": {
            "a": "a) 3",
            "b": "b) 5",
            "c": "c) 2",
            "d": "d) 0"
        },
        "puzzle1Explanation": "Jest to programistyczny odpowiednik r??wnania 1 + 2 * 3 = ?. Operator Elvisa ma ni??szy priorytet ni?? plus, w zwi??zku z czym b??dzie on wykonany p????niej. Myl??cy jest tutaj brak spacji. U??ywaj nawias??w, nie bia??ych znak??w.",
        "puzzle2Title": "Funkcje rozszerzaj??ce",
        "puzzle2Answers": {
            "a": "a) Doesn't compile",
            "b": "b) Runtime error",
            "c": "c) c",
            "d": "d) d"
        },
        "puzzle2Explanation": "Zostanie wydrukowane c ze wzgl??du na to, czym s?? funkcje rozszerzaj??ce - s?? zwyk??ymi funkcjami, a receiver (tutaj C i D) jest pierwszym parametrem. Zachowywa?? si?? wi??c b??d?? tak, jak by??my mieli 2 funkcje statyczne foo z r????nymi parametrami. To, kt??ra z nich zostanie ostatecznie wybrana, b??dzie zale??e?? od tego jaki jest typ przekazanej warto??ci. Zostanie to okre??lone statycznie w czasie kompilacji."
    },
    "challenge": {
        "descriptionSEO": "Sprawd?? przyk??adowe wyzwania, kt??re programi??ci rozwi??zuj?? na warsztatach Kt. Academy. Wierzymy, ??e szkolenie musi by?? tak praktyczne, jak to tylko mo??liwe.",
        "tagsSEO": "Kotlin, warsztat, Android, programowanie, ??wiczenia Kotlin, puzzler, wyzwania programistyczne",
        "title": "Ucz si?? przez praktyk??",
        "subtitle": "Wy??wicz nowe umiej??tno??ci rozwi??zuj??c programistyczne wyzwania",
        "whatAreChallenges": "Co to s?? wyzwania programistyczne?",
        "description": "Ma??e programistyczne zadania, kt??re wymagaj?? zaimplementowania funkcji lub klasy w j??zyku Kotlin. Dzi??ki temu mo??esz sprawdzi?? w praktyce czy poprawnie rozumiesz materia?? z kursu i wy??wiczy?? to tak, aby by?? w stanie u??ywa?? nowych umiej??tno??ci od razu po warsztacie. Wszystkie wyzwania zosta??y zweryfikowane przez testy jednostkowe.",
        "examplesTitle": "Przyk??adowe wyzwania"
    },

    "form": {
        "private": {
            "title": "Szkolenie prywatne",
            "intro": "Wype??nij ten formularz aby zg??osi?? grup?? na prywatne szkolenie [{workshop_name}]({workshop_link}).",
            "inCompanyWarning": "W przypadku szkole?? poza Warszaw?? do ceny zostan?? dodane koszty dojazdu i zakwaterowania"
        },

        "public": {
            "title": "Szkolenie otwarte online",
            "intro": "Wype??nij ten formularz, aby zapisa?? si?? na otwarte szkolenie online [{workshop_name}]({workshop_link}). Zostaniesz umieszczony na li??cie oczekuj??cych zainteresowanych tym warsztatem. Skontaktujemy si?? z Tob??, kiedy zbierze si?? odpowiednia liczba os??b do utworzenia grupy i przeprowadzenia kursu."
        },

        "plannedPublic": {
            "title": "Szkolenie otwarte online",
            "intro": "Wype??nij ten formularz, aby zapisa?? si?? na otwarte szkolenie online [{workshop_name}]({workshop_link}) odbywaj??ce si?? w dniach {start_date} w godzinach {time}."
        },

        "consultations": {
            "title": "Konsultacje",
            "intro": "Ten formularz dotyczy konsultacji w temacie szkolenia [{workshop_name}]({workshop_link}). Wype??nij go, a my skontaktujemy si?? z trenerem i wr??cimy do Ciebie najszybciej, jak to mo??liwe.",

            "consultationType": {
                question: "Dla kogo b??d?? te konsultacje?",
                private: "Dla osoby prywatnej",
                company: "Dla firmy",
            },
        },

        "namePrompt": "Twoje imi??",
        "emailPrompt": "Tw??j email",
        "companyNamePrompt": "Nazwa firmy",
        "groupSizePrompt": "Ile os??b b??dzie uczestniczy?? w szkoleniu?",
        "orMore": "albo wi??cej",
        "justMe": "Tylko ja",
        "countryPrompt": "Kraj lub region",
        "datePrompt": "Jaki termin Ci odpowiada?",
        "extraPrompt": "Czy jest jeszcze co??, co chcia??by?? doda???",
        "privateGroupSizePrompt": "Ilu programist??w chcia??by??/chcia??aby?? zarejestrowa???",
        "dialogSent": "Zg??oszenie wys??ane",
        "dialogSetYourProfileContinuation": ", pami??taj tak??e uzupe??ni?? sw??j profil",
        "dialogError": "Wyst??pi?? problem, wy??lij p????niej",

        "isOnline": {
            "question": "Jeste?? zainteresowany szkoleniem zdalnym czy w siedzibie firmy?",
            "inCompany": "W siedzibie firmy",
            "online": "Zdalnie",
        },

        "registerKind": {
            "question": "Kogo chcesz zarejestrowa???",
            "myself": "Tylko siebie",
            "developerCompany": "Programist?? z mojej firmy",
            "myselfAndGroupCompany": "Siebie oraz innych programist??w z mojej firmy",
            "groupCompany": "Innych programist??w z mojej firmy",
        },

        "invoiceTo": {
            "question": "Na kogo b??dzie wystawiana faktura?",
            "company": "Na firm??, dla kt??rej pracuj??",
            "privateCompany": "Na moj?? w??asn?? firm??",
            "person": "Na mnie",
        },

        "developerExperience": {
            "questionMyself": "Jakie jest Twoje do??wiadczenie w pracy jako programista?",
            "questionOther": "Jakie jest do??wiadczenie zapisywanych os??b w pracy jako programi??ci?",
            "no": "Brak do??wiadczenia",
            "junior": "Junior developer",
            "mid": "Developer",
            "senior": "Senior developer",
        },

        "priceAcceptance": {
            "question": "Podstawowa cena tego szkolenia to {price_pl} za ca??e szkolenie. Czy Ci to odpowiada?",
            "ok": "Tak",
            "discountNeeded": "To dla mnie za du??o, potrzebuj?? zni??ki",
            "wayTooMuch": "M??j bud??et to mniej ni?? po??owa tej ceny",
        },

        "required": "Pole wymagane",
        "invalidEmail": "Niepoprawny adres email",
        "invalidNumber": "Niepoprawny numer",
        "shouldBeUrl": "To powinien by?? link",
        "shouldNotBeUrl": "To nie powinien by?? link",
        "submit": "Wy??lij",
        "save": "Zapisz",

        "requestOpenInsteadInfo": "Dla mniejszych grup sugerujemy warsztaty otwarte, gdzie cena ustalona jest od osoby. Aby zapisa?? si?? na takie szkolenie u??yj [tego formularza]({openFormLink}).",
        "notForBeginnerInfo": "Niestety, ale to szkolenie jest skierowane do do??wiadczonych programist??w. Sprawd?? nasze [szkolenia dla pocz??tkuj??cych](https://kt.academy/workshop#tag-beginners). Je??li natomiast Twoim celem jest nauczenie si?? j??zyka Kotlin, to [w tym artykule](https://blog.kotlin-academy.com/best-kotlin-free-online-courses-5838cb7063c6) znajdziesz polecane przez nas darmowe kursy.",
        "noVatIdInfo": "Mo??liwe, ??e nie b??dziemy w stanie zaoferowa?? Ci ??adnej zni??ki, poniewa?? w przypadku osoby prywatnej jeste??my zobligowani zap??aci?? dodatkowy podatek w wysoko??ci 23%.",

        "howDoYouKnow": {
            "title": "Jak dowiedzia??e?? si?? o szkoleniu?",
            "ad": "Z reklamy na Facebook/Twitter",
            "post": "Z postu na Facebook/Twitter",
            "newsletter": "Z newslettera",
            "recommendation": "Z polecenia",
            "konrad": "Kontakt z Konradem Kowalczykiem",
            "article": "Z artyku??u",
            "search": "Google",
            "other": "Inne",
            "explain": "Prosz?? sprecyzuj",
        }
    },
    "generate": {
        "title": "Generuj DTO",
        "pastePrompt": "Wklej sw??j kod tutaj: ",
        "dtoName": "Nazwa DTO: ",
        "dtoSuffix": "(albo) suffix: ",
        "generateButton": "Generuj",
    },
    "errorMessage": "Wyst??pi?? b????d. Przykro nam. Mo??esz si?? z nami skontaktowa?? przez email contact@kt.academy",
    "feedback": {
        "button": "Feedback",
        "prompt": 'Co o tym my??lisz? Co mogliby??my ulepszy???',
        "placeholder": 'Tw??j feedback tutaj...',
        "thankYou": "Bardzo dzi??kuj?? za komentarz, jest to dla nas bardzo wa??ne :)",
    },
    "music": {
        "recommendationAdded": "Rekomendacja dodana, dzi??kujemy :)",
        "volume": "G??o??no????",
        "pickerWorkTime": "Czas pracy",
        "pickerBreakTime": "Czas przerwy",
        "displayWorkTime": "Czas pracy",
        "displayBreakTime": "Przerwa",
        "sessionTime": "D??ugo???? sesji: ",
        "timeUntilWork": "Czas do pracy: ",
        "timeUntilBreak": "Czas do przerwy: ",
        "totalConcentrationTime": "Ca??kowity czas skupienia: ",
        "startWork": "Rozpocznij prac??",
        "startBreak": "Rozpocznij przerw??",
        "ratePrompt": "Oce?? ten klip:",
        "youtubeKey": "Klucz filmu na YouTube: ",
        "recommendButton": "Pole??",
        "recommendationsList": "Polecenia: ",
        "blocked": "Zablokowane",
        "block": "Zablokuj",
        "favourite": "Ulubione",
        "makeFavourite": "Dodaj do ulubionych",
    },
    "article": {
        "more": "Wi??cej naszych artyku????w znajdziesz na ",
        "notTranslated": "Artyku?? nie zosta?? przet??umaczony. Je??li chcesz by?? bohaterem, [zg??o?? si?? jako t??umacz](https://marcinmoskala.typeform.com/to/MI3Lxn0Y).",
        autor: {
            title: "Autor:"
        },
        reviewer: {
            title: "Recenzenci:",
            open: {
                name: "Ty?"
            }
        },
        prev: "Poprzedni",
        next: "Nast??pny",
    },
    "editProfile": {
        "pageVisibleOn": "Tw??j profil jest widoczny pod ",
        becomeTrainer: "Zosta?? trenerem",
        becomeAuthor: "Zosta?? autorem",
        "publicKeyLabel": "Klucz publiczny u??ytkownika",
        "publicKeyPlaceholder": "Ten klucz b??dzie identyfikowa?? tw??j profil i okre??la?? link pod jakim b??dzie mo??na go odnale????. Je??li chcesz by tw??j profil pozosta?? prywatny, zostaw to pole puste.",
        "customImageUrlLabel": "Url zdj??cia",
        "customImageUrlPlaceholder": "Link do zdj??cia, kt??re chcesz by wy??wietla??o si?? na twoim profilu. Pozostaw puste, by u??yte zosta??o zdj??cie z Google.",
        "displayNameLabel": "Nazwa widoczna dla innych u??ytkownik??w",
        "displayNamePlaceholder": "Nazwa widoczna dla innych u??ytkownik??w. Pozostaw to pole puste by u??ywane by??o imi?? i nazwisko.",
        "bioLabel": "Tw??j opis po angielsku",
        "bioPlLabel": "Tw??j opis po polsku",
        "bioPlaceholder": "Napisz swoje bio (mo??esz u??y?? formatu Markdown).",
        "websiteLabel": "Link do strony internetowej",
        "githubLabel": "Nazwa u??ytkownika na GitHub",
        "twitterLabel": "Identyfikator na Twitter",
        "linkedinLabel": "Identyfikator na LinkedIn",
    },
    book: {
        sharedChapters: "Rozdzia??y dost??pne jako artyku??y",
        updates: "Nowo??ci",
        author: "Autor",
        booksTitle: "Nasze ksi????ki",
        authorSmall: "Autor:",
    },
    user: {
        achievements: {
            title: "Osi??gni??cia",
            kotlinCertified: "Certyfikowany Programista Kotlin",
            kotlinDeveloper: "Programista Kotlin",
            ekReviewer: "Recenzent Effective Kotlin",
            author: "Autor na Kt. Academy",
        },
        trainer: {
            propositionForm: {
                title: "Zosta?? trenerem",
                intro: "Kt. Academy zrzesza ??wiatowej s??awy trener??w by wspomaga?? ich w dostarczaniu jako??ciowych szkole??. Chcesz zosta?? jednym z nich? Uzupe??nij ten formularz. Ostrzegamy jednak, ??e by?? zosta?? trenerem, nasz zesp???? musi wyrazi?? na to zgod??. W tej sprawie mo??emy si?? z tob?? kontaktowa??. Wype??nij ten formularz w j??zyku angielskim.",
                topicsPrompt: "Wymie?? tematy, w jakich czujesz si?? mocny/mocna i kt??rych chcia??by??/chcia??aby?? uczy??.",
                descriptionPrompt: "Opisz siebie jako trenera. Czemu to w??a??nie Twoje szkolenie lub konsultacje kto?? mia??by kupi??? Ten opis b??dzie widoczny publicznie.",
                experiencePrompt: "Jakie masz do??wiadczenie jako trener? Jakie masz do??wiadczenia zawodowe? To jest opis dla nas, zespo??u Kt. Academy.",
                shortDescription: "Kr??tki opis do wy??wietlenia przy kr??tkiej prezentacji w??r??d trener??w.",
                privateConsultationTitle: "Twoja stawka za godzin?? konsultacji prywatnych (dla os??b prywatnych)",
                companyConsultingTitle: "Twoja stawka za dzie?? konsultacji dla firmy",
                rateAmount: "Stawka (np. 123.00)",
                rateCurrency: "Waluta",
            },
            consultationForm: {
                companyTitle: "Formularz konsultacji biznesowych",
                personalTitle: "Formularz konsultacji personalnych",
                email: "Email do osoby kontaktowej",
                topic: "Temat konsultacji",
                companyName: "Nazwa firmy",
                studentExperience: "Twoje do??wiadczenie w tym temacie",
                when: "Preferowany termin",
            },
        },
        author: {
            form: {
                title: "Formularz autora",
                intro: "Chcia??by?? zosta?? autorem? Wype??nij ten formularz, a odezwiemy si?? nied??ugo.",
                email: "Tw??j email",
                type: "Co chcia??by?? napisa??",
                article: "Artyku??",
                book: "Ksi????k??",
                titleIdea: "Masz ju?? pomys?? na tytu???",
                idea: "Opisz g????wn?? ide??",
            }
        }
    },
    login: {
        pageLoginRequired: "Musisz by?? zalogowany by przej???? do strony",
        button: "Zaloguj si??",
    },
    trainers: {
        sectionTitle: "Nasi trenerzy to mi??dzy innymi:",
    },
    comment: {
        login: "Zaloguj si?? by skomentowa??",
        prompt: "Tw??j komentarz:",
        title: "Komentarze",
        delete: "Usu??",
    },
}

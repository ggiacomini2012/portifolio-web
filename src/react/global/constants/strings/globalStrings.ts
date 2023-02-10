import * as Interface from './strings.interface';

const globalStrings: Interface.IAllStrings = {
  text: {
    intro: 'intro',
    by: 'by',
    home: 'home',
    about: 'about',
    aboutDescription: 'aboutDescription',
    contact: 'contact',
    contactDescription: 'contactDescription',
    portfolio: 'portfolio',
    notFound: 'notFound',
  },
  randomAnswer:
    'The language selected is nether english nor portuguese. A língua selecionada não é português nem inglês',
  developerName: 'Guilherme Giacomini Teixeira.',
  english: {
    intro: "Hi, I'm Guilherme Giacomini Teixeira, full stack web developer.",
    by: 'by',
    home: 'home',
    about: 'about',
    aboutDescription:
      "I’m a Front-End and Back-End Developer located in South of Brazil. Love UI effects. I'm solutionist, Well-organised, with high attention to detail. Into making music, going for outdoor activities and socializing. Consider myself a continuos learner. Speak fluently english, portuguese and spanish",
    contact: 'contact',
    contactDescription: 'If you like what you see get in touch with me at:',
    portfolio: 'PORTFOLIO',
    notFound: 'Url not found',
  },
  português: {
    intro: 'Olá, Guilherme Giacomini Teixeira, desenvolvedor web full stack.',
    by: 'por',
    home: 'início',
    about: 'sobre',
    aboutDescription:
      'Sou um desenvolvedor Front e Back. Moro em Balneário Camboriú - SC. Gosto muito de trabalhar com UI. Mantenho o foco em criar soluções, cultivo uma boa organização pessoal e presto muita atenção aos detalhes. Crio músicas nas horas vagas, caminho, curto me reunir com amigos para tomar café e prosear. Tenho fluência no inglês e espanhol',
    contact: 'contato',
    contactDescription:
      'Se você gostou do meu trabalho me contacte através de algum destes canais:',
    portfolio: 'PORTFÓLIO',
    notFound: 'Url não encontrada',
  },
  colorTheme: {
    darkMode: '-dark',
    lightMode: '-light',
  },
};

export default globalStrings;

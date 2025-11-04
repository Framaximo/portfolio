import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Franco Herrera",
  role: "Programmer",
  introduction: "Hey!",
  description: "I'm a 23 years old university student who focuses mainly on programming. I enjoy learning and challenges, i find programming as interesting as a nice Puzzle.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/NAME",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/NAME",
  }
};

export const games: Game[] = [
  {
    name: "Rudimentus - Turning Point",
    description: "Eres Sorbe-0, un ser creado en un laboratorio para absorber el poder de los elementales y detener su posible rebelión. Atrapado entre órdenes humanas y emociones emergentes, deberás explorar un complejo científico, enfrentar enemigos y desbloquear habilidades elementales que alteran tanto tu entorno como tu destino.",
    genres: ["Metroidvania", "Acción","Aventura"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      
      { source: LinkImageSource.ItchIo, url: "No Disponible :c"}]
    ,media: [
      { source: "/images/games/Rudimentus/Screenshot_1.png", type: MediaType.Image },
      { source: "https://youtu.be/embed/xqm9O_nOjCk", type: MediaType.YouTube },
      { source: "/images/games/Rudimentus/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Rudimentus/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Rudimentus/Screenshot_4.png", type: MediaType.Image },],
  },
  {
    name: "Todo en el Orden Correcto",
    description: "Todo en el Orden Correcto es un juego de puzzles narrativo que busca representar con sensibilidad la experiencia del Trastorno Obsesivo Compulsivo (TOC). El jugador encarna a Mel, una joven que debe ordenar su casa antes de la llegada de visitas, enfrentándose al estrés y ansiedad que le provoca su necesidad de mantener el orden “perfecto”. A través de mecánicas de colocación de objetos, manejo de estrés y zonas de confort, el jugador experimenta la tensión entre control y descontrol, entendiendo el TOC desde una perspectiva empática y cotidiana.",
    genres: ["Puzzle", "Narrativa"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "No Disponible :c"}]
    ,media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://youtu.be/embed/GPM5iFr4e7s", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
      name: "Historias sin iluminar",
      description: "En Historias sin iluminar, el jugador asume el rol de un técnico de luces del Teatro Municipal, encargado de dejar listo el escenario durante sus turnos nocturnos. Sin embargo, las noches en el teatro están lejos de ser normales: fantasmas de distintas épocas habitan entre sus pasillos, cada uno con sus propios recuerdos, penas y razones para seguir allí. A través de decisiones narrativas y minijuegos de reparación, el jugador deberá ayudar o ignorar a estos espíritus, decidiendo si iluminará sus historias… o dejarlas en la oscuridad.",
      genres: ["Novela visual","Drama"],
      platforms: [Platform.Windows],
      engine: GameEngine.Unity,
      links: [
        { source: LinkImageSource.ItchIo, url: "No Disponible :c"}]
      ,media: [
        { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
        { source: "https://youtu.be/embed/yzb6QlXSkPo", type: MediaType.YouTube },
        { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
        { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
        { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
      ],
    }
];
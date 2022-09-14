// 1. Описати всю сім'ю сімпсонів (5 персонажів)

// let simpsons = [
//   {
//     name: 'Bart',
//     surname: 'Simpson',
//     age: 10,
//     info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//     photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//   },
//   {
//     name: 'Homer',
//     surname: 'Simpson',
//     age: 40,
//     info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//     photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//   },
//   {
//     name: 'Marge',
//     surname: 'Simpson',
//     age: 38,
//     info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//   },
//   {
//     name: 'Lisa',
//     surname: 'Simpson',
//     age: 9,
//     info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//   },
//   {
//     name: 'Maggie',
//     surname: 'Simpson',
//     age: 1,
//     info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//   },
// ];

// 2.1 Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів

// Task2(2)
// let rickAndMorty=[
//     {"id":235,
//     "name":"Mortytown Loco",
//     "status":"Dead",
//     "species":"Human",
//     "type":"",
//     "gender":"Male",
//     "origin":{"name":"unknown","url":""},
//     "location":{"name":"Citadel of Ricks",
//     "url":"https://rickandmortyapi.com/api/location/3"},
//     "image":"https://rickandmortyapi.com/api/character/avatar/235.jpeg",
//     "episode":["https://rickandmortyapi.com/api/episode/28"],
//     "url":"https://rickandmortyapi.com/api/character/235","created":"2017-12-30T16:37:07.150Z"
// },
//
//     {"id":333,
//     "name":"Stair Goblin",
//     "status":"Alive",
//     "species":"Mythological Creature",
//     "type":"Stair goblin",
//     "gender":"Genderless",
//     "origin":{"name":"unknown","url":""},
//     "location":{"name":"Fantasy World","url":"https://rickandmortyapi.com/api/location/48"},
//     "image":"https://rickandmortyapi.com/api/character/avatar/333.jpeg",
//     "episode":["https://rickandmortyapi.com/api/episode/5","https://rickandmortyapi.com/api/episode/11",
//     "https://rickandmortyapi.com/api/episode/25"],"url":"https://rickandmortyapi.com/api/character/333",
//     "created":"2018-01-10T16:34:19.420Z"
// },
//
//     {"id":471,
//         "name":"Little Voltron",
//         "status":"Alive",
//         "species":"Robot",
//         "type":"",
//         "gender":"Genderless",
//         "origin":{"name":"unknown","url":""},
//         "location":{"name":"Earth (Replacement Dimension)",
//             "url":"https://rickandmortyapi.com/api/location/20"},
//         "image":"https://rickandmortyapi.com/api/character/avatar/471.jpeg",
//         "episode":["https://rickandmortyapi.com/api/episode/27"],
//         "url":"https://rickandmortyapi.com/api/character/471",
//         "created":"2018-05-22T17:07:21.833Z"
//     },
//
//     {"id":511,
//         "name":"Anchorwoman",
//         "status":"Alive",
//         "species":"Human",
//         "type":"",
//         "gender":"Female",
//         "origin":{"name":"Earth (Replacement Dimension)",
//             "url":"https://rickandmortyapi.com/api/location/20"},
//         "location":{"name":"Earth (Replacement Dimension)",
//             "url":"https://rickandmortyapi.com/api/location/20"},
//         "image":"https://rickandmortyapi.com/api/character/avatar/511.jpeg",
//         "episode":["https://rickandmortyapi.com/api/episode/32"],
//         "url":"https://rickandmortyapi.com/api/character/511",
//         "created":"2020-05-02T12:24:07.452Z"
//     },
//     {"id":604,
//         "name":"Female Scorpion",
//         "status":"Dead",
//         "species":"Animal",
//         "type":"Soulless Puppet",
//         "gender":"Female",
//         "origin":{"name":"Morty’s Story","url":"https://rickandmortyapi.com/api/location/99"},
//         "location":{"name":"Morty’s Story","url":"https://rickandmortyapi.com/api/location/99"},
//         "image":"https://rickandmortyapi.com/api/character/avatar/604.jpeg",
//         "episode":["https://rickandmortyapi.com/api/episode/37"],
//         "url":"https://rickandmortyapi.com/api/character/604",
//         "created":"2020-08-06T11:48:01.937Z"
//     },
//
//     {"id":747,
//         "name":"Cenobite",
//         "status":"unknown",
//         "species":"Mythological Creature",
//         "type":"Demon",
//         "gender":"Male",
//         "origin":{"name":"Hell", "url":"https://rickandmortyapi.com/api/location/116"},
//         "location":{"name":"Hell","url":"https://rickandmortyapi.com/api/location/116"},
//         "image":"https://rickandmortyapi.com/api/character/avatar/747.jpeg",
//         "episode":["https://rickandmortyapi.com/api/episode/46"],
//         "url":"https://rickandmortyapi.com/api/character/747",
//         "created":"2021-10-17T13:56:15.096Z"}
// ]


import './App.css';

import Component from "./Components/SimpsonComponents/Component";
import Users from "./Components/UsersComponent/Users";
import RickAndMortyComponent from "./Components/RickAndMorty/RickAndMorty";

function App() {
  return (
    <div className="App">
        <Component
                  itemName={'Bart'}
                  itemSurname={'Simpson'}
                  itemAge={10}
                  itemInfo={'Бартолом ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.'}
                  itemPhoto={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
        />

        <Component
                      itemName={'Homer'}
                      itemSurname={'Simpson'}
                      itemAge={40}
                      itemInfo={'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.'}
                      itemPhoto={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
        />

        <Component
                      itemName={'Marge'}
                      itemSurname={'Simpson'}
                      itemAge={38}
                      itemInfo={'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.'}
                      itemPhoto={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
        />

        <Component
                      itemName={'Lisa'}
                      itemSurname={'Simpson'}
                      itemAge={9}
                      itemInfo={'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.'}
                      itemPhoto={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
        />

        <Component
                        itemName={'Marge'}
                        itemSurname={'Simpson'}
                        itemAge={38}
                        itemInfo={'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.'}
                        itemPhoto={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
        />

        <RickAndMortyComponent
            RickAndMortyId={235}
            RickAndMortyName={'Mortytown Loco'}
            RickAndMortyStatus={'Dead'}
            RickAndMortySpecies={'Human'}
            RickAndMortyGender={'Male'}
            pic={"https://rickandmortyapi.com/api/character/avatar/235.jpeg"}
        />


        <RickAndMortyComponent
            RickAndMortyId={333}
            RickAndMortyName={'Stair Goblin'}
            RickAndMortyStatus={'Alive'}
            RickAndMortySpecies={'Mythological Creature'}
            RickAndMortyGender={'Genderless'}
            pic={"https://rickandmortyapi.com/api/character/avatar/333.jpeg"}
        />

        <RickAndMortyComponent
            RickAndMortyId={471}
            RickAndMortyName={'Little Voltron'}
            RickAndMortyStatus={'Alive'}
            RickAndMortySpecies={'Robot'}
            RickAndMortyGender={'Genderless'}
            pic={"https://rickandmortyapi.com/api/character/avatar/471.jpeg"}
        />
        <RickAndMortyComponent
            RickAndMortyId={511}
            RickAndMortyName={'Anchorwoman'}
            RickAndMortyStatus={'Alive'}
            RickAndMortySpecies={'Human'}
            RickAndMortyGender={'Female'}
            pic={"https://rickandmortyapi.com/api/character/avatar/511.jpeg"}
        />
        <RickAndMortyComponent
            RickAndMortyId={604}
            RickAndMortyName={'Female Scorpion'}
            RickAndMortyStatus={'Dead'}
            RickAndMortySpecies={'Animal'}
            RickAndMortyGender={'Female'}
            pic={"https://rickandmortyapi.com/api/character/avatar/604.jpeg"}
        />
        <RickAndMortyComponent
            RickAndMortyId={747}
            RickAndMortyName={'Cenobite'}
            RickAndMortyStatus={'unknown'}
            RickAndMortySpecies={'Mythological Creature'}
            RickAndMortyGender={'Male'}
            pic={"https://rickandmortyapi.com/api/character/avatar/747.jpeg"}
        />

      <Users/>
    </div>
  );
}

export default App;







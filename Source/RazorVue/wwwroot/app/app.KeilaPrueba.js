import DemoGrid from './component/Grid/Grid.js'

export default {
    components: {
        DemoGrid
    },
    data:() => ({
        nombre: "OSIRIS",
        origen: "EGIPCIO",
        genero: "MASCULINO",
        searchQuery: '',
        gridColumns: ['won', 'lost', 'TBD gods', 'TDB humans'],
        gridData:
            [
                {
                    won: 'Thor (Gods)',
                    lost: 'Lü Bu (Humans)',
                    'TBD gods': 'Loki',
                    'TDB humans': 'King Leonidas'
                },
                {
                    won: 'Zeus (Gods)',
                    lost: 'Adam (Humans)',
                    'TBD gods': 'Apollo',
                    'TDB humans': 'Grigori Rasputin'
                },
                {
                    won: 'Sasaki Kojiro (Humans)',
                    lost: 'Poseidon (Gods)',
                    'TBD gods': 'Susano\'o no Mikoto',
                    'TDB humans': 'Soji Okita'
                },
                {
                    won: 'Jack the Ripper (Humans)',
                    lost: 'Hercules (Gods)',
                    'TBD gods': 'Anubis',
                    'TDB humans': 'Michel Nostradamus'
                },
                {
                    won: 'Shiva (Gods)',
                    lost: 'Raiden Tameemon (Humans)',
                    'TBD gods': 'Odin',
                    'TDB humans': 'Simo Häyhä'
                },
                {
                    won: 'Buda (Humans)',
                    lost: 'Zerofuku / Hajun (Gods)',
                    'TDB humans': 'Sakata Kintoki'
                },
                {
                    won: 'Qin Shi Huan (Humans)',
                    lost: 'Hades (Gods)'
                },
                {
                    won: 'Nikola Tesla/Beelzebub',
                    lost: 'Nikola Tesla/Beelzebub'
                }
            ]
    }),
    template:
        (`
                NOMBRE: {{nombre}} <br>
                ORIGEN: {{origen}} <br>
                SIGNIFICADO: QUE POSEE VISTA PODEROSA, HIJO DE "NUT" Y ESPOSO DE "ISIS", DIVINIDAD CREADORA, PRINCIPIO DEL BIEN. <br>
                GENERO: {{genero}}

                
                <link rel="stylesheet" href="/app/component/Grid/Grid.js.css" />
                <form id="search">
                    Search <input name="query" v-model="searchQuery">
                  </form>
                  <DemoGrid
                    :data="gridData"
                    :columns="gridColumns"
                    :filter-key="searchQuery">
                  </DemoGrid>
    `),
};
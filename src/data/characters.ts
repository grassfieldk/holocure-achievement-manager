class Character {
  constructor(public name: string, public displayName: string) {}
}

class Group {
  constructor(public name: string, public displayName: string, public area: string, public characters: Character[]) {}
}

export const GROUPS: Group[] = [
  {
    name: 'myth',
    displayName: 'MYTH',
    area: 'EN',
    characters: [
      {
        name: 'ame',
        displayName: 'アメリア・ワトソン'
      },
      {
        name: 'ina',
        displayName: '一伊那尓栖'
      },
      {
        name: 'gura',
        displayName: 'がうる・ぐら'
      },
      {
        name: 'calli',
        displayName: '森カリオペ'
      },
      {
        name: 'kiara',
        displayName: '小鳥遊キアラ'
      }
    ]
  },
  {
    name: 'council-hope',
    displayName: 'COUNCIL+HOPE',
    area: 'EN',
    characters: [
      {
        name: 'irys',
        displayName: 'IRyS'
      },
      {
        name: 'bae',
        displayName: 'ハコス・ベールズ'
      },
      {
        name: 'sana',
        displayName: '九十九佐命'
      },
      {
        name: 'fauna',
        displayName: 'セレス・ファウナ'
      },
      {
        name: 'mumei',
        displayName: '七詩ムメイ'
      },
      {
        name: 'kronii',
        displayName: 'オーロ・クロニー'
      }
    ]
  },
  {
    name: 'gamers',
    displayName: 'GAMERS',
    area: 'JP',
    characters: [
      {
        name: 'fubuki',
        displayName: '白上フブキ'
      },
      {
        name: 'mio',
        displayName: '大神ミオ'
      },
      {
        name: 'korone',
        displayName: '戌神ころね'
      },
      {
        name: 'okayu',
        displayName: '猫叉おかゆ'
      }
    ]
  },
  {
    name: 'gen0',
    displayName: 'GEN 0',
    area: 'JP',
    characters: [
      {
        name: 'sora',
        displayName: 'ときのそら'
      },
      {
        name: 'roboco',
        displayName: 'ロボ子さん'
      },
      {
        name: 'azki',
        displayName: 'AZKi'
      },
      {
        name: 'suisei',
        displayName: '星街すいせい'
      },
      {
        name: 'miko',
        displayName: 'さくらみこ'
      }
    ]
  },
  {
    name: 'gen1',
    displayName: 'GEN 1',
    area: 'JP',
    characters: [
      {
        name: 'haato',
        displayName: '赤井はあと'
      },
      {
        name: 'aki',
        displayName: 'アキ・ローゼンタール'
      },
      {
        name: 'matsuri',
        displayName: '夏色まつり'
      },
      {
        name: 'mel',
        displayName: '夜空メル'
      }
    ]
  },
  {
    name: 'gen2',
    displayName: 'GEN 2',
    area: 'JP',
    characters: [
      {
        name: 'subaru',
        displayName: '大空スバル'
      },
      {
        name: 'choco',
        displayName: '癒月ちょこ'
      },
      {
        name: 'shion',
        displayName: '紫咲シオン'
      },
      {
        name: 'ayame',
        displayName: '百鬼あやめ'
      },
      {
        name: 'aqua',
        displayName: '湊あくあ'
      }
    ]
  },
  {
    name: 'area15',
    displayName: 'AREA15',
    area: 'ID',
    characters: [
      {
        name: 'moona',
        displayName: 'ムーナ・ホシノヴァ'
      },
      {
        name: 'risu',
        displayName: 'アユンダ・リス'
      },
      {
        name: 'iofi',
        displayName: 'アイラニ・イオフィフティーン'
      }
    ]
  },
  {
    name: 'holoro',
    displayName: 'HOLORO',
    area: 'ID',
    characters: [
      {
        name: 'ollie',
        displayName: 'クレイジー・オリー'
      },
      {
        name: 'reine',
        displayName: 'パヴォリア・レイネ'
      },
      {
        name: 'anya',
        displayName: 'アーニャ・メルフィッサ'
      }
    ]
  },
  {
    name: 'holohero',
    displayName: 'HOLOH3RO',
    area: 'ID',
    characters: [
      {
        name: 'kobo',
        displayName: 'こぼ・かなえる'
      },
      {
        name: 'kaela',
        displayName: 'カエラ・コヴァルスキア'
      },
      {
        name: 'zeta',
        displayName: 'ベスティア・ゼータ'
      }
    ]
  }
];

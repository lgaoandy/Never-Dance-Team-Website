class Cover {
    constructor(song, artist, roles){
        this.song = song;
        this.artist = artist;
        this.roles = roles;
    }
}

class Role {
    constructor(member, role = 'Backup'){
        this.member = member;
        this.role = role;
    }
}

var covers = [
    new Cover('Blood, Sweat & Tears', 'BTS', [
        new Role('Kyle T.', 'Jimin'),
        new Role('Francine', 'JHope'),
        new Role('Jacky', 'Jungkook'),
        new Role('Justin', 'RM'),
        new Role('Ian', 'V')
    ]),
    new Cover('Shangri-La', 'VIXX', [
        new Role('Kyle T.', 'Leo'),
        new Role('Francine', 'Hyuk'),
        new Role('Jacky', 'N'),
        new Role('Justin', 'Ravi'),
        new Role('Julia', 'Ken')
    ]),
    new Cover('Dream in a Dream', 'Ten', [
        new Role('Kyle T.'),
        new Role('Francine'),
        new Role('Jacky'),
        new Role('Justin', 'Ten'),
        new Role('Ian')
    ]),
    new Cover('Love Scenario', 'iKON', [
        new Role('Kyle T.', 'Ju-ne'),
        new Role('Francine', 'Jay'),
        new Role('Jacky', 'Bobby'),
        new Role('Justin', 'DK'),
        new Role('Ian', 'B.I')
    ]),
    new Cover('BOSS', 'NCT U', [
        new Role('Kyle T.', 'Doyoung'),
        new Role('Francine', 'Mark'),
        new Role('Jacky', 'Lucas'),
        new Role('Justin', 'Jaehyun'),
        new Role('Ian', 'Jungwoo')
    ]),
    new Cover('Ddu-Du Ddu-du', 'Blackpink', [
        new Role('Francine', 'Jennie'),
        new Role('Christine', 'Lisa'),
        new Role('Stephanie W.', 'Jisoo'),
        new Role('Angelina', 'Rosé')
    ]),
    new Cover('Solo', 'Jennie', [
        new Role('Francine'),
        new Role('Stephanie W.'),
        new Role('Angelina'),
        new Role('Kyara','Jennie'),
        new Role('AJ'),
        new Role('Stephanie D.'),
        new Role('Tracey')
    ]),
    new Cover('I Love You', 'EXID', [
        new Role('Kyara', 'Hani'),
        new Role('AJ', 'LE'),
        new Role('Stephanie D.', ' Jeonghwa'),
        new Role('Melody', 'Solji'),
        new Role('Nicky', 'Hyelin')
    ]),
    new Cover('La Vie En Rose', 'IZ*ONE', [
        new Role('Francine', 'Yena'),
        new Role('Stephanie W.', 'Yujin'),
        new Role('Angelina', 'Wonyoung'),
        new Role('Kyara', 'Eunbi'),
        new Role('AJ', 'Chaewon'),
        new Role('Stephanie D.', 'Nako'),
        new Role('Tracey', 'Chaeyeon'),
        new Role('Melody', 'Sakura'),
        new Role('Nicky', 'Hyewon'),
        new Role('Nicole', 'Hitomi'),
        new Role('Kate', 'Yuri'),
        new Role('Simone', 'Minju')
    ]),
    new Cover('Fake Love', 'BTS', [
        new Role('Kyle T.', 'Jimin'),
        new Role('Francine', 'JHope'),
        new Role('Jacky', 'Jungkook'),
        new Role('Justin', 'RM'),
        new Role('Ian', 'V'),
        new Role('Izzie', 'Jin'),
        new Role('Chris', 'Suga')
    ]),
    new Cover('Kill This Love', 'Blackpink', [
        new Role('Stephanie W.', 'Jennie'),
        new Role('Angelina', 'Lisa'),
        new Role('Kyara', 'Rosé'),
        new Role('AJ', 'Lisa'),
        new Role('Tracey', 'Jisoo'),
        new Role('Nicky', 'Rosé'),
        new Role('Nicole', 'Jennie'),
        new Role('Simone', 'Jisoo')
    ]),
    new Cover('Gotta Go', 'Chungha', [
        new Role('Stephanie D.', 'Chungha'),
        new Role('Justin'),
        new Role('Christine'),
        new Role('Stephanie W.'),
        new Role('AJ'),
        new Role('Melody'),
        new Role('Nicky'),
        new Role('Simone'),
        new Role('Izzie')
    ]),
    new Cover('Dalla Dalla', 'Itzy', [
        new Role('Christine', 'Yeji'),
        new Role('Stephanie W.', 'Chaeryeong'),
        new Role('Angelina', 'Yuna'),
        new Role('Melody', 'Ryujin'),
        new Role('Kate', 'Lia')
    ]),
    new Cover('All Night', 'Astro', [
        new Role('Francine', 'JinJin'),
        new Role('Justin', 'Moonbin'),
        new Role('Kyara', 'MJ'),
        new Role('AJ', 'Sanha'),
        new Role('Stephanie D.', 'Eunwoo'),
        new Role('Izzie', 'Rocky')
    ]),
    new Cover('Boom', 'NCT Dream', [
        new Role('Christine', 'Haechan'),
        new Role('Nicole', 'Chenle'),
        new Role('Izzie', 'Jisung'),
        new Role('Andy', 'Jaemin'),
        new Role('Mico', 'Jeno'),
        new Role('Kyle L.', 'Renjun')
    ]),
    new Cover('Uh-Oh', '(G)i-dle', [
        new Role('Stephanie W.', 'Yuqi'),
        new Role('Kyara', 'Soojin'),
        new Role('AJ', 'Shuhua'),
        new Role('Stephanie D.', 'Minnie'),
        new Role('Tracey', 'Miyeon'),
        new Role('Nicky', 'Soyeon')
    ]),
    new Cover('Icy', 'Itzy', [
        new Role('Christine', 'Yeji'),
        new Role('Stephanie W.', 'Chaeryeong'),
        new Role('Angelina', 'Yuna'),
        new Role('Melody', 'Ryujin'),
        new Role('Kate', 'Lia')
    ]),
    new Cover('Movie Star', 'CIX', [
        new Role('Ian', 'Jinyoung'),
        new Role('Chris', 'Seunghun'),
        new Role('Andy', 'Yonghee')
    ]),
    new Cover('Feel Special', 'Twice', [
        new Role('Kyara', 'Chaeyeong'),
        new Role('AJ', 'Sana'),
        new Role('Stephanie D.', 'Momo'),
        new Role('Tracey', 'Jihyo'),
        new Role('Melody', 'Nayeon'),
        new Role('Nicky', 'Tzuyu'),
        new Role('Nicole', 'Jeongyeon'),
        new Role('Kate', 'Dahyun')
    ]),
    new Cover('Moonwalk', 'WayV', [
        new Role('Kyle T.', 'Ten'),
        new Role('Francine', 'Yangyang'),
        new Role('Jacky', 'Hendery'),
        new Role('Justin', 'Lucas'),
        new Role('Ian', 'Xiaojun'),
        new Role('Izzie', 'Winwin'),
        new Role('Chris', 'Kun')
    ]),
    new Cover('Psycho', 'Red Velvet', [
        new Role('Kyara', 'Irene'),
        new Role('AJ', 'Yeri'),
        new Role('Tracey', 'Seulgi'),
        new Role('Melody', 'Wendy'),
        new Role('Hayley', 'Joy')
    ]),
    new Cover('Nostalgic Night', 'Victon', [
        new Role('Francine', 'Subin'),
        new Role('Justin', 'Byungchan'),
        new Role('Melody', 'Seungsik'),
        new Role('Izzie', 'Hanse'),
        new Role('Mico', 'Heochan'),
        new Role('Kyle L.', 'Sejun')
    ])
];

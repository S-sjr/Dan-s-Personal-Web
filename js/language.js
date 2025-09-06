// 语言切换功能实现
// 定义翻译文本对象
const translations = {
    'zh': {
        'nav.home': '首页',
        'nav.about': '关于我',
        'nav.media': '媒体中心',
        'nav.schedule': '演出日程',
        'nav.contact': '联系我',
        'hero.title': '帅  文  波',
        'hero.subtitle': '假声男高音',
        'hero.button': '了解更多',
        'about.subtitle': '关于我',
        'about.bio1': '他被欧洲的乐评⼈称之为：⼀个充满戏剧张⼒的嗓⾳。\n' + 
            '本科毕业于上海音乐学院声乐歌剧系（2020-2025），他也是上海音乐学院声乐歌剧系历史上的第一位假声男高音。\n ' +
            '2025年起研究生就读于德国斯图加特国立音乐与表演艺术学院声乐歌剧系。\n'+ 
            '他在欧洲求学期间跟随了世界著名花腔女高音歌唱家Cheryl Studer女士，柏林汉斯艾斯勒音乐学院教授Renata Faltin女士学习，同时他还接受过意大利女高音歌唱家Francesco Bruni，韩国男中音歌唱家ChangHan Lim，旅德钢琴家⻢源女士、柏林国家歌剧院Mr.Klauss Sallmann与Mr.Uwe Griem、法兰克福国家歌剧院Mr.Felice Venanzoni...等等的老师们的指导与帮助。\n'+ 
            '2025年他加入了由世界著名男中音歌唱家Thomas Hampson和女高音歌唱家Melanie Diener在德国Waiblingen市组织的国际歌剧工作室Internationale Opernwerkstatt Waiblingen，是该项目2025年度歌剧奖学金的获得者。',
        'about.bio2': '近年来，他的身影活跃在世界众多国际知名赛事，并获得了一些成绩：\n' +
            '• 希腊“International Association of Art\'THE MUSE \'”比赛获得一等奖“FIRST PRIZE”\n' +
            '• 意大利“Bologna International Vocal Competition博洛尼亚国际声乐大赛”第五名/ “ENCOURAGEMENT AWARD”\n' +
            '• 意大利维罗纳“VINCERÒ World Opera Competition世界歌剧大赛”⻘年组第二名“2°PREMIO-GIOVANI”，随后在正赛\n' +
            '组别中获得了“VINCERÒ World Opera Competition”第三名 “3°PREMIO”和评论家特别奖“PREMIO CRITICA”\n' +
            '• 意大利第七届“"Giovan Battista Rubini"国际声乐比赛”决赛奖“PREMIO FINALISTI”\n' +
            '• 韩国Daegu举办的第42届“大邱国际声乐大赛Daegu International Vocal Music Competition”的决赛奖“FINALIST”以及大都会歌剧奖“SPECIAL PRIZE-METROPOLITAN OPERA COMPANY“\n' +
            '他入围过西班牙Barcelona举办的第60-62届 “Tenor Viñas声乐大赛”并闯入semintration。此外他还入围了例如美国New York举办的第34届“Opera at Florham\'s国际声乐比赛”、第23届“Ottavio ZIINO国际歌剧比赛”，葡萄牙举办的“Cascais International Opera Competition”等众多国际职业大赛。',
        'about.bio3': '2025年9月，他加入了德国Waiblingen市，由Thomas Hampsen和Melanie Diener共同举办的International Opernwerkstatt，并与Württembergischen Philharmonie Reutlingen共同演绎音乐会。\n'+ 
            '2023年他在意大利博洛尼亚的Sala Mozart in the Accademia Filarmonic参与了“博洛尼亚国际声乐比赛获奖者音乐会”。在意大利维罗纳与Teatro Filarmonico剧院乐团合作演出了“Vincerò世界歌剧大赛决赛音乐会”。2022年五月在上海音乐学院“音才助飞”项目的帮助下，他成功在上音歌剧院举办“璀璨明珠”巴洛克音乐实践音乐会。在上海音乐学院室内乐团与恰空古乐团在贺绿汀音乐厅的合作音乐会——《巴洛克室内乐音乐会》中担任Purcell珀塞尔歌剧《The Fairy Queen仙后》Alto主唱与四重合唱。2023年11月参加了由上音歌剧院举办的第16届“艺术歌曲之夜·德俄大师”音乐会。\n' +
            '自2019年起，他成为法国阿尔日莱斯国际艺术节的常驻演员，参与了《Faust浮士德》和《L\'Elisir D\'Amore爱之甘醇》等歌剧的制作，在上海他饰演了由施恒教授执导的古诺歌剧《Faust》中的角色“Siebel”与歌剧《Romeo et Juliette罗密欧与朱丽叶》中的角色“Stepheno”。',
        'about.resumeCn': '下载简历',
        'features.title': '过往活动',
        'features.item1.title': '个人形象',
        'features.item2.title': '演出记录',
        'media.title': '媒体中心',
        'media.description': '这里展示我的最新演出视频和媒体内容',
        'media.featured': '精选视频',
        'media.featuredCaption': '最新音乐录影带《艺术的旋律》',
        'media.gallery': '视频库',
        'media.video1.title': '最新演出',
        'media.video1.description': '2025年春季音乐会现场',
        'media.video1.date': '2023年3月15日',
        'media.video2.title': '创作过程纪实',
        'media.video2.date': '2023年1月22日',
        'media.video3.title': '艺术家访谈',
        'media.video3.date': '2022年11月10日',
        'media.video4.title': '幕后花絮 - 录音棚',
        'media.video4.date': '2022年9月5日',
        'schedule.title': '演出日程',
        'schedule.description': '查看我的演出和活动安排',
        'schedule.dateHeader': '日期',
        'schedule.eventHeader': '活动',
        'schedule.locationHeader': '地点',
        'schedule.ticketHeader': '购票',
        'schedule.event1.date': '2023年10月15日',
        'schedule.event1.location': '北京国家大剧院',
        'schedule.event1.description': '春季音乐会',
        'schedule.event1': '古典音乐会',
        'schedule.location1': '柏林音乐厅',
        'schedule.event2.date': '2024年11月2日',
        'schedule.event2.location': '上海音乐厅',
        'schedule.event2.description': '独奏会',
        'schedule.event2': '现代舞表演',
        'schedule.location2': '巴黎歌剧院',
        'schedule.event3': '艺术展览开幕式',
        'schedule.location3': '伦敦国家美术馆',
        'schedule.event3.date': '2025年11月20日',
        'schedule.event4': '新年音乐会',
        'schedule.location4': '维也纳金色大厅',
        'schedule.event4.date': '2024年12月5日',
        'schedule.event5': 'Farinelli Wettbewerb',
        'schedule.location5': '德国, 卡尔斯鲁厄',
        'schedule.event5.date': '2025年2月27日-3月2日',
        'schedule.event6': '62nd Tenor Viñas Concurs',
        'schedule.location6': '西班牙, 巴塞罗那',
        'schedule.event6.date': '2025年1月18-26日',
        'schedule.event7': 'Daegu International Vocal music Competition Finalist Concert',
        'schedule.location7': '韩国, 大邱',
        'schedule.event7.date': '2024年8月30日',
        'schedule.event8': '15th International Singing Competition for Baroque Opera《Antonio Cesti》',
        'schedule.location8': '奥地利, 因斯布鲁克',
        'schedule.event8.date': '2024年8月25-30日',
        'schedule.event9': 'Wilhelm Stenhammar International Music Competition',
        'schedule.location9': '瑞典, 诺尔雪平',
        'schedule.event9.date': '2024年6月7-13日',
        'schedule.event10': '3rd Vincerò World Singing Competition Finalist Concert',
        'schedule.location10': '意大利, 维罗纳',
        'schedule.event10.date': '2023年12月11日',
        'schedule.event11': 'Bologna International Vocal Competition Winners\' Performance',
        'schedule.location11': '意大利, 博洛尼亚',
        'schedule.event11.date': '2023年8月1日',
        'schedule.event12': 'Gound Opera_Romeo et Juliette (Stephone)',
        'schedule.location12': '中国, 上海',
        'schedule.event12.date': '2023年6月30日-7月1日',
        'schedule.event13': 'Special concert by Baroque Chamber Orchestra of Shanghai Conservatory of Music',
        'schedule.location13': '中国, 上海',
        'schedule.event13.date': '2023年6月12日',
        'schedule.event14': 'Bright Pearl-Concert of Works from Baroque Period',
        'schedule.location14': '中国, 上海',
        'schedule.event14.date': '2023年5月1日',
        'schedule.event15': '60th Tenor Viñas Concurs',
        'schedule.location15': '西班牙, 巴塞罗那',
        'schedule.event15.date': '2023年1月21-27日',
        'schedule.event16': 'Gound Opera_Faust (Siebel)',
        'schedule.location16': '中国, 上海',
        'schedule.event16.date': '2019年8月7日',
        'schedule.ticketButton': '购票',
        'schedule.reserveButton': '预约',
        'schedule.comingSoonButton': '即将开售',
        'schedule.detailsButton': '活动详情',
        'contact.title': '联系我',
        'contact.description': '有任何问题或合作意向，请随时与我联系',
        'contact.formTitle': '发送消息',
        'contact.nameLabel': '您的姓名',
        'contact.lastNameLabel': '姓',
        'contact.firstNameLabel': '名',
        'contact.emailLabel': '电子邮箱',
        'contact.subjectLabel': '主题',
        'contact.messageLabel': '消息内容',
        'contact.submitBtn': '发送消息',
        'contact.infoTitle': '联系方式',
        'contact.email': '邮箱: dandancountertenor@gmail.com',
        'contact.phone': '电话: +49 123 4567 8910',
        'contact.address': '地址: 柏林艺术区, 德国',
        'contact.facebook': 'Facebook',
        'contact.instagram': 'Instagram',
        'contact.twitter': 'Twitter',
        'contact.youtube': 'YouTube',
        'contact.form.name': '姓名',
        'contact.form.email': '电子邮箱',
        'contact.form.message': '留言',
        'contact.form.submit': '发送',
        'gallery.personal.title': '个人形象',
        'gallery.personal.caption1': '艺术写真',
        'gallery.personal.caption2': '比赛照片',
        'gallery.personal.caption3': '角色定妆照',
        'gallery.performance.title': '演出记录',
        'gallery.performance.caption1': 'Vincerò世界歌剧大赛',
        'gallery.performance.caption2': 'Romeo et Juliette - Shanghai',
        'gallery.performance.caption3': '音乐会演出'
    },
    'en': {
        'nav.home': 'Home',
        'nav.about': 'About Me',
        'nav.media': 'Media Center',
        'nav.schedule': 'Calendar',
        'nav.contact': 'Contact',
        'hero.title': 'WenBo Shuai',
        'hero.subtitle': 'Countertenor',
        'hero.button': 'Learn More',
        'about.subtitle': 'About Me',
        'about.bio1': 'WenBo Shuai was commented by European critics as: a voice full of dramatic tension.\n' + 
            'He won awards in some international competitions, such as:\n ' +
            '• 42 ° Daegu International Vocal Music Competition- FINALIST / SPECIAL PRIZE"METROPOLITAN OPERA COMPANY"\n'+ 
            '• VII Concorso Lirico Internazionale "Giovan Battista Rubini"- Finalist \n'+ 
            '• 3rd VINCERÒ Opera World Competition- 3° PREMIO / PREMIO "CRITICA" \n'+ 
            '• 2023 Bologna International Voice Competition-5° PREMIO-ENCOURAGEMENT AWARD...',
        'about.bio2': 'In 2025 he entered the Staatliche Hochschule für Musik und Darstellende Kunst Stuttgart to study (Gesang-Oper with Diana Haller).\n' +
            'From 2023, he has been studying in Europe under Prof. Renate Faltin (Hochschule für Musik Hanns Eisler), Prof. Cheryl Studer (Hochschule für Musik Würzburg), Mr. Klaus Sallmann(Staatsoper Berlin),Mr. Uwe Griem, and Mr. Felice Venanzoni (Oper Frankfurt).\n' +
            '2020-2025, he study in Shanghai Conservatory of Music (Vocal and Opera).\n' +
            '2025.09,He is a member of Waiblingen international Opernwerkstatt (Germany) and an opera scholarship winner.In the meantime, he will study with Thomas Hampsen and Melanie Diener and give concerts with Württembergischen Philharmonie Reutlingen.\n',
        'about.bio3': '2023.05, He held a concert of "Resplendent Pearl" Baroque Music at the Opera House of the Shanghai Conservatory of Music. 2023.06，He performed "Baroque Chamber Music Concert" with the Chamber Orchestra of Shanghai Conservatory of Music. And served as the lead singer and chorus of the alto part of the Purcell opera "The Fairy Queen".2023.06, He performed Gouno\' opera "Romeo et Juliette" and played "Stepheno" in Shanghai. 2023.11, He attended the "German and Russian Master Concert-Night of Art songs" held at the ShangYin Opera House.\n'+ 
            'He began to study vocal music in 2016 and tried to learn both tenor and baritone in a period of time. In 2018, he met Italian soprano Francesca Bruni and Shanghai Conservatory of Music Bass- Baritone Pro.Heng Shi, transitionto study Countertenor.\n' +
            'Since 2019, he has become a resident actor of the French "Festival International d\\\'Art Lyrique d\\\'Argeles" and participated in the production of the "Faust" and "L\\\'Elisir D\\\'Amore". 2019.11, He participated in the C.F. Gounod opera "Faust" directed by Shi Heng, a professor at the Shanghai Conservatory of Music. And played "Siebel" in it.',
        'about.resumeEn': 'Download Resume',
        'features.title': 'Gallery',
        'features.item1.title': 'Personal image',
        'features.item2.title': 'Performance record',
        'media.title': 'Media Center',
        'media.description': 'Here are my latest performance videos and media content',
        'media.featured': 'Featured Video',
        'media.featuredCaption': 'Latest Music Video "Melody of Art"',
        'media.gallery': 'Video Gallery',
        'media.video1.title': 'Latest Performance',
        'media.video1.description': 'Spring Concert 2025 Live',
        'media.video1.date': 'March 15, 2023',
        'media.video2.title': 'Creative Process Documentary',
        'media.video2.date': 'January 22, 2023',
        'media.video3.title': 'Artist Interview',
        'media.video3.date': 'November 10, 2022',
        'media.video4.title': 'Behind the Scenes - Recording Studio',
        'media.video4.date': 'September 5, 2022',
        'schedule.title': 'Calendar',
        'schedule.description': 'Check out my upcoming performances and events',
        'schedule.dateHeader': 'Date',
        'schedule.eventHeader': 'Event',
        'schedule.locationHeader': 'Location',
        'schedule.ticketHeader': 'Tickets',
        'schedule.event1.date': 'October 15, 2023',
        'schedule.event1.location': 'National Centre for the Performing Arts, Beijing',
        'schedule.event1.description': 'Spring Concert',
        'schedule.event1': 'Classical Music Concert',
        'schedule.location1': 'Berlin Concert Hall',
        'schedule.event2.date': 'November 2, 2024',
        'schedule.event2.location': 'Shanghai Concert Hall',
        'schedule.event2.description': 'Solo Recital',
        'schedule.event2': 'Modern Dance Performance',
        'schedule.location2': 'Paris Opera House',
        'schedule.event3': 'Art Exhibition Opening',
        'schedule.location3': 'National Gallery, London',
        'schedule.event3.date': 'November 20, 2025',
        'schedule.event4': 'New Year Concert',
        'schedule.location4': 'Vienna Golden Hall',
        'schedule.event4.date': 'December 5, 2024',
        'schedule.event5': 'Farinelli Wettbewerb',
        'schedule.location5': 'Karlsruhe, Germany',
        'schedule.event5.date': 'February 27-March 2, 2025',
        'schedule.event6': '62nd Tenor Viñas Concurs',
        'schedule.location6': 'Barcelona, Spain',
        'schedule.event6.date': 'January 18-26, 2025',
        'schedule.event7': 'Daegu International Vocal music Competition Finalist Concert',
        'schedule.location7': 'Daegu, Korea',
        'schedule.event7.date': 'August 30, 2024',
        'schedule.event8': '15th International Singing Competition for Baroque Opera《Antonio Cesti》',
        'schedule.location8': 'Innsbruck, Austria',
        'schedule.event8.date': 'August 25-30, 2024',
        'schedule.event9': 'Wilhelm Stenhammar International Music Competition',
        'schedule.location9': 'Norrköping, Sweden',
        'schedule.event9.date': 'June 7-13, 2024',
        'schedule.event10': '3rd Vincerò World Singing Competition Finalist Concert',
        'schedule.location10': 'Verona, Italy',
        'schedule.event10.date': 'December 11, 2023',
        'schedule.event11': 'Bologna International Vocal Competition Winners\' Performance',
        'schedule.location11': 'Bologna, Italy',
        'schedule.event11.date': 'August 1, 2023',
        'schedule.event12': 'Gound Opera_Romeo et Juliette (Stephone)',
        'schedule.location12': 'Shanghai, China',
        'schedule.event12.date': 'June 30-July 1, 2023',
        'schedule.event13': 'Special concert by Baroque Chamber Orchestra of Shanghai Conservatory of Music',
        'schedule.location13': 'Shanghai, China',
        'schedule.event13.date': 'June 12, 2023',
        'schedule.event14': 'Bright Pearl-Concert of Works from Baroque Period',
        'schedule.location14': 'Shanghai, China',
        'schedule.event14.date': 'May 1, 2023',
        'schedule.event15': '60th Tenor Viñas Concurs',
        'schedule.location15': 'Barcelona, Spain',
        'schedule.event15.date': 'January 21-27, 2023',
        'schedule.event16': 'Gound Opera_Faust (Siebel)',
        'schedule.location16': 'Shanghai, China',
        'schedule.event16.date': 'August 7, 2019',
        'schedule.ticketButton': 'Buy Tickets',
        'schedule.reserveButton': 'Reserve',
        'schedule.comingSoonButton': 'Coming Soon',
        'schedule.detailsButton': 'Event Details',
        'contact.title': 'Contact Me',
        'contact.description': 'If you have any questions or cooperation intentions, please feel free to contact me',
        'contact.formTitle': 'Send a Message',
        'contact.nameLabel': 'Your Name',
        'contact.lastNameLabel': 'Last Name',
        'contact.firstNameLabel': 'First Name',
        'contact.emailLabel': 'Email Address',
        'contact.subjectLabel': 'Subject',
        'contact.messageLabel': 'Message Content',
        'contact.submitBtn': 'Send Message',
        'contact.infoTitle': 'Contact Information',
        'contact.email': 'Email: dandancountertenor@gmail.com',
        'contact.phone': 'Phone: +49 123 4567 8910',
        'contact.address': 'Address: Berlin Art District, Germany',
        'contact.facebook': 'Facebook',
        'contact.instagram': 'Instagram',
        'contact.twitter': 'Twitter',
        'contact.youtube': 'YouTube',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Submit',
        'gallery.personal.title': 'Personal image',
        'gallery.personal.caption1': 'Artistic Portrait',
        'gallery.personal.caption2': 'Competition Photo',
        'gallery.personal.caption3': 'Role Portrait',
        'gallery.performance.title': 'Performance record',
        'gallery.performance.caption1': 'Vincerò World Opera Competition',
        'gallery.performance.caption2': 'Romeo et Juliette - Shanghai',
        'gallery.performance.caption3': 'Concert Performance'
    },
    'de': {
        'nav.home': 'Startseite',
        'nav.about': 'Über mich',
        'nav.media': 'Medienzentrum',
        'nav.schedule': 'Kalender',
        'nav.contact': 'Kontakt',
        'hero.title': 'WenBo Shuai',
        'hero.subtitle': 'Countertenor',
        'hero.button': 'Mehr erfahren',
        'about.subtitle': 'Über mich',
        'about.bio1': 'WenBo Shuai wurde von europäischen Musikkritikern als „eine Stimme voller dramatischer Spannung“ beschrieben.\n' + 
            'Er erhielt Auszeichnungen bei mehreren internationalen Wettbewerben, darunter:\n ' +
            '• 42. Daegu International Vocal Music Competition - Finalist / Sonderpreis „Metropolitan Opera Company“\n'+ 
            '• VII Concorso Lirico Internazionale „Giovan Battista Rubini“ - Finalist\n'+ 
            '• 2023 VINCERÒ Opera World Competition - 3. Preis / Kritikerpreis \n'+ 
            '• 2023 Bologna International Voice Competition - 5. Preis usw...',
        'about.bio2': 'Im Jahr 2025 Studiere er an der Staatlichen Hochschule für Musik und Darstellende Kunst Stuttgart im Studiengang Gesang - Oper (mit Diana Haller).\n' +
            'Ab 2023, er studierte in Europa bei Prof. Renate Faltin (Hochschule für Musik Hanns Eisler Berlin), Prof. Cheryl Studer (Hochschule für Musik Würzburg), Herr.Klaus Sallmann (Staatsoper Berlin), Herr.Uwe Griem und Herr.Felice Venanzoni (Oper Frankfurt).\n' +
            'Von 2020 bis 2025 studierte er  an der Shanghai Conservatory of Music (Gesang und Oper).\n' +
            'Seit September 2025 ist er Mitglied der Internationalen Opernwerkstatt Waiblingen (Deutschland) und Stipendiat im Bereich Oper. Im Rahmen dessen arbeitet er mit Thomas Hampson und Melanie Diener zusammen und konzertiert mit der Württembergischen Philharmonie Reutlingen.\n',
        'about.bio3': 'Im Mai 2023 gab er ein Barockkonzert mit dem Titel „Resplendent Pearl“ im Opernhaus des Shanghai Conservatory of Music.\n' +
            'Im Juni 2023 trat er mit dem Kammerorchester des Konservatoriums im Konzert „Barocke Kammermusik“ auf und übernahm sowohl die Hauptrolle als auch den Alt-Part im Chor der Oper „The Fairy Queen“ von Henry Purcell. Ebenfalls im Juni 2023 sang er in Charles Gounods Oper „Roméo et Juliette“ in Shanghai die Rolle des Stéphano. Im November 2023 wirkte er beim Konzert „Deutscher und Russischer Meisterabend – Nacht der Kunstlieder“ im Shangyin Opera House mit.\n' +
            'Seit 2019 ist er festes Ensemblemitglied des französischen Festival International d\'Art Lyrique d\'Argelès und wirkte dort u. a. in den Produktionen der Opern „Faust“ und „L\'elisir d\'amore“ mit. \n' +
            'Im November 2019 sang er die Rolle des Siebel in Charles Gounods Oper „Faust“ unter der Regie von Prof. Heng Shi am Shanghai Conservatory of Music. \n' +
            'Sein Gesangsstudium begann im Jahr 2016. Anfangs studierte er sowohl Tenor- als auch Bariton-Partien.Im Jahr 2018 begegnete er der italienischen Sopranistin Francesca Bruni sowie dem Bassbariton Prof. Heng Shi vom Shanghai Conservatory of Music und wechselte schließlich zum Fach Countertenor.',
        'about.resumeDe': 'Lebenslauf herunterladen',
        'features.title': 'Galerie',
        'features.item1.title': 'Persönliches Bild',
        'features.item2.title': 'Aufführung',
        'media.title': 'Medienzentrum',
        'media.description': 'Hier sind meine neuesten Auftrittsvideos und Medieninhalte',
        'media.featured': 'Ausgewähltes Video',
        'media.featuredCaption': 'Neuester Musikvideo "Melodie der Kunst"',
        'media.gallery': 'Videogalerie',
        'media.video1.title': 'Neuester Auftritt',
        'media.video1.description': 'Frühlingskonzert 2025 Live',
        'media.video1.date': '15. März 2023',
        'media.video2.title': 'Dokumentation des Schaffungsprozesses',
        'media.video2.date': '22. Januar 2023',
        'media.video3.title': 'Künstlerinterview',
        'media.video3.date': '10. November 2022',
        'media.video4.title': 'Backstage - Tonstudio',
        'media.video4.date': '5. September 2022',
        'schedule.title': 'Kalender',
        'schedule.description': 'Schauen Sie sich meine bevorstehenden Aufführungen und Veranstaltungen an',
        'schedule.dateHeader': 'Datum',
        'schedule.eventHeader': 'Veranstaltung',
        'schedule.locationHeader': 'Ort',
        'schedule.ticketHeader': 'Tickets',
        'schedule.event1.date': '15. Oktober 2023',
        'schedule.event1.location': 'Nationales Zentrum für Darstellende Künste, Peking',
        'schedule.event1.description': 'Frühlingskonzert',
        'schedule.event1': 'Klassisches Musikkonzert',
        'schedule.location1': 'Berliner Konzerthalle',
        'schedule.event2.date': '2. November 2024',
        'schedule.event2.location': 'Shanghai Konzerthalle',
        'schedule.event2.description': 'Solo-Recital',
        'schedule.event2': 'Moderner Tanzaufführung',
        'schedule.location2': 'Paris Opernhaus',
        'schedule.event3': 'Kunstausstellungsöffnung',
        'schedule.location3': 'Nationalgalerie London',
        'schedule.event3.date': '20. November 2025',
        'schedule.event4': 'Neujahrskonzert',
        'schedule.location4': 'Wiener Goldener Saal',
        'schedule.event4.date': '5. Dezember 2024',
        'schedule.event5': 'Farinelli Wettbewerb',
        'schedule.location5': 'Karlsruhe, Deutschland',
        'schedule.event5.date': '27. Februar-2. März 2025',
        'schedule.event6': '62nd Tenor Viñas Concurs',
        'schedule.location6': 'Barcelona, Spanien',
        'schedule.event6.date': '18.-26. Januar 2025',
        'schedule.event7': 'Daegu International Vocal music Competition Finalist Concert',
        'schedule.location7': 'Daegu, Korea',
        'schedule.event7.date': '30. August 2024',
        'schedule.event8': '15th International Singing Competition for Baroque Opera《Antonio Cesti》',
        'schedule.location8': 'Innsbruck, Österreich',
        'schedule.event8.date': '25.-30. August 2024',
        'schedule.event9': 'Wilhelm Stenhammar International Music Competition',
        'schedule.location9': 'Norrköping, Schweden',
        'schedule.event9.date': '7.-13. Juni 2024',
        'schedule.event10': '3rd Vincerò World Singing Competition Finalist Concert',
        'schedule.location10': 'Verona, Italien',
        'schedule.event10.date': '11. Dezember 2023',
        'schedule.event11': 'Bologna International Vocal Competition Winners\' Performance',
        'schedule.location11': 'Bologna, Italien',
        'schedule.event11.date': '1. August 2023',
        'schedule.event12': 'Gound Opera_Romeo et Juliette (Stephone)',
        'schedule.location12': 'Shanghai, China',
        'schedule.event12.date': '30. Juni-1. Juli 2023',
        'schedule.event13': 'Special concert by Baroque Chamber Orchestra of Shanghai Conservatory of Music',
        'schedule.location13': 'Shanghai, China',
        'schedule.event13.date': 'June 12, 2023',
        'schedule.event14': 'Bright Pearl-Concert of Works from Baroque Period',
        'schedule.location14': 'Shanghai, China',
        'schedule.event14.date': '1. Mai 2023',
        'schedule.event15': '60th Tenor Viñas Concurs',
        'schedule.location15': 'Barcelona, Spanien',
        'schedule.event15.date': 'January 21-27, 2023',
        'schedule.event16': 'Gound Opera_Faust (Siebel)',
        'schedule.location16': 'Shanghai, China',
        'schedule.event16.date': 'July 2019',
        'schedule.ticketButton': 'Tickets kaufen',
        'schedule.reserveButton': 'Reservieren',
        'schedule.comingSoonButton': 'Bald verfügbar',
        'schedule.detailsButton': 'Veranstaltungsdetails',
        'contact.title': 'Kontakt',
        'contact.description': 'Wenn Sie Fragen haben oder Kooperationsabsichten, kontaktieren Sie mich bitte',
        'contact.formTitle': 'Nachricht senden',
        'contact.nameLabel': 'Ihr Name',
        'contact.lastNameLabel': 'Nachname',
        'contact.firstNameLabel': 'Vorname',
        'contact.emailLabel': 'E-Mail-Adresse',
        'contact.subjectLabel': 'Betreff',
        'contact.messageLabel': 'Nachrichtentext',
        'contact.submitBtn': 'Nachricht senden',
        'contact.infoTitle': 'Kontaktinformationen',
        'contact.email': 'E-Mail: dandancountertenor@gmail.com',
        'contact.phone': 'Telefon: +49 123 4567 8910',
        'contact.address': 'Adresse: Berliner Kunstbezirk, Deutschland',
        'contact.facebook': 'Facebook',
        'contact.instagram': 'Instagram',
        'contact.twitter': 'Twitter',
        'contact.youtube': 'YouTube',
        'contact.form.name': 'Name',
        'contact.form.email': 'E-Mail',
        'contact.form.message': 'Nachricht',
        'contact.form.submit': 'Senden',
        'gallery.personal.title': 'Persönliches Bild',
        'gallery.personal.caption1': 'Künstlerisches Portrait',
        'gallery.personal.caption2': 'Wettbewerb Foto',
        'gallery.personal.caption3': 'Rollenportrait',
        'gallery.performance.title': 'Aufführung',
        'gallery.performance.caption1': 'VINCERÒ Welt-Oper-Wettbewerb',
        'gallery.performance.caption2': 'Romeo et Juliette - Shanghai',
        'gallery.performance.caption3': 'Konzertaufführung'
    }
};

/**
 * 切换网站语言函数
 * @param {string} lang - 语言代码（zh, en, de）
 */
function changeLanguage(lang) {
    // 保存语言设置到localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // 更新按钮激活状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    
    // 更新页面文本
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            
            // 只为英文和德文版本的hero-subtitle添加斜体样式
            if ((lang === 'en' || lang === 'de') && key === 'hero.subtitle') {
                element.style.fontStyle = 'italic';
            } else {
                // 其他情况移除斜体样式
                element.style.fontStyle = 'normal';
            }
        }
    });
    
    // 特殊处理下载简历链接
    const resumeLink = document.querySelector('.resume-link');
    if (resumeLink) {
        if (lang === 'zh') {
            resumeLink.textContent = translations['zh']['about.resumeCn'];
        } else if (lang === 'en') {
            resumeLink.textContent = translations['en']['about.resumeEn'];
        } else if (lang === 'de') {
            resumeLink.textContent = translations['de']['about.resumeDe'];
        }
    }
}

// 语言切换按钮事件监听
function setupLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });
}

// 页面加载时初始化语言
function initLanguage() {
    // 从localStorage获取首选语言，如果没有则使用英文作为默认语言
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // 检查保存的语言是否在支持的语言列表中
    if (translations[savedLang]) {
        changeLanguage(savedLang);
    } else {
        // 如果保存的语言不支持，则使用英文
        changeLanguage('en');
    }
}

// 处理简历链接文本的函数
function updateResumeLinkText() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const resumeLink = document.querySelector('.resume-link');
    if (resumeLink) {
        if (savedLang === 'zh') {
            resumeLink.textContent = translations['zh']['about.resumeCn'];
        } else if (savedLang === 'en') {
            resumeLink.textContent = translations['en']['about.resumeEn'];
        } else if (savedLang === 'de') {
            resumeLink.textContent = translations['de']['about.resumeDe'];
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置语言切换按钮事件
    setupLanguageButtons();
    
    // 初始化语言
    initLanguage();
    
    // 页面加载后立即处理简历链接文本
    setTimeout(updateResumeLinkText, 100);
});

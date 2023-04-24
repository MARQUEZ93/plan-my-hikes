const parks = [
    {
      title: 'Acadia National Park (Maine, United States)',
      name: 'Acadia National Park',
      route: 'acadia_national_park'
    },
    {
      title: 'Arches National Park (Utah, United States)',
      name: 'Arches National Park',
      route: 'arches_national_park'
    },
    {
      title: 'Arenal Volcano National Park (Costa Rica)',
      name: 'Arenal Volcano National Park',
      route: 'arenal_volcano_national_park'
    },
    {
      title: 'Badlands National Park (South Dakota, United States)',
      name: 'Badlands National Park',
      route: 'badlands_national_park'
    },
    {
      title: 'Band-e Amir National Park (Afghanistan)',
      name: 'Band-e Amir National Park',
      route: 'band-e_amir_national_park'
    },
    {
      title: 'Banff National Park (Canada)',
      name: 'Banff National Park',
      route: 'banff_national_park'
    },
    {
      title: 'Berchtesgaden National Park (Germany)',
      name: 'Berchtesgaden National Park',
      route: 'berchtesgaden_national_park'
    },
    {
      title: 'Big Bend National Park (Texas, United States)',
      name: 'Big Bend National Park',
      route: 'big_bend_national_park'
    },
    {
      title: 'Biscayne National Park (Florida, United States)',
      name: 'Biscayne National Park',
      route: 'biscayne_national_park'
    },
    {
      title: 'Black Canyon Of The Gunnison National Park (Colorado, United States)',
      name: 'Black Canyon Of The Gunnison National Park',
      route: 'black_canyon_of_the_gunnison_national_park'
    },
    {
      title: 'Borjomi-Kharagauli National Park (Georgia)',
      name: 'Borjomi-Kharagauli National Park',
      route: 'borjomi-kharagauli_national_park'
    },
    {
      title: 'Bryce Canyon National Park (Utah, United States)',
      name: 'Bryce Canyon National Park',
      route: 'bryce_canyon_national_park'
    },
    {
      title: 'Canaima National Park (Venezuela)',
      name: 'Canaima National Park',
      route: 'canaima_national_park'
    },
    {
      title: 'Canyonlands National Park (Utah, United States)',
      name: 'Canyonlands National Park',
      route: 'canyonlands_national_park'
    },
    {
      title: 'Capitol Reef National Park (Utah, United States)',
      name: 'Capitol Reef National Park',
      route: 'capitol_reef_national_park'
    },
    {
      title: 'Carlsbad Caverns National Park (New Mexico, United States)',
      name: 'Carlsbad Caverns National Park',
      route: 'carlsbad_caverns_national_park'
    },
    {
      title: 'Channel Islands National Park (California, United States)',
      name: 'Channel Islands National Park',
      route: 'channel_islands_national_park'
    },
    {
      title: 'Chitwan National Park (Nepal)',
      name: 'Chitwan National Park',
      route: 'chitwan_national_park'
    },
    {
      title: 'Cinque Terre National Park (Italy)',
      name: 'Cinque Terre National Park',
      route: 'cinque_terre_national_park'
    },
    {
      title: 'Congaree National Park (South Carolina, United States)',
      name: 'Congaree National Park',
      route: 'congaree_national_park'
    },
    {
      title: 'Crater Lake National Park (Oregon, United States)',
      name: 'Crater Lake National Park',
      route: 'crater_lake_national_park'
    },
    {
      title: 'Cuyahoga Valley National Park (Ohio, United States)',
      name: 'Cuyahoga Valley National Park',
      route: 'cuyahoga_valley_national_park'
    },
    {
      title: 'Danxia National Geological Park (China)',
      name: 'Danxia National Geological Park',
      route: 'danxia_national_geological_park'
    },
    {
      title: 'Death Valley National Park (California, United States)',
      name: 'Death Valley National Park',
      route: 'death_valley_national_park'
    },
    {
      title: 'Denali National Park & Preserve (Alaska, United States)',
      name: 'Denali National Park & Preserve',
      route: 'denali_national_park_&_preserve'
    },
    {
      title: 'Dry Tortugas National Park (Florida, United States)',
      name: 'Dry Tortugas National Park',
      route: 'dry_tortugas_national_park'
    },
    {
      title: 'Durmitor National Park (Montenegro)',
      name: 'Durmitor National Park',
      route: 'durmitor_national_park'
    },
    {
      title: 'Etosha National Park (Namibia)',
      name: 'Etosha National Park',
      route: 'etosha_national_park'
    },
    {
      title: 'Everglades National Park (Florida, United States)',
      name: 'Everglades National Park',
      route: 'everglades_national_park'
    },
    {
      title: 'Fiordland National Park (New Zealand)',
      name: 'Fiordland National Park',
      route: 'fiordland_national_park'
    },
    {
      title: 'Fuji-Hakone-Izu National Park (Japan)',
      name: 'Fuji-Hakone-Izu National Park',
      route: 'fuji-hakone-izu_national_park'
    },
    {
      title: 'Galapagos National Park (Ecuador)',
      name: 'Galapagos National Park',
      route: 'galapagos_national_park'
    },
    {
      title: 'Gates Of The Arctic National Park & Preserve (Alaska, United States)',
      name: 'Gates Of The Arctic National Park & Preserve',
      route: 'gates_of_the_arctic_national_park_&_preserve'
    },
    {
      title: 'Gateway Arch National Park (Missouri, United States)',
      name: 'Gateway Arch National Park',
      route: 'gateway_arch_national_park'
    },
    {
      title: 'Glacier Bay National Park & Preserve (Alaska, United States)',
      name: 'Glacier Bay National Park & Preserve',
      route: 'glacier_bay_national_park_&_preserve'
    },
    {
      title: 'Glacier National Park (Alaska, United States)',
      name: 'Glacier National Park',
      route: 'glacier_national_park'
    },
    {
      title: 'Göreme National Park (Turkey)',
      name: 'Göreme National Park',
      route: 'göreme_national_park'
    },
    {
      title: 'Gran Paradiso National Park (Italy)',
      name: 'Gran Paradiso National Park',
      route: 'gran_paradiso_national_park'
    },
    {
      title: 'Grand Canyon National Park (Arizona, United States)',
      name: 'Grand Canyon National Park',
      route: 'grand_canyon_national_park'
    },
    {
      title: 'Grand Teton National Park (Wyoming, United States)',
      name: 'Grand Teton National Park',
      route: 'grand_teton_national_park'
    },
    {
      title: 'Great Barrier Reef Marine Park (Australia)',
      name: 'Great Barrier Reef Marine Park',
      route: 'great_barrier_reef_marine_park'
    },
    {
      title: 'Great Basin National Park (Nevada, United States)',
      name: 'Great Basin National Park',
      route: 'great_basin_national_park'
    },
    {
      title: 'Great Sand Dunes National Park & Preserve (Colorado, United States)',
      name: 'Great Sand Dunes National Park & Preserve',
      route: 'great_sand_dunes_national_park_&_preserve'
    },
    {
      title: 'Great Smoky Mountains National Park (North Carolina and Tennessee, United States)',
      name: 'Great Smoky Mountains National Park',
      route: 'great_smoky_mountains_national_park'
    },
    {
      title: 'Guadalupe Mountains National Park (Texas, United States)',
      name: 'Guadalupe Mountains National Park',
      route: 'guadalupe_mountains_national_park'
    },
    {
      title: 'Guilin and Lijiang River National Park (China)',
      name: 'Guilin and Lijiang River National Park',
      route: 'guilin_and_lijiang_river_national_park'
    },
    {
      title: 'Haleakalā National Park (Hawaii, United States)',
      name: 'Haleakalā National Park',
      route: 'haleakalā_national_park'
    },
    {
      title: 'Hawaiʻi Volcanoes National Park (Hawaii, United States)',
      name: 'Hawaiʻi Volcanoes National Park',
      route: 'hawaiʻi_volcanoes_national_park'
    },
    {
      title: 'Hot Springs National Park (Arkansas, United States)',
      name: 'Hot Springs National Park',
      route: 'hot_springs_national_park'
    },
    {
      title: 'Huangshan National Park (China)',
      name: 'Huangshan National Park',
      route: 'huangshan_national_park'
    },
    {
      title: 'Iguazú National Park (Argentina)',
      name: 'Iguazú National Park',
      route: 'iguazú_national_park'
    },
    {
      title: 'Indiana Dunes National Park (Indiana, United States)',
      name: 'Indiana Dunes National Park',
      route: 'indiana_dunes_national_park'
    },
    {
      title: 'Isle Royale National Park (Michigan, United States)',
      name: 'Isle Royale National Park',
      route: 'isle_royale_national_park'
    },
    {
      title: 'Jasper National Park (Canada)',
      name: 'Jasper National Park',
      route: 'jasper_national_park'
    },
    {
      title: 'Jiuzhai Valley National Park (China)',
      name: 'Jiuzhai Valley National Park',
      route: 'jiuzhai_valley_national_park'
    },
    {
      title: 'Joshua Tree National Park (California, United States)',
      name: 'Joshua Tree National Park',
      route: 'joshua_tree_national_park'
    },
    {
      title: 'Jostedalsbreen National Park (Norway)',
      name: 'Jostedalsbreen National Park',
      route: 'jostedalsbreen_national_park'
    },
    {
      title: 'Kakadu National Park (Australia)',
      name: 'Kakadu National Park',
      route: 'kakadu_national_park'
    },
    {
      title: 'Katmai National Park & Preserve (Alaska, United States)',
      name: 'Katmai National Park & Preserve',
      route: 'katmai_national_park_&_preserve'
    },
    {
      title: 'Kenai Fjords National Park (Alaska, United States)',
      name: 'Kenai Fjords National Park',
      route: 'kenai_fjords_national_park'
    },
    {
      title: 'Kilimanjaro National Park (Tanzania)',
      name: 'Kilimanjaro National Park',
      route: 'kilimanjaro_national_park'
    },
    {
      title: 'Kobuk Valley National Park (Alaska, United States)',
      name: 'Kobuk Valley National Park',
      route: 'kobuk_valley_national_park'
    },
    {
      title: 'Komodo National Park (Indonesia)',
      name: 'Komodo National Park',
      route: 'komodo_national_park'
    },
    {
      title: 'Kruger National Park (South Africa)',
      name: 'Kruger National Park',
      route: 'kruger_national_park'
    },
    {
      title: 'Kumtag Desert National Park (China)',
      name: 'Kumtag Desert National Park',
      route: 'kumtag_desert_national_park'
    },
    {
      title: 'Lake Clark National Park & Preserve (Alaska, United States)',
      name: 'Lake Clark National Park & Preserve',
      route: 'lake_clark_national_park_&_preserve'
    },
    {
      title: 'Lake District National Park (England)',
      name: 'Lake District National Park',
      route: 'lake_district_national_park'
    },
    {
      title: 'Lassen Volcanic National Park (California, United States)',
      name: 'Lassen Volcanic National Park',
      route: 'lassen_volcanic_national_park'
    },
    {
      title: 'Los Glaciares National Park (Argentina)',
      name: 'Los Glaciares National Park',
      route: 'los_glaciares_national_park'
    },
    {
      title: 'Machu Picchu (Peru)',
      name: 'Machu Picchu',
      route: 'machu_picchu'
    },
    {
      title: 'Mammoth Cave National Park (United States)',
      name: 'Mammoth Cave National Park',
      route: 'mammoth_cave_national_park'
    },
    {
      title: 'Mesa Verde National Park (United States)',
      name: 'Mesa Verde National Park',
      route: 'mesa_verde_national_park'
    },
    {
      title: 'Mount Rainier National Park (Washington, United States)',
      name: 'Mount Rainier National Park',
      route: 'mount_rainier_national_park'
    },
    {
      title: 'Mu Koh Similan National Park (Thailand)',
      name: 'Mu Koh Similan National Park',
      route: 'mu_koh_similan_national_park'
    },
    {
      title: 'Namib-Naukluft National Park (Namibia)',
      name: 'Namib-Naukluft National Park',
      route: 'namib-naukluft_national_park'
    },
    {
      title: 'National Park of American Samoa (American Samoa, United States)',
      name: 'National Park of American Samoa',
      route: 'national_park_of_american_samoa'
    },
    {
      title: 'New River Gorge National Park & Preserve (West Virginia, United States)',
      name: 'New River Gorge National Park & Preserve',
      route: 'new_river_gorge_national_park_&_preserve'
    },
    {
      title: 'North Cascades National Park (Washington, United States)',
      name: 'North Cascades National Park',
      route: 'north_cascades_national_park'
    },
    {
      title: 'Olympic National Park (Washington, United States)',
      name: 'Olympic National Park',
      route: 'olympic_national_park'
    },
    {
      title: 'Olympus National Park (Greece)',
      name: 'Olympus National Park',
      route: 'olympus_national_park'
    },
    {
      title: 'Pantanal Matogrossense National Park (Brazil)',
      name: 'Pantanal Matogrossense National Park',
      route: 'pantanal_matogrossense_national_park'
    },
    {
      title: 'Petrified Forest National Park (Arizona, United States)',
      name: 'Petrified Forest National Park',
      route: 'petrified_forest_national_park'
    },
    {
      title: 'Pinnacles National Park (California, United States)',
      name: 'Pinnacles National Park',
      route: 'pinnacles_national_park'
    },
    {
      title: 'Plitvice Lakes National Park (Croatia)',
      name: 'Plitvice Lakes National Park',
      route: 'plitvice_lakes_national_park'
    },
    {
      title: 'Pyrénées National Park (France)',
      name: 'Pyrénées National Park',
      route: 'pyrénées_national_park'
    },
    {
      title: 'Rocky Mountain National Park (Colorado, United States)',
      name: 'Rocky Mountain National Park',
      route: 'rocky_mountain_national_park'
    },
    {
      title: 'Sagarmatha National Park (Nepal)',
      name: 'Sagarmatha National Park',
      route: 'sagarmatha_national_park'
    },
    {
      title: 'Saguaro National Park (Arizona, United States)',
      name: 'Saguaro National Park',
      route: 'saguaro_national_park'
    },
    {
      title: 'Sequoia & Kings Canyon National Parks (California, United States)',
      name: 'Sequoia & Kings Canyon National Parks',
      route: 'sequoia_&_kings_canyon_national_parks'
    },
    {
      title: 'Serengeti National Park (Tanzania)',
      name: 'Serengeti National Park',
      route: 'serengeti_national_park'
    },
    {
      title: 'Shenandoah National Park (Virginia, United States)',
      name: 'Shenandoah National Park',
      route: 'shenandoah_national_park'
    },
    {
      title: 'Snowdonia National Park (Wales)',
      name: 'Snowdonia National Park',
      route: 'snowdonia_national_park'
    },
    {
      title: 'Swiss National Park (Switzerland)',
      name: 'Swiss National Park',
      route: 'swiss_national_park'
    },
    {
      title: 'Taroko National Park (Taiwan)',
      name: 'Taroko National Park',
      route: 'taroko_national_park'
    },
    {
      title: 'Tatra National Park (Poland)',
      name: 'Tatra National Park',
      route: 'tatra_national_park'
    },
    {
      title: 'Tayrona National Park (Colombia)',
      name: 'Tayrona National Park',
      route: 'tayrona_national_park'
    },
    {
      title: 'Theodore Roosevelt National Park (North Dakota, United States)',
      name: 'Theodore Roosevelt National Park',
      route: 'theodore_roosevelt_national_park'
    },
    {
      title: 'Tongariro National Park (New Zealand)',
      name: 'Tongariro National Park',
      route: 'tongariro_national_park'
    },
    {
      title: 'Torres del Paine National Park (Chile)',
      name: 'Torres del Paine National Park',
      route: 'torres_del_paine_national_park'
    },
    {
      title: 'Tulum National Park (Mexico)',
      name: 'Tulum National Park',
      route: 'tulum_national_park'
    },
    {
      title: 'Valley of Flowers National Park (India)',
      name: 'Valley of Flowers National Park',
      route: 'valley_of_flowers_national_park'
    },
    {
      title: 'Vatnajokull National Park (Iceland)',
      name: 'Vatnajokull National Park',
      route: 'vatnajokull_national_park'
    },
    {
      title: 'Virgin Islands National Park (Virgin Islands, United States)',
      name: 'Virgin Islands National Park',
      route: 'virgin_islands_national_park'
    },
    {
      title: 'Voyageurs National Park (Minnesota, United States)',
      name: 'Voyageurs National Park',
      route: 'voyageurs_national_park'
    },
    {
      title: 'White Sands National Park (New Mexico, United States)',
      name: 'White Sands National Park',
      route: 'white_sands_national_park'
    },
    {
      title: 'Wind Cave National Park (South Dakota, United States)',
      name: 'Wind Cave National Park',
      route: 'wind_cave_national_park'
    },
    {
      title: 'Wrangell - St Elias National Park & Preserve (Alaska, United States)',
      name: 'Wrangell - St Elias National Park & Preserve',
      route: 'wrangell_-_st_elias_national_park_&_preserve'
    },
    {
      title: 'Yellowstone National Park (Idaho, United States)',
      name: 'Yellowstone National Park',
      route: 'yellowstone_national_park'
    },
    {
      title: 'Yosemite National Park (California, United States)',
      name: 'Yosemite National Park',
      route: 'yosemite_national_park'
    },
    {
      title: 'Yulong Xueshan National Park (China)',
      name: 'Yulong Xueshan National Park',
      route: 'yulong_xueshan_national_park'
    },
    {
      title: 'Yunnan Shilin National Park (China)',
      name: 'Yunnan Shilin National Park',
      route: 'yunnan_shilin_national_park'
    },
    {
      title: 'Zhangjiajie National Forest Park (China)',
      name: 'Zhangjiajie National Forest Park',
      route: 'zhangjiajie_national_forest_park'
    },
    {
      title: 'Zion National Park (Utah, United States)',
      name: 'Zion National Park',
      route: 'zion_national_park'
    }
];
export default parks;
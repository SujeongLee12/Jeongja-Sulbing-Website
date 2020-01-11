var dessertURL=[
    "https://www.sulbing.com/data/file/menu/thumb-3554379581_l8jfWwqx_ca7271ea4d737868cd67313ff9debe00b349498a_300x300.png",
    "http://sulbing.com/data/file/menu/3554379581_Tli6NuVH_77761555be58920caf32e05b7555e31e3e311ca5.png",
    "https://sulbing.com/data/file/menu/1988351644_J16BLqZN_73f00a47dab311dc87601c567dc114fcc51556d7.png",
    "https://sulbing.com/data/file/menu/thumb-3554379581_KGucq39p_bd20e929b16be4e10673309b18bd318cffe6a7be_600x600.png",
    "https://sulbing.com/data/file/menu/thumb-1988351644_5260Og7U_5df779351d1705c155d36bd4d3bd3379e4e11438_300x300.png",
    "https://sulbing.com/data/file/menu/thumb-2070895364_txmvYHgQ_9bce322ce2614e3efe4285cfc2a7e9234bc6aece_300x300.png",
    "https://sulbing.com/data/file/menu/thumb-2070895364_gbHmJMPi_0a91ff10ed7c999c342428ea4cca998077bb9207_300x300.png",
    "https://sulbing.com/data/file/menu/thumb-1988351644_D7ZbcL0o_7e5a0e23b61c8d0c3c2d7f9a9394a55a28727bc5_300x300.png",
    "https://sulbing.com/data/file/menu/thumb-1988351644_Krm1GA28_9821603257d137aa838481516571e85c253c3e3f_600x600.png",
  ] 
  var dessertName=[
    "인절미토스트","모짜렐라인절미토스트","허니버터브레드","쌍쌍치즈가래떡","딸기와플","한입쏙붕어빵","달콤퐁당꿀떡","츄리빙빙","핫도그퐁당치즈떡볶이"
  ]
  function list(start, end){
  i = start
  while(i <= end){
    document.write(
        '<li><figure><img src="'+dessertURL[i]+'"></img><figcaption><strong>'+dessertName[i]+'</strong></figcaption></figure></li>'
         )
    i = i + 1;
  }
  document.write('<br><br><br><br><br>')
 }
 list(0,2);
 list(3,5);
 list(6,8);

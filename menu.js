
var bingsuURL=[
    "https://sulbing.com/data/file/menu/thumb-3554379581_2DtiwnUd_d9b947a994569922c45479d14103b93c3abcbb46_600x600.png",
    "https://sulbing.com/data/file/menu/3554379581_GyKwkLXO_5231651cc619fb7027550bc2a4fd4a0902f1cd01.png",
    "https://sulbing.com/data/file/menu/3554379581_tB1EubwI_9105efcd2210cd8913700485697f216a72710c31.png",
    "https://sulbing.com/data/file/menu/2070895364_YkmI9FsA_f09da919584b3e2953ec9de99276ec17808a4a8c.png",
    "https://sulbing.com/data/file/menu/3554379581_DaH8eCuk_950e669d08fad48effd95f4b14f9df8d32d316aa.png",
    "https://sulbing.com/data/file/menu/thumb-2070895364_AjcklXgw_a9c1d51409d043997bd4d48ca82ff8706ef47b57_300x300.png",
    "https://sulbing.com/data/file/menu/thumb-3554379581_hslKF8M7_d1146e492a298dfdb6fafb3bc3da0b8a9b73b1d8_600x600.png",
    "https://sulbing.com/data/file/menu/thumb-2070895364_2EOvUz4k_514981ac4c406b00cd03b56a66fb78434ef387d9_300x300.png",
    " https://sulbing.com/data/file/menu/2070895364_znc026Wr_733756d918fddf6f05d85714802a6dfeb18b57ff.png"
  ] 
  
var bingsuName=[
    "인절미설빙","팥인절미설빙","애플망고치즈설빙","민트초코설빙","오레오초코몬스터설빙","인절미마카롱설빙","초코브라우니설빙","순수요거생딸기설빙","생딸기복숭아설빙"
]
  function list(start, end){
  i = start
  while(i <= end){
    document.write(
        '<li><figure><img src="'+bingsuURL[i]+'"></img><figcaption><strong>'+bingsuName[i]+'</strong></figcaption></figure></li>'
         )
    i = i + 1;
  }
  document.write('<br><br><br><br><br>')
 }
 list(0,2);
 list(3,5);
 list(6,8);

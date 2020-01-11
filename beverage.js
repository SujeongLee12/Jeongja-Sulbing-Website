var beverageURL=[/*딸기마카롱스무디,딸기에이드,인절미밀크티,흑당스노우밀크티,로투스비스코프스무디,초코밀크티,아이스티,딸기스무디,생생레몬차*/
    "https://sulbing.com/data/file/menu/thumb-2950047212_IadQV3ne_e7a883cc0829661f8aa31b9ce500259bf5168ac6_300x300.png",
    "https://sulbing.com/data/file/menu/3554379581_8LptHWjT_64222a91135aed8e9766818006e2c30607701665.png",
    "https://sulbing.com/data/file/menu/thumb-1988351644_xLjYAi21_d2accb2a281af9484cb64975a1d74f957f2f9978_300x300.png",
    "https://sulbing.com/data/file/menu/thumb-1988351644_cIuM38YB_f29e25f28dcc4a9cdac190371936d6974cd4e2e8_300x300.png",
    "https://sulbing.com/data/file/menu/thumb-2070895364_jRdQSmAU_3faf972ef40f5bd4f881aae8d8c902bc37a38af4_300x300.png",
    "https://sulbing.com/data/file/menu/thumb-1988351644_lF1hEiP5_f18f463783b3c9f5191dc5566223cd56c12129ba_300x300.png",
    "https://sulbing.com/data/file/menu/3554379581_AyL8MqJX_351aeafd806b351b34ec5e4f0f9a19f61eab5b21.png",
    "https://sulbing.com/data/file/menu/thumb-1988351644_N3IG5VkJ_67a942b0e01f1638a6c8b896f2625e2fd22b0d36_300x300.png",
    "https://sulbing.com/data/file/menu/thumb-1988351644_UQx1SnZ8_b1208aeb92dd46191902a65bdfd7aed924784105_600x601.png",
  ] 
  
  var beverageName=[
      "딸기마카롱스무디","딸기에이드","인절미밀크티","흑당스노우밀크티","로투스비스코프스무디","초코밀크티","아이스티","딸기스무디","생생레몬차"]
  function list(start, end){
  i = start
  while(i <= end){
    document.write(
        '<li><figure><img src="'+beverageURL[i]+'"></img><figcaption><strong>'+beverageName[i]+'</strong></figcaption></figure></li>'
         )
    i = i + 1;
  }
  document.write('<br><br><br><br><br>')
 }
 list(0,2);
 list(3,5);
 list(6,8);

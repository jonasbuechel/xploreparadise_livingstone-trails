import Ember from 'ember';

export default Ember.Mixin.create({
  mainGalleryItems: Ember.computed(function() {

    let   imagesToReturn              = [];
    const mainGalleryImageWidth       = 1200;
    const mainGalleryImageHeight      = 800;
    
    const imageObjects = [
        {
          msrc:   '/assets/mainGallery/thumbnails/05_xploreparadise_tlt.jpg', 
          src:    '/assets/mainGallery/fullsize/05_xploreparadise_tlt.jpg', 
          title:  'Cape ground squirrels spend 70% of their time each day feeding. They use their bushy tails for several different functions, including balance, providing shade and blocking predators.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/06_xploreparadise_tlt.jpg', 
          src:    '/assets/mainGallery/fullsize/06_xploreparadise_tlt.jpg', 
          title:  'No, this isn’t just another internet cat photo! The Southern African wildcat is a highly nocturnal animal, so we had amazing luck to spot one twice in the middle of the day.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/07_xploreparadise_tlt.jpg', 
          src:    '/assets/mainGallery/fullsize/07_xploreparadise_tlt.jpg', 
          title:  'Finding cats in the thick grassland of the Kalahari is very difficult. But it’s slightly easier in winter, because then the cats also hunt during the day. We searched one of the pans for over two hours before finding this lone female cheetah. She was obviously rested and ready to hunt. After stretching and cleaning herself, she began to observe her environment. I was familiar with this behaviour, because I’ve had a chance to study it before.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/12_xploreparadise_tlt.jpg' ,
          src:    '/assets/mainGallery/fullsize/12_xploreparadise_tlt.jpg', 
          title:  'It was a wonderful and unique moment to see this lioness striding through the open in the last light of the day. It was the first time I realised just how massive the lions are in the Kalahari. Including the tail, Transvaal or Kalahari lion males usually reach 2.6–3.20 metres long, while females are usually 2.35–2.75 metres long. Males generally weigh 150–250 kg, while females weigh 110–182 kg. The lions have a shoulder width of 0.92–1.23 metres.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/16_xploreparadise_tlt.jpg',
          src:    '/assets/mainGallery/fullsize/16_xploreparadise_tlt.jpg', 
          title:  'A single wildebeest in the Kalahari morning light. Just a few minutes after I took this picture, a herd of springbok drew our attention. They were all in a line, looking in the same direction. This defence strategy is usually exhibited when a lion is nearby. They don’t flee unless the lion comes within 200 metres.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/17_xploreparadise_tlt.jpg', 
          src:    '/assets/mainGallery/fullsize/17_xploreparadise_tlt.jpg', 
          title:  'I always enjoy the many facets of photography. The angles you choose, can change a picture dramatically. To get this shot of two springbok, I had to get on the ground and crawl through the thorny plants of the Kalahari.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/18_xploreparadise_tlt_fb.jpg',
          src:    '/assets/mainGallery/fullsize/18_xploreparadise_tlt_fb.jpg', 
          title:  'I can’t remember ever seeing such an intense look from an animal. Initially this young male lion was shy and tried to avoid us, but when we came close he focused on us in an extraordinary way. This image perfectly encapsulates how I’ve experienced the bush over the last few years: wild, cruel, beautiful, impressive, merciless and breath-taking!'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/20_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/20_xploreparadise_tlt_fb.jpg', 
          title:  'If you think it’s easy to spot big cats in the bush, think again! They blend perfectly into their environment. Spotting a cat takes a lot practice and knowledge of their behaviour.'
        },
           {
          msrc:   '/assets/mainGallery/thumbnails/21_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/21_xploreparadise_tlt_fb.jpg', 
          title:  'One of the most remarkable things about the gemsbok antelope is how they adapt to their naturally arid environment. They have incredible coping mechanisms. Gemsbok can suppress sweating completely during the daytime heat, allowing them to survive indefinitely without drinking water.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/23_xploreparadise_tlt_fb.jpg',
          src:    '/assets/mainGallery/fullsize/23_xploreparadise_tlt_fb.jpg',
          title:  'The first lesson you learn when you come to Africa is that Nature has her own rules, whether you like it or not. From morning to noon, nothing happened. Frustrations started to grow. But we sprang to full attention when we spotted these two cheetahs lying in the shade of a tree. They started moving, and I was able to take this shot and some video footage before they disappeared into the bush'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/24_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/24_xploreparadise_tlt_fb.jpg',
          title:  'Here’s two more two interesting facts about the bat-eared fox. 1: They’re native to more than 10 African countries. 2: Termites make up 80% of their diets.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/25_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/25_xploreparadise_tlt_fb.jpg',
          title:  'Observing jackals is very interesting, but it requires a lot of patience. They are very shy, and always on the alert. The slightest movement can scare them away. We observed this jackal drinking at a watering hole for about an hour. He made his way cautiously to the water, constantly changing his direction.'
        },
           {
          msrc:   '/assets/mainGallery/thumbnails/26_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/26_xploreparadise_tlt_fb.jpg',
          title:  'The light in the Kalahari is amazing, especially in the hours after sunrise and before sunset. The sun is so low that the grassland looks like a never-ending field of gold and diamonds.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/32_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/32_xploreparadise_tlt_fb.jpg', 
          title:  'During the day, a lot of animals approached the watering hole. A group of greater kudus arrived, led by a huge bull. While the females went into the water to drink, he observed the area from a higher elevation to protect his herd.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/33_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/33_xploreparadise_tlt_fb.jpg', 
          title:  'An hour before sunset, elephants and giraffes came to the watering hole. The elephants took mud baths and dust showers. I stayed at the watering hole for two hours, and was able to capture this beautiful contre-jour shot of a bull elephant walking in front of the setting sun.'
        },
                {
          msrc:   '/assets/mainGallery/thumbnails/43_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/43_xploreparadise_tlt_fb.jpg', 
          title:  'After about 30 minutes sustained digging, this pup retreated back into the shadows next to the entrance of a burrow and took a short break. But it was not long before it started digging again.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/46_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/46_xploreparadise_tlt_fb.jpg', 
          title:  'One of the most incredible things about the Okavango River and Delta is the variety of birds. More than 400 species are endemic to the Okavango Delta. One of them, the little bee-eater, is just 15-17 cm long. Listening to the sounds of a dozen birds in the early morning is just incredible.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/53_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/53_xploreparadise_tlt_fb.jpg', 
          title:  'We met a local San family next to the hills. They gave us a very warm welcome. It was one of the most significant cultural moments during my journey. The San people in this area are very poor. During our talk I learned that they are no longer allowed to continue their traditions in the hills. They need permission to enter them, and instead of acting as guides to the area and sharing their history and culture, other guides from different backgrounds are hired to do it. It was a very sad insight into the dying culture of the San. Sadly, the only help I can offer is to raise awareness by documenting the issue. With mixed emotions, I asked Lucky to ask the grandfather and elder for permission to take a photo, which was graciously granted.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/54_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/54_xploreparadise_tlt_fb.jpg', 
          title:  'Tockus leucomelas, the southern yellowbilled hornbill, is one of my favourite African birds. It’s found in both the woodlands and the open savannah.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/55_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/55_xploreparadise_tlt_fb.jpg', 
          title:  'Shortly after arriving at the Chobe Flood Plains, we spotted this leopard in a tree. If their prey is close by and out in the open, leopards can spend hours without making a single movement. The cat waits until it is fully hidden from its prey. Leopards are a master of stalking and ambushes. The cat we spotted was stalking kudu, but unfortunately it soon disappeared into the bush. A remarkable fact: a leopard can kill prey almost 10 times its own weight.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/56_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/56_xploreparadise_tlt_fb.jpg', 
          title:  'I’m always impressed when I cross an elephant’s path. Elephants have incredible memories, but these amazing creatures are also unpredictable. How they react will depend on their previous experience with humans. We came around a corner and bumped into a group of about eight females and several babies. Luckily the leading female allowed us to stay, so we could study the social behaviour of baby elephants.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/58_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/58_xploreparadise_tlt_fb.jpg', 
          title:  'Days after our encounter with the elephants, we came upon another baby elephant. But sadly this one had become prey. We first noticed its carcass lying next to the bank of the Chobe River. As we got closer, we spotted a lion pride lying under some nearby bushes and trees. They had chosen a young male as a sentry to protect the carcass. But he left after half an hour because he was annoyed by the constant alarm calls of a blacksmith lapwing trying to protect its nest.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/60_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/60_xploreparadise_tlt_fb.jpg', 
          title:  'Cape buffalo as far as the eye can see. One evening we spotted hundreds of buffalo by the banks of the Chobe River. Most were covered with mud. The mud cools them down during the heat of the day and also provides protection against sunburn and insects.'
        },
        {
          msrc:   '/assets/mainGallery/thumbnails/61_xploreparadise_tlt.jpg', 
          src:    '/assets/mainGallery/fullsize/61_xploreparadise_tlt.jpg', 
          title:  'A greater kudu bull in the setting sun. Lucky and I spent our last evening checking the banks of the Chobe River for cats. The next day I left Botswana and headed to Zambia.'
        }
      ];
    
    imagesToReturn = imageObjects.map(function(originalObject){
      
      let newObject = {};
      
      newObject.src   = originalObject.src;
      newObject.msrc  = originalObject.msrc;
      newObject.w     = mainGalleryImageWidth;
      newObject.h     = mainGalleryImageHeight;
      newObject.title = originalObject.title;
      
      return newObject;
    });
    
    return imagesToReturn;
  }),
});

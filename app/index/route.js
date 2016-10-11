import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      trail: {
        title: 'ON THE TRAIL OF A LEGEND',
        p1: 'AFRICA, the Cradle of Humanity. A unique continent streaked by a variety of wild landscapes, and home to breath-taking flora and fauna. In recent centuries the continent has played host to all kinds of adventurers and explorers. One of the most famous was an extraordinary man: Dr David Livingstone.',
        p2: 'Inspired by Livingstone’s records of his explorations through Africa, Christoph Tänzer started a fantastic journey of 2,500 km with his Botswanan friend and guide, Lucky Garenamotse. Equipped with five cameras, they followed Livingstone’s footsteps from the Kalahari Desert in Botswana to the city which now bears his name: Livingstone, Zambia.',
        p3: 'After experiencing sub-zero temperatures during the night and close encounters with predators, Christoph began to understand the exertion and hardships Livingstone and his men had suffered, along with their irrepressible will and motivation.',
        p4: 'The following sections will lead you through an extraordinary adventure and give you a deeper insight into the life of David Livingstone, the mighty Kalahari Desert and its extraordinary wildlife.'
      },
      explorer:{
        h2: 'THE LEGACY OF AN OUTSTANDING EXPLORER',
        h3: 'Missionary, explorer and anti-slave crusader',
        p1: 'In 1813 David Livingstone, was born into the poverty of the hard work and piety characterized enviroment of Blanthyre Scotland. As one of seven children, he was employed at the age of 10 in the cotton mill to support his family. After his working hours of 14 hours a day.',
        p2: 'In 1834 Livingstone wanted to follow the appeal of the British and American churches which were searching for medical missionaries in China, but after the First Opium War broke out in September 1839, he had to end his dream to go to China. After meeting with his future father in law, Robert Moffat, a Scottish missionary in southern Africa, Livingstone was convinced, Africa could be his start into missionary work.',
        p3: 'On March 14th in 1841, Livingstone arrived in Cape Town, South Africa',
        p4: '15 years after his arrival in Africa, Livingstone set out to get deeper into the African interior. He started to move farther north than any other European before and made his way across the Kalahari Desert.'
      },
      kalahari: {
        title: 'THE MIGHTY KALAHARI DESERT',
        p1: 'There might be no better description of the Kalahari than the words of David Livingstone himself:',
        quotation1: '“Before narrating the incidents of this journey, I may give some account of the great Kalahari Desert, in order that the reader may understand in some degree the nature of the difficulties we had to encounter…',
        quotation2: '...It is by no means destitute of vegetation and inhabitants, for it is covered with grass and a great variety of creeping plants; besides which there are large patches of bushes, and even trees. It is remarkably flat, but intersected in different parts by the beds of ancient rivers; and prodigious herds of certain antelopes, which require little or no water, roam over the trackless plains.”',
        author: 'Dr David Livingstone', 
        authorDescription: '(Missionary Travels and Researches in South Africa, Chapter II)'
      },
      kalahariGeographics: {
        p1: 'With an area of over 1,000,000 square kilometres, the Kalahari extends from the northern region of South Africa to Namibia, Botswana, Angola and Zambia, on both sides of the Tropic of Capricorn. The Botswanan section of the Kalahari is mainly covered by grassland savannah, and thick bush. In the eastern parts the Kalahari Desert is also streaked by dusty salt pans. Unlike most deserts, the Kalahari provides a habitat for a wide variety of mammals, predators, birds and reptiles.',
        p2: 'Only a small numbers of people populate the remote parts of the inhospitable environment of the Kalahari Desert. The Basarwa or San'
      },
      work: {
        title: 'THE WORK',
        p1: 'Discover the story behind every photo in the gallery. (Please note: All pictures are digitally watermarked and restricted for download. If you would like to use one for any purpose or want to buy a numbered print, please use the contact form to get in touch.)',
        p2: 'Follow Xploreparadise on Instagram and Facebook and discover the story behind the images, what happened each day of my adventure and learn some interesting facts about David Livingstone and the Kalahari wildlife.',
        p3: 'Share the pictures and videos with your friends and become a part of this incredible adventure.'
      },
      about: {
        h2: 'ABOUT THE ORGINATOR AND ADVENTURER',
        h3: 'The person behind Xploreparadise',
        p1: 'As a young boy, Christoph Tänzer began his deep love of exploration, adventure and nature, dreaming about foreign countries, intriguing places and different cultures. More than 30 years later, these dreams came true for the German creative director, photographer and filmmaker. His passion developed into an idea: Winning people’s understanding through photography and film to protect our planet.',
        p2: '“I tell stories by capturing moments that show the beauty of our planet and the variety of its wildlife, people and cultures. If people understand that some of these moments, places, animals or people will be rare or gone in a couple of years, it’s a start. If they decide to change something, it will make a difference and my mission will have been successful.”'
      },
      thanks: {
        h2: 'SPECIAL THANKS',
        p1: 'LUCKY GARENAMOTSE & STAFF OF GIFTS OF THE KALAHARI, BOTSWANA I GLEN STEPHENS AND TSHEPI GARENAMOTSE OF LIQUID GIRAFFE I GAIL AND DOUG & STAFF OF THE CHUNDUKWA RIVER LODGE, ZAMBIA I THE MINISTRY OF ENVIROMENT, WILDLIFE AND TOURISM OF BOTSWANA I THE CHOBE NATIONAL PARK, BOTSWANA I THE CKGR, BOTSWANA I THE MAKADIKADI PANS PARK, BOTSWANA I JANINE AVERY & AFRICA GEOGRAPHIC I CHRISTOPH HIRSCHBÜHL & JONAS BÜCHEL I MY FRIENDS & FAMILY'
      },
      equipment: {
        h2: 'EQUIPMENT',
        p1: 'Christoph Tänzer operates with gear from'
      },
      copyright: {
        p1: 'COPYRIGHT © 2016 CHRISTOPH TÄNZER. ALL RIGHTS RESERVED.'
      }
    };
  }
});

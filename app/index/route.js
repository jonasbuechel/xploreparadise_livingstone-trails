import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      trail: {
        title: 'ON THE TRAIL OF A LEGEND',
        p1: 'AFRICA, the Cradle of Humanity. A unique continent streaked by a variety of wild landscapes, and home to breath-taking flora and fauna. In recent centuries the continent has played host to all kinds of adventurers and explorers. One of the most famous was an extraordinary man: Dr David Livingstone.',
        p2: 'Inspired by Livingstone’s records of his explorations through Africa, Christoph Tänzer started a fantastic journey of 2,500 km with his Botswanan friend and guide, Lucky Garenamotse. Equipped with four cameras and a drone, they followed Livingstone’s footsteps from the Kalahari Desert in Botswana to the city which now bears his name: Livingstone, Zambia.',
        p3: 'After experiencing sub-zero temperatures during the night and close encounters with predators, Christoph began to understand the exertion and hardships Livingstone and his men had suffered, along with their irrepressible will and motivation.',
        p4: 'The following sections will lead you through an extraordinary adventure and give you a deeper insight into the life of David Livingstone, the mighty Kalahari Desert and its extraordinary wildlife.'
      },
      kalahari: {
        title: 'THE MIGHTY KALAHARI DESERT',
        p1: 'There might be no better description of the Kalahari than the words of David Livingstone himself:',
        quotation1: '“Before narrating the incidents of this journey, I may give some account of the great Kalahari Desert, in order that the reader may understand in some degree the nature of the difficulties we had to encounter…',
        quotation2: '...It is by no means destitute of vegetation and inhabitants, for it is covered with grass and a great variety of creeping plants; besides which there are large patches of bushes, and even trees.  It is remarkably flat, but intersected in different parts by the beds of ancient rivers; and prodigious herds of certain antelopes, which require little or no water, roam over the trackless plains.”',
        author: 'Dr David Livingstone', 
        authorDescription: '(Missionary Travels and Researches in South Africa, Chapter II)'
      },
      kalahariGeographics: {
        p1: 'With an area of over 1,000,000 square kilometres, the Kalahari or Kagligari [RM2] extends from the northern region of South Africa to Namibia, Botswana, Angola and Zambia, on both sides of the Tropic of Capricorn. The Botswanan section of the Kalahari is mainly covered by grassland savannah, with thick bush in the eastern salt pans Unlike most deserts, the Kalahari provides a habitat for a wide variety of mammals, predators, birds and reptiles.'
      },
      work: {
        title: 'THE WORK',
        p1: 'Discover the story behind every photo in the gallery. (Please note: All pictures are digitally watermarked and restricted for download. If you would like to use one for any purpose or want to buy a numbered print, please use the contact form to get in touch.)',
        p2: 'Follow Xploreparadise on Instagram and Facebook and discover the story behind the images, what happened each day of my adventure and learn some interesting facts about David Livingstone and the Kalahari wildlife.',
        p3: 'Share the pictures and videos with your friends and become a part of this incredible adventure.'
      }
    }
  }
});

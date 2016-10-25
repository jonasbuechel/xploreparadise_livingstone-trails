import Ember from 'ember';

export default Ember.Route.extend({  
  model(){
    return {
      thanks: {
        h2: 'SPECIAL THANKS',
        p1: 'LUCKY GARENAMOTSE & STAFF OF <a title="GIFTS OF THE KALAHARI" target="_blank" href="http://www.giftsofthekalahari.com">GIFTS OF THE KALAHARI</a>, BOTSWANA I GLEN STEPHENS AND TSHEPI GARENAMOTSE OF <a title="LIQUID GIRAFFE" target="_blank" href="http://liquidgiraffe.com">LIQUID GIRAFFE</a> I GAIL AND DOUG & STAFF OF <a title="THE CHUNDUKWA RIVER LODGE" target="_blank" href="http://www.chundukwariverlodge.com">THE CHUNDUKWA RIVER LODGE</a>, ZAMBIA I THE MINISTRY OF ENVIROMENT, WILDLIFE AND TOURISM OF BOTSWANA I THE CHOBE NATIONAL PARK, BOTSWANA I THE CKGR, BOTSWANA I THE MAKADIKADI PANS PARK, BOTSWANA I JANINE AVERY & <a title="AFRICA GEOGRAPHIC" target="_blank" href="http://africageographic.com/">AFRICA GEOGRAPHIC</a> I CHRISTOPH HIRSCHBÜHL & JONAS BÜCHEL I MY FRIENDS & FAMILY'
      }
    }
  }
});
